import { component$, useVisibleTask$ } from '@builder.io/qwik'
import { type DocumentHead, useLocation } from '@builder.io/qwik-city'

export default component$(() => {
  const location = useLocation()
  const neighborhood = location.params.neighborhood

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
            // Set default values for the widget
            const widget = document.querySelector('realscout-advanced-search')
            if (widget) {
              // Set default location based on neighborhood
              widget.setAttribute('default-location', `${neighborhoodName}, Las Vegas, NV`)

              // Set price filters based on neighborhood
              const priceRanges: Record<string, string> = {
                summerlin: '800000',
                henderson: '600000',
                'north-las-vegas': '400000',
                'spring-valley': '500000',
                enterprise: '700000',
              }

              const maxPrice = priceRanges[neighborhood.toLowerCase()] || '600000'
              widget.setAttribute('price-max', maxPrice)

              // Track neighborhood page view
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'neighborhood_page_view', {
                  event_category: 'neighborhood',
                  event_label: neighborhoodName,
                  value: 1,
                })
              }
            }
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

  // Format neighborhood name for display
  const formatNeighborhoodName = (name: string) => {
    return name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const neighborhoodName = formatNeighborhoodName(neighborhood)

  return (
    <section class="neighborhood-page">
      <div class="neighborhood-hero">
        <h1>{neighborhoodName} Open Houses</h1>
        <p class="neighborhood-subtitle">
          Discover the best properties in {neighborhoodName}, Las Vegas
        </p>
      </div>

      {/* Advanced Search Pre-filtered for Neighborhood */}
      <div class="neighborhood-search">
        <h3>Search Within {neighborhoodName}</h3>

        <style>{`
          .neighborhood-search realscout-advanced-search {
            --rs-as-widget-width: 100% !important;
            --rs-as-default-location: "${neighborhoodName}, Las Vegas, NV";
            --rs-as-button-text-color: #ffffff;
            --rs-as-background-color: #ffffff;
            --rs-as-button-color: rgb(35, 93, 137);
            width: 100%;
            min-height: 480px;
            z-index: 1000;
          }
          
          .neighborhood-page {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }
          
          .neighborhood-hero {
            text-align: center;
            margin-bottom: 3rem;
            padding: 2rem 0;
            background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
            color: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }
          
          .neighborhood-hero h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #ffffff;
          }
          
          .neighborhood-subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            margin: 0;
          }
          
          .neighborhood-search {
            background: #F7F9FC;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            margin-bottom: 2rem;
          }
          
          .neighborhood-search h3 {
            color: #0A2540;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            text-align: center;
          }
          
          .neighborhood-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }
          
          .info-card {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            border-left: 4px solid #3A8DDE;
          }
          
          .info-card h4 {
            color: #0A2540;
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
          
          .info-card p {
            color: #666;
            line-height: 1.6;
          }
          
          @media (max-width: 768px) {
            .neighborhood-hero h1 {
              font-size: 2rem;
            }
            
            .neighborhood-subtitle {
              font-size: 1rem;
            }
            
            .neighborhood-search {
              padding: 1rem;
            }
          }
        `}</style>

        <realscout-advanced-search
          agent-encoded-id="QWdlbnQtMjI1MDUw"
          default-location={`${neighborhoodName}, Las Vegas, NV`}
          price-max={
            neighborhood.toLowerCase() === 'summerlin'
              ? '800000'
              : neighborhood.toLowerCase() === 'henderson'
                ? '600000'
                : neighborhood.toLowerCase() === 'north-las-vegas'
                  ? '400000'
                  : neighborhood.toLowerCase() === 'spring-valley'
                    ? '500000'
                    : neighborhood.toLowerCase() === 'enterprise'
                      ? '700000'
                      : '600000'
          }
        />
      </div>

      {/* Neighborhood Information Cards */}
      <div class="neighborhood-info">
        <div class="info-card">
          <h4>About {neighborhoodName}</h4>
          <p>
            {neighborhoodName} is one of Las Vegas's premier neighborhoods, offering exceptional
            amenities, top-rated schools, and beautiful homes. This vibrant community combines the
            excitement of Las Vegas with the comfort of a residential neighborhood, making it ideal
            for families, professionals, and retirees alike.
          </p>
          <p>
            Residents enjoy convenient access to shopping centers, restaurants, parks, and
            recreational facilities. The neighborhood's well-maintained streets, diverse housing
            options, and strong sense of community make {neighborhoodName} a highly sought-after
            location for homebuyers in the Las Vegas area.
          </p>
        </div>

        <div class="info-card">
          <h4>Local Expertise</h4>
          <p>
            Dr. Jan Duffy has extensive experience helping buyers find their perfect home in{' '}
            {neighborhoodName}. With deep knowledge of the local market, neighborhood trends, and
            property values, she provides personalized guidance tailored to your specific needs and
            preferences.
          </p>
          <p>
            Whether you're looking for your first home, upgrading to a larger property, or investing
            in real estate, Dr. Duffy's expertise in {neighborhoodName} ensures you make informed
            decisions backed by comprehensive market analysis and local insights.
          </p>
        </div>

        <div class="info-card">
          <h4>Market Trends</h4>
          <p>
            Stay informed about current market conditions, pricing trends, and available inventory
            in {neighborhoodName}. The local real estate market in {neighborhoodName} reflects the
            broader Las Vegas market while maintaining its unique characteristics based on location,
            amenities, and community features.
          </p>
          <p>
            Our advanced search tools help you find properties that match your criteria, including
            price range, number of bedrooms, square footage, and special features. Dr. Duffy
            provides regular market updates and can help you understand how current trends might
            affect your buying or selling timeline.
          </p>
        </div>

        <div class="info-card">
          <h4>Open Houses in {neighborhoodName}</h4>
          <p>
            Looking for open houses this weekend in {neighborhoodName}? Browse available properties
            and schedule viewings with ease. Dr. Jan Duffy can help you navigate open house
            schedules, coordinate multiple property viewings, and provide insights on each property
            you visit.
          </p>
          <p>
            Whether you're searching for a single-family home, townhouse, or condo in{' '}
            {neighborhoodName}, our comprehensive property search tools and expert guidance make it
            easy to find your dream home in this desirable Las Vegas neighborhood.
          </p>
        </div>
      </div>
    </section>
  )
})

export const head: DocumentHead = ({ params }) => {
  const neighborhood = params.neighborhood
  const neighborhoodName = neighborhood
    .split('-')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${neighborhoodName} Open Houses - Las Vegas Real Estate | Dr. Jan Duffy`,
    meta: [
      {
        name: 'description',
        content: `Find open houses and properties in ${neighborhoodName}, Las Vegas. Expert real estate guidance from Dr. Jan Duffy. Browse available homes and get market insights.`,
      },
      {
        name: 'keywords',
        content: `${neighborhoodName} real estate, ${neighborhoodName} open houses, Las Vegas homes, Nevada properties, real estate agent, Dr. Jan Duffy, property search`,
      },
      {
        name: 'author',
        content: 'Dr. Jan Duffy',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        property: 'og:title',
        content: `${neighborhoodName} Open Houses - Las Vegas Real Estate`,
      },
      {
        property: 'og:description',
        content: `Find open houses and properties in ${neighborhoodName}, Las Vegas. Expert real estate guidance from Dr. Jan Duffy.`,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: `https://www.openhouseupdate.com/neighborhoods/${neighborhood}/`,
      },
      {
        property: 'og:site_name',
        content: 'Open House Update',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: `${neighborhoodName} Open Houses - Las Vegas Real Estate`,
      },
      {
        name: 'twitter:description',
        content: `Find open houses and properties in ${neighborhoodName}, Las Vegas. Expert real estate guidance from Dr. Jan Duffy.`,
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: `https://www.openhouseupdate.com/neighborhoods/${neighborhood}/`,
      },
    ],
  }
}
