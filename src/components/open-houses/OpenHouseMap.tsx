import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';

// Google Maps API will be loaded dynamically

interface OpenHouseLocation {
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
}

interface OpenHouseMapProps {
  openHouses: OpenHouseLocation[];
  center?: { lat: number; lng: number };
  onMarkerClick?: (openHouse: OpenHouseLocation) => void;
  onRouteClick?: (openHouses: OpenHouseLocation[]) => void;
}

export default component$<OpenHouseMapProps>(({ 
  openHouses, 
  center = { lat: 36.1699, lng: -115.1398 }, // Las Vegas center
  onMarkerClick,
  onRouteClick 
}) => {
  const mapContainer = useSignal<HTMLDivElement>();
  const map = useSignal<any>(null);
  const markers = useSignal<any[]>([]);
  const selectedOpenHouses = useSignal<OpenHouseLocation[]>([]);
  const isRouteMode = useSignal(false);

  useVisibleTask$(async () => {
    // Load Google Maps API
    if (!(window as any).google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=geometry`;
      script.async = true;
      document.head.appendChild(script);
      
      await new Promise((resolve) => {
        script.onload = resolve;
      });
    }

    if (mapContainer.value) {
      // Initialize map
      map.value = new (window as any).google.maps.Map(mapContainer.value, {
        center: center,
        zoom: 11,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'transit',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      // Add markers for open houses
      addMarkers();
    }
  });

  const addMarkers = $(async () => {
    // Clear existing markers
    markers.value.forEach(marker => marker.setMap(null));
    markers.value = [];

    for (const openHouse of openHouses) {
      const marker = new (window as any).google.maps.Marker({
        position: { lat: openHouse.lat, lng: openHouse.lng },
        map: map.value,
        title: openHouse.address,
        icon: {
          url: await createCustomMarkerIcon(openHouse),
          scaledSize: new (window as any).google.maps.Size(40, 50),
          anchor: new (window as any).google.maps.Point(20, 50),
        },
        animation: (window as any).google.maps.Animation.DROP,
      });

      const infoWindow = new (window as any).google.maps.InfoWindow({
        content: createInfoWindowContent(openHouse),
      });

      marker.addListener('click', () => {
        // Close other info windows
        markers.value.forEach(m => {
          if (m.infoWindow) {
            m.infoWindow.close();
          }
        });

        infoWindow.open(map.value, marker);
        onMarkerClick?.(openHouse);
      });

      marker.infoWindow = infoWindow;
      markers.value.push(marker);
    }

    // Fit bounds to show all markers
    if (markers.value.length > 0) {
      const bounds = new (window as any).google.maps.LatLngBounds();
      markers.value.forEach(marker => {
        bounds.extend(marker.getPosition());
      });
      map.value.fitBounds(bounds);
    }
  });

  const createCustomMarkerIcon = $(async (openHouse: OpenHouseLocation) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 40;
    canvas.height = 50;

    if (ctx) {
      // Draw marker shape
      ctx.fillStyle = '#16B286';
      ctx.beginPath();
      ctx.moveTo(20, 0);
      ctx.lineTo(35, 35);
      ctx.lineTo(20, 45);
      ctx.lineTo(5, 35);
      ctx.closePath();
      ctx.fill();

      // Draw border
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw price
      ctx.fillStyle = 'white';
      ctx.font = 'bold 10px Arial';
      ctx.textAlign = 'center';
      const priceText = await formatPrice(openHouse.price);
      ctx.fillText(priceText, 20, 25);
    }

    return canvas.toDataURL();
  });

  const createInfoWindowContent = $((openHouse: OpenHouseLocation) => {
    const nextOpenHouse = openHouse.openHouseTimes
      .filter(oh => new Date(oh.date) >= new Date())
      .sort((a, b) => a.date.localeCompare(b.date))[0];

    return `
      <div style="padding: 10px; max-width: 250px;">
        <div style="font-weight: bold; color: #0A2540; margin-bottom: 5px;">
          ${formatPrice(openHouse.price)}
        </div>
        <div style="color: #333; margin-bottom: 5px;">
          ${openHouse.address}
        </div>
        <div style="color: #3A8DDE; margin-bottom: 8px;">
          ${openHouse.beds} bed • ${openHouse.baths} bath • ${openHouse.sqft.toLocaleString()} sqft
        </div>
        ${nextOpenHouse ? `
          <div style="background: #f8f9fa; padding: 8px; border-radius: 4px; margin-bottom: 8px;">
            <div style="font-weight: bold; color: #16B286; font-size: 12px;">
              Next Open House
            </div>
            <div style="font-size: 11px; color: #666;">
              ${new Date(nextOpenHouse.date).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric'
              })} • ${formatTime(nextOpenHouse.startTime)} - ${formatTime(nextOpenHouse.endTime)}
            </div>
          </div>
        ` : ''}
        <div style="display: flex; gap: 5px;">
          <button onclick="window.openHouseActions?.visit('${openHouse.id}')" 
                  style="background: #16B286; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 11px;">
            Visit
          </button>
          <button onclick="window.openHouseActions?.directions('${openHouse.address}')" 
                  style="background: #3A8DDE; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 11px;">
            Directions
          </button>
        </div>
      </div>
    `;
  });

  const formatPrice = $((price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price.toLocaleString()}`;
  });

  const formatTime = $((time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  });

  const toggleRouteMode = $(async () => {
    isRouteMode.value = !isRouteMode.value;
    selectedOpenHouses.value = [];
    
    // Update marker icons
    for (let index = 0; index < markers.value.length; index++) {
      const marker = markers.value[index];
      const openHouse = openHouses[index];
      marker.setIcon({
        url: await createCustomMarkerIcon(openHouse),
        scaledSize: new (window as any).google.maps.Size(40, 50),
        anchor: new (window as any).google.maps.Point(20, 50),
      });
    }
  });

  const selectForRoute = $(async (openHouse: OpenHouseLocation) => {
    if (!isRouteMode.value) return;

    const index = selectedOpenHouses.value.findIndex(oh => oh.id === openHouse.id);
    if (index >= 0) {
      selectedOpenHouses.value.splice(index, 1);
    } else {
      selectedOpenHouses.value.push(openHouse);
    }

    // Update marker appearance
    const markerIndex = openHouses.findIndex(oh => oh.id === openHouse.id);
    if (markerIndex >= 0) {
      const marker = markers.value[markerIndex];
      const isSelected = selectedOpenHouses.value.some(oh => oh.id === openHouse.id);
      
      marker.setIcon({
        url: await createCustomMarkerIcon(openHouse),
        scaledSize: new (window as any).google.maps.Size(isSelected ? 50 : 40, isSelected ? 60 : 50),
        anchor: new (window as any).google.maps.Point(isSelected ? 25 : 20, isSelected ? 60 : 50),
      });
    }
  });

  const createRoute = $(() => {
    if (selectedOpenHouses.value.length < 2) return;
    
    const directionsService = new (window as any).google.maps.DirectionsService();
    const directionsRenderer = new (window as any).google.maps.DirectionsRenderer();
    
    directionsRenderer.setMap(map.value);

    const waypoints = selectedOpenHouses.value.slice(1, -1).map(oh => ({
      location: { lat: oh.lat, lng: oh.lng },
      stopover: true,
    }));

    directionsService.route({
      origin: { lat: selectedOpenHouses.value[0].lat, lng: selectedOpenHouses.value[0].lng },
      destination: { lat: selectedOpenHouses.value[selectedOpenHouses.value.length - 1].lat, lng: selectedOpenHouses.value[selectedOpenHouses.value.length - 1].lng },
      waypoints: waypoints,
      travelMode: (window as any).google.maps.TravelMode.DRIVING,
      optimizeWaypoints: true,
    }, (result: any, status: any) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
        onRouteClick?.(selectedOpenHouses.value);
      }
    });
  });

  const createRoute = $(() => {
    if (selectedOpenHouses.value.length < 2) return;
    
    const directionsService = new (window as any).google.maps.DirectionsService();
    const directionsRenderer = new (window as any).google.maps.DirectionsRenderer();
    
    directionsRenderer.setMap(map.value);

    const waypoints = selectedOpenHouses.value.slice(1, -1).map(oh => ({
      location: { lat: oh.lat, lng: oh.lng },
      stopover: true,
    }));

    directionsService.route({
      origin: { lat: selectedOpenHouses.value[0].lat, lng: selectedOpenHouses.value[0].lng },
      destination: { lat: selectedOpenHouses.value[selectedOpenHouses.value.length - 1].lat, lng: selectedOpenHouses.value[selectedOpenHouses.value.length - 1].lng },
      waypoints: waypoints,
      travelMode: (window as any).google.maps.TravelMode.DRIVING,
      optimizeWaypoints: true,
    }, (result: any, status: any) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
        onRouteClick?.(selectedOpenHouses.value);
      }
    });
  });

  const clearRoute = $(() => {
    const directionsRenderer = new (window as any).google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map.value);
    directionsRenderer.setDirections({ routes: [] });
    selectedOpenHouses.value = [];
    isRouteMode.value = false;
    
    // Reset markers
    addMarkers();
  });

  return (
    <div class="open-house-map">
      <style>{`
        .open-house-map {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .map-container {
          width: 100%;
          height: 500px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .map-controls {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .map-control-btn {
          background: white;
          border: none;
          border-radius: 8px;
          padding: 10px 15px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .map-control-btn:hover {
          background: #f8f9fa;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .map-control-btn.active {
          background: #16B286;
          color: white;
        }

        .route-info {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: white;
          border-radius: 12px;
          padding: 15px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        .route-info h4 {
          margin: 0 0 10px 0;
          color: #0A2540;
          font-size: 16px;
        }

        .route-stops {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
        }

        .route-stop {
          background: #E0F2F7;
          color: #3A8DDE;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }

        .route-actions {
          display: flex;
          gap: 10px;
        }

        .btn {
          padding: 8px 16px;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 14px;
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

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .stats-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          padding: 15px 20px;
          border-radius: 12px;
          margin-bottom: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 24px;
          font-weight: 700;
          color: #16B286;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: #6a6d72;
          text-transform: uppercase;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .map-container {
            height: 400px;
          }

          .map-controls {
            top: 10px;
            right: 10px;
          }

          .map-control-btn {
            padding: 8px 12px;
            font-size: 12px;
          }

          .route-info {
            bottom: 10px;
            left: 10px;
            right: 10px;
            padding: 12px;
          }

          .stats-bar {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>

      <div class="stats-bar">
        <div class="stat-item">
          <div class="stat-number">{openHouses.length}</div>
          <div class="stat-label">Open Houses</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">
            {openHouses.filter(oh => {
              const today = new Date().toISOString().split('T')[0];
              return oh.openHouseTimes.some(time => time.date === today);
            }).length}
          </div>
          <div class="stat-label">Today</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">
            {openHouses.filter(oh => {
              const weekend = getWeekendDates();
              return oh.openHouseTimes.some(time => weekend.includes(time.date));
            }).length}
          </div>
          <div class="stat-label">This Weekend</div>
        </div>
      </div>

      <div class="map-container" ref={mapContainer}></div>

      <div class="map-controls">
        <button 
          class={`map-control-btn ${isRouteMode.value ? 'active' : ''}`}
          onClick$={toggleRouteMode}
        >
          🗺️ Route Mode
        </button>
        
        {isRouteMode.value && (
          <>
            <button 
              class="map-control-btn"
              onClick$={clearRoute}
              disabled={selectedOpenHouses.value.length === 0}
            >
              🧹 Clear Route
            </button>
          </>
        )}
      </div>

      {isRouteMode.value && selectedOpenHouses.value.length > 0 && (
        <div class="route-info">
          <h4>Route Planner ({selectedOpenHouses.value.length} stops)</h4>
          <div class="route-stops">
            {selectedOpenHouses.value.map((openHouse, index) => (
              <span key={openHouse.id} class="route-stop">
                {index + 1}. {formatPrice(openHouse.price)}
              </span>
            ))}
          </div>
          <div class="route-actions">
            <button 
              class="btn btn-primary"
              onClick$={createRoute}
              disabled={selectedOpenHouses.value.length < 2}
            >
              Create Route
            </button>
            <button 
              class="btn btn-secondary"
              onClick$={() => selectedOpenHouses.value = []}
            >
              Clear Selection
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

// Helper function to get weekend dates
function getWeekendDates(): string[] {
  const today = new Date();
  const currentDay = today.getDay();
  const daysUntilSaturday = (6 - currentDay) % 7;
  const daysUntilSunday = (7 - currentDay) % 7;
  
  const saturday = new Date(today);
  saturday.setDate(today.getDate() + daysUntilSaturday);
  
  const sunday = new Date(today);
  sunday.setDate(today.getDate() + daysUntilSunday);
  
  return [
    saturday.toISOString().split('T')[0],
    sunday.toISOString().split('T')[0]
  ];
}
