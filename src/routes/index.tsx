import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import FreeHomeValuationCTA from '~/components/cta/free-home-valuation-cta'
import FirstTimeBuyerGuide from '~/components/lead-magnets/first-time-buyer-guide'
import NeighborhoodGuides from '~/components/lead-magnets/neighborhood-guides'
import ExitIntentPopup from '~/components/modals/exit-intent-popup'
import PerformanceMonitor from '~/components/performance/performance-monitor'
import RealScoutMap from '~/components/realscout/RealScoutMap'
import FAQSection from '~/components/seo/faq-section'
import { createSEOHead } from '~/components/seo/seo-head'
import ClientTestimonials from '~/components/testimonials/client-testimonials'
import EnhancedMortgageCalculator from '~/components/widgets/enhanced-mortgage-calculator'

export default component$(() => {
  const showAdvanced = useSignal(true)
  const showCalculator = useSignal(false)
  const showExitIntent = useSignal(false)

  const showSimpleSearch = $(() => {
    showAdvanced.value = false

    // Track in enhanced analytics
    if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackPropertySearch('simple_search', {
        search_mode: 'simple',
        depth: 'moderate',
        value: 1,
      })
    }
  })

  const showAdvancedSearch = $(() => {
    showAdvanced.value = true

    // Track in enhanced analytics
    if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackPropertySearch('advanced_search', {
        search_mode: 'advanced',
        depth: 'high',
        value: 2,
      })
    }
  })

  const toggleCalculator = $(() => {
    showCalculator.value = !showCalculator.value

    if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackWidgetInteraction(
        'mortgage_calculator',
        showCalculator.value ? 'calculator_opened' : 'calculator_closed',
        { depth: 'moderate', value: 1 }
      )
    }
  })

  // Enhanced RealScout component monitoring
  useVisibleTask$(() => {
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
        if (
          customElements.get('realscout-advanced-search') &&
          customElements.get('realscout-simple-search')
        ) {
          console.log('RealScout custom elements found, initializing...')

          // Add enhanced event listeners for search interactions
          const advancedSearch = document.querySelector('realscout-advanced-search')
          const simpleSearch = document.querySelector('realscout-simple-search')

          if (advancedSearch && window.enhancedRealEstateAnalytics) {
            // Track when advanced search is used
            advancedSearch.addEventListener('search', () => {
              window.enhancedRealEstateAnalytics.trackPropertySearch('advanced_search_performed', {
                search_mode: 'advanced',
                depth: 'high',
                value: 3,
              })
            })

            advancedSearch.addEventListener('filter', () => {
              window.enhancedRealEstateAnalytics.trackWidgetInteraction(
                'realscout_advanced_search',
                'filter_applied',
                { depth: 'moderate', value: 1 }
              )
            })
          }

          if (simpleSearch && window.enhancedRealEstateAnalytics) {
            // Track when simple search is used
            simpleSearch.addEventListener('search', () => {
              window.enhancedRealEstateAnalytics.trackPropertySearch('simple_search_performed', {
                search_mode: 'simple',
                depth: 'moderate',
                value: 2,
              })
            })
          }

          return
        }

        console.log('Waiting for RealScout custom elements...')
        setTimeout(checkElements, 200)
      }

      checkElements()
    }

    // Start initialization
    initializeRealScout()

    // Track initial page engagement
    if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackPageEngagement('homepage_view', {
        page_type: 'homepage',
        search_mode: showAdvanced.value ? 'advanced' : 'simple',
        depth: 'high',
        value: 1,
      })
    }

    // Exit intent detection
    let hasShownExitIntent = false
    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0 && !hasShownExitIntent) {
        hasShownExitIntent = true
        showExitIntent.value = true

        // Track exit intent
        if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
          window.enhancedRealEstateAnalytics.trackWidgetInteraction(
            'exit_intent_detected',
            'mouse_leave',
            { depth: 'high', value: 2 }
          )
        }
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return (
    <>
      {/* Performance Monitoring */}
      <PerformanceMonitor />

      {/* Enhanced RealScout Search Section */}
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

          .calculator-toggle {
            position: relative;
            z-index: 1;
            margin-top: 2rem;
          }

          .calculator-toggle button {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.2);
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .calculator-toggle button:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.3);
          }

          realscout-simple-search {
            --rs-ss-font-primary-color: #6a6d72;
            --rs-ss-searchbar-border-color: hsl(0, 0%, 80%);
            --rs-ss-box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            --rs-ss-widget-width: 500px !important;
            --rs-ss-border-radius: 12px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            overflow: hidden;
            width: 100%;
            min-height: 200px;
            z-index: 1000;
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
            width: 100%;
            min-height: 480px;
            z-index: 1000;
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
            
            realscout-simple-search {
              --rs-ss-widget-width: 90vw !important;
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
           <button type="button" class={showAdvanced.value ? '' : 'active'} onClick$={showSimpleSearch}>
             Quick Search
           </button>
           <button type="button" class={showAdvanced.value ? 'active' : ''} onClick$={showAdvancedSearch}>
             Advanced Search
           </button>
         </div>

        <div class="widget-container">
          {showAdvanced.value ? (
            <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw" />
          ) : (
            <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw" />
          )}
        </div>

         <div class="calculator-toggle">
           <button type="button" onClick$={toggleCalculator}>
             {showCalculator.value ? 'Hide' : 'Show'} Mortgage Calculator
           </button>
         </div>
      </section>

      {/* Enhanced Mortgage Calculator Section */}
      {showCalculator.value && (
        <section class="calculator-section">
          <EnhancedMortgageCalculator />
        </section>
      )}

      {/* Enhanced Map Section */}
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
              View all available properties in Las Vegas on our interactive map. Find the perfect
              location for your next home.
            </p>
          </div>

          <RealScoutMap geoType="city" geoId="3240000" height="500px" width="100%" />

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

      {/* Client Testimonials */}
      <ClientTestimonials />

      {/* Lead Magnets Section */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Free Resources for Your Real Estate Journey
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert insights and tools to help you make informed decisions about buying or
              selling your Las Vegas home.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Free Home Valuation CTA */}
            <FreeHomeValuationCTA variant="card" />

            {/* First-Time Buyer Guide */}
            <FirstTimeBuyerGuide variant="card" />
          </div>

          <div class="mt-8">
            {/* Neighborhood Guides */}
            <NeighborhoodGuides />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={[
          {
            question: 'How do I start searching for a home in Las Vegas?',
            answer:
              'You can start by using our advanced property search tool above, browsing by neighborhood, or contacting Dr. Janet Duffy directly for personalized assistance. We also offer map-based searches and weekend open house listings.',
          },
          {
            question: 'What areas of Las Vegas do you serve?',
            answer:
              'Dr. Janet Duffy serves the entire Las Vegas Valley including Summerlin, Henderson, North Las Vegas, Spring Valley, Enterprise, and surrounding areas. We have extensive local market knowledge across all neighborhoods.',
          },
          {
            question: 'How accurate are home valuations?',
            answer:
              'Our home valuations use current market data, comparable sales, and local market trends to provide accurate estimates. For the most precise valuation, we recommend scheduling a professional assessment with Dr. Janet Duffy.',
          },
          {
            question: 'What services do you offer for buyers?',
            answer:
              'We provide comprehensive buyer services including property search assistance, market analysis, negotiation support, inspection coordination, and guidance through the entire closing process.',
          },
          {
            question: 'How can I prepare my home for sale?',
            answer:
              "We offer staging consultations, market analysis, pricing strategies, and professional marketing services. Dr. Janet Duffy will provide personalized recommendations to maximize your home's value and appeal.",
          },
        ]}
        title="Frequently Asked Questions"
      />

      {/* Exit Intent Popup */}
       <ExitIntentPopup
         isVisible={showExitIntent.value}
         onClose$={() => (showExitIntent.value = false)}
       />
    </>
  )
})

export const head: DocumentHead = createSEOHead({
  title: 'Las Vegas Real Estate - Find Your Dream Home',
  description:
    'Professional real estate services in Las Vegas. Search thousands of properties, get home valuations, and work with Dr. Janet Duffy for expert guidance. Serving Summerlin, Henderson, North Las Vegas and all Las Vegas Valley neighborhoods.',
  keywords: [
    'Las Vegas real estate',
    'Nevada homes',
    'property search',
    'home valuation',
    'real estate agent',
    'Dr. Janet Duffy',
    'open house',
    'property listings',
    'Summerlin homes',
    'Henderson real estate',
    'North Las Vegas',
    'Spring Valley',
    'Enterprise',
    'home buying',
    'home selling',
    'market analysis',
    'Las Vegas neighborhoods',
  ],
  canonicalUrl: 'https://openhouseupdate.com',
  ogImage: 'https://openhouseupdate.com/images/og-homepage.jpg',
  ogImageAlt: 'Las Vegas Real Estate - Open House Update Homepage',
  ogType: 'website',
  articleTags: [
    'real estate',
    'Las Vegas',
    'home search',
    'property',
    'Dr. Janet Duffy',
    'Nevada',
    'Summerlin',
    'Henderson',
  ],
})
