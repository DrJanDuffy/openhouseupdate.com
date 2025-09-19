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
      document.head.appendChild(script);
    }

    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyDown);
    
    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const openModal = $(() => {
    isOpen.value = true;
    // Track modal open event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'modal_open', {
        event_category: 'search',
        event_label: 'advanced_search_modal'
      });
    }
  });

  const closeModal = $(() => {
    isOpen.value = false;
    // Track modal close event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'modal_close', {
        event_category: 'search',
        event_label: 'advanced_search_modal'
      });
    }
  });

  // Handle keyboard events
  const handleKeyDown = $((event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen.value) {
      closeModal();
    }
  });

  return (
    <>
      {/* Modal */}
      {isOpen.value && (
        <div 
          id="advanced-search-modal" 
          class="modal-overlay" 
          onClick$={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div class="modal-content" onClick$={(e) => e.stopPropagation()}>
            <div class="modal-header">
              <h2 id="modal-title">Advanced Property Search</h2>
              <button 
                class="close-button" 
                onClick$={closeModal}
                aria-label="Close Advanced Search Modal"
                title="Close Modal"
              >
                ×
              </button>
            </div>
            
            <div class="modal-body">
              <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
            </div>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button 
        onClick$={openModal} 
        class="floating-button"
        aria-label="Open Advanced Property Search"
        title="Open Advanced Property Search Modal"
      >
        🔍 Advanced Search
      </button>

      <style>{`
        .modal-overlay {
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
        }

        .modal-content {
          background: #ffffff;
          border-radius: 12px;
          width: 95%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          animation: modalSlideIn 0.3s ease-out;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          border-bottom: 1px solid #e5e7eb;
          background: #F7F9FC;
          border-radius: 12px 12px 0 0;
        }

        .modal-header h2 {
          color: #0A2540;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 2rem;
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

        .close-button:hover {
          background: #e5e7eb;
          color: #374151;
        }

        .modal-body {
          padding: 2rem;
          min-height: 480px;
        }

        .floating-button {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: linear-gradient(135deg, #3A8DDE 0%, #16B286 100%);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 1rem 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(58, 141, 222, 0.3);
          transition: all 0.3s ease;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 180px;
          justify-content: center;
        }

        .floating-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(58, 141, 222, 0.4);
        }

        .floating-button:active {
          transform: translateY(0);
        }

        /* RealScout Advanced Search Widget Styling */
        realscout-advanced-search {
          --rs-as-widget-width: 100% !important;
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

        /* Responsive Design */
        @media (max-width: 768px) {
          .modal-content {
            width: 98%;
            max-height: 95vh;
            margin: 1rem;
          }

          .modal-header {
            padding: 1rem 1.5rem;
          }

          .modal-header h2 {
            font-size: 1.25rem;
          }

          .modal-body {
            padding: 1rem;
          }

          .floating-button {
            bottom: 1rem;
            right: 1rem;
            padding: 0.875rem 1.25rem;
            font-size: 0.9rem;
            min-width: 160px;
          }
        }

        @media (max-width: 480px) {
          .floating-button {
            bottom: 1rem;
            right: 50%;
            transform: translateX(50%);
            border-radius: 25px;
            min-width: 140px;
          }

          .floating-button:hover {
            transform: translateX(50%) translateY(-2px);
          }

          .floating-button:active {
            transform: translateX(50%) translateY(0);
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .modal-content {
            animation: none;
          }
          
          .floating-button {
            transition: none;
          }
        }

        /* Focus styles for accessibility */
        .close-button:focus,
        .floating-button:focus {
          outline: 2px solid #3A8DDE;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
});
