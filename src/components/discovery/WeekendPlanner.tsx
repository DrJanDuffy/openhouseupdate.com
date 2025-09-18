import { component$, useSignal, $, useStore } from '@builder.io/qwik';

interface OpenHouse {
  id: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  photos: string[];
  lat: number;
  lng: number;
  openHouseTimes: {
    date: string;
    startTime: string;
    endTime: string;
  }[];
  agent: {
    name: string;
    phone: string;
    email: string;
    photo: string;
  };
  neighborhood: string;
  estimatedVisitTime: number; // minutes
}

interface WeekendPlannerProps {
  openHouses: OpenHouse[];
  onRouteCreated?: (route: PlannedRoute) => void;
}

interface PlannedRoute {
  id: string;
  name: string;
  day: 'saturday' | 'sunday';
  stops: RouteStop[];
  totalDuration: number;
  totalDistance: number;
}

interface RouteStop {
  openHouse: OpenHouse;
  arrivalTime: string;
  departureTime: string;
  travelTimeFromPrevious: number;
  visitDuration: number;
}

export default component$<WeekendPlannerProps>(({ openHouses, onRouteCreated }) => {
  const selectedDay = useSignal<'saturday' | 'sunday'>('saturday');
  const startTime = useSignal('09:00');
  const maxHouses = useSignal('6');
  const plannedRoutes = useStore<PlannedRoute[]>([]);
  const isGenerating = useSignal(false);

  // Filter open houses for selected day
  const availableOpenHouses = (day: string) => {
    const targetDate = getWeekendDate(day as 'saturday' | 'sunday');
    return openHouses.filter(oh => 
      oh.openHouseTimes.some(time => time.date === targetDate)
    );
  };

  const generateOptimalRoute = $(async () => {
    isGenerating.value = true;
    
    try {
      const dayOpenHouses = availableOpenHouses(selectedDay.value);
      const targetDate = getWeekendDate(selectedDay.value);
      const maxHousesNum = parseInt(maxHouses.value);
      
      // Filter houses that are open during our time window
      const housesInTimeWindow = dayOpenHouses.filter(oh => {
        const openHouse = oh.openHouseTimes.find(time => time.date === targetDate);
        if (!openHouse) return false;
        
        const start = parseTime(startTime.value);
        const end = start + (maxHousesNum * 90); // 90 minutes per house max
        const ohStart = parseTime(openHouse.startTime);
        const ohEnd = parseTime(openHouse.endTime);
        
        return !(end < ohStart || start > ohEnd);
      });

      // Sort by price and neighborhood clustering
      const sortedHouses = sortHousesByOptimization(housesInTimeWindow);
      
      // Create route stops
      const routeStops: RouteStop[] = [];
      let currentTime = parseTime(startTime.value);
      
      for (let i = 0; i < Math.min(sortedHouses.length, maxHousesNum); i++) {
        const house = sortedHouses[i];
        const openHouse = house.openHouseTimes.find(time => time.date === targetDate);
        
        if (!openHouse) continue;
        
        // Calculate travel time from previous house (simplified)
        const travelTime = i === 0 ? 0 : calculateTravelTime(
          routeStops[i - 1].openHouse,
          house
        );
        
        // Ensure we don't arrive before the house opens
        const houseOpenTime = parseTime(openHouse.startTime);
        const arrivalTime = Math.max(currentTime + travelTime, houseOpenTime);
        
        // Visit duration (45-60 minutes)
        const visitDuration = house.estimatedVisitTime || 45;
        const departureTime = arrivalTime + visitDuration;
        
        // Don't schedule if we'd arrive after closing
        const houseCloseTime = parseTime(openHouse.endTime);
        if (arrivalTime >= houseCloseTime) continue;
        
        routeStops.push({
          openHouse: house,
          arrivalTime: formatTime(arrivalTime),
          departureTime: formatTime(departureTime),
          travelTimeFromPrevious: travelTime,
          visitDuration,
        });
        
        currentTime = departureTime;
      }
      
      // Create the route
      const route: PlannedRoute = {
        id: `route-${Date.now()}`,
        name: `${selectedDay.value === 'saturday' ? 'Saturday' : 'Sunday'} House Tour`,
        day: selectedDay.value,
        stops: routeStops,
        totalDuration: currentTime - parseTime(startTime.value),
        totalDistance: calculateTotalDistance(routeStops),
      };
      
      plannedRoutes.push(route);
      onRouteCreated?.(route);
      
    } finally {
      isGenerating.value = false;
    }
  });

  const sortHousesByOptimization = (houses: OpenHouse[]) => {
    // Sort by neighborhood clustering and price range
    return houses.sort((a, b) => {
      // Prioritize houses in similar price ranges
      const priceDiff = Math.abs(a.price - b.price);
      const priceScore = priceDiff < 100000 ? 1 : 0;
      
      // Prioritize houses in same or nearby neighborhoods
      const neighborhoodScore = a.neighborhood === b.neighborhood ? 1 : 0;
      
      return (neighborhoodScore + priceScore) * -1;
    });
  };

  const calculateTravelTime = (from: OpenHouse, to: OpenHouse) => {
    // Simplified travel time calculation (15-30 minutes between houses)
    const distance = getDistance(from.lat, from.lng, to.lat, to.lng);
    return Math.max(15, Math.min(30, distance * 2)); // Rough estimate
  };

  const calculateTotalDistance = (stops: RouteStop[]) => {
    let total = 0;
    for (let i = 1; i < stops.length; i++) {
      total += getDistance(
        stops[i - 1].openHouse.lat, stops[i - 1].openHouse.lng,
        stops[i].openHouse.lat, stops[i].openHouse.lng
      );
    }
    return total;
  };

  const getDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const parseTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${mins.toString().padStart(2, '0')} ${ampm}`;
  };

  const getWeekendDate = (day: 'saturday' | 'sunday') => {
    const today = new Date();
    const currentDay = today.getDay();
    const daysUntilSaturday = (6 - currentDay) % 7;
    const daysUntilSunday = (7 - currentDay) % 7;
    
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + (day === 'saturday' ? daysUntilSaturday : daysUntilSunday));
    
    return targetDate.toISOString().split('T')[0];
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price.toLocaleString()}`;
  };

  const deleteRoute = $((routeId: string) => {
    const index = plannedRoutes.findIndex(route => route.id === routeId);
    if (index >= 0) {
      plannedRoutes.splice(index, 1);
    }
  });

  return (
    <div class="weekend-planner">
      <style>{`
        .weekend-planner {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .planner-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .planner-header h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .planner-header p {
          color: #6a6d72;
          font-size: 1.1rem;
        }

        .planner-controls {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 12px;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .control-group label {
          font-weight: 600;
          color: #0A2540;
          font-size: 0.9rem;
        }

        .control-group select,
        .control-group input {
          padding: 0.75rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s ease;
        }

        .control-group select:focus,
        .control-group input:focus {
          outline: none;
          border-color: #16B286;
        }

        .day-selector {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .day-btn {
          flex: 1;
          padding: 1rem;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.2s ease;
          text-align: center;
        }

        .day-btn:hover {
          border-color: #16B286;
          background: #f8fffe;
        }

        .day-btn.active {
          border-color: #16B286;
          background: #16B286;
          color: white;
        }

        .generate-btn {
          width: 100%;
          padding: 1rem 2rem;
          background: #16B286;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .generate-btn:hover {
          background: #14a078;
          transform: translateY(-1px);
        }

        .generate-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .routes-section {
          margin-top: 2rem;
        }

        .routes-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .routes-header h3 {
          color: #0A2540;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .route-card {
          background: white;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1rem;
          transition: all 0.2s ease;
        }

        .route-card:hover {
          border-color: #16B286;
          box-shadow: 0 4px 12px rgba(22, 178, 134, 0.1);
        }

        .route-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .route-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0A2540;
          margin: 0;
        }

        .route-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.9rem;
          color: #6a6d72;
        }

        .route-stops {
          display: grid;
          gap: 0.75rem;
        }

        .route-stop {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .stop-number {
          width: 32px;
          height: 32px;
          background: #16B286;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .stop-details {
          flex: 1;
        }

        .stop-address {
          font-weight: 600;
          color: #0A2540;
          margin-bottom: 0.25rem;
        }

        .stop-meta {
          font-size: 0.8rem;
          color: #6a6d72;
          display: flex;
          gap: 1rem;
        }

        .stop-time {
          font-weight: 600;
          color: #16B286;
          min-width: 120px;
        }

        .route-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.9rem;
        }

        .btn-primary {
          background: #16B286;
          color: white;
        }

        .btn-primary:hover {
          background: #14a078;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        .btn-secondary:hover {
          background: #5a6268;
        }

        .btn-outline {
          background: transparent;
          color: #dc3545;
          border: 2px solid #dc3545;
        }

        .btn-outline:hover {
          background: #dc3545;
          color: white;
        }

        .empty-state {
          text-align: center;
          padding: 3rem 1rem;
          color: #6a6d72;
        }

        .empty-state h3 {
          color: #0A2540;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .weekend-planner {
            padding: 1rem;
          }

          .planner-controls {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .day-selector {
            flex-direction: column;
          }

          .route-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .route-meta {
            flex-direction: column;
            gap: 0.25rem;
          }

          .route-stop {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .stop-time {
            min-width: auto;
          }

          .route-actions {
            flex-direction: column;
          }
        }
      `}</style>

      <div class="planner-header">
        <h2>🏠 Weekend House Tour Planner</h2>
        <p>Plan your perfect Saturday or Sunday open house route</p>
      </div>

      <div class="day-selector">
        <button 
          class={`day-btn ${selectedDay.value === 'saturday' ? 'active' : ''}`}
          onClick$={() => selectedDay.value = 'saturday'}
        >
          📅 Saturday
        </button>
        <button 
          class={`day-btn ${selectedDay.value === 'sunday' ? 'active' : ''}`}
          onClick$={() => selectedDay.value = 'sunday'}
        >
          📅 Sunday
        </button>
      </div>

      <div class="planner-controls">
        <div class="control-group">
          <label for="startTime">Start Time</label>
          <input 
            type="time" 
            id="startTime"
            bind:value={startTime}
          />
        </div>

        <div class="control-group">
          <label for="maxHouses">Max Houses</label>
          <select id="maxHouses" bind:value={maxHouses}>
            <option value={3}>3 Houses</option>
            <option value={4}>4 Houses</option>
            <option value={5}>5 Houses</option>
            <option value={6}>6 Houses</option>
            <option value={7}>7 Houses</option>
            <option value={8}>8 Houses</option>
          </select>
        </div>

        <div class="control-group">
          <label>Available Houses</label>
          <div style="padding: 0.75rem; background: #f8f9fa; border-radius: 8px; font-weight: 600; color: #16B286;">
            {availableOpenHouses(selectedDay.value).length} houses
          </div>
        </div>
      </div>

      <button 
        class="generate-btn"
        onClick$={generateOptimalRoute}
        disabled={isGenerating.value || availableOpenHouses(selectedDay.value).length === 0}
      >
        {isGenerating.value ? (
          <>
            <span>⏳</span>
            Generating Route...
          </>
        ) : (
          <>
            <span>🗺️</span>
            Generate Optimal Route
          </>
        )}
      </button>

      {plannedRoutes.length > 0 && (
        <div class="routes-section">
          <div class="routes-header">
            <h3>Your Planned Routes</h3>
            <span style="color: #6a6d72; font-size: 0.9rem;">
              {plannedRoutes.length} route{plannedRoutes.length !== 1 ? 's' : ''}
            </span>
          </div>

          {plannedRoutes.map((route) => (
            <div key={route.id} class="route-card">
              <div class="route-header">
                <h4 class="route-title">{route.name}</h4>
                <div class="route-meta">
                  <span>⏱️ {Math.floor(route.totalDuration / 60)}h {route.totalDuration % 60}m</span>
                  <span>📏 {route.totalDistance.toFixed(1)} mi</span>
                  <span>🏠 {route.stops.length} stops</span>
                </div>
              </div>

              <div class="route-stops">
                {route.stops.map((stop, index) => (
                  <div key={stop.openHouse.id} class="route-stop">
                    <div class="stop-number">{index + 1}</div>
                    <div class="stop-details">
                      <div class="stop-address">{stop.openHouse.address}</div>
                      <div class="stop-meta">
                        <span class="stop-time">
                          {stop.arrivalTime} - {stop.departureTime}
                        </span>
                        <span>{formatPrice(stop.openHouse.price)}</span>
                        <span>{stop.openHouse.beds}bed {stop.openHouse.baths}bath</span>
                        <span>{stop.openHouse.neighborhood}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div class="route-actions">
                <button class="btn btn-primary">
                  📱 Send to Phone
                </button>
                <button class="btn btn-secondary">
                  🗺️ View on Map
                </button>
                <button class="btn btn-outline" onClick$={() => deleteRoute(route.id)}>
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {plannedRoutes.length === 0 && !isGenerating.value && (
        <div class="empty-state">
          <h3>No routes planned yet</h3>
          <p>Generate your first weekend house tour route above!</p>
        </div>
      )}
    </div>
  );
});
