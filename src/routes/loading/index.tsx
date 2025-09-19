import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section class="loading-page">
      <div class="container mx-auto px-6 py-16 text-center">
        {/* Loading Animation */}
        <div class="mb-12">
          <div class="relative inline-block">
            {/* Spinning House Icon */}
            <div class="text-6xl mb-8 animate-spin">
              🏠
            </div>
            
            {/* Loading Dots */}
            <div class="flex justify-center space-x-2">
              <div class="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
              <div class="w-3 h-3 bg-green-600 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
              <div class="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
          </div>
        </div>

        {/* Loading Message */}
        <div class="max-w-2xl mx-auto mb-12">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Loading Your Perfect Home Search
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            We're gathering the latest Las Vegas property listings and market data for you...
          </p>
        </div>

        {/* Progress Indicators */}
        <div class="max-w-md mx-auto mb-12">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Loading property data</span>
              <div class="w-32 bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full animate-pulse" style="width: 75%"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Updating market information</span>
              <div class="w-32 bg-gray-200 rounded-full h-2">
                <div class="bg-green-600 h-2 rounded-full animate-pulse" style="width: 60%"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Preparing search results</span>
              <div class="w-32 bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full animate-pulse" style="width: 90%"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips While Loading */}
        <div class="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">While You Wait...</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-4xl mb-4">📊</div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Market Insights</h3>
              <p class="text-gray-600 text-sm">
                Las Vegas home prices have increased 8% year-over-year
              </p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-4">🏘️</div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Popular Areas</h3>
              <p class="text-gray-600 text-sm">
                Summerlin and Henderson remain top choices for families
              </p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-4">⏰</div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p class="text-gray-600 text-sm">
                Dr. Duffy responds to inquiries within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div class="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-8 text-white">
          <h2 class="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p class="text-xl mb-6 opacity-90">
            While the page loads, feel free to contact Dr. Janet Duffy directly.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1702XXX-XXXX"
              class="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 Call Now
            </a>
            <a
              href="mailto:drduffy@bhhsnv.com"
              class="bg-white bg-opacity-20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-opacity-30 transition-colors"
            >
              📧 Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
              transform: translate3d(0,0,0);
            }
            40%, 43% {
              transform: translate3d(0, -8px, 0);
            }
            70% {
              transform: translate3d(0, -4px, 0);
            }
            90% {
              transform: translate3d(0, -2px, 0);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
          
          .animate-spin {
            animation: spin 2s linear infinite;
          }
          
          .animate-bounce {
            animation: bounce 1s infinite;
          }
          
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Loading... | Open House Update',
  meta: [
    {
      name: 'description',
      content: 'Loading your Las Vegas real estate search results...',
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
};
