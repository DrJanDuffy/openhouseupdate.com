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
    <div class="realscout-home-value-container">
      <style>{`
        /* Light Theme (Default) */
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

        /* Dark Theme */
        realscout-home-value.dark {
          --rs-hvw-background-color: #1f2937;
          --rs-hvw-title-color: #ffffff;
          --rs-hvw-subtitle-color: rgba(255, 255, 255, 0.7);
          --rs-hvw-primary-button-color: #3b82f6;
          --rs-hvw-secondary-button-color: #374151;
          --rs-hvw-secondary-button-text-color: #ffffff;
        }

        /* Vegas Theme */
        realscout-home-value.vegas {
          --rs-hvw-primary-button-color: #dc2626;
          --rs-hvw-secondary-button-color: #eab308;
          --rs-hvw-secondary-button-text-color: #000000;
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

      <div class="realscout-home-value-header">
        <h2>What's Your Home Worth?</h2>
        <p>Get an instant home valuation with market insights</p>

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

      <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw" class={currentTheme.value} />
    </div>
  )
})
