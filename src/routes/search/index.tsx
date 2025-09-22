import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  const showFilters = useSignal(true)

  const toggleFilters = $(() => {
    showFilters.value = !showFilters.value
  })

  // Initialize RealScout widgets
  useVisibleTask$(() => {
    if (typeof window !== 'undefined') {
      // Load RealScout script if not already loaded
      if (!document.querySelector('script[src*="realscout-web-components"]')) {
        const script = document.createElement('script')
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
        script.type = 'module'
        document.head.appendChild(script)
      }

      // Wait for RealScout script to load and custom elements to be defined
      const initializeRealScout = () => {
        // Check if RealScout script is loaded
        const script = document.querySelector('script[src*="realscout-web-components"]')
        if (!script) {
          setTimeout(initializeRealScout, 500)
          return
        }

        // Wait for custom elements to be defined
        const checkElements = () => {
          if (
            customElements.get('realscout-advanced-search') &&
            customElements.get('realscout-office-listings')
          ) {
            return
          }
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

        .results realscout-office-listings {
          --rs-listing-divider-color: #0e64c8;
          width: 100%;
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
        }
      `}</style>

      <div class="search-header">
        <div class="search-header-content">
          <h1 class="search-title">Property Search Results</h1>
          <button type="button" class="filter-toggle" onClick$={toggleFilters}>
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
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="NEWEST"
            listing-status="For Sale"
            property-types=",SFR"
            price-min="500000"
            price-max="600000"
          />
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
