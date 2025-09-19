import { component$, useSignal, $, useVisibleTask$ } from '@builder.io/qwik';

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
  status: 'starting' | 'active' | 'ending' | 'ended';
  visitorCount?: number;
  lastUpdated?: string;
}

interface LiveOpenHousesProps {
  openHouses: OpenHouse[];
  onVisit?: (openHouse: OpenHouse) => void;
  onDirections?: (openHouse: OpenHouse) => void;
}

export default component$<LiveOpenHousesProps>(({ openHouses, onVisit, onDirections }) => {
  const currentTime = useSignal(new Date());
  const sortBy = useSignal<'time' | 'price' | 'distance' | 'visitors'>('time');
  const filterStatus = useSignal<'all' | 'starting' | 'active' | 'ending'>('all');

  // Update time every minute
  useVisibleTask$(() => {
    const interval = setInterval(() => {
      currentTime.value = new Date();
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  });

  // Calculate live status for each open house
  const getLiveStatus = (openHouse: OpenHouse): 'starting' | 'active' | 'ending' | 'ended' => {
    const now = currentTime.value;
    const today = now.toISOString().split('T')[0];

    const todaysOpenHouse = openHouse.openHouseTimes.find(oh => oh.date === today);
    if (!todaysOpenHouse) return 'ended';

    const startTime = todaysOpenHouse.startTime;
    const endTime = todaysOpenHouse.endTime;

    // Calculate time differences in minutes
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const startMinutes = parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]);
    const endMinutes = parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]);

    if (currentMinutes < startMinutes) return 'starting';
    if (currentMinutes >= startMinutes && currentMinutes < endMinutes - 30) return 'active';
    if (currentMinutes >= endMinutes - 30 && currentMinutes < endMinutes) return 'ending';
    if (currentMinutes >= endMinutes) return 'ended';
    
    return 'ended';
  };

  // Get time until start/end
  const getTimeUntil = (openHouse: OpenHouse, type: 'start' | 'end'): string | null => {
    const now = currentTime.value;
    const today = now.toISOString().split('T')[0];
    const todaysOpenHouse = openHouse.openHouseTimes.find(oh => oh.date === today);
    
    if (!todaysOpenHouse) return null;

    const targetTime = type === 'start' ? todaysOpenHouse.startTime : todaysOpenHouse.endTime;
    const targetDate = new Date(`${today}T${targetTime}:00`);
    const diffMinutes = Math.floor((targetDate.getTime() - now.getTime()) / (1000 * 60));

    if (diffMinutes < 0) return null;

    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };


  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price.toLocaleString()}`;
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'starting': return '#ffc107';
      case 'active': return '#28a745';
      case 'ending': return '#fd7e14';
      case 'ended': return '#6c757d';
      default: return '#6c757d';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'starting': return '⏰';
      case 'active': return '🔴';
      case 'ending': return '⚠️';
      case 'ended': return '⏹️';
      default: return '❓';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'starting': return 'Starting Soon';
      case 'active': return 'Live Now';
      case 'ending': return 'Ending Soon';
      case 'ended': return 'Ended';
      default: return 'Unknown';
    }
  };

  const handleVisit = $((openHouse: OpenHouse) => {
    onVisit?.(openHouse);
  });

  const handleDirections = $((openHouse: OpenHouse) => {
    onDirections?.(openHouse);
  });

  return (
    <div class="live-open-houses">
      <style>{`
        .live-open-houses {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .header h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .live-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #dc3545;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }

        .controls {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 150px;
        }

        .control-group label {
          font-weight: 600;
          color: #0A2540;
          font-size: 0.9rem;
        }

        .control-group select {
          padding: 0.75rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 1rem;
          background: white;
          transition: border-color 0.2s ease;
        }

        .control-group select:focus {
          outline: none;
          border-color: #16B286;
        }

        .status-filters {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .status-filter {
          padding: 0.5rem 1rem;
          border: 2px solid #e9ecef;
          border-radius: 20px;
          background: white;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status-filter:hover {
          border-color: #16B286;
          background: #f8fffe;
        }

        .status-filter.active {
          border-color: #16B286;
          background: #16B286;
          color: white;
        }

        .houses-grid {
          display: grid;
          gap: 1.5rem;
        }

        .house-card {
          background: white;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.2s ease;
          position: relative;
        }

        .house-card:hover {
          border-color: #16B286;
          box-shadow: 0 4px 12px rgba(22, 178, 134, 0.1);
          transform: translateY(-2px);
        }

        .house-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .house-info h3 {
          color: #0A2540;
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
        }

        .house-price {
          color: #16B286;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .house-meta {
          display: flex;
          gap: 1rem;
          color: #6a6d72;
          font-size: 0.9rem;
        }

        .status-badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 120px;
          justify-content: center;
        }

        .time-info {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .time-info h4 {
          color: #0A2540;
          font-size: 1rem;
          margin: 0 0 0.5rem 0;
          font-weight: 600;
        }

        .time-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
        }

        .time-range {
          color: #6a6d72;
        }

        .time-until {
          font-weight: 600;
          color: #16B286;
        }

        .agent-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .agent-photo {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .agent-details h5 {
          font-size: 0.9rem;
          color: #0A2540;
          margin: 0;
          font-weight: 600;
        }

        .agent-details p {
          font-size: 0.8rem;
          color: #6a6d72;
          margin: 0;
        }

        .visitor-count {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .action-buttons {
          display: flex;
          gap: 0.75rem;
        }

        .btn {
          flex: 1;
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          text-align: center;
          display: inline-block;
        }

        .btn-primary {
          background: #16B286;
          color: white;
        }

        .btn-primary:hover {
          background: #14a078;
        }

        .btn-secondary {
          background: #3A8DDE;
          color: white;
        }

        .btn-secondary:hover {
          background: #2e7bc7;
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

        .stats-bar {
          display: flex;
          justify-content: space-around;
          background: #f8f9fa;
          border-radius: 12px;
          padding: 1rem;
          margin-bottom: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #16B286;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #6a6d72;
          text-transform: uppercase;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .live-open-houses {
            padding: 1rem;
          }

          .header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .controls {
            flex-direction: column;
          }

          .control-group {
            min-width: auto;
          }

          .status-filters {
            justify-content: center;
          }

          .house-header {
            flex-direction: column;
            gap: 1rem;
          }

          .time-details {
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start;
          }

          .action-buttons {
            flex-direction: column;
          }

          .stats-bar {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>

      <div class="header">
        <h2>
          🔴 Live Open Houses
          <span class="live-indicator">
            <span>🔴</span>
            LIVE
          </span>
        </h2>
        <div style="color: #6a6d72; font-size: 0.9rem;">
          Updated {currentTime.value.toLocaleTimeString()}
        </div>
      </div>

      <div class="stats-bar">
        <div class="stat-item">
          <div class="stat-number">
            {openHouses.filter(h => getLiveStatus(h) === 'active').length}
          </div>
          <div class="stat-label">Live Now</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">
            {openHouses.filter(h => getLiveStatus(h) === 'starting').length}
          </div>
          <div class="stat-label">Starting Soon</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">
            {openHouses.filter(h => getLiveStatus(h) === 'ending').length}
          </div>
          <div class="stat-label">Ending Soon</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{openHouses.length}</div>
          <div class="stat-label">Total Today</div>
        </div>
      </div>

      <div class="controls">
        <div class="control-group">
          <label for="sortBy">Sort By</label>
          <select id="sortBy" bind:value={sortBy}>
            <option value="time">Time Status</option>
            <option value="price">Price</option>
            <option value="distance">Distance</option>
            <option value="visitors">Visitor Count</option>
          </select>
        </div>
      </div>

      <div class="status-filters">
        <button 
          class={`status-filter ${filterStatus.value === 'all' ? 'active' : ''}`}
          onClick$={() => filterStatus.value = 'all'}
        >
          📋 All ({openHouses.length})
        </button>
        <button 
          class={`status-filter ${filterStatus.value === 'active' ? 'active' : ''}`}
          onClick$={() => filterStatus.value = 'active'}
        >
          🔴 Live Now ({openHouses.filter(h => getLiveStatus(h) === 'active').length})
        </button>
        <button 
          class={`status-filter ${filterStatus.value === 'starting' ? 'active' : ''}`}
          onClick$={() => filterStatus.value = 'starting'}
        >
          ⏰ Starting Soon ({openHouses.filter(h => getLiveStatus(h) === 'starting').length})
        </button>
        <button 
          class={`status-filter ${filterStatus.value === 'ending' ? 'active' : ''}`}
          onClick$={() => filterStatus.value = 'ending'}
        >
          ⚠️ Ending Soon ({openHouses.filter(h => getLiveStatus(h) === 'ending').length})
        </button>
      </div>

      {openHouses.length > 0 ? (
        <div class="houses-grid">
          {openHouses.map((house) => {
            const status = getLiveStatus(house);
            const timeUntilStart = getTimeUntil(house, 'start');
            const timeUntilEnd = getTimeUntil(house, 'end');
            const todaysOpenHouse = house.openHouseTimes.find(oh => 
              oh.date === currentTime.value.toISOString().split('T')[0]
            );

            return (
              <div key={house.id} class="house-card">
                {house.visitorCount && (
                  <div class="visitor-count">
                    👥 {house.visitorCount} visitors
                  </div>
                )}

                <div class="house-header">
                  <div class="house-info">
                    <h3>{house.address}</h3>
                    <div class="house-price">{formatPrice(house.price)}</div>
                    <div class="house-meta">
                      <span>{house.beds} bed • {house.baths} bath</span>
                      <span>{house.sqft.toLocaleString()} sqft</span>
                      <span>{house.neighborhood}</span>
                    </div>
                  </div>
                  <div 
                    class="status-badge"
                    style={`background: ${getStatusColor(status)}; color: white;`}
                  >
                    <span>{getStatusIcon(status)}</span>
                    <span>{getStatusText(status)}</span>
                  </div>
                </div>

                {todaysOpenHouse && (
                  <div class="time-info">
                    <h4>Today's Open House</h4>
                    <div class="time-details">
                      <span class="time-range">
                        {formatTime(todaysOpenHouse.startTime)} - {formatTime(todaysOpenHouse.endTime)}
                      </span>
                      <span class="time-until">
                        {status === 'starting' && timeUntilStart && `Starts in ${timeUntilStart}`}
                        {status === 'active' && timeUntilEnd && `Ends in ${timeUntilEnd}`}
                        {status === 'ending' && timeUntilEnd && `Ends in ${timeUntilEnd}`}
                        {status === 'ended' && 'Ended'}
                      </span>
                    </div>
                  </div>
                )}

                <div class="agent-info">
                  <img 
                    src={house.agent.photo} 
                    alt={house.agent.name}
                    class="agent-photo"
                  />
                  <div class="agent-details">
                    <h5>{house.agent.name}</h5>
                    <p>Listing Agent</p>
                  </div>
                </div>

                <div class="action-buttons">
                  <button 
                    class="btn btn-primary"
                    onClick$={() => handleVisit(house)}
                  >
                    {status === 'active' ? 'Visit Now' : 'Get Details'}
                  </button>
                  <button 
                    class="btn btn-secondary"
                    onClick$={() => handleDirections(house)}
                  >
                    Directions
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div class="empty-state">
          <h3>No open houses found</h3>
          <p>Try adjusting your filters or check back later for new listings.</p>
        </div>
      )}
    </div>
  );
});
