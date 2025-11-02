import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import EnhancedPageSEO, { createOptimizedHead } from '~/components/seo/enhanced-page-seo'
import RelatedContent from '~/components/seo/related-content'

export default component$(() => {
  return (
    <section class="comparison-page">
      <div class="container mx-auto px-6 py-16 max-w-5xl">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Summerlin vs Henderson: Complete Comparison Guide
        </h1>
        <p class="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Comparing Las Vegas's two premier communities - Summerlin and Henderson - to help you choose the right neighborhood for your lifestyle and budget.
        </p>

        <div class="prose prose-lg max-w-none">
          {/* Overview Table */}
          <div class="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Quick Comparison</h2>
            <div class="overflow-x-auto">
              <table class="min-w-full border-collapse">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="border border-gray-300 px-4 py-3 text-left font-semibold">Feature</th>
                    <th class="border border-gray-300 px-4 py-3 text-left font-semibold">Summerlin</th>
                    <th class="border border-gray-300 px-4 py-3 text-left font-semibold">Henderson</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-gray-300 px-4 py-3"><strong>Zip Codes</strong></td>
                    <td class="border border-gray-300 px-4 py-3">89134, 89135, 89138, 89144</td>
                    <td class="border border-gray-300 px-4 py-3">89002, 89011, 89012, 89014, 89015, 89052, 89074</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="border border-gray-300 px-4 py-3"><strong>Price Range</strong></td>
                    <td class="border border-gray-300 px-4 py-3">$400,000-$2M+</td>
                    <td class="border border-gray-300 px-4 py-3">$400,000-$1.5M+</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 px-4 py-3"><strong>Average Home Price</strong></td>
                    <td class="border border-gray-300 px-4 py-3">$650,000-$800,000</td>
                    <td class="border border-gray-300 px-4 py-3">$550,000-$700,000</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="border border-gray-300 px-4 py-3"><strong>Schools</strong></td>
                    <td class="border border-gray-300 px-4 py-3">Excellent (8-10/10 ratings)</td>
                    <td class="border border-gray-300 px-4 py-3">Excellent (7-9/10 ratings)</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 px-4 py-3"><strong>Safety</strong></td>
                    <td class="border border-gray-300 px-4 py-3">Very Safe</td>
                    <td class="border border-gray-300 px-4 py-3">Very Safe</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="border border-gray-300 px-4 py-3"><strong>Commute to Strip</strong></td>
                    <td class="border border-gray-300 px-4 py-3">20-30 minutes</td>
                    <td class="border border-gray-300 px-4 py-3">25-35 minutes</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 px-4 py-3"><strong>Master-Planned</strong></td>
                    <td class="border border-gray-300 px-4 py-3">Yes</td>
                    <td class="border border-gray-300 px-4 py-3">Yes (many areas)</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="border border-gray-300 px-4 py-3"><strong>Premium Communities</strong></td>
                    <td class="border border-gray-300 px-4 py-3">The Ridges, The Summit</td>
                    <td class="border border-gray-300 px-4 py-3">Seven Hills, Lake Las Vegas, Macdonald Highlands</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Summerlin Overview</h2>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">Location & Zip Codes</h3>
            <p class="text-lg text-gray-700 mb-4">
              Summerlin is located in the western part of Las Vegas Valley, covering zip codes 89134, 89135, 89138, and 89144. It's a master-planned community with Downtown Summerlin shopping center, Red Rock Canyon access, and beautiful mountain views.
            </p>

            <h3 class="text-2xl font-semibold text-gray-900 mb-3 mt-6">Housing & Pricing</h3>
            <p class="text-lg text-gray-700 mb-4">
              Summerlin offers diverse housing options:
            </p>
            <ul class="list-disc pl-6 text-lg text-gray-700 mb-4">
              <li><strong>Entry-Level</strong>: $400,000-$600,000 in established areas</li>
              <li><strong>Mid-Range</strong>: $600,000-$1,000,000 in prime locations</li>
              <li><strong>Luxury</strong>: $1M-$2M+ in The Ridges and The Summit</li>
            </ul>
            <p class="text-lg text-gray-700 mb-4">
              Premium communities like The Ridges (zip codes 89134-89144) offer luxury resort-style living with stunning mountain views and high-end amenities.
            </p>

            <h3 class="text-2xl font-semibold text-gray-900 mb-3 mt-6">Schools & Education</h3>
            <p class="text-lg text-gray-700 mb-4">
              Summerlin schools consistently rank among the top in Clark County School District, with many rated 8-10/10. The area offers both public and private school options with strong academic programs and parent involvement. School quality is a major factor driving Summerlin home values.
            </p>

            <h3 class="text-2xl font-semibold text-gray-900 mb-3 mt-6">Amenities & Lifestyle</h3>
            <ul class="list-disc pl-6 text-lg text-gray-700 mb-4">
              <li>Downtown Summerlin shopping and entertainment</li>
              <li>Red Rock Canyon National Conservation Area access</li>
              <li>World-class golf courses</li>
              <li>Extensive parks and trails</li>
              <li>Community centers and recreation facilities</li>
              <li>Mountain views and natural beauty</li>
            </ul>

            <h3 class="text-2xl font-semibold text-gray-900 mb-3 mt-6">Best For</h3>
            <p class="text-lg text-gray-700 mb-4">
              Summerlin is ideal for: Families seeking excellent schools, professionals wanting premium living, retirees seeking active lifestyle, buyers prioritizing master-planned community amenities, and those wanting proximity to Red Rock Canyon.
            </p>
          </div>

          <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Henderson Overview</h2>
          <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">Location & Zip Codes</h3>
            <p class="text-lg text-gray-700 mb-4">
              Henderson is located southeast of Las Vegas, covering zip codes 89002, 89011, 89012, 89014, 89015, 89052, and 89074. It's Nevada's second-largest city with its own identity while maintaining easy access to Las Vegas.
            </p>

            <h3 class="text-2xl font-semibold text-gray-900 mb-3 mt-6">Housing & Pricing</h3>
            <p class="text-lg text-gray-700 mb-4">
              Henderson offers diverse housing across different areas:
            </p>
            <ul class="list-disc pl-6 text-lg text-gray-700 mb-4">
              <li><strong>Green Valley</strong> (89012, 89014): $500,000-$800,000 - family-friendly with excellent schools</li>
              <li><strong>Seven Hills</strong> (89052, 89074): $600,000-$1.5M - luxury gated community</li>
              <li><strong>Lake Las Vegas</strong> (89011): $800,000-$2M+ - upscale waterfront community</li>
              <li><strong>General Henderson</strong> (89002, 89015): $400,000-$700,000 - diverse options</li>
              <li><strong>Newer Communities</strong> (Anthem 89044, Inspirada 89044): $500,000-$900,000</li>
            </ul>

            <h3 class="text-2xl font-semibold text-gray-900 mb-3 mt-6">Schools & Education</h3>
            <p class="text-lg text-gray-700 mb-4">
              Henderson schools, particularly in Green Valley (89012, 89014) and Seven Hills (89052, 89074), have highly-rated schools with many rated 7-9/10. Coronado High School and other top-performing schools serve the area. Henderson consistently ranks as one of the safest cities in Nevada.
            </p>

            <h3 class="text-2xl font-semibold text-gray-900 mb-3 mt-6">Amenities & Lifestyle</h3>
            <ul class="list-disc pl-6 text-lg text-gray-700 mb-4">
              <li>Green Valley Ranch shopping and entertainment</li>
              <li>Family-friendly environment with parks</li>
              <li>Lake Las Vegas resort amenities</li>
              <li>Easy access to I-215 and I-515</li>
              <li>Strong community involvement</li>
              <li>Lower crime rates than Las Vegas city proper</li>
            </ul>

            <h3 class="text-2xl font-semibold text-gray-900 mb-3 mt-6">Best For</h3>
            <p class="text-lg text-gray-700 mb-4">
              Henderson is ideal for: Families prioritizing safety and schools, buyers seeking family-friendly communities, those wanting slightly lower prices than Summerlin, retirees in areas like Green Valley, and professionals seeking balanced lifestyle.
            </p>
          </div>

          <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Key Differences</h2>
          
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-white border-2 border-blue-200 rounded-lg p-6">
              <h3 class="text-2xl font-bold text-blue-600 mb-4">Choose Summerlin If:</h3>
              <ul class="list-disc pl-6 text-gray-700">
                <li>You want premier master-planned community</li>
                <li>Budget allows $600,000+ for mid-range options</li>
                <li>Red Rock Canyon proximity is important</li>
                <li>You prioritize top-tier schools (8-10/10)</li>
                <li>Luxury living in The Ridges appeals to you</li>
                <li>Downtown Summerlin lifestyle is desired</li>
              </ul>
            </div>

            <div class="bg-white border-2 border-green-200 rounded-lg p-6">
              <h3 class="text-2xl font-bold text-green-600 mb-4">Choose Henderson If:</h3>
              <ul class="list-disc pl-6 text-gray-700">
                <li>You want excellent value with great schools</li>
                <li>Budget is $500,000-$700,000 for quality homes</li>
                <li>Family-friendly, safe environment is priority</li>
                <li>Green Valley or Seven Hills appeal to you</li>
                <li>Lake Las Vegas lifestyle interests you</li>
                <li>You want city identity beyond Las Vegas</li>
              </ul>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Market Comparison (November 2025)</h2>
          <p class="text-lg text-gray-700 mb-4">
            Both Summerlin (zip codes 89134-89144) and Henderson (89002-89015) maintain strong property values with steady appreciation. Market conditions as of November 2025:
          </p>
          <ul class="list-disc pl-6 text-lg text-gray-700 mb-6">
            <li><strong>Summerlin</strong>: Stable market with steady demand, premium properties hold value well, particularly in The Ridges area</li>
            <li><strong>Henderson</strong>: Strong demand in Green Valley (89012, 89014) and Seven Hills (89052, 89074), good appreciation potential</li>
            <li>Both areas offer excellent long-term investment potential</li>
            <li>Inventory levels provide good buyer options in both communities</li>
          </ul>

          <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Making Your Decision</h2>
          <p class="text-lg text-gray-700 mb-6">
            When choosing between Summerlin and Henderson, consider: your budget (Summerlin tends to be pricier), commute requirements, school priorities, lifestyle preferences, and long-term plans. Both communities offer excellent quality of life, great schools, and strong property values. Visiting both areas and working with a knowledgeable agent like Dr. Jan Duffy can help you make the best decision for your situation.
          </p>
        </div>

        {/* Related Content */}
        <RelatedContent
          title="Explore More Neighborhood Comparisons"
          links={[
            {
              title: 'Summerlin Real Estate',
              url: '/neighborhoods/summerlin',
              description: 'Complete guide to Summerlin homes and neighborhoods',
            },
            {
              title: 'Henderson Real Estate',
              url: '/neighborhoods/henderson',
              description: 'Discover Henderson homes and communities',
            },
            {
              title: 'Top Neighborhoods for Families',
              url: '/blog/top-5-neighborhoods-families-las-vegas',
              description: 'Best family-friendly neighborhoods in Las Vegas',
            },
            {
              title: 'Property Search',
              url: '/search',
              description: 'Search for homes in Summerlin, Henderson, and all Las Vegas areas',
            },
            {
              title: 'Home Valuation',
              url: '/services/home-valuation',
              description: 'Get accurate home valuations for Summerlin or Henderson properties',
            },
          ]}
          className="mt-12"
        />

        {/* FAQ Section */}
        <EnhancedPageSEO
          pageKey="summerlin-vs-henderson"
          showFAQs={true}
          faqTitle="Summerlin vs Henderson - Frequently Asked Questions"
          className="mt-12"
        />
      </div>
    </section>
  )
})

export const head: DocumentHead = createOptimizedHead('summerlin-vs-henderson')

