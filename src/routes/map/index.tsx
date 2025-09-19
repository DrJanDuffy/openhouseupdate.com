import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import RealScoutMap from '~/components/realscout/RealScoutMap'

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
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .map-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #0A2540;
        }

        .back-btn {
          background: #3A8DDE;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .back-btn:hover {
          background: #2a7bc7;
        }

        .map-container {
          flex: 1;
          padding: 2rem;
          background: #f8f9fa;
        }

        .map-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .map-title-section {
          text-align: center;
          margin-bottom: 2rem;
        }

        .map-title-section h2 {
          font-size: 2rem;
          color: #0A2540;
          margin-bottom: 0.5rem;
        }

        .map-title-section p {
          color: #666;
          font-size: 1.1rem;
        }
      `}</style>

      <div class="map-header">
        <h1 class="map-title">Property Map</h1>
        <a href="/" class="back-btn">
          ← Back to Search
        </a>
      </div>

      <div class="map-container">
        <div class="map-wrapper">
          <div class="map-title-section">
            <h2>Interactive Property Map</h2>
            <p>Explore properties in Las Vegas with our interactive map powered by RealScout</p>
          </div>

          <RealScoutMap geoType="city" geoId="3240000" height="600px" width="100%" />
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Property Map - Real Estate Search',
  meta: [
    {
      name: 'description',
      content:
        'View properties on an interactive map. Use our advanced search to find your perfect home.',
    },
  ],
}
