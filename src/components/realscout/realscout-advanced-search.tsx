import { component$, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
  useVisibleTask$(() => {
    // Load RealScout script if not already loaded
    if (!document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  });

  return (
    <div class="realscout-advanced-search-container">
      <style>{`
        realscout-advanced-search {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: rgb(35, 93, 137);
          --rs-as-widget-width: 500px !important;
          width: 100%;
          min-height: 480px;
          z-index: 1000;
        }
        
        .realscout-advanced-search-container {
          width: 100%;
          margin: 2rem 0;
          padding: 1rem;
          background: #F7F9FC;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        
        .realscout-advanced-search-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .realscout-advanced-search-header h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .realscout-advanced-search-header p {
          color: #3A8DDE;
          font-size: 1.1rem;
        }
      `}</style>
      
      <div class="realscout-advanced-search-header">
        <h2>Advanced Property Search</h2>
        <p>Find your perfect home with detailed search filters</p>
      </div>
      
      <realscout-advanced-search 
        agent-encoded-id="QWdlbnQtMjI1MDUw"
      ></realscout-advanced-search>
    </div>
  );
});
