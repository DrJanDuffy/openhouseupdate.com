import { component$, useSignal } from '@builder.io/qwik'
import RealScoutLoader from './realscout-loader'

export default component$(() => {
  const currentTheme = useSignal<'light' | 'dark' | 'vegas'>('light')
  return (
    <RealScoutLoader agentId="QWdlbnQtMjI1MDUw" widgetType="listings">
      <div class="realscout-container">
        <style>{`
          /* Light Theme (Default) */
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            --rs-listing-background-color: #ffffff;
            --rs-listing-text-color: #000000;
            width: 100%;
            min-height: 480px;
            z-index: 1000;
          }

          /* Dark Theme */
          realscout-office-listings.dark {
            --rs-listing-divider-color: #4b5563;
            --rs-listing-background-color: #1f2937;
            --rs-listing-text-color: #ffffff;
            --rs-listing-button-color: #3b82f6;
          }

          /* Vegas Theme */
          realscout-office-listings.vegas {
            --rs-listing-divider-color: #dc2626;
            --rs-listing-button-color: #dc2626;
            --rs-listing-accent-color: #eab308;
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

          .theme-switcher {
            display: flex;
            gap: 0.5rem;
            justify-content: center;
            margin-bottom: 1rem;
          }

          .theme-button {
            padding: 0.5rem 1rem;
            border: 2px solid #3A8DDE;
            background: transparent;
            color: #3A8DDE;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.875rem;
            font-weight: 500;
            transition: all 0.2s ease-in-out;
          }

          .theme-button:hover {
            background: #3A8DDE;
            color: white;
          }

          .theme-button.active {
            background: #3A8DDE;
            color: white;
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

          <div class="theme-switcher">
            <button
              class={`theme-button ${currentTheme.value === 'light' ? 'active' : ''}`}
              onClick$={() => (currentTheme.value = 'light')}
            >
              Light
            </button>
            <button
              class={`theme-button ${currentTheme.value === 'dark' ? 'active' : ''}`}
              onClick$={() => (currentTheme.value = 'dark')}
            >
              Dark
            </button>
            <button
              class={`theme-button ${currentTheme.value === 'vegas' ? 'active' : ''}`}
              onClick$={() => (currentTheme.value = 'vegas')}
            >
              Vegas
            </button>
          </div>
        </div>

        <realscout-office-listings
          agent-encoded-id="QWdlbnQtMjI1MDUw"
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
          listing-status="For Sale"
          property-types="SFR,MF,LAL"
          price-min="500000"
          price-max="600000"
          class={currentTheme.value}
        />
      </div>
    </RealScoutLoader>
  )
})
