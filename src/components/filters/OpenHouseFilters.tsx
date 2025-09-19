import { component$, useSignal, $, useStore } from '@builder.io/qwik';

interface FilterState {
  timeRange: 'today' | 'tomorrow' | 'this-weekend' | 'next-weekend' | 'all';
  timeSlots: string[];
  priceRange: { min: number; max: number };
  bedrooms: number[];
  bathrooms: number[];
  neighborhoods: string[];
  agents: string[];
  radius: number;
  sortBy: 'time' | 'price' | 'distance' | 'newest';
  sortOrder: 'asc' | 'desc';
}

interface OpenHouseFiltersProps {
  neighborhoods: string[];
  agents: { id: string; name: string }[];
  onFiltersChange?: (filters: FilterState) => void;
  onClearFilters?: () => void;
}

export default component$<OpenHouseFiltersProps>(({ 
  neighborhoods, 
  agents, 
  onFiltersChange, 
  onClearFilters 
}) => {
  const isExpanded = useSignal(false);
  const filters = useStore<FilterState>({
    timeRange: 'this-weekend',
    timeSlots: [],
    priceRange: { min: 0, max: 2000000 },
    bedrooms: [],
    bathrooms: [],
    neighborhoods: [],
    agents: [],
    radius: 10,
    sortBy: 'time',
    sortOrder: 'asc',
  });

  const timeSlots = [
    { id: 'morning', label: 'Morning', time: '9:00 AM - 12:00 PM', icon: '🌅' },
    { id: 'afternoon', label: 'Afternoon', time: '12:00 PM - 5:00 PM', icon: '☀️' },
    { id: 'evening', label: 'Evening', time: '5:00 PM - 8:00 PM', icon: '🌆' },
  ];

  const bedroomOptions = [1, 2, 3, 4, 5, 6];
  const bathroomOptions = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  const updateFilters = () => {
    onFiltersChange?.(filters);
  };

  const toggleTimeSlot = $((slotId: string) => {
    const index = filters.timeSlots.indexOf(slotId);
    if (index >= 0) {
      filters.timeSlots.splice(index, 1);
    } else {
      filters.timeSlots.push(slotId);
    }
    updateFilters();
  });

  const toggleBedroom = $((bedroom: number) => {
    const index = filters.bedrooms.indexOf(bedroom);
    if (index >= 0) {
      filters.bedrooms.splice(index, 1);
    } else {
      filters.bedrooms.push(bedroom);
    }
    updateFilters();
  });

  const toggleBathroom = $((bathroom: number) => {
    const index = filters.bathrooms.indexOf(bathroom);
    if (index >= 0) {
      filters.bathrooms.splice(index, 1);
    } else {
      filters.bathrooms.push(bathroom);
    }
    updateFilters();
  });

  const toggleNeighborhood = $((neighborhood: string) => {
    const index = filters.neighborhoods.indexOf(neighborhood);
    if (index >= 0) {
      filters.neighborhoods.splice(index, 1);
    } else {
      filters.neighborhoods.push(neighborhood);
    }
    updateFilters();
  });

  const toggleAgent = $((agentId: string) => {
    const index = filters.agents.indexOf(agentId);
    if (index >= 0) {
      filters.agents.splice(index, 1);
    } else {
      filters.agents.push(agentId);
    }
    updateFilters();
  });

  const updatePriceRange = $((field: 'min' | 'max', value: number) => {
    filters.priceRange[field] = value;
    updateFilters();
  });

  const updateRadius = $((radius: number) => {
    filters.radius = radius;
    updateFilters();
  });

  const updateTimeRange = $((timeRange: FilterState['timeRange']) => {
    filters.timeRange = timeRange;
    updateFilters();
  });

  const updateSortBy = $((sortBy: FilterState['sortBy']) => {
    filters.sortBy = sortBy;
    updateFilters();
  });

  const updateSortOrder = $((sortOrder: FilterState['sortOrder']) => {
    filters.sortOrder = sortOrder;
    updateFilters();
  });

  const clearAllFilters = () => {
    filters.timeRange = 'this-weekend';
    filters.timeSlots = [];
    filters.priceRange = { min: 0, max: 2000000 };
    filters.bedrooms = [];
    filters.bathrooms = [];
    filters.neighborhoods = [];
    filters.agents = [];
    filters.radius = 10;
    filters.sortBy = 'time';
    filters.sortOrder = 'asc';
    if (onClearFilters) {
      onClearFilters();
    }
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.timeRange !== 'this-weekend') count++;
    if (filters.timeSlots.length > 0) count++;
    if (filters.priceRange.min > 0 || filters.priceRange.max < 2000000) count++;
    if (filters.bedrooms.length > 0) count++;
    if (filters.bathrooms.length > 0) count++;
    if (filters.neighborhoods.length > 0) count++;
    if (filters.agents.length > 0) count++;
    if (filters.radius !== 10) count++;
    return count;
  };

  const formatPrice = $((price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price.toLocaleString()}`;
  });

  return (
    <div class="open-house-filters">
      <style>{`
        .open-house-filters {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .filters-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .filters-title {
          color: #0A2540;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .filter-count {
          background: #16B286;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .toggle-btn {
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          cursor: pointer;
          font-weight: 600;
          color: #0A2540;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .toggle-btn:hover {
          background: #e9ecef;
          border-color: #16B286;
        }

        .filters-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .filter-section {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 1.5rem;
        }

        .filter-section h4 {
          color: #0A2540;
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .time-range-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 0.5rem;
        }

        .time-range-btn {
          padding: 0.75rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          text-align: center;
        }

        .time-range-btn:hover {
          border-color: #16B286;
          background: #f8fffe;
        }

        .time-range-btn.active {
          border-color: #16B286;
          background: #16B286;
          color: white;
        }

        .time-slots {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .time-slot {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: white;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .time-slot:hover {
          border-color: #16B286;
          background: #f8fffe;
        }

        .time-slot.selected {
          border-color: #16B286;
          background: #E0F2F7;
        }

        .time-slot-info {
          flex: 1;
        }

        .time-slot-label {
          font-weight: 600;
          color: #0A2540;
          margin-bottom: 0.25rem;
        }

        .time-slot-time {
          font-size: 0.8rem;
          color: #6a6d72;
        }

        .price-range {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .price-inputs {
          display: flex;
          gap: 1rem;
        }

        .price-input {
          flex: 1;
          padding: 0.75rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s ease;
        }

        .price-input:focus {
          outline: none;
          border-color: #16B286;
        }

        .price-slider {
          width: 100%;
          margin: 1rem 0;
        }

        .price-display {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: #6a6d72;
          font-weight: 600;
        }

        .option-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
          gap: 0.5rem;
        }

        .option-btn {
          padding: 0.75rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          text-align: center;
        }

        .option-btn:hover {
          border-color: #16B286;
          background: #f8fffe;
        }

        .option-btn.selected {
          border-color: #16B286;
          background: #16B286;
          color: white;
        }

        .neighborhood-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-height: 200px;
          overflow-y: auto;
        }

        .neighborhood-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: white;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .neighborhood-item:hover {
          border-color: #16B286;
          background: #f8fffe;
        }

        .neighborhood-item.selected {
          border-color: #16B286;
          background: #E0F2F7;
        }

        .neighborhood-checkbox {
          width: 18px;
          height: 18px;
          border: 2px solid #e9ecef;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: white;
          background: #e9ecef;
          transition: all 0.2s ease;
        }

        .neighborhood-item.selected .neighborhood-checkbox {
          background: #16B286;
          border-color: #16B286;
        }

        .radius-control {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .radius-slider {
          width: 100%;
          margin: 0.5rem 0;
        }

        .radius-display {
          text-align: center;
          font-size: 1.2rem;
          font-weight: 700;
          color: #16B286;
        }

        .sort-controls {
          display: flex;
          gap: 1rem;
        }

        .sort-select {
          flex: 1;
          padding: 0.75rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 1rem;
          background: white;
          transition: border-color 0.2s ease;
        }

        .sort-select:focus {
          outline: none;
          border-color: #16B286;
        }

        .sort-order-btn {
          padding: 0.75rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
          min-width: 60px;
        }

        .sort-order-btn:hover {
          border-color: #16B286;
          background: #f8fffe;
        }

        .sort-order-btn.active {
          border-color: #16B286;
          background: #16B286;
          color: white;
        }

        .filter-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 2px solid #e9ecef;
        }

        .btn {
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 1rem;
        }

        .btn-primary {
          background: #16B286;
          color: white;
          flex: 1;
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

        @media (max-width: 768px) {
          .open-house-filters {
            padding: 1rem;
          }

          .filters-content {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .filter-section {
            padding: 1rem;
          }

          .time-range-buttons {
            grid-template-columns: repeat(2, 1fr);
          }

          .price-inputs {
            flex-direction: column;
          }

          .option-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .sort-controls {
            flex-direction: column;
          }

          .filter-actions {
            flex-direction: column;
          }
        }
      `}</style>

      <div class="filters-header">
        <h3 class="filters-title">
          🔍 Filter Open Houses
          {getActiveFilterCount() > 0 && (
            <span class="filter-count">{getActiveFilterCount()}</span>
          )}
        </h3>
        <button 
          class="toggle-btn"
          onClick$={() => isExpanded.value = !isExpanded.value}
        >
          {isExpanded.value ? '🔼 Collapse' : '🔽 Expand'}
        </button>
      </div>

      {isExpanded.value && (
        <div class="filters-content">
          <div class="filter-section">
            <h4>📅 When</h4>
            <div class="time-range-buttons">
              {[
                { id: 'today', label: 'Today', icon: '📅' },
                { id: 'tomorrow', label: 'Tomorrow', icon: '📆' },
                { id: 'this-weekend', label: 'This Weekend', icon: '🏠' },
                { id: 'next-weekend', label: 'Next Weekend', icon: '🔮' },
                { id: 'all', label: 'All Times', icon: '📋' },
              ].map(({ id, label, icon }) => (
                <button
                  key={id}
                  class={`time-range-btn ${filters.timeRange === id ? 'active' : ''}`}
                  onClick$={() => updateTimeRange(id as FilterState['timeRange'])}
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div class="filter-section">
            <h4>⏰ Time Slots</h4>
            <div class="time-slots">
              {timeSlots.map((slot) => (
                <div
                  key={slot.id}
                  class={`time-slot ${filters.timeSlots.includes(slot.id) ? 'selected' : ''}`}
                  onClick$={() => toggleTimeSlot(slot.id)}
                >
                  <span style="font-size: 1.2rem;">{slot.icon}</span>
                  <div class="time-slot-info">
                    <div class="time-slot-label">{slot.label}</div>
                    <div class="time-slot-time">{slot.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div class="filter-section">
            <h4>💰 Price Range</h4>
            <div class="price-range">
              <div class="price-inputs">
                <input
                  type="number"
                  class="price-input"
                  placeholder="Min Price"
                  value={filters.priceRange.min}
                  onInput$={(e) => updatePriceRange('min', parseInt((e.target as HTMLInputElement).value) || 0)}
                />
                <input
                  type="number"
                  class="price-input"
                  placeholder="Max Price"
                  value={filters.priceRange.max}
                  onInput$={(e) => updatePriceRange('max', parseInt((e.target as HTMLInputElement).value) || 2000000)}
                />
              </div>
              <div class="price-display">
                <span>{formatPrice(filters.priceRange.min)}</span>
                <span>{formatPrice(filters.priceRange.max)}</span>
              </div>
            </div>
          </div>

          <div class="filter-section">
            <h4>🛏️ Bedrooms</h4>
            <div class="option-grid">
              {bedroomOptions.map((beds) => (
                <button
                  key={beds}
                  class={`option-btn ${filters.bedrooms.includes(beds) ? 'selected' : ''}`}
                  onClick$={() => toggleBedroom(beds)}
                >
                  {beds}+
                </button>
              ))}
            </div>
          </div>

          <div class="filter-section">
            <h4>🚿 Bathrooms</h4>
            <div class="option-grid">
              {bathroomOptions.map((baths) => (
                <button
                  key={baths}
                  class={`option-btn ${filters.bathrooms.includes(baths) ? 'selected' : ''}`}
                  onClick$={() => toggleBathroom(baths)}
                >
                  {baths}
                </button>
              ))}
            </div>
          </div>

          <div class="filter-section">
            <h4>🏘️ Neighborhoods</h4>
            <div class="neighborhood-list">
              {neighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood}
                  class={`neighborhood-item ${filters.neighborhoods.includes(neighborhood) ? 'selected' : ''}`}
                  onClick$={() => toggleNeighborhood(neighborhood)}
                >
                  <div class="neighborhood-checkbox">
                    {filters.neighborhoods.includes(neighborhood) && '✓'}
                  </div>
                  <span>{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>

          <div class="filter-section">
            <h4>👨‍💼 Agents</h4>
            <div class="neighborhood-list">
              {agents.map((agent) => (
                <div
                  key={agent.id}
                  class={`neighborhood-item ${filters.agents.includes(agent.id) ? 'selected' : ''}`}
                  onClick$={() => toggleAgent(agent.id)}
                >
                  <div class="neighborhood-checkbox">
                    {filters.agents.includes(agent.id) && '✓'}
                  </div>
                  <span>{agent.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div class="filter-section">
            <h4>📍 Distance</h4>
            <div class="radius-control">
              <div class="radius-display">{filters.radius} miles</div>
              <input
                type="range"
                class="radius-slider"
                min="1"
                max="50"
                value={filters.radius}
                onInput$={(e) => updateRadius(parseInt((e.target as HTMLInputElement).value))}
              />
            </div>
          </div>

          <div class="filter-section">
            <h4>🔀 Sort By</h4>
            <div class="sort-controls">
              <select 
                class="sort-select"
                value={filters.sortBy}
                onChange$={(e) => updateSortBy((e.target as HTMLSelectElement).value as FilterState['sortBy'])}
              >
                <option value="time">Time</option>
                <option value="price">Price</option>
                <option value="distance">Distance</option>
                <option value="newest">Newest</option>
              </select>
              <button
                class={`sort-order-btn ${filters.sortOrder === 'asc' ? 'active' : ''}`}
                onClick$={() => updateSortOrder(filters.sortOrder === 'asc' ? 'desc' : 'asc')}
              >
                {filters.sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div class="filter-actions">
        <button class="btn btn-primary" onClick$={updateFilters}>
          Apply Filters
        </button>
        <button class="btn btn-secondary">
          Save Search
        </button>
        <button class="btn btn-outline" onClick$={clearAllFilters}>
          Clear All
        </button>
      </div>
    </div>
  );
});
