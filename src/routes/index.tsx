import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import OpenHouseMap from '~/components/open-houses/OpenHouseMap';
import WeekendPlanner from '~/components/discovery/WeekendPlanner';
import LiveOpenHouses from '~/components/discovery/LiveOpenHouses';
import OpenHouseFilters from '~/components/filters/OpenHouseFilters';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero-section">
        <style>{`
          .hero-section {
            background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.05"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.05"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
          }

          .hero-content {
            position: relative;
            z-index: 1;
            max-width: 1200px;
            margin: 0 auto;
          }

          .hero-title {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            line-height: 1.1;
          }

          .hero-subtitle {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            font-weight: 300;
          }

          .hero-stats {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
          }

          .hero-stat {
            text-align: center;
          }

          .hero-stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: #16B286;
          }

          .hero-stat-label {
            font-size: 1rem;
            opacity: 0.8;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .hero-cta {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          .cta-btn {
            padding: 1rem 2rem;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }

          .cta-btn-primary {
            background: #16B286;
            color: white;
          }

          .cta-btn-primary:hover {
            background: #14a078;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(22, 178, 134, 0.3);
          }

          .cta-btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
          }

          .cta-btn-secondary:hover {
            background: white;
            color: #0A2540;
            transform: translateY(-2px);
          }

          @media (max-width: 768px) {
            .hero-section {
              padding: 3rem 1rem;
            }

            .hero-title {
              font-size: 2.5rem;
            }

            .hero-subtitle {
              font-size: 1.2rem;
            }

            .hero-stats {
              gap: 2rem;
            }

            .hero-stat-number {
              font-size: 2rem;
            }

            .hero-cta {
              flex-direction: column;
              align-items: center;
            }

            .cta-btn {
              width: 100%;
              max-width: 300px;
              justify-content: center;
            }
          }
        `}</style>

        <div class="hero-content">
          <h1 class="hero-title">
            🏠 Las Vegas Open Houses
              <br />
            This Weekend
          </h1>
          <p class="hero-subtitle">
            Discover the perfect home with live open house listings, 
            interactive maps, and weekend tour planning
          </p>

          <div class="hero-stats">
            <div class="hero-stat">
              <div class="hero-stat-number">127</div>
              <div class="hero-stat-label">Open Houses Today</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-number">89</div>
              <div class="hero-stat-label">This Weekend</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-number">23</div>
              <div class="hero-stat-label">Live Now</div>
            </div>
          </div>

          <div class="hero-cta">
            <a href="/map" class="cta-btn cta-btn-primary">
              🗺️ View Interactive Map
            </a>
            <a href="/this-weekend" class="cta-btn cta-btn-secondary">
              📅 Plan Weekend Tour
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div class="container container-center container-spacing-xl">
        <OpenHouseFilters 
          neighborhoods={[
            'Summerlin', 'Henderson', 'Green Valley', 'Anthem', 
            'Southern Highlands', 'Inspirada', 'MacDonald Ranch', 'Seven Hills'
          ]}
          agents={[
            { id: 'agent1', name: 'Sarah Johnson' },
            { id: 'agent2', name: 'Mike Chen' },
            { id: 'agent3', name: 'Lisa Rodriguez' },
            { id: 'agent4', name: 'David Thompson' }
          ]}
        />

        <LiveOpenHouses 
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
              neighborhood: 'Summerlin',
              status: 'active',
              visitorCount: 8
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
              neighborhood: 'Henderson',
              status: 'starting'
            }
          ]}
        />

        <WeekendPlanner 
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
                  date: getWeekendDate('saturday'),
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
              neighborhood: 'Summerlin',
              estimatedVisitTime: 45
            }
          ]}
        />

        <div class="map-section">
          <style>{`
            .map-section {
              background: white;
              border-radius: 16px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              padding: 2rem;
              margin-bottom: 2rem;
            }

            .map-section h2 {
              color: #0A2540;
              font-size: 2rem;
              font-weight: 700;
              margin-bottom: 1rem;
              text-align: center;
            }

            .map-section p {
              color: #6a6d72;
              text-align: center;
              margin-bottom: 2rem;
            }
          `}</style>

          <h2>🗺️ Interactive Open House Map</h2>
          <p>Click on markers to see details, create custom routes, and plan your visits</p>
          
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
              }
            ]}
          />
        </div>
      </div>
    </>
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
  title: 'Las Vegas Open Houses This Weekend | OpenHouseUpdate.com',
  meta: [
    {
      name: 'description',
      content: 'Find live open houses in Las Vegas this weekend. Interactive maps, weekend tour planning, and real-time updates for Summerlin, Henderson, and all Vegas neighborhoods.',
    },
    {
      name: 'keywords',
      content: 'Las Vegas open houses, weekend open houses, Summerlin homes, Henderson real estate, Vegas house hunting, open house map',
    },
    {
      property: 'og:title',
      content: 'Las Vegas Open Houses This Weekend | OpenHouseUpdate.com',
    },
    {
      property: 'og:description',
      content: 'Find live open houses in Las Vegas this weekend. Interactive maps, weekend tour planning, and real-time updates.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Las Vegas Open Houses This Weekend',
    },
    {
      name: 'twitter:description',
      content: 'Find live open houses in Las Vegas this weekend. Interactive maps and weekend tour planning.',
    },
  ],
};
