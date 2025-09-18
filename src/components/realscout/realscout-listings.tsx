import { component$ } from '@builder.io/qwik';
import RealScoutLoader from './realscout-loader';

export default component$(() => {
  return (
    <RealScoutLoader agentId="QWdlbnQtMjI1MDUw" widgetType="listings">
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

          @media (max-width: 768px) {
            .realscout-container {
              margin: 1rem 0;
              padding: 0.5rem;
            }
            
            .realscout-header h2 {
              font-size: 1.5rem;
            }
            
            realscout-office-listings {
              min-height: 400px;
            }
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
    </RealScoutLoader>
  );
});
