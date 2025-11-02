import { component$, useVisibleTask$ } from '@builder.io/qwik'
import { type DocumentHead, useLocation } from '@builder.io/qwik-city'

export default component$(() => {
  const location = useLocation()
  const priceRange = location.params.priceRange

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
              // Set price filters based on URL parameter
              if (priceInfo.min) {
                widget.setAttribute('price-min', priceInfo.min.toString())
              }
              if (priceInfo.max) {
                widget.setAttribute('price-max', priceInfo.max.toString())
              }

              // Set default location to Las Vegas
              widget.setAttribute('default-location', 'Las Vegas, NV')

              // Track price range page view
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'price_range_page_view', {
                  event_category: 'price_range',
                  event_label: priceInfo.display,
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

  // Parse price range and format for display
  const parsePriceRange = (range: string) => {
    if (range === 'under-400k') {
      return { max: 400000, display: 'Under $400K', title: 'Homes Under $400K' }
    }
    if (range === '400k-600k') {
      return { min: 400000, max: 600000, display: '$400K - $600K', title: 'Homes $400K - $600K' }
    }
    if (range === '600k-800k') {
      return { min: 600000, max: 800000, display: '$600K - $800K', title: 'Homes $600K - $800K' }
    }
    if (range === '800k-1m') {
      return { min: 800000, max: 1000000, display: '$800K - $1M', title: 'Homes $800K - $1M' }
    }
    if (range === 'over-1m') {
      return { min: 1000000, display: 'Over $1M', title: 'Homes Over $1M' }
    }
    // Default fallback
    return { max: 400000, display: 'Under $400K', title: 'Homes Under $400K' }
  }

  const priceInfo = parsePriceRange(priceRange)

  return (
    <section class="price-range-page">
      <div class="price-hero">
        <h1>{priceInfo.title}</h1>
        <p class="price-subtitle">Discover quality homes in your price range in Las Vegas</p>
      </div>

      {/* Advanced Search with Price Pre-set */}
      <div class="price-search">
        <h3>Search Homes {priceInfo.display}</h3>

        <style>{`
          .price-search realscout-advanced-search {
            --rs-as-widget-width: 700px !important;
            --rs-as-default-price-max: ${priceInfo.max || ''};
            --rs-as-default-price-min: ${priceInfo.min || ''};
            --rs-as-button-text-color: #ffffff;
            --rs-as-background-color: #ffffff;
            --rs-as-button-color: rgb(35, 93, 137);
            --rs-as-border-radius: 12px;
            --rs-as-box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            overflow: hidden;
            width: 100%;
            min-height: 480px;
            z-index: 1000;
          }
          
          .price-range-page {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }
          
          .price-hero {
            text-align: center;
            margin-bottom: 3rem;
            padding: 2rem 0;
            background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
            color: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }
          
          .price-hero h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #ffffff;
          }
          
          .price-subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            margin: 0;
          }
          
          .price-search {
            background: #F7F9FC;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            margin-bottom: 2rem;
            text-align: center;
          }
          
          .price-search h3 {
            color: #0A2540;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
          }
          
          .price-info-cards {
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
          
          .price-range-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
            flex-wrap: wrap;
          }
          
          .price-link {
            background: #3A8DDE;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            transition: background-color 0.2s;
          }
          
          .price-link:hover {
            background: #2a7bc7;
          }
          
          .price-link.current {
            background: #0A2540;
          }
          
          @media (max-width: 768px) {
            .price-hero h1 {
              font-size: 2rem;
            }
            
            .price-subtitle {
              font-size: 1rem;
            }
            
            .price-search {
              padding: 1rem;
            }
            
            .price-search realscout-advanced-search {
              --rs-as-widget-width: 100% !important;
            }
            
            .price-range-links {
              flex-direction: column;
              align-items: center;
            }
          }
        `}</style>

        <realscout-advanced-search
          agent-encoded-id="QWdlbnQtMjI1MDUw"
          price-max={priceInfo.max?.toString()}
          price-min={priceInfo.min?.toString()}
        />
      </div>

      {/* Price Range Navigation */}
      <div class="price-range-links">
        <a
          href="/open-houses-for-sale/under-400k"
          class={`price-link ${priceRange === 'under-400k' ? 'current' : ''}`}
        >
          Under $400K
        </a>
        <a
          href="/open-houses-for-sale/400k-600k"
          class={`price-link ${priceRange === '400k-600k' ? 'current' : ''}`}
        >
          $400K - $600K
        </a>
        <a
          href="/open-houses-for-sale/600k-800k"
          class={`price-link ${priceRange === '600k-800k' ? 'current' : ''}`}
        >
          $600K - $800K
        </a>
        <a
          href="/open-houses-for-sale/800k-1m"
          class={`price-link ${priceRange === '800k-1m' ? 'current' : ''}`}
        >
          $800K - $1M
        </a>
        <a
          href="/open-houses-for-sale/over-1m"
          class={`price-link ${priceRange === 'over-1m' ? 'current' : ''}`}
        >
          Over $1M
        </a>
      </div>

      {/* Information Cards */}
      <div class="price-info-cards">
        <div class="info-card">
          <h4>Why Choose This Price Range?</h4>
          <p>
            {priceInfo.display} homes in Las Vegas offer excellent value with modern amenities,
            great locations, and strong investment potential. This price range represents some of the
            most popular options in the Las Vegas real estate market, appealing to a wide range of
            buyers from first-time homebuyers to seasoned investors.
          </p>
          <p>
            Properties in this range typically feature updated kitchens and bathrooms, spacious
            layouts perfect for families, energy-efficient systems, and access to excellent schools,
            shopping, and recreational facilities. Whether you're looking for a starter home,
            upgrading to a larger property, or making an investment, {priceInfo.display} homes in
            Las Vegas provide outstanding opportunities.
          </p>
        </div>

        <div class="info-card">
          <h4>Market Insights</h4>
          <p>
            The Las Vegas market in this price range shows strong demand with competitive pricing
            and healthy inventory levels. Market trends indicate steady appreciation, making this
            price range an attractive option for both primary residences and investment properties.
          </p>
          <p>
            Properties often feature updated kitchens, spacious layouts, modern amenities, and
            access to top-rated schools and recreational facilities. Neighborhoods with homes in
            this range typically offer strong community features, well-maintained infrastructure,
            and convenient access to major employment centers, shopping, dining, and entertainment
            throughout the Las Vegas metropolitan area.
          </p>
        </div>

        <div class="info-card">
          <h4>Expert Guidance</h4>
          <p>
            Dr. Jan Duffy specializes in helping buyers find the perfect home in this price range.
            With extensive knowledge of Las Vegas neighborhoods, market conditions, and property
            values, she provides personalized guidance tailored to your specific needs, preferences,
            and budget.
          </p>
          <p>
            Get expert market insights, comprehensive property analysis, and skilled negotiation
            support to secure your dream home. Dr. Duffy's experience with {priceInfo.display}{' '}
            properties ensures you understand all aspects of potential purchases, from initial
            search through closing, making your home buying journey smooth and successful.
          </p>
        </div>

        <div class="info-card">
          <h4>Open Houses This Weekend</h4>
          <p>
            Looking for open houses this weekend featuring {priceInfo.display} homes? Our advanced
            search tools help you find available open houses matching your criteria. Browse
            properties, view detailed information, and schedule viewings all in one convenient
            location.
          </p>
          <p>
            Dr. Jan Duffy can help you navigate open house schedules, coordinate multiple property
            viewings, and provide expert insights on each property you visit. Whether you're
            searching for a single-family home, townhouse, or condo, we make it easy to explore
            {priceInfo.display} options throughout the Las Vegas area.
          </p>
        </div>
      </div>
    </section>
  )
})

export const head: DocumentHead = ({ params }) => {
  const priceRange = params.priceRange

  const parsePriceRange = (range: string) => {
    if (range === 'under-400k') {
      return { display: 'Under $400K', title: 'Homes Under $400K' }
    }
    if (range === '400k-600k') {
      return { display: '$400K - $600K', title: 'Homes $400K - $600K' }
    }
    if (range === '600k-800k') {
      return { display: '$600K - $800K', title: 'Homes $600K - $800K' }
    }
    if (range === '800k-1m') {
      return { display: '$800K - $1M', title: 'Homes $800K - $1M' }
    }
    if (range === 'over-1m') {
      return { display: 'Over $1M', title: 'Homes Over $1M' }
    }
    return { display: 'Under $400K', title: 'Homes Under $400K' }
  }

  const priceInfo = parsePriceRange(priceRange)

  return {
    title: `${priceInfo.title} - Las Vegas Real Estate | Dr. Jan Duffy`,
    meta: [
      {
        name: 'description',
        content: `Find homes ${priceInfo.display} in Las Vegas. Expert real estate guidance from Dr. Jan Duffy. Browse available properties and get market insights.`,
      },
      {
        name: 'keywords',
        content: `Las Vegas homes ${priceInfo.display}, real estate ${priceRange}, property search, home buying, Dr. Jan Duffy, Las Vegas real estate agent`,
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
        content: `${priceInfo.title} - Las Vegas Real Estate`,
      },
      {
        property: 'og:description',
        content: `Find homes ${priceInfo.display} in Las Vegas. Expert real estate guidance from Dr. Jan Duffy.`,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: `https://www.openhouseupdate.com/open-houses-for-sale/${priceRange}/`,
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
        content: `${priceInfo.title} - Las Vegas Real Estate`,
      },
      {
        name: 'twitter:description',
        content: `Find homes ${priceInfo.display} in Las Vegas. Expert real estate guidance from Dr. Jan Duffy.`,
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: `https://www.openhouseupdate.com/open-houses-for-sale/${priceRange}/`,
      },
    ],
  }
}
