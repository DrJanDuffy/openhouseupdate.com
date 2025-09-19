import { component$, useSignal } from '@builder.io/qwik';
import RealScoutLoader from './realscout-loader';

export default component$(() => {
  const currentTheme = useSignal<'light' | 'dark' | 'vegas'>('light');
  return (
    <RealScoutLoader agentId="QWdlbnQtMjI1MDUw" widgetType="simple-search">
      <div class="realscout-simple-search-container">
        <style>{`
          /* Light Theme (Default) */
          realscout-simple-search {
            --rs-ss-font-primary-color: #6a6d72;
            --rs-ss-searchbar-border-color: hsl(0, 0%, 80%);
            --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
            --rs-ss-widget-width: 500px !important;
            width: 100%;
            min-height: 200px;
            z-index: 1000;
          }

          /* Dark Theme */
          realscout-simple-search.dark {
            --rs-ss-font-primary-color: #ffffff;
            --rs-ss-searchbar-border-color: #4b5563;
            --rs-ss-background-color: #1f2937;
            --rs-ss-button-color: #3b82f6;
          }

          /* Vegas Theme */
          realscout-simple-search.vegas {
            --rs-ss-button-color: #dc2626;
            --rs-ss-accent-color: #eab308;
            --rs-ss-searchbar-border-color: #dc2626;
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
            .realscout-simple-search-container {
              margin: 1rem 0;
              padding: 0.5rem;
            }
            
            .realscout-simple-search-header h2 {
              font-size: 1.5rem;
            }
            
            realscout-simple-search {
              --rs-ss-widget-width: 100% !important;
              min-height: 150px;
            }
          }
        `}</style>
        
        <div class="realscout-simple-search-header">
          <h2>Quick Property Search</h2>
          <p>Search for homes by address, neighborhood, or city</p>
          
          <div class="theme-switcher">
            <button 
              class={`theme-button ${currentTheme.value === 'light' ? 'active' : ''}`}
              onClick$={() => currentTheme.value = 'light'}
            >
              Light
            </button>
            <button 
              class={`theme-button ${currentTheme.value === 'dark' ? 'active' : ''}`}
              onClick$={() => currentTheme.value = 'dark'}
            >
              Dark
            </button>
            <button 
              class={`theme-button ${currentTheme.value === 'vegas' ? 'active' : ''}`}
              onClick$={() => currentTheme.value = 'vegas'}
            >
              Vegas
            </button>
          </div>
        </div>
        
        <realscout-simple-search 
          agent-encoded-id="QWdlbnQtMjI1MDUw"
          class={currentTheme.value}
        ></realscout-simple-search>
      </div>
    </RealScoutLoader>
  );
});
