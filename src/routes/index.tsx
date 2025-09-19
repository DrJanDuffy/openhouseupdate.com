import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RealScoutMap from '~/components/realscout/RealScoutMap';

export default component$(() => {
  const showAdvanced = useSignal(true);

  const showSimpleSearch = $(() => {
    showAdvanced.value = false;
  });

  const showAdvancedSearch = $(() => {
    showAdvanced.value = true;
  });

  return (
    <>
      {/* RealScout Search Section */}
      <section class="realscout-section">
        <style>{`
          .realscout-section {
            background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .realscout-section::before {
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
            margin-bottom: 3rem;
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

          .search-toggle {
            position: relative;
            z-index: 1;
            margin-bottom: 2rem;
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.1);
            padding: 0.5rem;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }

          .search-toggle button {
            background: transparent;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            flex: 1;
          }

          .search-toggle button.active {
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .search-toggle button:hover {
            background: rgba(255, 255, 255, 0.15);
          }

          .widget-container {
            position: relative;
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 400px;
          }

          .simple-search {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            width: 100%;
          }

          .simple-search h3 {
            color: #0A2540;
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
            font-weight: 700;
          }

          .search-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .search-form input {
            padding: 0.75rem 1rem;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.2s;
          }

          .search-form input:focus {
            outline: none;
            border-color: #3A8DDE;
          }

          .search-form button {
            background: #3A8DDE;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s;
          }

          .search-form button:hover {
            background: #2a7bc7;
          }

          realscout-advanced-search {
            --rs-as-button-text-color: #ffffff;
            --rs-as-background-color: #ffffff;
            --rs-as-button-color: rgb(35, 93, 137);
            --rs-as-widget-width: 800px !important;
            --rs-as-border-radius: 12px;
            --rs-as-box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            overflow: hidden;
          }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem;
            }
            
            .hero-subtitle {
              font-size: 1.2rem;
            }
            
            .search-toggle {
              max-width: 90vw;
            }
            
            realscout-advanced-search {
              --rs-as-widget-width: 90vw !important;
            }
            
            .simple-search {
              max-width: 90vw;
            }
          }
        `}</style>

        <div class="hero-content">
          <h1 class="hero-title">Find Your Dream Vegas Home</h1>
          <p class="hero-subtitle">
            Search thousands of properties with our advanced real estate search
          </p>
        </div>

        <div class="search-toggle">
          <button 
            class={showAdvanced.value ? '' : 'active'}
            onClick$={showSimpleSearch}
          >
            Quick Search
          </button>
          <button 
            class={showAdvanced.value ? 'active' : ''}
            onClick$={showAdvancedSearch}
          >
            Advanced Search
          </button>
        </div>

        <div class="widget-container">
          {showAdvanced.value ? (
            <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
          ) : (
            <div class="simple-search">
              <h3>Quick Property Search</h3>
              <form class="search-form">
                <input 
                  type="text" 
                  placeholder="Enter city, neighborhood, or address"
                  name="location"
                />
                <input 
                  type="text" 
                  placeholder="Min Price"
                  name="minPrice"
                />
                <input 
                  type="text" 
                  placeholder="Max Price"
                  name="maxPrice"
                />
                <button type="submit">Search Properties</button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section class="map-section">
        <style>{`
          .map-section {
            padding: 4rem 2rem;
            background: #f8f9fa;
          }

          .map-section-content {
            max-width: 1200px;
            margin: 0 auto;
          }

          .map-section-title {
            text-align: center;
            margin-bottom: 3rem;
          }

          .map-section-title h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #0A2540;
            margin-bottom: 1rem;
          }

          .map-section-title p {
            font-size: 1.2rem;
            color: #666;
            max-width: 600px;
            margin: 0 auto;
          }

          .map-actions {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
          }

          .map-action-btn {
            background: #3A8DDE;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            transition: background-color 0.2s;
          }

          .map-action-btn:hover {
            background: #2a7bc7;
          }

          .map-action-btn.secondary {
            background: white;
            color: #0A2540;
            border: 2px solid #3A8DDE;
          }

          .map-action-btn.secondary:hover {
            background: #f8f9fa;
          }

          @media (max-width: 768px) {
            .map-actions {
              flex-direction: column;
              align-items: center;
            }
            
            .map-action-btn {
              width: 200px;
            }
          }
        `}</style>

        <div class="map-section-content">
          <div class="map-section-title">
            <h2>Explore Properties on the Map</h2>
            <p>
              View all available properties in Las Vegas on our interactive map. 
              Find the perfect location for your next home.
            </p>
          </div>

          <RealScoutMap 
            geoType="city" 
            geoId="3240000" 
            height="500px" 
            width="100%"
          />

          <div class="map-actions">
            <a href="/map" class="map-action-btn">
              View Full Map
            </a>
            <a href="/this-weekend" class="map-action-btn secondary">
              This Weekend's Open Houses
            </a>
          </div>
        </div>
      </section>

    </>
  );
});

export const head: DocumentHead = {
  title: 'Real Estate Search - Find Your Dream Home',
  meta: [
    {
      name: 'description',
      content: 'Search thousands of properties with our advanced real estate search. Find your perfect home today.',
    },
    {
      property: 'og:title',
      content: 'Real Estate Search - Find Your Dream Home',
    },
    {
      property: 'og:description',
      content: 'Search thousands of properties with our advanced real estate search. Find your perfect home today.',
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
      content: 'Real Estate Search - Find Your Dream Home',
    },
    {
      name: 'twitter:description',
      content: 'Search thousands of properties with our advanced real estate search. Find your perfect home today.',
    },
  ],
};