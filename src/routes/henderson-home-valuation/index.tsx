import { component$, useVisibleTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import EnhancedPageSEO from '~/components/seo/enhanced-page-seo'
import InternalLinking from '~/components/seo/internal-linking'

export default component$(() => {
  useVisibleTask$(() => {
    if (typeof window !== 'undefined') {
      const initializeRealScout = () => {
        const script = document.querySelector('script[src*="realscout-web-components"]')
        if (!script) {
          setTimeout(initializeRealScout, 500)
          return
        }

        const checkElements = () => {
          if (customElements.get('realscout-home-value')) {
            return
          }
          setTimeout(checkElements, 200)
        }
        checkElements()
      }
      initializeRealScout()
    }
  })

  return (
    <div class="location-page">
      <style>{`
        .location-page {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        
        .location-hero {
          text-align: center;
          margin-bottom: 3rem;
          padding: 3rem 0;
          background: linear-gradient(135deg, #0A2540 0%, #16B286 100%);
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .location-hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .valuation-section {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-bottom: 2rem;
        }
        
        .info-section {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-bottom: 2rem;
        }
        
        .info-section h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          border-bottom: 2px solid #16B286;
          padding-bottom: 0.5rem;
        }
        
        .info-section p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        
        realscout-home-value {
          margin: 2rem 0;
        }
      `}</style>

      <div class="location-hero">
        <h1>Henderson Home Valuation</h1>
        <p style="font-size: 1.2rem; opacity: 0.9;">
          Get an accurate home valuation for your Henderson property
        </p>
      </div>

      <div class="valuation-section">
        <h2 style="color: #0A2540; margin-bottom: 1rem; text-align: center;">Get Your Instant Home Value</h2>
        <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw" />
      </div>

      <div class="info-section">
        <h2>Henderson Home Valuation</h2>
        <p>
          Get an accurate home valuation for your Henderson property. Located in zip codes 89002, 89011, 89012, 
          89014, 89015, 89052, and 89074, Henderson home values vary by community, with Green Valley (89012, 
          89014), Seven Hills (89052, 89074), and Lake Las Vegas (89011) commanding premium prices.
        </p>
        <p>
          Dr. Jan Duffy provides comprehensive home valuations for Henderson properties, analyzing comparable 
          sales, current market trends, neighborhood-specific data, and property features. Whether you're in 
          Green Valley, Seven Hills, Anthem, or other Henderson communities, we provide accurate market value 
          estimates to help you make informed decisions.
        </p>
        <p>
          Henderson home values are influenced by factors including school quality, community amenities, 
          proximity to Green Valley Ranch or Lake Las Vegas, property condition, and market trends. As of 
          November 2025, Henderson continues to see steady appreciation with average home prices around 
          $550,000-$650,000.
        </p>
      </div>

      {/* Internal Linking */}
      <InternalLinking
        title="Henderson Real Estate Resources"
        links={[
          {
            title: 'Henderson Real Estate Guide',
            url: '/neighborhoods/henderson/',
            description: 'Learn about Henderson neighborhoods and communities',
          },
          {
            title: 'Green Valley Properties',
            url: '/neighborhoods/green-valley/',
            description: 'Explore Green Valley in Henderson',
          },
          {
            title: 'Seller Services',
            url: '/services/seller-services/',
            description: 'Get expert help selling your Henderson home',
          },
          {
            title: 'Market Analysis',
            url: '/services/market-analysis/',
            description: 'Get comprehensive Henderson market data',
          },
        ]}
        className="mt-8"
      />

      {/* FAQ Section */}
      <EnhancedPageSEO
        pageKey="henderson-home-valuation"
        showFAQs={false}
        className="mt-8"
      />
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Henderson Home Valuation - Free Property Value Estimate | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content:
        'Get a free home valuation for your Henderson property. Accurate market analysis for Green Valley, Seven Hills, Lake Las Vegas and all Henderson communities.',
    },
    {
      name: 'keywords',
      content:
        'Henderson home valuation, Green Valley home value, Henderson property value, Seven Hills home value, Lake Las Vegas property valuation',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://www.openhouseupdate.com/henderson-home-valuation/',
    },
  ],
}

