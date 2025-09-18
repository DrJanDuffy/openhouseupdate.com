import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import WeekendPlanner from '~/components/discovery/WeekendPlanner';
import OpenHouseCard from '~/components/open-houses/OpenHouseCard';

export default component$(() => {
  // Mock data for this weekend's open houses
  const weekendOpenHouses = [
    {
      id: '1',
      address: '1234 Canyon Ridge Dr, Las Vegas, NV 89135',
      price: 850000,
      beds: 4,
      baths: 3,
      sqft: 2800,
      photos: ['/api/placeholder/400/300'],
      lat: 36.1699,
      lng: -115.1398,
      openHouseTimes: [
        {
          date: getWeekendDate('saturday'),
          startTime: '10:00',
          endTime: '14:00'
        },
        {
          date: getWeekendDate('sunday'),
          startTime: '11:00',
          endTime: '15:00'
        }
      ],
      agent: {
        name: 'Sarah Johnson',
        phone: '(702) 555-0123',
        email: 'sarah@example.com',
        photo: '/api/placeholder/100/100'
      },
      features: ['Pool', 'Mountain View', 'Updated Kitchen', '3-Car Garage'],
      neighborhood: 'Summerlin',
      distance: 2.3,
      estimatedVisitTime: 45
    },
    {
      id: '2',
      address: '5678 Mountain View Ave, Henderson, NV 89012',
      price: 650000,
      beds: 3,
      baths: 2.5,
      sqft: 2200,
      photos: ['/api/placeholder/400/300'],
      lat: 36.0395,
      lng: -114.9817,
      openHouseTimes: [
        {
          date: getWeekendDate('saturday'),
          startTime: '13:00',
          endTime: '16:00'
        }
      ],
      agent: {
        name: 'Mike Chen',
        phone: '(702) 555-0456',
        email: 'mike@example.com',
        photo: '/api/placeholder/100/100'
      },
      features: ['New Construction', 'Smart Home', 'Energy Efficient'],
      neighborhood: 'Henderson',
      distance: 5.1,
      estimatedVisitTime: 40
    },
    {
      id: '3',
      address: '9876 Green Valley Pkwy, Henderson, NV 89014',
      price: 750000,
      beds: 5,
      baths: 3.5,
      sqft: 3200,
      photos: ['/api/placeholder/400/300'],
      lat: 36.0295,
      lng: -114.9717,
      openHouseTimes: [
        {
          date: getWeekendDate('saturday'),
          startTime: '11:00',
          endTime: '15:00'
        },
        {
          date: getWeekendDate('sunday'),
          startTime: '10:00',
          endTime: '14:00'
        }
      ],
      agent: {
        name: 'Lisa Rodriguez',
        phone: '(702) 555-0789',
        email: 'lisa@example.com',
        photo: '/api/placeholder/100/100'
      },
      features: ['Large Lot', 'Gourmet Kitchen', 'Master Suite', 'Guest House'],
      neighborhood: 'Green Valley',
      distance: 4.7,
      estimatedVisitTime: 60
    },
    {
      id: '4',
      address: '2468 Anthem Hills Dr, Henderson, NV 89052',
      price: 950000,
      beds: 4,
      baths: 3,
      sqft: 2900,
      photos: ['/api/placeholder/400/300'],
      lat: 36.0195,
      lng: -114.9617,
      openHouseTimes: [
        {
          date: getWeekendDate('saturday'),
          startTime: '12:00',
          endTime: '16:00'
        }
      ],
      agent: {
        name: 'David Thompson',
        phone: '(702) 555-0321',
        email: 'david@example.com',
        photo: '/api/placeholder/100/100'
      },
      features: ['Golf Course View', 'Wine Cellar', 'Outdoor Kitchen', 'Home Office'],
      neighborhood: 'Anthem',
      distance: 6.2,
      estimatedVisitTime: 55
    },
    {
      id: '5',
      address: '1357 Southern Highlands Blvd, Las Vegas, NV 89141',
      price: 720000,
      beds: 3,
      baths: 2,
      sqft: 2400,
      photos: ['/api/placeholder/400/300'],
      lat: 36.0095,
      lng: -115.2517,
      openHouseTimes: [
        {
          date: getWeekendDate('sunday'),
          startTime: '09:00',
          endTime: '13:00'
        }
      ],
      agent: {
        name: 'Sarah Johnson',
        phone: '(702) 555-0123',
        email: 'sarah@example.com',
        photo: '/api/placeholder/100/100'
      },
      features: ['Corner Lot', 'Updated Bathrooms', 'Covered Patio'],
      neighborhood: 'Southern Highlands',
      distance: 8.1,
      estimatedVisitTime: 35
    },
    {
      id: '6',
      address: '8642 Inspirada Way, Henderson, NV 89044',
      price: 580000,
      beds: 3,
      baths: 2,
      sqft: 2100,
      photos: ['/api/placeholder/400/300'],
      lat: 36.0595,
      lng: -114.9417,
      openHouseTimes: [
        {
          date: getWeekendDate('saturday'),
          startTime: '14:00',
          endTime: '18:00'
        },
        {
          date: getWeekendDate('sunday'),
          startTime: '13:00',
          endTime: '17:00'
        }
      ],
      agent: {
        name: 'Mike Chen',
        phone: '(702) 555-0456',
        email: 'mike@example.com',
        photo: '/api/placeholder/100/100'
      },
      features: ['Modern Design', 'Open Floor Plan', 'High Ceilings', 'Smart Features'],
      neighborhood: 'Inspirada',
      distance: 7.3,
      estimatedVisitTime: 40
    }
  ];

  return (
    <div class="weekend-page">
      <style>{`
        .weekend-page {
          background: #f8f9fa;
          min-height: 100vh;
          padding: 2rem 0;
        }

        .page-header {
          background: white;
          padding: 3rem 2rem;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .page-header h1 {
          color: #0A2540;
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .page-header p {
          color: #6a6d72;
          font-size: 1.2rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .weekend-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #16B286;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #6a6d72;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .back-link {
          color: #3A8DDE;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: #16B286;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          text-align: center;
        }

        .houses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .quick-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 1rem 2rem;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
        }

        .action-btn-primary {
          background: #16B286;
          color: white;
        }

        .action-btn-primary:hover {
          background: #14a078;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(22, 178, 134, 0.3);
        }

        .action-btn-secondary {
          background: #3A8DDE;
          color: white;
        }

        .action-btn-secondary:hover {
          background: #2e7bc7;
          transform: translateY(-2px);
        }

        .action-btn-outline {
          background: transparent;
          color: #0A2540;
          border: 2px solid #0A2540;
        }

        .action-btn-outline:hover {
          background: #0A2540;
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .weekend-page {
            padding: 1rem 0;
          }

          .page-header {
            padding: 2rem 1rem;
          }

          .page-header h1 {
            font-size: 2rem;
          }

          .page-header p {
            font-size: 1rem;
          }

          .weekend-stats {
            gap: 2rem;
          }

          .container {
            padding: 0 1rem;
          }

          .houses-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .quick-actions {
            flex-direction: column;
            align-items: center;
          }

          .action-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>

      <div class="page-header">
        <a href="/" class="back-link">
          ← Back to Home
        </a>
        <h1>📅 This Weekend's Open Houses</h1>
        <p>
          Plan your perfect weekend house hunting tour with our interactive planner 
          and comprehensive listings for Saturday and Sunday.
        </p>

        <div class="weekend-stats">
          <div class="stat-item">
            <div class="stat-number">{weekendOpenHouses.length}</div>
            <div class="stat-label">Total Houses</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              {weekendOpenHouses.filter(h => 
                h.openHouseTimes.some(t => t.date === getWeekendDate('saturday'))
              ).length}
            </div>
            <div class="stat-label">Saturday</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              {weekendOpenHouses.filter(h => 
                h.openHouseTimes.some(t => t.date === getWeekendDate('sunday'))
              ).length}
            </div>
            <div class="stat-label">Sunday</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              {Math.round(weekendOpenHouses.reduce((sum, h) => sum + h.price, 0) / weekendOpenHouses.length / 1000)}K
            </div>
            <div class="stat-label">Avg Price</div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="quick-actions">
          <a href="/map" class="action-btn action-btn-primary">
            🗺️ View on Map
          </a>
          <a href="#planner" class="action-btn action-btn-secondary">
            📋 Plan Your Route
          </a>
          <button class="action-btn action-btn-outline">
            📱 Send to Phone
          </button>
        </div>

        <h2 class="section-title">🏠 All Weekend Open Houses</h2>
        
        <div class="houses-grid">
          {weekendOpenHouses.map((house) => (
            <OpenHouseCard
              key={house.id}
              openHouse={house}
              onFavorite={(id) => console.log('Favorited:', id)}
              onVisit={(id) => console.log('Visit:', id)}
              onDirections={(address) => console.log('Directions to:', address)}
            />
          ))}
        </div>

        <div id="planner">
          <WeekendPlanner openHouses={weekendOpenHouses} />
        </div>
      </div>
    </div>
  );
});

// Helper function to get weekend dates
function getWeekendDate(day: 'saturday' | 'sunday'): string {
  const today = new Date();
  const currentDay = today.getDay();
  const daysUntilSaturday = (6 - currentDay) % 7;
  const daysUntilSunday = (7 - currentDay) % 7;
  
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + (day === 'saturday' ? daysUntilSaturday : daysUntilSunday));
  
  return targetDate.toISOString().split('T')[0];
}

export const head: DocumentHead = {
  title: 'This Weekend\'s Open Houses | Las Vegas',
  meta: [
    {
      name: 'description',
      content: 'Complete guide to this weekend\'s open houses in Las Vegas. Plan your Saturday and Sunday house hunting tour with our interactive planner.',
    },
  ],
};
