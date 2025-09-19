import { component$, useVisibleTask$, useSignal, $ } from '@builder.io/qwik';

export default component$(() => {
  const isOpen = useSignal(false);

  useVisibleTask$(() => {
    // Load RealScout script if not already loaded
    if (!document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      script.crossOrigin = 'anonymous';
      script.integrity = 'sha384-'; // Add integrity hash when available
      
      // Add error handling for script loading
      script.onerror = () => {
        console.warn('RealScout script failed to load. Advanced search may not function properly.');
      };
      
      script.onload = () => {
        console.log('RealScout script loaded successfully');
      };
      
      document.head.appendChild(script);
    }
  });

  const openModal = $(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'mobile_search_button_click', {
        event_category: 'Mobile Search',
        event_label: 'Floating Button',
        value: 1
      });
      window.gtag('event', 'mobile_search_modal_open', {
        event_category: 'Mobile Search',
        event_label: 'Modal Interaction',
        value: 1
      });
    }
    isOpen.value = true;
  });

  const closeModal = $(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'mobile_search_modal_close', {
        event_category: 'Mobile Search',
        event_label: 'Modal Interaction',
        value: 1
      });
    }
    isOpen.value = false;
  });

  // Handle keyboard events for accessibility
  const handleKeyDown = $((event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen.value) {
      closeModal();
    }
  });

  // Focus management for accessibility
  useVisibleTask$(({ track }) => {
    track(() => isOpen.value);
    
    if (isOpen.value) {
      // Add keyboard event listener
      document.addEventListener('keydown', handleKeyDown);
      
      // Focus the close button when modal opens
      const closeButton = document.querySelector('.mobile-close-button') as HTMLElement;
      if (closeButton) {
        closeButton.focus();
      }
      
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Remove keyboard event listener
      document.removeEventListener('keydown', handleKeyDown);
      
      // Restore body scroll
      document.body.style.overflow = '';
    }
    
    // Cleanup on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  });

  return (
    <>
      {/* Mobile Modal */}
      {isOpen.value && (
        <div 
          id="mobile-search-modal" 
          class="mobile-modal-overlay" 
          onClick$={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-modal-title"
          aria-describedby="mobile-modal-description"
        >
          <div class="mobile-modal-content" onClick$={(e) => e.stopPropagation()}>
            <div class="mobile-modal-header">
              <h2 id="mobile-modal-title">Advanced Search</h2>
              <button 
                class="mobile-close-button" 
                onClick$={closeModal}
                aria-label="Close advanced search modal"
                type="button"
              >
                ×
              </button>
            </div>
            
            <div class="mobile-modal-body" id="mobile-modal-description">
              <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Floating Button */}
      <button 
        onClick$={openModal} 
        class="mobile-search-trigger"
        aria-label="Open advanced property search"
        type="button"
      >
        <span class="search-icon" aria-hidden="true">🔍</span>
        <span class="button-text">Advanced Search</span>
      </button>

      <style>{`
        /* Mobile Floating Button */
        .mobile-search-trigger {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          background: linear-gradient(135deg, #3A8DDE 0%, #16B286 100%);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 12px 20px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(58, 141, 222, 0.3);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 160px;
          justify-content: center;
          font-family: 'Poppins', system-ui, sans-serif;
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
        }

        .button-text {
          font-size: 14px;
        }

        /* Mobile Modal Overlay */
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
        }

        .mobile-modal-content {
          background: #ffffff;
          border-radius: 16px;
          width: 100%;
          max-width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          animation: mobileModalSlideIn 0.3s ease-out;
        }

        @keyframes mobileModalSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
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
          border-radius: 16px 16px 0 0;
          position: sticky;
          top: 0;
          z-index: 1001;
        }

        .mobile-modal-header h2 {
          color: #0A2540;
          font-size: 18px;
          font-weight: 700;
          margin: 0;
          font-family: 'Poppins', system-ui, sans-serif;
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

        /* RealScout Advanced Search Widget Mobile Styling */
        realscout-advanced-search {
          --rs-as-widget-width: 100% !important;
          --rs-as-mobile-optimized: true;
          --rs-as-show-all-filters: true;
          --rs-as-expanded-mode: true;
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: #3A8DDE;
          --rs-as-accent-color: #16B286;
          width: 100%;
          min-height: 480px;
          z-index: 1000;
          border-radius: 8px;
          overflow: hidden;
        }

        /* Responsive adjustments */
        @media (max-width: 480px) {
          .mobile-search-trigger {
            bottom: 16px;
            right: 16px;
            padding: 10px 16px;
            font-size: 13px;
            min-width: 140px;
          }

          .mobile-modal-content {
            margin: 8px;
            max-height: 95vh;
          }

          .mobile-modal-header {
            padding: 16px 20px;
          }

          .mobile-modal-header h2 {
            font-size: 16px;
          }

          .mobile-modal-body {
            padding: 16px;
          }
        }

        @media (max-width: 360px) {
          .mobile-search-trigger {
            bottom: 12px;
            right: 12px;
            padding: 8px 12px;
            font-size: 12px;
            min-width: 120px;
          }

          .button-text {
            font-size: 12px;
          }

          .search-icon {
            font-size: 14px;
          }
        }

        /* Hide on desktop - only show on mobile */
        /* Temporarily commented out for testing - uncomment for production */
        /*
        @media (min-width: 769px) {
          .mobile-search-trigger {
            display: none;
          }
        }
        */

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .mobile-modal-content {
            animation: none;
          }
          
          .mobile-search-trigger {
            transition: none;
          }
        }

        /* Focus styles for accessibility */
        .mobile-close-button:focus,
        .mobile-search-trigger:focus {
          outline: 2px solid #3A8DDE;
          outline-offset: 2px;
        }

        /* Touch-friendly sizing */
        @media (pointer: coarse) {
          .mobile-search-trigger {
            min-height: 44px;
            padding: 12px 20px;
          }
          
          .mobile-close-button {
            min-width: 44px;
            min-height: 44px;
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
          
          .mobile-modal-header h2 {
            color: #ffffff;
          }
          
          .mobile-close-button {
            color: #ffffff;
          }
          
          .mobile-close-button:hover {
            background: #404040;
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
  );
});
