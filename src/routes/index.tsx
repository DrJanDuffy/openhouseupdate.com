import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import PerformanceMonitor from '~/components/performance/performance-monitor'
import EnhancedPageSEO, { createOptimizedHead } from '~/components/seo/enhanced-page-seo'
import InternalLinking from '~/components/seo/internal-linking'

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
            margin-bottom: 1.5rem;
            opacity: 0.9;
            font-weight: 300;
          }

          .featured-agent-badge {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 25px;
            font-size: 0.9rem;
            font-weight: 600;
            box-shadow: 0 4px 15px rgba(10, 37, 64, 0.3);
            margin-bottom: 2rem;
            max-width: fit-content;
          }

          .badge-text {
            opacity: 0.9;
          }

          .agent-name {
            font-weight: 700;
            font-size: 1rem;
          }

          .badge-month {
            background: rgba(255, 255, 255, 0.2);
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-size: 0.8rem;
            font-weight: 500;
          }

          /* Open House Expert Section Styles */
          .specialist-section {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            margin: 4rem 0;
          }

          .specialist-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s ease;
          }

          .specialist-card:hover {
            transform: translateY(-5px);
          }

          .card-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }

          .card-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0A2540;
            margin-bottom: 1rem;
          }

          .card-description {
            color: #64748b;
            line-height: 1.6;
          }

          .specialist-stats {
            background: white;
            padding: 3rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            margin: 2rem 0;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            text-align: center;
          }

          .stat-item {
            padding: 1rem;
          }

          .stat-number {
            font-size: 3rem;
            font-weight: 800;
            color: #3A8DDE;
            margin-bottom: 0.5rem;
          }

          .stat-label {
            font-size: 1.1rem;
            color: #64748b;
            font-weight: 600;
          }

          .specialist-expertise {
            background: white;
            padding: 3rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          .expertise-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .expertise-item {
            padding: 1.5rem;
            border-left: 4px solid #3A8DDE;
            background: #f8fafc;
            border-radius: 0 8px 8px 0;
          }

          .expertise-item h4 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #0A2540;
            margin-bottom: 0.75rem;
          }

          .expertise-item p {
            color: #64748b;
            line-height: 1.6;
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
            
            .featured-agent-badge {
              flex-direction: column;
              text-align: center;
              padding: 1rem;
              gap: 0.75rem;
            }
            
            .agent-name {
              font-size: 1.1rem;
            }
            
            .specialist-section {
              margin: 2rem 0;
              padding: 1rem 0;
            }
            
            .specialist-card {
              padding: 1.5rem;
            }
            
            .card-title {
              font-size: 1.3rem;
            }
            
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 1rem;
            }
            
            .stat-number {
              font-size: 2.5rem;
            }
            
            .expertise-grid {
              grid-template-columns: 1fr;
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
          <h1 class="hero-title">Find This Weekend's Open Houses</h1>
          <p class="hero-subtitle">
            Discover Las Vegas open houses happening this weekend with our advanced property search
          </p>
          <div class="featured-agent-badge">
            <span class="badge-text">Featured Open House Expert</span>
            <span class="agent-name">Dr. Jan Duffy</span>
            <span class="badge-month">This Month</span>
          </div>
        </div>

        <div class="search-toggle">
          <button
            type="button"
            class={showAdvanced.value ? '' : 'active'}
            onClick$={showSimpleSearch}
          >
            Quick Open House Search
          </button>
          <button
            type="button"
            class={showAdvanced.value ? 'active' : ''}
            onClick$={showAdvancedSearch}
          >
            Advanced Open House Search
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

      {/* Open House Expert Section - EEAT Content */}
      <section class="specialist-section">
        <div class="container mx-auto px-6 py-16 max-w-6xl">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dr. Jan Duffy as Your Open House Expert?
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 20 years of Las Vegas real estate experience, Dr. Jan Duffy has mastered the
              art of open house marketing, lead generation, and buyer conversion.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="specialist-card">
              <div class="card-icon">📊</div>
              <h3 class="card-title">Proven Conversion Rates</h3>
              <p class="card-description">
                Dr. Jan Duffy consistently achieves 15-20% higher conversion rates at open houses
                compared to industry averages, with over 300 successful transactions in Las Vegas
                Valley.
              </p>
            </div>

            <div class="specialist-card">
              <div class="card-icon">🎯</div>
              <h3 class="card-title">Strategic Marketing</h3>
              <p class="card-description">
                Specialized in targeted open house marketing, neighborhood analysis, and optimal
                scheduling strategies that maximize buyer turnout and engagement.
              </p>
            </div>

            <div class="specialist-card">
              <div class="card-icon">🏆</div>
              <h3 class="card-title">Industry Recognition</h3>
              <p class="card-description">
                Licensed Nevada real estate agent affiliated with Berkshire Hathaway HomeServices,
                recognized for excellence in open house management and client satisfaction.
              </p>
            </div>
          </div>

          <div class="specialist-stats">
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">300+</div>
                <div class="stat-label">Successful Transactions</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">20+</div>
                <div class="stat-label">Years Experience</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">95%</div>
                <div class="stat-label">Client Satisfaction</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">15</div>
                <div class="stat-label">Las Vegas Neighborhoods</div>
              </div>
            </div>
          </div>

          <div class="specialist-expertise">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
              Open House Expert Expertise Areas
            </h3>
            <div class="expertise-grid">
              <div class="expertise-item">
                <h4>Property Staging & Presentation</h4>
                <p>
                  Professional staging consultation to maximize property appeal and buyer interest
                  during open house events.
                </p>
              </div>
              <div class="expertise-item">
                <h4>Lead Capture & Follow-up</h4>
                <p>
                  Advanced lead management systems and personalized follow-up strategies to convert
                  open house visitors into qualified buyers.
                </p>
              </div>
              <div class="expertise-item">
                <h4>Market Analysis & Pricing</h4>
                <p>
                  Comprehensive market analysis to ensure optimal pricing strategies that attract
                  serious buyers to open house events.
                </p>
              </div>
              <div class="expertise-item">
                <h4>Neighborhood Expertise</h4>
                <p>
                  Deep knowledge of Las Vegas Valley neighborhoods including Summerlin, Henderson,
                  North Las Vegas, and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <EnhancedPageSEO
        pageKey="homepage"
        showFAQs={true}
        faqTitle="Las Vegas Real Estate - Frequently Asked Questions"
        className="mt-12"
      />

      {/* Internal Linking */}
      <InternalLinking
        title="Explore Las Vegas Real Estate"
        links={[
          {
            title: 'This Weekend Open Houses',
            url: '/this-weekend/',
            description: 'Find open houses happening this weekend',
          },
          {
            title: 'Summerlin vs Henderson Comparison',
            url: '/summerlin-vs-henderson/',
            description: 'Compare two of Las Vegas\'s top communities',
          },
          {
            title: 'First-Time Homebuyer Guide',
            url: '/how-to-buy-first-home-las-vegas/',
            description: 'Complete guide to buying your first home',
          },
          {
            title: 'Search All Properties',
            url: '/search/',
            description: 'Browse all Las Vegas Valley homes',
          },
        ]}
        className="mt-12"
      />
    </>
  )
})

// Optimized DocumentHead with snippets and structured data
export const head: DocumentHead = createOptimizedHead('homepage')
