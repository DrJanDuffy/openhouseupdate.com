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
    <div class="realscout-simple-search-container">
      <style>{`
        realscout-simple-search {
          --rs-ss-font-primary-color: #6a6d72;
          --rs-ss-searchbar-border-color: hsl(0, 0%, 80%);
          --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
          --rs-ss-widget-width: 500px !important;
          width: 100%;
          min-height: 200px;
          z-index: 1000;
        }
        
        .realscout-simple-search-container {
          width: 100%;
          margin: 2rem 0;
          padding: 1rem;
          background: #F7F9FC;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        
        .realscout-simple-search-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .realscout-simple-search-header h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .realscout-simple-search-header p {
          color: #3A8DDE;
          font-size: 1.1rem;
        }
      `}</style>
      
      <div class="realscout-simple-search-header">
        <h2>Quick Property Search</h2>
        <p>Search for homes by address, neighborhood, or city</p>
      </div>
      
      <realscout-simple-search 
        agent-encoded-id="QWdlbnQtMjI1MDUw"
      ></realscout-simple-search>
    </div>
  );
});
