import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import PerformanceMonitor from '~/components/performance/performance-monitor'
import EnhancedPageSEO, { createOptimizedHead } from '~/components/seo/enhanced-page-seo'

export default component$(() => {
  const showAdvanced = useSignal(true)

  const showSimpleSearch = $(() => {
    showAdvanced.value = false

    // Track in enhanced analytics
    if (window?.enhancedRealEstateAnalytics) {
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
    if (window?.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackPropertySearch('advanced_search', {
        search_mode: 'advanced',
        depth: 'high',
        value: 2,
      })
    }
  })

  // Simple RealScout component monitoring
  useVisibleTask$(() => {
    try {
      // Track initial page engagement
      if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
        window.enhancedRealEstateAnalytics.trackPageEngagement('homepage_view', {
          page_type: 'homepage',
          search_mode: showAdvanced.value ? 'advanced' : 'simple',
          depth: 'high',
          value: 1,
        })
      }
    } catch {
      // Client-side initialization failed
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

          .fallback-search {
            display: none;
          }

          .fallback-search.show {
            display: block;
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
          <button
            type="button"
            class={showAdvanced.value ? '' : 'active'}
            onClick$={showSimpleSearch}
          >
            Quick Search
          </button>
          <button
            type="button"
            class={showAdvanced.value ? 'active' : ''}
            onClick$={showAdvancedSearch}
          >
            Advanced Search
          </button>
        </div>

        <div class="widget-container">
          {showAdvanced.value ? (
            <realscout-advanced-search
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              onError$={() => {
                // RealScout advanced search widget failed to load
              }}
            />
          ) : (
            <realscout-simple-search
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              onError$={() => {
                // RealScout simple search widget failed to load
              }}
            />
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <EnhancedPageSEO
        pageKey="homepage"
        showFAQs={true}
        faqTitle="Las Vegas Real Estate - Frequently Asked Questions"
        className="mt-12"
      />
    </>
  )
})

// Optimized DocumentHead with snippets and structured data
export const _head: DocumentHead = createOptimizedHead('homepage')
