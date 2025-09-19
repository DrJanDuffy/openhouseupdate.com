import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  const showFilters = useSignal(true)
  const resultsCount = useSignal(12) // Sample results count

  const toggleFilters = $(() => {
    showFilters.value = !showFilters.value
  })

  // Initialize RealScout widget
  useVisibleTask$(() => {
    if (typeof window !== 'undefined') {
      // Wait for RealScout script to load and custom elements to be defined
      const initializeRealScout = () => {
        // Check if RealScout script is loaded
        const script = document.querySelector('script[src*="realscout-web-components"]')
        if (!script) {
          console.log('RealScout script not found, retrying...')
          setTimeout(initializeRealScout, 500)
          return
        }

        // Wait for custom elements to be defined
        const checkElements = () => {
          if (customElements.get('realscout-advanced-search')) {
            console.log('RealScout advanced search widget ready')
            return
          }
          console.log('Waiting for RealScout advanced search widget...')
          setTimeout(checkElements, 200)
        }

        checkElements()
      }

      // Start initialization
      initializeRealScout()
    }
  })

  return (
    <div class="search-page">
      <style>{`
        .search-page {
          min-height: 100vh;
          background: #f8f9fa;
        }

        .search-header {
          background: white;
          padding: 1rem 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid #e2e8f0;
        }

        .search-header-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .search-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #0A2540;
        }

        .filter-toggle {
          background: #3A8DDE;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          display: none;
          align-items: center;
          gap: 0.5rem;
        }

        .filter-toggle:hover {
          background: #2a7bc7;
        }

        .search-results-layout {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 2rem;
          min-height: calc(100vh - 80px);
        }

        .sidebar {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          height: fit-content;
          position: sticky;
          top: 2rem;
        }

        .sidebar h3 {
          color: #0A2540;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .sidebar realscout-advanced-search {
          --rs-as-widget-width: 300px !important;
          --rs-as-compact-mode: true;
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: rgb(35, 93, 137);
          --rs-as-border-radius: 8px;
          --rs-as-box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          margin-bottom: 2rem;
          width: 100%;
          min-height: 400px;
          z-index: 1000;
        }

        .quick-filters {
          border-top: 1px solid #e2e8f0;
          padding-top: 1.5rem;
        }

        .quick-filters h4 {
          color: #0A2540;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .quick-filters label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          cursor: pointer;
          color: #4a5568;
          font-size: 0.9rem;
        }

        .quick-filters input[type="checkbox"] {
          width: 16px;
          height: 16px;
          accent-color: #3A8DDE;
        }

        .results {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .results-count {
          color: #0A2540;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .sort-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .sort-controls label {
          color: #4a5568;
          font-size: 0.9rem;
        }

        .sort-controls select {
          padding: 0.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          background: white;
          color: #0A2540;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .result-card {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          transition: box-shadow 0.2s;
        }

        .result-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .result-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          font-size: 0.9rem;
        }

        .result-content {
          padding: 1rem;
        }

        .result-price {
          font-size: 1.3rem;
          font-weight: 700;
          color: #0A2540;
          margin-bottom: 0.5rem;
        }

        .result-address {
          color: #4a5568;
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }

        .result-details {
          display: flex;
          gap: 1rem;
          font-size: 0.8rem;
          color: #64748b;
        }

        .result-detail {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .no-results {
          text-align: center;
          padding: 3rem;
          color: #64748b;
        }

        .no-results h3 {
          color: #0A2540;
          margin-bottom: 1rem;
        }

        .no-results p {
          margin-bottom: 2rem;
        }

        .search-again-btn {
          background: #3A8DDE;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
        }

        .search-again-btn:hover {
          background: #2a7bc7;
        }

        .load-more-section {
          text-align: center;
          padding: 2rem 0;
        }

        .load-more-btn {
          background: #3A8DDE;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          transition: background-color 0.2s;
        }

        .load-more-btn:hover {
          background: #2a7bc7;
        }

        @media (max-width: 768px) {
          .search-results-layout {
            grid-template-columns: 1fr;
            padding: 1rem;
            gap: 1rem;
          }

          .filter-toggle {
            display: flex;
          }

          .sidebar {
            display: ${showFilters.value ? 'block' : 'none'};
            position: static;
            margin-bottom: 1rem;
          }

          .sidebar realscout-advanced-search {
            --rs-as-widget-width: 100% !important;
          }

          .results-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .sort-controls {
            width: 100%;
            justify-content: space-between;
          }
        }

        @media (max-width: 480px) {
          .search-header {
            padding: 1rem;
          }

          .search-header-content {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .results {
            padding: 1rem;
          }

          .result-details {
            flex-wrap: wrap;
            gap: 0.5rem;
          }
        }
      `}</style>

      <div class="search-header">
        <div class="search-header-content">
          <h1 class="search-title">Property Search Results</h1>
          <button class="filter-toggle" onClick$={toggleFilters}>
            <span>🔍</span>
            {showFilters.value ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
      </div>

      <div class="search-results-layout">
        <aside class="sidebar">
          <h3>Refine Your Search</h3>

          <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw" />

          <div class="quick-filters">
            <h4>Quick Filters</h4>
            <label>
              <input type="checkbox" />
              Open House This Weekend
            </label>
            <label>
              <input type="checkbox" />
              Price Reduced
            </label>
            <label>
              <input type="checkbox" />
              New Listing
            </label>
            <label>
              <input type="checkbox" />
              Virtual Tour Available
            </label>
            <label>
              <input type="checkbox" />
              Pet Friendly
            </label>
          </div>
        </aside>

        <main class="results">
          <div class="results-header">
            <div class="results-count">Showing {resultsCount.value} properties</div>
            <div class="sort-controls">
              <label>Sort by:</label>
              <select title="Sort properties by">
                <option value="price-desc">Price: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="newest">Newest First</option>
                <option value="sqft-desc">Largest First</option>
                <option value="sqft-asc">Smallest First</option>
              </select>
            </div>
          </div>

          <div class="results-grid">
            {/* Sample Property Results */}
            <div class="result-card">
              <div class="result-image">🏠 Property Image</div>
              <div class="result-content">
                <div class="result-price">$485,000</div>
                <div class="result-address">1234 Summerlin Pkwy, Las Vegas, NV 89135</div>
                <div class="result-details">
                  <span class="result-detail">🛏️ 3 bed</span>
                  <span class="result-detail">🛁 2 bath</span>
                  <span class="result-detail">📐 1,850 sqft</span>
                </div>
              </div>
            </div>

            <div class="result-card">
              <div class="result-image">🏠 Property Image</div>
              <div class="result-content">
                <div class="result-price">$625,000</div>
                <div class="result-address">5678 Red Rock Canyon Dr, Las Vegas, NV 89135</div>
                <div class="result-details">
                  <span class="result-detail">🛏️ 4 bed</span>
                  <span class="result-detail">🛁 3 bath</span>
                  <span class="result-detail">📐 2,200 sqft</span>
                </div>
              </div>
            </div>

            <div class="result-card">
              <div class="result-image">🏠 Property Image</div>
              <div class="result-content">
                <div class="result-price">$395,000</div>
                <div class="result-address">9012 Charleston Blvd, Las Vegas, NV 89117</div>
                <div class="result-details">
                  <span class="result-detail">🛏️ 2 bed</span>
                  <span class="result-detail">🛁 2 bath</span>
                  <span class="result-detail">📐 1,400 sqft</span>
                </div>
              </div>
            </div>

            <div class="result-card">
              <div class="result-image">🏠 Property Image</div>
              <div class="result-content">
                <div class="result-price">$750,000</div>
                <div class="result-address">3456 Spanish Trail Dr, Las Vegas, NV 89135</div>
                <div class="result-details">
                  <span class="result-detail">🛏️ 5 bed</span>
                  <span class="result-detail">🛁 4 bath</span>
                  <span class="result-detail">📐 3,100 sqft</span>
                </div>
              </div>
            </div>

            <div class="result-card">
              <div class="result-image">🏠 Property Image</div>
              <div class="result-content">
                <div class="result-price">$425,000</div>
                <div class="result-address">7890 Desert Inn Rd, Las Vegas, NV 89117</div>
                <div class="result-details">
                  <span class="result-detail">🛏️ 3 bed</span>
                  <span class="result-detail">🛁 2 bath</span>
                  <span class="result-detail">📐 1,650 sqft</span>
                </div>
              </div>
            </div>

            <div class="result-card">
              <div class="result-image">🏠 Property Image</div>
              <div class="result-content">
                <div class="result-price">$550,000</div>
                <div class="result-address">2468 Sahara Ave, Las Vegas, NV 89102</div>
                <div class="result-details">
                  <span class="result-detail">🛏️ 4 bed</span>
                  <span class="result-detail">🛁 3 bath</span>
                  <span class="result-detail">📐 2,000 sqft</span>
                </div>
              </div>
            </div>
          </div>

          <div class="load-more-section">
            <button class="load-more-btn">Load More Properties</button>
          </div>
        </main>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Property Search Results - Real Estate Search',
  meta: [
    {
      name: 'description',
      content:
        'View and filter property search results. Find your perfect home with our advanced real estate search.',
    },
    {
      property: 'og:title',
      content: 'Property Search Results - Real Estate Search',
    },
    {
      property: 'og:description',
      content:
        'View and filter property search results. Find your perfect home with our advanced real estate search.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
}
