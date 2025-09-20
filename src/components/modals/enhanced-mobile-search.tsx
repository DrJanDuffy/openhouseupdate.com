import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

export default component$(() => {
  const isOpen = useSignal(false)
  const searchType = useSignal<'simple' | 'advanced'>('advanced')
  const isLoading = useSignal(false)

  useVisibleTask$(() => {
    // Enhanced RealScout script loading with retry logic
    const loadRealScoutScript = async () => {
      if (document.querySelector('script[src*="realscout-web-components"]')) {
        return Promise.resolve()
      }

      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
        script.type = 'module'
        script.crossOrigin = 'anonymous'
        script.async = true

        script.onload = () => {
          resolve(true)
        }

        script.onerror = () => {
          reject(new Error('Script load failed'))
        }

        document.head.appendChild(script)
      })
    }

    // Load script when component mounts
    loadRealScoutScript().catch(() => {
      // Script loading failed - handled gracefully
    })
  })

  const openModal = $(() => {
    // Track modal open event with enhanced analytics
    if (window?.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackWidgetInteraction(
        'mobile_search_modal',
        'modal_opened',
        {
          search_type: searchType.value,
          depth: 'high',
          value: 2,
        }
      )
    }

    isOpen.value = true
    isLoading.value = true

    // Simulate loading time for better UX
    setTimeout(() => {
      isLoading.value = false
    }, 500)
  })

  const closeModal = $(() => {
    if (window?.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackWidgetInteraction(
        'mobile_search_modal',
        'modal_closed',
        {
          search_type: searchType.value,
          depth: 'moderate',
          value: 1,
        }
      )
    }
    isOpen.value = false
  })

  const switchSearchType = $((type: 'simple' | 'advanced') => {
    searchType.value = type

    if (window?.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackWidgetInteraction(
        'mobile_search_modal',
        'search_type_switched',
        {
          search_type: type,
          depth: 'moderate',
          value: 1,
        }
      )
    }
  })

  // Handle keyboard events for accessibility
  const handleKeyDown = $((event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen.value) {
      closeModal()
    }
  })

  // Focus management for accessibility
  useVisibleTask$(({ track }) => {
    track(() => isOpen.value)

    if (isOpen.value) {
      // Add keyboard event listener
      document.addEventListener('keydown', handleKeyDown)

      // Focus the close button when modal opens
      const closeButton = document.querySelector('.mobile-close-button') as HTMLElement
      if (closeButton) {
        closeButton.focus()
      }

      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      // Remove keyboard event listener
      document.removeEventListener('keydown', handleKeyDown)

      // Restore body scroll
      document.body.style.overflow = ''
    }

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  })

  return (
    <>
      {/* Enhanced Mobile Modal */}
      {isOpen.value && (
        <div
          id="enhanced-mobile-search-modal"
          class="mobile-modal-overlay"
          onClick$={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-modal-title"
          aria-describedby="mobile-modal-description"
        >
          <div class="mobile-modal-content" onClick$={(e) => e.stopPropagation()}>
            <div class="mobile-modal-header">
              <div class="search-type-toggle">
                <button
                  type="button"
                  class={`toggle-button ${searchType.value === 'simple' ? 'active' : ''}`}
                  onClick$={() => switchSearchType('simple')}
                  aria-label="Switch to simple search"
                >
                  Quick Search
                </button>
                <button
                  type="button"
                  class={`toggle-button ${searchType.value === 'advanced' ? 'active' : ''}`}
                  onClick$={() => switchSearchType('advanced')}
                  aria-label="Switch to advanced search"
                >
                  Advanced Search
                </button>
              </div>
              <button
                class="mobile-close-button"
                onClick$={closeModal}
                aria-label="Close search modal"
                type="button"
              >
                ×
              </button>
            </div>

            <div class="mobile-modal-body" id="mobile-modal-description">
              {isLoading.value ? (
                <div class="loading-container">
                  <div class="loading-spinner" />
                  <p>Loading search...</p>
                </div>
              ) : searchType.value === 'advanced' ? (
                <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw" />
              ) : (
                <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Mobile Floating Button */}
      <button
        onClick$={openModal}
        class="mobile-search-trigger"
        aria-label="Open property search"
        type="button"
      >
        <span class="search-icon" aria-hidden="true">
          🔍
        </span>
        <span class="button-text">Search Properties</span>
        <span class="pulse-indicator" />
      </button>

      <style>{`
        /* Enhanced Mobile Floating Button */
        .mobile-search-trigger {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          background: linear-gradient(135deg, #3A8DDE 0%, #16B286 100%);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 14px 22px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(58, 141, 222, 0.3);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 180px;
          justify-content: center;
          font-family: 'Poppins', system-ui, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .mobile-search-trigger:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(58, 141, 222, 0.4);
        }

        .mobile-search-trigger:active {
          transform: translateY(0);
        }

        .search-icon {
          font-size: 16px;
          z-index: 1;
        }

        .button-text {
          font-size: 14px;
          z-index: 1;
        }

        .pulse-indicator {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.2);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
        }

        /* Enhanced Mobile Modal Overlay */
        .mobile-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          backdrop-filter: blur(4px);
          padding: 16px;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .mobile-modal-content {
          background: #ffffff;
          border-radius: 20px;
          width: 100%;
          max-width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          animation: slideInUp 0.3s ease-out;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .mobile-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
          background: #F7F9FC;
          border-radius: 20px 20px 0 0;
          position: sticky;
          top: 0;
          z-index: 1001;
        }

        .search-type-toggle {
          display: flex;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 12px;
          padding: 4px;
          gap: 4px;
        }

        .toggle-button {
          background: transparent;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #6a6d72;
        }

        .toggle-button.active {
          background: #3A8DDE;
          color: white;
          box-shadow: 0 2px 4px rgba(58, 141, 222, 0.2);
        }

        .toggle-button:hover:not(.active) {
          background: rgba(58, 141, 222, 0.1);
          color: #3A8DDE;
        }

        .mobile-close-button {
          background: none;
          border: none;
          font-size: 24px;
          color: #6b7280;
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .mobile-close-button:hover {
          background: #e5e7eb;
          color: #374151;
        }

        .mobile-modal-body {
          padding: 20px;
          min-height: 480px;
        }

        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          gap: 1rem;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3A8DDE;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loading-container p {
          color: #3A8DDE;
          font-size: 1.1rem;
          font-weight: 500;
        }

        /* Enhanced RealScout Widget Styling */
        realscout-advanced-search,
        realscout-simple-search {
          --rs-as-widget-width: 100% !important;
          --rs-ss-widget-width: 100% !important;
          --rs-as-mobile-optimized: true;
          --rs-ss-mobile-optimized: true;
          --rs-as-show-all-filters: true;
          --rs-as-expanded-mode: true;
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: #3A8DDE;
          --rs-as-accent-color: #16B286;
          --rs-ss-button-text-color: #ffffff;
          --rs-ss-background-color: #ffffff;
          --rs-ss-button-color: #3A8DDE;
          --rs-ss-accent-color: #16B286;
          width: 100%;
          min-height: 480px;
          z-index: 1000;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* Responsive adjustments */
        @media (max-width: 480px) {
          .mobile-search-trigger {
            bottom: 16px;
            right: 16px;
            padding: 12px 18px;
            font-size: 13px;
            min-width: 160px;
          }

          .mobile-modal-content {
            margin: 8px;
            max-height: 95vh;
          }

          .mobile-modal-header {
            padding: 16px 20px;
          }

          .mobile-modal-body {
            padding: 16px;
          }

          .search-type-toggle {
            flex-direction: column;
            gap: 2px;
          }

          .toggle-button {
            padding: 6px 12px;
            font-size: 13px;
          }
        }

        @media (max-width: 360px) {
          .mobile-search-trigger {
            bottom: 12px;
            right: 12px;
            padding: 10px 14px;
            font-size: 12px;
            min-width: 140px;
          }

          .button-text {
            font-size: 12px;
          }

          .search-icon {
            font-size: 14px;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .mobile-modal-content,
          .mobile-search-trigger,
          .pulse-indicator {
            animation: none;
          }
          
          .mobile-search-trigger {
            transition: none;
          }
        }

        /* Focus styles for accessibility */
        .mobile-close-button:focus,
        .mobile-search-trigger:focus,
        .toggle-button:focus {
          outline: 2px solid #3A8DDE;
          outline-offset: 2px;
        }

        /* Touch-friendly sizing */
        @media (pointer: coarse) {
          .mobile-search-trigger {
            min-height: 48px;
            padding: 14px 22px;
          }
          
          .mobile-close-button {
            min-width: 48px;
            min-height: 48px;
          }

          .toggle-button {
            min-height: 44px;
            padding: 10px 16px;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .mobile-search-trigger {
            border: 2px solid currentColor;
          }
          
          .mobile-modal-content {
            border: 2px solid currentColor;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .mobile-modal-content {
            background: #1a1a1a;
            color: #ffffff;
          }
          
          .mobile-modal-header {
            background: #2a2a2a;
            border-bottom-color: #404040;
          }
          
          .mobile-close-button {
            color: #ffffff;
          }
          
          .mobile-close-button:hover {
            background: #404040;
            color: #ffffff;
          }

          .search-type-toggle {
            background: rgba(0, 0, 0, 0.3);
          }

          .toggle-button {
            color: #ffffff;
          }
        }

        /* Safe area support for devices with notches */
        @supports (padding: max(0px)) {
          .mobile-search-trigger {
            bottom: max(20px, env(safe-area-inset-bottom));
            right: max(20px, env(safe-area-inset-right));
          }
        }
      `}</style>
    </>
  )
})
