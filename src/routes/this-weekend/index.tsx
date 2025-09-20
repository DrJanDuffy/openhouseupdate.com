import { component$, useVisibleTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  // Initialize RealScout widget
  useVisibleTask$(() => {
    if (typeof window !== 'undefined') {
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
          if (customElements.get('realscout-advanced-search')) {
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
    <div class="weekend-page">
      <style>{`
        .weekend-page {
          min-height: 100vh;
          background: #f8f9fa;
        }

        .weekend-header {
          background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
          color: white;
          padding: 3rem 2rem;
          text-align: center;
        }

        .weekend-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .weekend-subtitle {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .weekend-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
        }

        .search-section {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .search-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #0A2540;
          margin-bottom: 1rem;
          text-align: center;
        }

        .search-description {
          color: #666;
          text-align: center;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .widget-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }

        realscout-advanced-search {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: rgb(35, 93, 137);
          --rs-as-widget-width: 500px !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          overflow: hidden;
        }

        .features-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #0A2540;
          margin-bottom: 1rem;
        }

        .feature-description {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .weekend-title {
            font-size: 2.2rem;
          }
          
          .weekend-subtitle {
            font-size: 1.1rem;
          }
          
          realscout-advanced-search {
            --rs-as-widget-width: 90vw !important;
          }
        }
      `}</style>

      <div class="weekend-header">
        <h1 class="weekend-title">This Weekend's Open Houses</h1>
        <p class="weekend-subtitle">Find the perfect properties to visit this weekend</p>
      </div>

      <div class="weekend-content">
        <div class="search-section">
          <h2 class="search-title">Search Properties</h2>
          <p class="search-description">
            Use our advanced search to find properties available this weekend. Filter by location,
            price, bedrooms, and more to find your perfect home.
          </p>

          <div class="widget-container">
            <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw" />
          </div>
        </div>

        <div class="features-section">
          <div class="feature-card">
            <div class="feature-icon">🏠</div>
            <h3 class="feature-title">Comprehensive Search</h3>
            <p class="feature-description">
              Search thousands of properties with advanced filters including price range, bedrooms,
              bathrooms, and location preferences.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📍</div>
            <h3 class="feature-title">Location-Based</h3>
            <p class="feature-description">
              Find properties in your preferred neighborhoods with detailed location information and
              proximity to amenities.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📅</div>
            <h3 class="feature-title">Weekend Focused</h3>
            <p class="feature-description">
              Discover properties with open houses scheduled for this weekend, making it easy to
              plan your property visits.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'This Weekend Open Houses - Real Estate Search',
  meta: [
    {
      name: 'description',
      content:
        'Find properties with open houses this weekend. Search thousands of homes with our advanced real estate search.',
    },
    {
      property: 'og:title',
      content: 'This Weekend Open Houses - Real Estate Search',
    },
    {
      property: 'og:description',
      content:
        'Find properties with open houses this weekend. Search thousands of homes with our advanced real estate search.',
    },
  ],
}
