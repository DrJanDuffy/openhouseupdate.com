import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { MobileSearchButton } from '~/components/modals';

export default component$(() => {
  return (
    <>
      <div class="demo-container">
        <style>{`
          .demo-container {
            padding: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            min-height: 100vh;
            background: linear-gradient(135deg, #F7F9FC 0%, #ffffff 100%);
          }

          .demo-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .demo-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #0A2540;
            margin-bottom: 1rem;
          }

          .demo-subtitle {
            font-size: 1.2rem;
            color: #3A8DDE;
            margin-bottom: 2rem;
          }

          .demo-content {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            margin-bottom: 2rem;
          }

          .demo-section {
            margin-bottom: 2rem;
          }

          .demo-section h3 {
            color: #0A2540;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          .demo-section p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .feature-list {
            list-style: none;
            padding: 0;
          }

          .feature-list li {
            padding: 0.5rem 0;
            color: #0A2540;
            position: relative;
            padding-left: 1.5rem;
          }

          .feature-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #16B286;
            font-weight: bold;
          }

          .instructions {
            background: #F7F9FC;
            border-left: 4px solid #3A8DDE;
            padding: 1rem 1.5rem;
            margin: 1rem 0;
            border-radius: 0 8px 8px 0;
          }

          .instructions h4 {
            color: #0A2540;
            margin-bottom: 0.5rem;
            font-weight: 600;
          }

          .instructions p {
            color: #666;
            margin: 0;
          }

          @media (max-width: 768px) {
            .demo-container {
              padding: 1rem;
            }

            .demo-title {
              font-size: 2rem;
            }

            .demo-content {
              padding: 1.5rem;
            }
          }
        `}</style>

        <div class="demo-header">
          <h1 class="demo-title">Mobile Search Button Demo</h1>
          <p class="demo-subtitle">Test the mobile floating search button functionality</p>
        </div>

        <div class="demo-content">
          <div class="demo-section">
            <h3>About This Demo</h3>
            <p>
              This page demonstrates the mobile floating search button that appears on mobile devices.
              The button provides quick access to the RealScout advanced search functionality.
            </p>
          </div>

          <div class="demo-section">
            <h3>Features</h3>
            <ul class="feature-list">
              <li>Mobile-optimized floating button</li>
              <li>RealScout advanced search integration</li>
              <li>Responsive modal design</li>
              <li>Touch-friendly interface</li>
              <li>Accessibility compliant</li>
              <li>Progressive enhancement</li>
            </ul>
          </div>

          <div class="demo-section">
            <h3>How to Test</h3>
            <div class="instructions">
              <h4>Desktop Testing</h4>
              <p>The mobile button is hidden on desktop screens (769px and above). Resize your browser window to see it appear.</p>
            </div>
            
            <div class="instructions">
              <h4>Mobile Testing</h4>
              <p>On mobile devices or narrow browser windows, you'll see a floating button in the bottom-right corner.</p>
            </div>
            
            <div class="instructions">
              <h4>Button Interaction</h4>
              <p>Click the floating button to open the advanced search modal with RealScout integration.</p>
            </div>
          </div>

          <div class="demo-section">
            <h3>Technical Details</h3>
            <p>
              The mobile search button uses Qwik's reactive state management and integrates with RealScout's 
              web components API. It includes proper CSS custom properties for styling and follows the 
              design system established in the project.
            </p>
            <p>
              The component is optimized for mobile with touch-friendly sizing, proper z-index management,
              and responsive breakpoints that hide the button on desktop screens.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Search Button Component */}
      <MobileSearchButton />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Mobile Search Button Demo - Open House Update',
  meta: [
    {
      name: 'description',
      content: 'Test the mobile floating search button functionality with RealScout integration.',
    },
    {
      property: 'og:title',
      content: 'Mobile Search Button Demo',
    },
    {
      property: 'og:description',
      content: 'Test the mobile floating search button functionality with RealScout integration.',
    },
  ],
};
