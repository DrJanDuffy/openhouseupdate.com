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

// Helper functions outside component
const getWeekendDate = (day: 'saturday' | 'sunday') => {
  const today = new Date();
  const currentDay = today.getDay();
  const daysUntilSaturday = (6 - currentDay) % 7;
  const daysUntilSunday = (7 - currentDay) % 7;
  
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + (day === 'saturday' ? daysUntilSaturday : daysUntilSunday));
  
  return targetDate.toISOString().split('T')[0];
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

const formatPrice = (price: number) => {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`;
  } else if (price >= 1000) {
    return `$${(price / 1000).toFixed(0)}K`;
  }
  return `$${price.toLocaleString()}`;
};

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

  const deleteRoute = (routeId: string) => {
    const index = plannedRoutes.findIndex(route => route.id === routeId);
    if (index >= 0) {
      plannedRoutes.splice(index, 1);
    }
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
      if (onRouteCreated) {
        onRouteCreated(route);
      }
      
    } finally {
      isGenerating.value = false;
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
          color: #6B7280;
          font-size: 1.1rem;
        }

        .planner-controls {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: #F7F9FC;
          border-radius: 12px;
        }

        .control-group {
          display: flex;
          flex-direction: column;
        }

        .control-group label {
          font-weight: 600;
          color: #0A2540;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .control-group select,
        .control-group input {
          padding: 0.75rem;
          border: 2px solid #E5E7EB;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .control-group select:focus,
        .control-group input:focus {
          outline: none;
          border-color: #3A8DDE;
        }

        .generate-btn {
          background: linear-gradient(135deg, #3A8DDE 0%, #16B286 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          grid-column: 1 / -1;
          justify-self: center;
          min-width: 200px;
        }

        .generate-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(58, 141, 222, 0.3);
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
          font-weight: 600;
        }

        .route-card {
          background: white;
          border: 2px solid #E5E7EB;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .route-card:hover {
          border-color: #3A8DDE;
          box-shadow: 0 4px 12px rgba(58, 141, 222, 0.1);
        }

        .route-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .route-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #0A2540;
        }

        .route-stats {
          display: flex;
          gap: 1rem;
          font-size: 0.9rem;
          color: #6B7280;
        }

        .route-stops {
          margin-top: 1rem;
        }

        .stop-item {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          background: #F7F9FC;
          border-radius: 8px;
          margin-bottom: 0.5rem;
        }

        .stop-time {
          font-weight: 600;
          color: #0A2540;
          min-width: 120px;
        }

        .stop-details {
          flex: 1;
          margin-left: 1rem;
        }

        .stop-address {
          font-weight: 500;
          color: #0A2540;
          margin-bottom: 0.25rem;
        }

        .stop-price {
          color: #16B286;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .stop-info {
          display: flex;
          gap: 1rem;
          font-size: 0.9rem;
          color: #6B7280;
          margin-top: 0.25rem;
        }

        .delete-btn {
          background: #EF4444;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .delete-btn:hover {
          background: #DC2626;
        }

        .empty-state {
          text-align: center;
          padding: 3rem;
          color: #6B7280;
        }

        .empty-state h4 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: #0A2540;
        }

        @media (max-width: 768px) {
          .planner-controls {
            grid-template-columns: 1fr;
          }
          
          .route-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .route-stats {
            flex-direction: column;
            gap: 0.25rem;
          }
        }
      `}</style>

      <div class="planner-header">
        <h2>Weekend House Tour Planner</h2>
        <p>Plan your perfect weekend open house tour with optimized routes</p>
      </div>

      <div class="planner-controls">
        <div class="control-group">
          <label for="day-select">Select Day</label>
          <select 
            id="day-select"
            value={selectedDay.value}
            onChange$={(e) => selectedDay.value = e.target.value as 'saturday' | 'sunday'}
          >
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
        </div>

        <div class="control-group">
          <label for="start-time">Start Time</label>
          <input 
            id="start-time"
            type="time" 
            value={startTime.value}
            onChange$={(e) => startTime.value = e.target.value}
          />
        </div>

        <div class="control-group">
          <label for="max-houses">Max Houses</label>
          <input 
            id="max-houses"
            type="number" 
            min="1" 
            max="10" 
            value={maxHouses.value}
            onChange$={(e) => maxHouses.value = e.target.value}
          />
        </div>

        <button 
          class="generate-btn"
          onClick$={generateOptimalRoute}
          disabled={isGenerating.value || availableOpenHouses(selectedDay.value).length === 0}
        >
          {isGenerating.value ? 'Generating Route...' : 'Generate Optimal Route'}
        </button>
      </div>

      <div class="routes-section">
        <div class="routes-header">
          <h3>Your Planned Routes</h3>
          <span class="route-stats">
            {availableOpenHouses(selectedDay.value).length} houses available
          </span>
        </div>

        {plannedRoutes.length === 0 ? (
          <div class="empty-state">
            <h4>No routes planned yet</h4>
            <p>Generate your first optimized route to get started!</p>
          </div>
        ) : (
          plannedRoutes.map((route) => (
            <div key={route.id} class="route-card">
              <div class="route-header">
                <div class="route-title">{route.name}</div>
                <div class="route-stats">
                  <span>{route.stops.length} stops</span>
                  <span>{Math.round(route.totalDuration / 60)}h {route.totalDuration % 60}m total</span>
                  <span>{route.totalDistance.toFixed(1)} miles</span>
                </div>
              </div>

              <div class="route-stops">
                {route.stops.map((stop, index) => (
                  <div key={index} class="stop-item">
                    <div class="stop-time">
                      {stop.arrivalTime} - {stop.departureTime}
                    </div>
                    <div class="stop-details">
                      <div class="stop-address">{stop.openHouse.address}</div>
                      <div class="stop-price">{formatPrice(stop.openHouse.price)}</div>
                      <div class="stop-info">
                        <span>{stop.openHouse.beds} bed • {stop.openHouse.baths} bath</span>
                        <span>{stop.openHouse.sqft.toLocaleString()} sqft</span>
                        <span>{stop.openHouse.neighborhood}</span>
                        {stop.travelTimeFromPrevious > 0 && (
                          <span>{stop.travelTimeFromPrevious}min travel</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                class="delete-btn"
                onClick$={() => deleteRoute(route.id)}
              >
                Delete Route
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
});