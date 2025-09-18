import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import OpenHouseMap from '~/components/open-houses/OpenHouseMap';

export default component$(() => {
  return (
    <div class="map-page">
      <style>{`
        .map-page {
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8f9fa;
        }

        .map-header {
          background: white;
          padding: 1rem 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        .map-header h1 {
          color: #0A2540;
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .map-header p {
          color: #6a6d72;
          margin: 0.5rem 0 0 0;
          font-size: 0.9rem;
        }

        .map-container {
          flex: 1;
          padding: 1rem;
          overflow: hidden;
        }

        .back-link {
          color: #3A8DDE;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: #16B286;
        }

        @media (max-width: 768px) {
          .map-header {
            padding: 1rem;
          }

          .map-header h1 {
            font-size: 1.5rem;
          }

          .map-container {
            padding: 0.5rem;
          }
        }
      `}</style>

      <div class="map-header">
        <a href="/" class="back-link">
          ← Back to Home
        </a>
        <h1>🗺️ Interactive Open House Map</h1>
        <p>Click on markers to see details, create custom routes, and plan your visits</p>
      </div>

      <div class="map-container">
        <OpenHouseMap 
          openHouses={[
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
                  date: new Date().toISOString().split('T')[0],
                  startTime: '10:00',
                  endTime: '14:00'
                }
              ],
              agent: {
                name: 'Sarah Johnson',
                phone: '(702) 555-0123',
                email: 'sarah@example.com',
                photo: '/api/placeholder/100/100'
              },
              neighborhood: 'Summerlin'
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
                  date: new Date().toISOString().split('T')[0],
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
              neighborhood: 'Henderson'
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
                  date: new Date().toISOString().split('T')[0],
                  startTime: '11:00',
                  endTime: '15:00'
                }
              ],
              agent: {
                name: 'Lisa Rodriguez',
                phone: '(702) 555-0789',
                email: 'lisa@example.com',
                photo: '/api/placeholder/100/100'
              },
              neighborhood: 'Green Valley'
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
                  date: new Date().toISOString().split('T')[0],
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
              neighborhood: 'Anthem'
            }
          ]}
        />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Interactive Open House Map | Las Vegas',
  meta: [
    {
      name: 'description',
      content: 'Interactive map of all open houses in Las Vegas. Create custom routes, view live listings, and plan your weekend house hunting tour.',
    },
  ],
};
