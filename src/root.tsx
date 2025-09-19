import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <html prefix="og: https://ogp.me/ns#" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#3A8DDE" />
          
          {/* Preconnect to external domains for performance */}
          <link rel="preconnect" href="https://em.realscout.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
          
          {/* DNS prefetch for additional performance */}
          <link rel="dns-prefetch" href="https://em.realscout.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          
          {/* Manifest and icons */}
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
          
          {/* Enhanced RealScout script loading with error handling */}
          <script 
            src="https://em.realscout.com/widgets/realscout-web-components.umd.js" 
            type="module"
            crossOrigin="anonymous"
            async
          />
          
          <RouterHead />
        </head>
        <body>
          <RouterOutlet />
          <ServiceWorkerRegister />
          
          {/* Performance and error monitoring */}
          <script dangerouslySetInnerHTML={`
            // Enhanced error handling for RealScout
            window.addEventListener('error', function(event) {
              if (event.filename && event.filename.includes('realscout')) {
                console.warn('RealScout error detected:', event.message);
                // Track RealScout errors for monitoring
                if (window.gtag) {
                  gtag('event', 'realscout_error', {
                    event_category: 'RealScout',
                    event_label: event.message,
                    value: 1
                  });
                }
              }
            });
            
            // Monitor RealScout widget loading
            document.addEventListener('DOMContentLoaded', function() {
              const checkRealScoutElements = () => {
                const elements = document.querySelectorAll('realscout-simple-search, realscout-advanced-search, realscout-home-value, realscout-listings');
                elements.forEach(element => {
                  if (element && !element.hasAttribute('data-monitored')) {
                    element.setAttribute('data-monitored', 'true');
                    console.log('RealScout widget detected:', element.tagName);
                  }
                });
              };
              
              // Check immediately and after a delay
              checkRealScoutElements();
              setTimeout(checkRealScoutElements, 2000);
            });
          `} />
        </body>
      </html>
    </QwikCityProvider>
  );
});