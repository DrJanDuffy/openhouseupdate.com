import { component$, useVisibleTask$ } from '@builder.io/qwik'

export default component$(() => {
  useVisibleTask$(() => {
    // Performance monitoring and optimization
    const trackPerformance = () => {
      if (typeof window === 'undefined' || !window.performance) return

      // Core Web Vitals tracking
      const trackWebVitals = () => {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]

          if (window.enhancedRealEstateAnalytics) {
            window.enhancedRealEstateAnalytics.trackPageEngagement('web_vitals', {
              metric: 'LCP',
              value: Math.round(lastEntry.startTime),
              url: window.location.href,
            })
          }
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            if (window.enhancedRealEstateAnalytics && 'processingStart' in entry) {
              window.enhancedRealEstateAnalytics.trackPageEngagement('web_vitals', {
                metric: 'FID',
                value: Math.round((entry as any).processingStart - entry.startTime),
                url: window.location.href,
              })
            }
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift (CLS)
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          })

          if (window.enhancedRealEstateAnalytics) {
            window.enhancedRealEstateAnalytics.trackPageEngagement('web_vitals', {
              metric: 'CLS',
              value: Math.round(clsValue * 1000) / 1000,
              url: window.location.href,
            })
          }
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      }

      // Resource loading performance
      const trackResourcePerformance = () => {
        const resources = performance.getEntriesByType('resource')
        const realScoutResources = resources.filter((resource) =>
          resource.name.includes('realscout')
        )

        realScoutResources.forEach((resource) => {
          if (window.enhancedRealEstateAnalytics) {
            window.enhancedRealEstateAnalytics.trackWidgetInteraction(
              'realscout_resource',
              'resource_loaded',
              {
                resource_name: resource.name,
                load_time: Math.round(resource.duration),
                transfer_size: (resource as any).transferSize || 0,
                depth: 'moderate',
                value: 1,
              }
            )
          }
        })
      }

      // Page load performance
      const trackPageLoadPerformance = () => {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType(
              'navigation'
            )[0] as PerformanceNavigationTiming

            if (navigation && window.enhancedRealEstateAnalytics) {
              window.enhancedRealEstateAnalytics.trackPageEngagement('page_performance', {
                dom_content_loaded: Math.round(
                  navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
                ),
                load_complete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
                first_byte: Math.round(navigation.responseStart - navigation.requestStart),
                dom_ready: Math.round(
                  navigation.domContentLoadedEventEnd - (navigation as any).navigationStart
                ),
                full_load: Math.round(
                  navigation.loadEventEnd - (navigation as any).navigationStart
                ),
                url: window.location.href,
              })
            }
          }, 0)
        })
      }

      // Initialize all performance tracking
      trackWebVitals()
      trackResourcePerformance()
      trackPageLoadPerformance()
    }

    // Error tracking
    const trackErrors = () => {
      window.addEventListener('error', (event) => {
        if (window.enhancedRealEstateAnalytics) {
          window.enhancedRealEstateAnalytics.trackPageEngagement('javascript_error', {
            error_message: event.message,
            error_filename: event.filename,
            error_lineno: event.lineno,
            error_colno: event.colno,
            url: window.location.href,
            user_agent: navigator.userAgent,
          })
        }
      })

      window.addEventListener('unhandledrejection', (event) => {
        if (window.enhancedRealEstateAnalytics) {
          window.enhancedRealEstateAnalytics.trackPageEngagement('promise_rejection', {
            error_reason: event.reason?.toString() || 'Unknown',
            url: window.location.href,
            user_agent: navigator.userAgent,
          })
        }
      })
    }

    // RealScout widget performance monitoring
    const monitorRealScoutPerformance = () => {
      const checkRealScoutHealth = () => {
        const realScoutElements = document.querySelectorAll(
          '[class*="realscout"], realscout-simple-search, realscout-advanced-search'
        )

        realScoutElements.forEach((element, index) => {
          const rect = element.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0

          if (isVisible && window.enhancedRealEstateAnalytics) {
            window.enhancedRealEstateAnalytics.trackWidgetInteraction(
              'realscout_widget',
              'widget_viewed',
              {
                widget_index: index,
                widget_type: element.tagName.toLowerCase(),
                viewport_position: Math.round(rect.top),
                depth: 'moderate',
                value: 1,
              }
            )
          }
        })
      }

      // Check widget health every 5 seconds
      setInterval(checkRealScoutHealth, 5000)
    }

    // Initialize all monitoring
    trackPerformance()
    trackErrors()
    monitorRealScoutPerformance()

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (window.enhancedRealEstateAnalytics) {
        window.enhancedRealEstateAnalytics.trackPageEngagement('visibility_change', {
          visibility_state: document.visibilityState,
          url: window.location.href,
        })
      }
    })

    // Track connection quality
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      if (window.enhancedRealEstateAnalytics) {
        window.enhancedRealEstateAnalytics.trackPageEngagement('connection_info', {
          effective_type: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          save_data: connection.saveData,
          url: window.location.href,
        })
      }
    }
  })

  return null // This component doesn't render anything
})
