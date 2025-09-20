import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <section class="error-404-page">
      <div class="container mx-auto px-6 py-16 text-center">
        {/* 404 Illustration */}
        <div class="mb-12">
          <div class="text-8xl md:text-9xl font-bold text-blue-600 mb-4">404</div>
          <div class="text-6xl mb-8">🏠</div>
        </div>

        {/* Error Message */}
        <div class="max-w-2xl mx-auto mb-12">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Oops! This Page Doesn't Exist
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            The page you're looking for might have been moved, deleted, or doesn't exist. But don't
            worry - we can help you find what you need!
          </p>
        </div>

        {/* Quick Actions */}
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a
            href="/"
            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
          >
            <div class="text-4xl mb-4">🏠</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Home Search</h3>
            <p class="text-gray-600 text-sm">Find your perfect Las Vegas home</p>
          </a>

          <a
            href="/search"
            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
          >
            <div class="text-4xl mb-4">🔍</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Advanced Search</h3>
            <p class="text-gray-600 text-sm">Search with detailed criteria</p>
          </a>

          <a
            href="/neighborhoods"
            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
          >
            <div class="text-4xl mb-4">🏘️</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Neighborhoods</h3>
            <p class="text-gray-600 text-sm">Explore Las Vegas areas</p>
          </a>

          <a
            href="/contact"
            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
          >
            <div class="text-4xl mb-4">📞</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
            <p class="text-gray-600 text-sm">Get expert help</p>
          </a>
        </div>

        {/* Popular Pages */}
        <div class="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Popular Pages</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Services</h3>
              <ul class="space-y-2 text-left">
                <li>
                  <a href="/home-valuation" class="text-blue-600 hover:text-blue-800">
                    Home Valuation
                  </a>
                </li>
                <li>
                  <a href="/buyer-services" class="text-blue-600 hover:text-blue-800">
                    Buyer Services
                  </a>
                </li>
                <li>
                  <a href="/seller-services" class="text-blue-600 hover:text-blue-800">
                    Seller Services
                  </a>
                </li>
                <li>
                  <a href="/market-analysis" class="text-blue-600 hover:text-blue-800">
                    Market Analysis
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Browse by Price</h3>
              <ul class="space-y-2 text-left">
                <li>
                  <a
                    href="/open-houses-for-sale/under-400k"
                    class="text-blue-600 hover:text-blue-800"
                  >
                    Under $400K
                  </a>
                </li>
                <li>
                  <a
                    href="/open-houses-for-sale/400k-600k"
                    class="text-blue-600 hover:text-blue-800"
                  >
                    $400K - $600K
                  </a>
                </li>
                <li>
                  <a
                    href="/open-houses-for-sale/600k-800k"
                    class="text-blue-600 hover:text-blue-800"
                  >
                    $600K - $800K
                  </a>
                </li>
                <li>
                  <a href="/open-houses-for-sale/over-1m" class="text-blue-600 hover:text-blue-800">
                    Over $1M
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Neighborhoods</h3>
              <ul class="space-y-2 text-left">
                <li>
                  <a href="/neighborhoods/summerlin" class="text-blue-600 hover:text-blue-800">
                    Summerlin
                  </a>
                </li>
                <li>
                  <a href="/neighborhoods/henderson" class="text-blue-600 hover:text-blue-800">
                    Henderson
                  </a>
                </li>
                <li>
                  <a
                    href="/neighborhoods/north-las-vegas"
                    class="text-blue-600 hover:text-blue-800"
                  >
                    North Las Vegas
                  </a>
                </li>
                <li>
                  <a href="/neighborhoods/spring-valley" class="text-blue-600 hover:text-blue-800">
                    Spring Valley
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div class="max-w-md mx-auto mb-12">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Search Our Site</h3>
          <div class="flex gap-2">
            <input
              type="text"
              placeholder="Search for properties, neighborhoods..."
              class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>
        </div>

        {/* Contact CTA */}
        <div class="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-8 text-white">
          <h2 class="text-2xl font-bold mb-4">Need Help Finding Something?</h2>
          <p class="text-xl mb-6 opacity-90">
            Dr. Janet Duffy is here to help you find exactly what you're looking for.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              class="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Dr. Duffy
            </a>
            <a
              href="/sitemap"
              class="bg-white bg-opacity-20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-opacity-30 transition-colors"
            >
              View Sitemap
            </a>
          </div>
        </div>
      </div>
    </section>
  )
})

export const head: DocumentHead = {
  title: '404 - Page Not Found | Open House Update',
  meta: [
    {
      name: 'description',
      content:
        "Page not found. Find your perfect Las Vegas home with Dr. Janet Duffy's real estate services.",
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
}
