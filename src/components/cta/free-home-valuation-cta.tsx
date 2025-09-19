import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

interface FreeHomeValuationCTAProps {
  variant?: 'banner' | 'card' | 'floating' | 'inline'
  className?: string
  agentEncodedId?: string
}

export default component$<FreeHomeValuationCTAProps>(
  ({ variant = 'card', className = '', agentEncodedId = 'QWdlbnQtMjI1MDUw' }) => {
    const isExpanded = useSignal(false)
    const showRealScoutWidget = useSignal(false)
    const isWidgetLoaded = useSignal(false)

    const toggleExpanded = $(() => {
      isExpanded.value = !isExpanded.value

      if (isExpanded.value) {
        showRealScoutWidget.value = true
      }

      // Track CTA interaction
      if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
        window.enhancedRealEstateAnalytics.trackWidgetInteraction(
          'home_valuation_cta',
          isExpanded.value ? 'cta_expanded' : 'cta_collapsed',
          { depth: 'moderate', value: 2 }
        )
      }
    })

    const openRealScoutWidget = $(() => {
      showRealScoutWidget.value = true
      isExpanded.value = true

      // Track RealScout widget opening
      if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
        window.enhancedRealEstateAnalytics.trackWidgetInteraction(
          'realscout_home_value',
          'widget_opened',
          { depth: 'high', value: 3 }
        )
      }
    })

    useVisibleTask$(() => {
      // Load RealScout script if not already loaded
      if (!document.querySelector('script[src*="realscout-web-components"]')) {
        const script = document.createElement('script')
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
        script.type = 'module'
        script.crossOrigin = 'anonymous'
        script.async = true
        script.defer = true

        script.onload = () => {
          isWidgetLoaded.value = true
        }

        document.head.appendChild(script)
      } else {
        isWidgetLoaded.value = true
      }
    })

    const getVariantStyles = () => {
      switch (variant) {
        case 'banner':
          return 'bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg'
        case 'floating':
          return 'fixed bottom-4 right-4 bg-white shadow-2xl border-2 border-blue-500 p-4 rounded-lg max-w-sm z-50'
        case 'inline':
          return 'bg-gray-50 border border-gray-200 p-4 rounded-lg'
        default: // card
          return 'bg-white border-2 border-blue-500 p-6 rounded-lg shadow-lg'
      }
    }

    if (showRealScoutWidget.value && isWidgetLoaded.value) {
      return (
        <div class={`${getVariantStyles()} ${className}`}>
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-gray-900">Get Your Free Home Valuation</h3>
            <button
              type="button"
              onClick$={() => {
                showRealScoutWidget.value = false
                isExpanded.value = false
              }}
              class="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div class="realscout-home-value-container">
            <style>{`
            realscout-home-value {
              --rs-hvw-background-color: #ffffff;
              --rs-hvw-title-color: #000000;
              --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
              --rs-hvw-primary-button-text-color: #ffffff;
              --rs-hvw-primary-button-color: rgb(35, 93, 137);
              --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
              --rs-hvw-secondary-button-color: #ffffff;
              --rs-hvw-widget-width: auto;
              width: 100%;
              min-height: 480px;
              z-index: 1000;
            }
          `}</style>

            <realscout-home-value agent-encoded-id={agentEncodedId} class="w-full" />
          </div>
        </div>
      )
    }

    return (
      <div class={`${getVariantStyles()} ${className}`}>
        <style>{`
        .cta-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>

        {!isExpanded.value ? (
          <div class="text-center">
            <div class="cta-pulse mb-4">
              <div class="text-4xl mb-2">🏠</div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Get Your Free Home Valuation</h3>
              <p class="text-gray-600 mb-4">
                Discover what your Las Vegas home is worth in today's market. Get an instant
                estimate plus a detailed report from Dr. Janet Duffy.
              </p>
              <button
                type="button"
                onClick$={openRealScoutWidget}
                class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 w-full"
              >
                Get My Free Valuation →
              </button>
              <p class="text-xs text-gray-500 mt-2">
                ✓ No obligation ✓ Instant results ✓ Expert analysis
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold text-gray-900">Free Home Valuation</h3>
              <button
                type="button"
                onClick$={toggleExpanded}
                class="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div class="text-center">
              <p class="text-gray-600 mb-4">
                Click below to access our professional home valuation tool powered by RealScout. Get
                an instant estimate and detailed market analysis.
              </p>
              <button
                type="button"
                onClick$={openRealScoutWidget}
                class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 w-full"
              >
                Open Valuation Tool →
              </button>
              <p class="text-xs text-gray-500 mt-2">
                ✓ Connected to your CRM ✓ Instant results ✓ Professional analysis
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }
)
