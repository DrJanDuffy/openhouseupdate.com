import { component$, useSignal, $ } from '@builder.io/qwik';

interface OpenHouse {
  id: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  photos: string[];
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
  features: string[];
  neighborhood: string;
  distance?: number;
}

interface OpenHouseCardProps {
  openHouse: OpenHouse;
  onFavorite?: (id: string) => void;
  onVisit?: (id: string) => void;
  onDirections?: (address: string) => void;
}

export default component$<OpenHouseCardProps>(({ openHouse, onFavorite, onVisit, onDirections }) => {
  const isFavorited = useSignal(false);
  const currentPhotoIndex = useSignal(0);

  const handleFavorite = () => {
    isFavorited.value = !isFavorited.value;
    onFavorite?.(openHouse.id);
  };

  const handleVisit = () => {
    onVisit?.(openHouse.id);
  };

  const handleDirections = () => {
    onDirections?.(openHouse.address);
  };

  const nextPhoto = $(() => {
    currentPhotoIndex.value = (currentPhotoIndex.value + 1) % openHouse.photos.length;
  });

  const prevPhoto = $(() => {
    currentPhotoIndex.value = currentPhotoIndex.value === 0 
      ? openHouse.photos.length - 1 
      : currentPhotoIndex.value - 1;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getNextOpenHouse = () => {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    
    return openHouse.openHouseTimes
      .filter(oh => oh.date >= today)
      .sort((a, b) => a.date.localeCompare(b.date))[0];
  };

  const nextOpenHouse = getNextOpenHouse();

  return (
    <div class="open-house-card">
      <style>{`
        .open-house-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          margin-bottom: 1.5rem;
        }

        .open-house-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .photo-container {
          position: relative;
          height: 240px;
          overflow: hidden;
          background: #f8f9fa;
        }

        .photo-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .photo-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 18px;
          color: #333;
          transition: background 0.2s ease;
        }

        .photo-nav:hover {
          background: white;
        }

        .photo-nav.prev {
          left: 10px;
        }

        .photo-nav.next {
          right: 10px;
        }

        .photo-indicators {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
        }

        .photo-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .photo-indicator.active {
          background: white;
        }

        .card-content {
          padding: 1.5rem;
        }

        .price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #16B286;
          margin-bottom: 0.5rem;
        }

        .address {
          font-size: 1.1rem;
          color: #0A2540;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .neighborhood {
          font-size: 0.9rem;
          color: #3A8DDE;
          margin-bottom: 1rem;
        }

        .property-details {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: #6a6d72;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .open-house-times {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .open-house-times h4 {
          font-size: 1rem;
          color: #0A2540;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .time-slot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid #e9ecef;
        }

        .time-slot:last-child {
          border-bottom: none;
        }

        .time-date {
          font-weight: 600;
          color: #0A2540;
        }

        .time-range {
          color: #16B286;
          font-weight: 600;
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

        .features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .feature-tag {
          background: #E0F2F7;
          color: #3A8DDE;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
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

        .btn-outline {
          background: transparent;
          color: #16B286;
          border: 2px solid #16B286;
        }

        .btn-outline:hover {
          background: #16B286;
          color: white;
        }

        .favorite-btn {
          background: transparent;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .favorite-btn:hover {
          background: #f8f9fa;
        }

        .favorite-btn.favorited {
          color: #e74c3c;
        }

        .favorite-btn:not(.favorited) {
          color: #ccc;
        }

        .distance {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .card-content {
            padding: 1rem;
          }

          .property-details {
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .action-buttons {
            flex-direction: column;
          }

          .photo-container {
            height: 200px;
          }
        }
      `}</style>

      <div class="photo-container">
        {openHouse.photos.length > 0 && (
          <img 
            src={openHouse.photos[currentPhotoIndex.value]} 
            alt={`${openHouse.address} - Photo ${currentPhotoIndex.value + 1}`}
          />
        )}
        
        {openHouse.photos.length > 1 && (
          <>
            <button class="photo-nav prev" onClick$={prevPhoto}>
              ‹
            </button>
            <button class="photo-nav next" onClick$={nextPhoto}>
              ›
            </button>
            <div class="photo-indicators">
              {openHouse.photos.map((_, index) => (
                <div 
                  key={index}
                  class={`photo-indicator ${index === currentPhotoIndex.value ? 'active' : ''}`}
                  onClick$={() => currentPhotoIndex.value = index}
                />
              ))}
            </div>
          </>
        )}

        <button 
          class={`favorite-btn ${isFavorited.value ? 'favorited' : ''}`}
          onClick$={() => {
            isFavorited.value = !isFavorited.value;
            onFavorite?.(openHouse.id);
          }}
          aria-label={isFavorited.value ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorited.value ? '♥' : '♡'}
        </button>

        {openHouse.distance && (
          <div class="distance">
            {openHouse.distance.toFixed(1)} mi
          </div>
        )}
      </div>

      <div class="card-content">
        <div class="price">{formatPrice(openHouse.price)}</div>
        <div class="address">{openHouse.address}</div>
        <div class="neighborhood">{openHouse.neighborhood}</div>

        <div class="property-details">
          <div class="detail-item">
            <span>🛏️</span>
            <span>{openHouse.beds} bed{openHouse.beds !== 1 ? 's' : ''}</span>
          </div>
          <div class="detail-item">
            <span>🚿</span>
            <span>{openHouse.baths} bath{openHouse.baths !== 1 ? 's' : ''}</span>
          </div>
          <div class="detail-item">
            <span>📏</span>
            <span>{openHouse.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        {nextOpenHouse && (
          <div class="open-house-times">
            <h4>Next Open House</h4>
            <div class="time-slot">
              <span class="time-date">
                {new Date(nextOpenHouse.date).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
              <span class="time-range">
                {formatTime(nextOpenHouse.startTime)} - {formatTime(nextOpenHouse.endTime)}
              </span>
            </div>
          </div>
        )}

        <div class="agent-info">
          <img 
            src={openHouse.agent.photo} 
            alt={openHouse.agent.name}
            class="agent-photo"
          />
          <div class="agent-details">
            <h5>{openHouse.agent.name}</h5>
            <p>Listing Agent</p>
          </div>
        </div>

        {openHouse.features.length > 0 && (
          <div class="features">
            {openHouse.features.slice(0, 4).map((feature, index) => (
              <span key={index} class="feature-tag">{feature}</span>
            ))}
            {openHouse.features.length > 4 && (
              <span class="feature-tag">+{openHouse.features.length - 4} more</span>
            )}
          </div>
        )}

        <div class="action-buttons">
          <button class="btn btn-primary" onClick$={() => onVisit?.(openHouse.id)}>
            Visit Now
          </button>
          <button class="btn btn-secondary" onClick$={() => onDirections?.(openHouse.address)}>
            Directions
          </button>
        </div>
      </div>
    </div>
  );
});
