import { component$, type JSXNode, useSignal, useVisibleTask$ } from '@builder.io/qwik'

interface RealScoutLoaderProps {
  agentId: string
  widgetType: 'listings' | 'home-value' | 'simple-search' | 'advanced-search'
  children?: JSXNode
  className?: string
}

export default component$<RealScoutLoaderProps>(({ widgetType, children, className = '' }) => {
  const isLoading = useSignal(true)
  const hasError = useSignal(false)
  const scriptLoaded = useSignal(false)

  useVisibleTask$(async () => {
    try {
      // Check if script is already loaded
      if (document.querySelector('script[src*="realscout-web-components"]')) {
        scriptLoaded.value = true
        isLoading.value = false
        return
      }

      // Load RealScout script with integrity and crossorigin
      const script = document.createElement('script')
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
      script.type = 'module'
      script.crossOrigin = 'anonymous'
      script.async = true

      // Add error handling
      script.onerror = () => {
        hasError.value = true
        isLoading.value = false
      }

      script.onload = () => {
        scriptLoaded.value = true
        isLoading.value = false
      }

      document.head.appendChild(script)

      // Set timeout for loading
      setTimeout(() => {
        if (!scriptLoaded.value) {
          hasError.value = true
          isLoading.value = false
        }
      }, 10000) // 10 second timeout
    } catch (_error) {
      hasError.value = true
      isLoading.value = false
    }
  })

  if (hasError.value) {
    return (
      <div class={`realscout-error-container ${className}`}>
        <div class="realscout-error-content">
          <h3>Widget Temporarily Unavailable</h3>
          <p>
            We're experiencing technical difficulties. Please try again later or contact us
            directly.
          </p>
          <button
            type="button"
            class="realscout-retry-btn"
            onClick$={() => {
              hasError.value = false
              isLoading.value = true
              scriptLoaded.value = false
              // Trigger reload
              window.location.reload()
            }}
          >
            Retry
          </button>
        </div>
        <style>{`
          .realscout-error-container {
            width: 100%;
            margin: 2rem 0;
            padding: 2rem;
            background: #F7F9FC;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            text-align: center;
          }
          .realscout-error-content h3 {
            color: #0A2540;
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
          .realscout-error-content p {
            color: #6a6d72;
            margin-bottom: 1.5rem;
          }
          .realscout-retry-btn {
            background: #3A8DDE;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            transition: background-color 0.2s;
          }
          .realscout-retry-btn:hover {
            background: #2a7bc8;
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
        </div>
        <style>{`
          .realscout-loading-container {
            width: 100%;
            margin: 2rem 0;
            padding: 2rem;
            background: #F7F9FC;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            text-align: center;
          }
          .realscout-loading-content p {
            color: #3A8DDE;
            font-size: 1.1rem;
            margin-top: 1rem;
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
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  return <div class={className}>{children}</div>
})
