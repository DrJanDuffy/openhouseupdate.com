import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

interface EnhancedRealScoutLoaderProps {
  agentId: string
  widgetType: 'listings' | 'home-value' | 'simple-search' | 'advanced-search'
  children?: any
  className?: string
  lazyLoad?: boolean
  viewportThreshold?: number
  retryAttempts?: number
}

export default component$<EnhancedRealScoutLoaderProps>(
  ({
    widgetType,
    children,
    className = '',
    lazyLoad = true,
    viewportThreshold = 0.5,
    retryAttempts = 3,
  }) => {
    const isLoading = useSignal(true)
    const hasError = useSignal(false)
    const scriptLoaded = useSignal(false)
    const isInViewport = useSignal(false)
    const retryCount = useSignal(0)
    const widgetReady = useSignal(false)

    const loadRealScoutScript = $(async () => {
      try {
        // Check if script is already loaded
        const existingScript = document.querySelector('script[src*="realscout-web-components"]')
        if (existingScript) {
          console.log('RealScout script already loaded')
          scriptLoaded.value = true
          isLoading.value = false
          initializeWidget()
          return
        }

        // Check if custom elements are already defined
        const elementName = `realscout-${widgetType.replace('-', '-')}`
        if (customElements.get(elementName)) {
          console.log('RealScout custom elements already defined')
          scriptLoaded.value = true
          isLoading.value = false
          widgetReady.value = true
          return
        }

        // Load RealScout script with enhanced error handling
        const script = document.createElement('script')
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
        script.type = 'module'
        script.crossOrigin = 'anonymous'
        script.async = true
        script.defer = true

        // Enhanced error handling with retry logic
        script.onerror = () => {
          console.error(`Failed to load RealScout script (attempt ${retryCount.value + 1})`)
          handleScriptError()
        }

        script.onload = () => {
          console.log('RealScout script loaded successfully')
          scriptLoaded.value = true
          isLoading.value = false
          initializeWidget()
        }

        document.head.appendChild(script)

        // Set timeout for loading with progressive backoff
        const timeout = Math.min(10000 + retryCount.value * 2000, 30000)
        setTimeout(() => {
          if (!scriptLoaded.value) {
            handleScriptError()
          }
        }, timeout)
      } catch (error) {
        console.error('Error loading RealScout script:', error)
        handleScriptError()
      }
    })

    useVisibleTask$(async () => {
      // Check if script is already loaded from layout
      const existingScript = document.querySelector('script[src*="realscout-web-components"]')
      if (existingScript) {
        console.log('RealScout script found in layout, initializing widget')
        scriptLoaded.value = true
        isLoading.value = false
        initializeWidget()
        return
      }

      // Set up intersection observer for lazy loading
      if (lazyLoad) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !isInViewport.value) {
                isInViewport.value = true
                loadRealScoutScript()
              }
            })
          },
          { threshold: viewportThreshold }
        )

        const element = document.querySelector(`.realscout-widget-container-${widgetType}`)
        if (element) {
          observer.observe(element)
        }

        return () => observer.disconnect()
      }
      // Load immediately if not lazy loading
      loadRealScoutScript()
    })

    const handleScriptError = $(() => {
      retryCount.value++
      if (retryCount.value < retryAttempts) {
        console.log(`Retrying RealScout script load (attempt ${retryCount.value + 1})`)
        setTimeout(
          () => {
            loadRealScoutScript()
          },
          2 ** retryCount.value * 1000
        ) // Exponential backoff
      } else {
        hasError.value = true
        isLoading.value = false
        console.error('RealScout script failed to load after all retry attempts')
      }
    })

    const initializeWidget = $(() => {
      // Wait for custom elements to be defined
      const checkElements = () => {
        const elementName = `realscout-${widgetType.replace('-', '-')}`
        console.log(`Checking for custom element: ${elementName}`)

        if (customElements.get(elementName)) {
          console.log(`Custom element ${elementName} found, widget ready`)
          widgetReady.value = true

          // Add event listeners for analytics tracking
          setTimeout(() => {
            const widget = document.querySelector(elementName)
            if (widget && window.enhancedRealEstateAnalytics) {
              console.log('Adding analytics event listeners to widget')
              // Track widget interactions
              widget.addEventListener('search', () => {
                window.enhancedRealEstateAnalytics.trackWidgetInteraction(
                  widgetType,
                  'search_performed',
                  { depth: 'high', value: 1 }
                )
              })

              widget.addEventListener('filter', () => {
                window.enhancedRealEstateAnalytics.trackWidgetInteraction(
                  widgetType,
                  'filter_applied',
                  { depth: 'moderate', value: 1 }
                )
              })

              widget.addEventListener('result', () => {
                window.enhancedRealEstateAnalytics.trackWidgetInteraction(
                  widgetType,
                  'results_viewed',
                  { depth: 'high', value: 2 }
                )
              })
            }
          }, 1000)

          return
        }

        // Check if we've been waiting too long
        if (retryCount.value > 10) {
          console.error(`Custom element ${elementName} not found after multiple attempts`)
          hasError.value = true
          isLoading.value = false
          return
        }

        setTimeout(checkElements, 200)
      }
      checkElements()
    })

    const retryWidget = $(() => {
      hasError.value = false
      isLoading.value = true
      scriptLoaded.value = false
      widgetReady.value = false
      retryCount.value = 0
      loadRealScoutScript()
    })

    if (hasError.value) {
      return (
        <div class={`realscout-error-container ${className}`}>
          <div class="realscout-error-content">
            <div class="error-icon">⚠️</div>
            <h3>Widget Temporarily Unavailable</h3>
            <p>
              We're experiencing technical difficulties with our property search. Please try again
              or contact us directly for assistance.
            </p>
            <div class="error-actions">
              <button
                class="realscout-retry-btn"
                onClick$={retryWidget}
                aria-label="Retry loading property search widget"
              >
                Try Again
              </button>
              <a href="/contact" class="contact-link">
                Contact Us
              </a>
            </div>
          </div>
          <style>{`
          .realscout-error-container {
            width: 100%;
            margin: 2rem 0;
            padding: 2rem;
            background: #F7F9FC;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            text-align: center;
            border: 1px solid #e2e8f0;
          }
          .realscout-error-content h3 {
            color: #0A2540;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
          }
          .realscout-error-content p {
            color: #6a6d72;
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }
          .error-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
          .error-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }
          .realscout-retry-btn {
            background: #3A8DDE;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s ease;
            font-size: 1rem;
          }
          .realscout-retry-btn:hover {
            background: #2a7bc8;
            transform: translateY(-1px);
          }
          .contact-link {
            background: #16B286;
            color: white;
            text-decoration: none;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            font-weight: 600;
            transition: all 0.2s ease;
            font-size: 1rem;
          }
          .contact-link:hover {
            background: #059669;
            transform: translateY(-1px);
          }
          @media (max-width: 480px) {
            .error-actions {
              flex-direction: column;
              align-items: center;
            }
            .realscout-retry-btn,
            .contact-link {
              width: 200px;
            }
          }
        `}</style>
        </div>
      )
    }

    if (isLoading.value) {
      return (
        <div class={`realscout-loading-container ${className}`}>
          <div class="realscout-loading-content">
            <div class="realscout-spinner" />
            <p>Loading {widgetType.replace('-', ' ')}...</p>
            <div class="loading-dots">
              <span />
              <span />
              <span />
            </div>
          </div>
          <style>{`
          .realscout-loading-container {
            width: 100%;
            margin: 2rem 0;
            padding: 2rem;
            background: #F7F9FC;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            text-align: center;
            border: 1px solid #e2e8f0;
          }
          .realscout-loading-content p {
            color: #3A8DDE;
            font-size: 1.1rem;
            margin: 1rem 0;
            font-weight: 500;
          }
          .realscout-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3A8DDE;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto;
          }
          .loading-dots {
            display: flex;
            justify-content: center;
            gap: 4px;
            margin-top: 1rem;
          }
          .loading-dots span {
            width: 8px;
            height: 8px;
            background: #3A8DDE;
            border-radius: 50%;
            animation: pulse 1.4s ease-in-out infinite both;
          }
          .loading-dots span:nth-child(1) { animation-delay: -0.32s; }
          .loading-dots span:nth-child(2) { animation-delay: -0.16s; }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
          }
        `}</style>
        </div>
      )
    }

    return <div class={`realscout-widget-container-${widgetType} ${className}`}>{children}</div>
  }
)
