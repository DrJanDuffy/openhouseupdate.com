import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section class="sitemap-page">
      <div class="container mx-auto px-6 py-16 max-w-4xl">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
        
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 mb-8">
            Find all pages and sections of Open House Update - Las Vegas Real Estate Services
          </p>

          <div class="grid md:grid-cols-2 gap-8">
            {/* Main Pages */}
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Main Pages</h2>
              <ul class="space-y-2">
                <li><a href="/" class="text-blue-600 hover:text-blue-800">Home</a></li>
                <li><a href="/about" class="text-blue-600 hover:text-blue-800">About Dr. Janet Duffy</a></li>
                <li><a href="/contact" class="text-blue-600 hover:text-blue-800">Contact Us</a></li>
                <li><a href="/privacy-policy" class="text-blue-600 hover:text-blue-800">Privacy Policy</a></li>
                <li><a href="/terms-of-service" class="text-blue-600 hover:text-blue-800">Terms of Service</a></li>
              </ul>
            </div>

            {/* Property Search */}
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Property Search</h2>
              <ul class="space-y-2">
                <li><a href="/search" class="text-blue-600 hover:text-blue-800">Advanced Search</a></li>
                <li><a href="/map" class="text-blue-600 hover:text-blue-800">Map Search</a></li>
                <li><a href="/this-weekend" class="text-blue-600 hover:text-blue-800">This Weekend's Open Houses</a></li>
              </ul>
            </div>

            {/* Services */}
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Services</h2>
              <ul class="space-y-2">
                <li><a href="/services" class="text-blue-600 hover:text-blue-800">All Services</a></li>
                <li><a href="/home-valuation" class="text-blue-600 hover:text-blue-800">Home Valuation</a></li>
                <li><a href="/buyer-services" class="text-blue-600 hover:text-blue-800">Buyer Services</a></li>
                <li><a href="/seller-services" class="text-blue-600 hover:text-blue-800">Seller Services</a></li>
                <li><a href="/market-analysis" class="text-blue-600 hover:text-blue-800">Market Analysis</a></li>
              </ul>
            </div>

            {/* Price Ranges */}
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Browse by Price</h2>
              <ul class="space-y-2">
                <li><a href="/open-houses-for-sale/under-400k" class="text-blue-600 hover:text-blue-800">Under $400K</a></li>
                <li><a href="/open-houses-for-sale/400k-600k" class="text-blue-600 hover:text-blue-800">$400K - $600K</a></li>
                <li><a href="/open-houses-for-sale/600k-800k" class="text-blue-600 hover:text-blue-800">$600K - $800K</a></li>
                <li><a href="/open-houses-for-sale/800k-1m" class="text-blue-600 hover:text-blue-800">$800K - $1M</a></li>
                <li><a href="/open-houses-for-sale/over-1m" class="text-blue-600 hover:text-blue-800">Over $1M</a></li>
              </ul>
            </div>

            {/* Neighborhoods */}
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Popular Neighborhoods</h2>
              <ul class="space-y-2">
                <li><a href="/neighborhoods/summerlin" class="text-blue-600 hover:text-blue-800">Summerlin</a></li>
                <li><a href="/neighborhoods/henderson" class="text-blue-600 hover:text-blue-800">Henderson</a></li>
                <li><a href="/neighborhoods/north-las-vegas" class="text-blue-600 hover:text-blue-800">North Las Vegas</a></li>
                <li><a href="/neighborhoods/spring-valley" class="text-blue-600 hover:text-blue-800">Spring Valley</a></li>
                <li><a href="/neighborhoods/enterprise" class="text-blue-600 hover:text-blue-800">Enterprise</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div class="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-6 text-white">
              <h2 class="text-2xl font-bold mb-4">Quick Links</h2>
              <ul class="space-y-2">
                <li><a href="/contact" class="text-white hover:text-gray-200">Get Started Today</a></li>
                <li><a href="/home-valuation" class="text-white hover:text-gray-200">Free Home Valuation</a></li>
                <li><a href="/search" class="text-white hover:text-gray-200">Search Properties</a></li>
                <li><a href="/this-weekend" class="text-white hover:text-gray-200">Open Houses This Weekend</a></li>
              </ul>
            </div>
          </div>

          {/* Additional Information */}
          <div class="mt-12 bg-gray-50 rounded-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">About This Sitemap</h2>
            <p class="text-gray-600 mb-4">
              This sitemap provides a comprehensive overview of all pages available on Open House Update. 
              Our website is designed to help you find your perfect home in Las Vegas with the guidance 
              of Dr. Janet Duffy, a licensed real estate professional.
            </p>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Real Estate Services</h3>
                <p class="text-gray-600 text-sm">
                  Professional buying and selling services, home valuations, and market analysis 
                  for the Las Vegas area.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Local Expertise</h3>
                <p class="text-gray-600 text-sm">
                  Specialized knowledge of Las Vegas neighborhoods, market trends, and 
                  community amenities.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div class="mt-8 text-center">
            <p class="text-gray-600 mb-4">
              Can't find what you're looking for? Contact us directly:
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                class="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Dr. Janet Duffy
              </a>
              <a
                href="mailto:drduffy@bhhsnv.com"
                class="bg-gray-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Sitemap - Open House Update',
  meta: [
    {
      name: 'description',
      content: 'Complete sitemap for Open House Update - Las Vegas real estate services. Find all pages, services, and property search options.',
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
};
