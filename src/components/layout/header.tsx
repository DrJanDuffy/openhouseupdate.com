import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const isScrolled = useSignal(false);

  useVisibleTask$(() => {
    // Ensure RealScout components are available
    if (typeof window !== 'undefined') {
      const checkElements = () => {
        if (customElements.get('realscout-advanced-search')) {
          return;
        }
        setTimeout(checkElements, 100);
      };
      checkElements();

      // Handle scroll detection
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        isScrolled.value = scrollTop > 100; // Show after 100px scroll
      };

      // Add scroll listener
      window.addEventListener('scroll', handleScroll);
      
      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  });

  return (
    <header class="sticky-header">
      <style>{`
        .sticky-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99999;
          background: #0A2540;
          border-bottom: 3px solid #3A8DDE;
          transition: all 0.3s ease;
          transform: translateY(-100%);
          opacity: 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }
        
        .sticky-header.visible {
          transform: translateY(0);
          opacity: 1;
        }
        
        
        .sticky-search-bar {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.75rem 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .sticky-header realscout-advanced-search {
          --rs-as-widget-width: 500px !important;
          --rs-as-widget-height: 44px !important;
          --rs-as-inline-mode: true;
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: rgb(35, 93, 137);
          --rs-as-border-radius: 8px;
          --rs-as-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          width: 100%;
          max-width: 500px;
          height: 44px;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .sticky-header-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-right: 2rem;
        }
        
        .sticky-header-logo {
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          white-space: nowrap;
        }
        
        .sticky-header-logo:hover {
          color: #3A8DDE;
        }
        
        .sticky-search-container {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        
        .sticky-header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-left: 2rem;
        }
        
        .sticky-header-link {
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        
        .sticky-header-link:hover {
          background: rgba(58, 141, 222, 0.2);
          color: #3A8DDE;
        }
        
        .sticky-header-link.primary {
          background: #3A8DDE;
          color: white;
        }
        
        .sticky-header-link.primary:hover {
          background: #2a7bc7;
        }
        
        @media (max-width: 768px) {
          .sticky-search-bar {
            padding: 0.5rem 1rem;
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .sticky-header-brand {
            margin-right: 0;
            margin-bottom: 0.5rem;
          }
          
          .sticky-header-actions {
            margin-left: 0;
            margin-top: 0.5rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .sticky-header realscout-advanced-search {
            --rs-as-widget-width: 100% !important;
            max-width: 100%;
          }
          
          .sticky-header-link {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }
        
        @media (max-width: 480px) {
          .sticky-search-bar {
            padding: 0.5rem;
          }
          
          .sticky-header-brand {
            font-size: 0.9rem;
          }
          
          .sticky-header-actions {
            gap: 0.5rem;
          }
          
          .sticky-header-link {
            font-size: 0.75rem;
            padding: 0.3rem 0.6rem;
          }
        }
      `}</style>
      
      {/* Shows on scroll */}
      <div class={`sticky-search-bar ${isScrolled.value ? 'visible' : ''}`}>
        <div class="sticky-header-brand">
          <a href="/" class="sticky-header-logo">
            Open House Update
          </a>
        </div>
        
        <div class="sticky-search-container">
          <realscout-advanced-search 
            agent-encoded-id="QWdlbnQtMjI1MDUw"
          ></realscout-advanced-search>
        </div>
        
        <div class="sticky-header-actions">
          <a href="/search" class="sticky-header-link">Advanced</a>
          <a href="/map" class="sticky-header-link">Map</a>
          <a href="/this-weekend" class="sticky-header-link primary">Open Houses</a>
        </div>
      </div>
    </header>
  );
});
