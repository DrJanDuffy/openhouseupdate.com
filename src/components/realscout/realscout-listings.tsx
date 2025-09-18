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
    <div class="realscout-container">
      <style>{`
        realscout-office-listings {
          --rs-listing-divider-color: rgb(101, 141, 172);
          width: 100%;
          min-height: 480px;
          z-index: 1000;
        }
        
        .realscout-container {
          width: 100%;
          margin: 2rem 0;
          padding: 1rem;
          background: #F7F9FC;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        
        .realscout-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .realscout-header h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .realscout-header p {
          color: #3A8DDE;
          font-size: 1.1rem;
        }
      `}</style>
      
      <div class="realscout-header">
        <h2>Featured Listings</h2>
        <p>Discover your perfect home in Las Vegas</p>
      </div>
      
      <realscout-office-listings 
        agent-encoded-id="QWdlbnQtMjI1MDUw" 
        sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
        listing-status="For Sale" 
        property-types="SFR,MF,LAL" 
        price-min="500000" 
        price-max="600000"
      ></realscout-office-listings>
    </div>
  );
});
