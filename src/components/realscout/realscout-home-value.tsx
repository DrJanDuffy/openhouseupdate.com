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
        
        .realscout-home-value-container {
          width: 100%;
          margin: 2rem 0;
          padding: 1rem;
          background: #F7F9FC;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        
        .realscout-home-value-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .realscout-home-value-header h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .realscout-home-value-header p {
          color: #3A8DDE;
          font-size: 1.1rem;
        }
      `}</style>
      
      <div class="realscout-home-value-header">
        <h2>What's Your Home Worth?</h2>
        <p>Get an instant home valuation with market insights</p>
      </div>
      
      <realscout-home-value 
        agent-encoded-id="QWdlbnQtMjI1MDUw"
      ></realscout-home-value>
    </div>
  );
});
