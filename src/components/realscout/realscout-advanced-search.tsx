import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

export default component$(() => {
  const currentTheme = useSignal<'light' | 'dark' | 'vegas'>('light')

  useVisibleTask$(() => {
    // Load RealScout script if not already loaded
    if (!document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script')
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
      script.type = 'module'
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)
    }
  })

  return (
    <div class="realscout-advanced-search-container">
      <style>{`
        /* Light Theme (Default) */
        realscout-advanced-search {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: rgb(35, 93, 137);
          --rs-as-widget-width: 500px !important;
          width: 100%;
          min-height: 480px;
          z-index: 1000;
        }

        /* Dark Theme */
        realscout-advanced-search.dark {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #1f2937;
          --rs-as-button-color: #3b82f6;
          --rs-as-text-color: #ffffff;
        }

        /* Vegas Theme */
        realscout-advanced-search.vegas {
          --rs-as-button-color: #dc2626; /* Red */
          --rs-as-accent-color: #eab308; /* Gold */
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
      `}</style>

      <div class="realscout-advanced-search-header">
        <h2>Advanced Property Search</h2>
        <p>Find your perfect home with detailed search filters</p>

        <div class="theme-switcher">
          <button
            type="button"
            class={`theme-button ${currentTheme.value === 'light' ? 'active' : ''}`}
            onClick$={() => {
              currentTheme.value = 'light'
            }}
          >
            Light
          </button>
          <button
            type="button"
            class={`theme-button ${currentTheme.value === 'dark' ? 'active' : ''}`}
            onClick$={() => {
              currentTheme.value = 'dark'
            }}
          >
            Dark
          </button>
          <button
            type="button"
            class={`theme-button ${currentTheme.value === 'vegas' ? 'active' : ''}`}
            onClick$={() => {
              currentTheme.value = 'vegas'
            }}
          >
            Vegas
          </button>
        </div>
      </div>

      <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw" class={currentTheme.value} />
    </div>
  )
})
