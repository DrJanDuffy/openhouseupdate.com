import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

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
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
          color: white;
          text-align: center;
          padding: 2rem;
        }

        .map-placeholder {
          max-width: 600px;
        }

        .map-placeholder h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .map-placeholder p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .search-btn {
          background: white;
          color: #0A2540;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s;
        }

        .search-btn:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <div class="map-header">
        <h1 class="map-title">Property Map</h1>
        <a href="/" class="back-btn">
          ← Back to Search
        </a>
      </div>

      <div class="map-container">
        <div class="map-placeholder">
          <h2>Interactive Property Map</h2>
          <p>
            Use our advanced search to find properties, then view them on an interactive map.
            The map feature is integrated with our RealScout search widget.
          </p>
          <a href="/" class="search-btn">
            Start Your Search
          </a>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Property Map - Real Estate Search',
  meta: [
    {
      name: 'description',
      content: 'View properties on an interactive map. Use our advanced search to find your perfect home.',
    },
  ],
};