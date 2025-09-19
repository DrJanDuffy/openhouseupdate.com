import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const scriptStatus = useSignal('Checking...');
  const customElementsStatus = useSignal('Checking...');
  const widgetStatus = useSignal('Checking...');

  useVisibleTask$(() => {
    // Check script loading status
    const checkScript = () => {
      const script = document.querySelector('script[src*="realscout-web-components"]');
      if (script) {
        scriptStatus.value = '✅ Script loaded';
      } else {
        scriptStatus.value = '❌ Script not found';
      }
    };

    // Check custom elements
    const checkCustomElements = () => {
      const elements = [
        'realscout-simple-search',
        'realscout-advanced-search',
        'realscout-listings',
        'realscout-home-value'
      ];
      
      const foundElements = elements.filter(el => customElements.get(el));
      if (foundElements.length > 0) {
        customElementsStatus.value = `✅ Found: ${foundElements.join(', ')}`;
      } else {
        customElementsStatus.value = '❌ No custom elements found';
      }
    };

    // Check widget elements
    const checkWidgets = () => {
      const widgets = document.querySelectorAll('[agent-encoded-id]');
      if (widgets.length > 0) {
        widgetStatus.value = `✅ Found ${widgets.length} widget(s)`;
      } else {
        widgetStatus.value = '❌ No widgets found';
      }
    };

    // Run checks immediately
    checkScript();
    checkCustomElements();
    checkWidgets();

    // Re-check every 2 seconds
    const interval = setInterval(() => {
      checkScript();
      checkCustomElements();
      checkWidgets();
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div class="realscout-test-container">
      <h3>RealScout Widget Status</h3>
      <div class="status-grid">
        <div class="status-item">
          <strong>Script Status:</strong> {scriptStatus.value}
        </div>
        <div class="status-item">
          <strong>Custom Elements:</strong> {customElementsStatus.value}
        </div>
        <div class="status-item">
          <strong>Widget Elements:</strong> {widgetStatus.value}
        </div>
      </div>
      
      <div class="test-widgets">
        <h4>Test Widgets:</h4>
        <div class="widget-test">
          <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
        </div>
      </div>

      <style>{`
        .realscout-test-container {
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          padding: 1.5rem;
          margin: 2rem 0;
        }
        .realscout-test-container h3 {
          color: #0A2540;
          margin-bottom: 1rem;
        }
        .status-grid {
          display: grid;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .status-item {
          padding: 0.5rem;
          background: white;
          border-radius: 4px;
          border-left: 4px solid #3A8DDE;
        }
        .test-widgets {
          margin-top: 1rem;
        }
        .test-widgets h4 {
          color: #0A2540;
          margin-bottom: 0.5rem;
        }
        .widget-test {
          background: white;
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }
      `}</style>
    </div>
  );
});
