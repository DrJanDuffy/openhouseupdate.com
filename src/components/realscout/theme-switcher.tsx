import { component$ } from '@builder.io/qwik';

export interface ThemeSwitcherProps {
  currentTheme: any; // Signal reference
  class?: string;
}

export default component$<ThemeSwitcherProps>(({ currentTheme, class: className }) => {
  return (
    <div class={`theme-switcher ${className || ''}`}>
      <style>{`
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
          .theme-switcher {
            gap: 0.25rem;
          }
          
          .theme-button {
            padding: 0.375rem 0.75rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
      
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
  );
});
