import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section class="about-page">
      <div class="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span class="text-blue-600">Dr. Janet Duffy</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted Las Vegas real estate professional with years of experience helping clients achieve their property goals.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Professional Photo Placeholder */}
          <div class="bg-gradient-to-br from-blue-600 to-green-600 rounded-lg shadow-lg p-8 text-white">
            <div class="text-center">
              <div class="w-48 h-48 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span class="text-6xl">👩‍💼</span>
              </div>
              <h3 class="text-2xl font-bold mb-2">Dr. Janet Duffy</h3>
              <p class="text-lg opacity-90">Licensed Real Estate Agent</p>
              <p class="text-sm opacity-75 mt-2">Nevada License #XXXXXX</p>
            </div>
          </div>

          {/* Professional Summary */}
          <div class="space-y-6">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Professional Excellence</h2>
              <p class="text-gray-600 text-lg leading-relaxed">
                Dr. Janet Duffy brings a unique combination of academic excellence and real-world experience to Las Vegas real estate. With a background in [field] and years of local market expertise, she provides clients with data-driven insights and personalized service.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 rounded-lg p-6">
                <h3 class="text-xl font-bold text-blue-900 mb-3">🏆 Awards & Recognition</h3>
                <ul class="text-blue-800 space-y-2">
                  <li>• Top Producer Award</li>
                  <li>• Client Satisfaction Excellence</li>
                  <li>• Local Market Expert</li>
                </ul>
              </div>

              <div class="bg-green-50 rounded-lg p-6">
                <h3 class="text-xl font-bold text-green-900 mb-3">📈 Market Expertise</h3>
                <ul class="text-green-800 space-y-2">
                  <li>• 5+ Years Experience</li>
                  <li>• Las Vegas Native</li>
                  <li>• Market Analysis Specialist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Services & Specializations</h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-8 text-center">
              <div class="text-4xl mb-4">🏠</div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Home Buying</h3>
              <p class="text-gray-600">
                Expert guidance through the entire home buying process, from initial search to closing day.
              </p>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-8 text-center">
              <div class="text-4xl mb-4">💰</div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Home Selling</h3>
              <p class="text-gray-600">
                Strategic pricing and marketing to maximize your home's value and minimize time on market.
              </p>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-8 text-center">
              <div class="text-4xl mb-4">📊</div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Market Analysis</h3>
              <p class="text-gray-600">
                Comprehensive market insights and property valuations based on current market data.
              </p>
            </div>
          </div>
        </div>

        {/* Local Market Knowledge */}
        <div class="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-8">Las Vegas Market Expertise</h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Neighborhood Specialties</h3>
              <ul class="space-y-2 text-gray-600">
                <li>• Summerlin - Luxury homes and master-planned communities</li>
                <li>• Henderson - Family-friendly neighborhoods</li>
                <li>• North Las Vegas - Growing communities and new construction</li>
                <li>• Spring Valley - Established neighborhoods with character</li>
                <li>• Enterprise - Modern developments and amenities</li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Market Insights</h3>
              <ul class="space-y-2 text-gray-600">
                <li>• Current market trends and pricing</li>
                <li>• Investment opportunities</li>
                <li>• New construction developments</li>
                <li>• School district information</li>
                <li>• Community amenities and lifestyle</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">What Clients Say</h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p class="text-gray-600 italic mb-4">
                "Dr. Duffy made our home buying process seamless. Her knowledge of the Las Vegas market and attention to detail helped us find the perfect home."
              </p>
              <div class="font-semibold text-gray-900">- Sarah & Mike Johnson</div>
              <div class="text-sm text-gray-500">First-time homebuyers</div>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p class="text-gray-600 italic mb-4">
                "Professional, knowledgeable, and always available. Dr. Duffy helped us sell our home quickly and at the right price."
              </p>
              <div class="font-semibold text-gray-900">- Robert Chen</div>
              <div class="text-sm text-gray-500">Home seller</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div class="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p class="text-xl mb-8 opacity-90">
            Let's discuss your real estate goals and how I can help you achieve them.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              class="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Me Today
            </a>
            <a
              href="/home-valuation"
              class="bg-white bg-opacity-20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-opacity-30 transition-colors"
            >
              Get Home Valuation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'About Dr. Janet Duffy - Las Vegas Real Estate Agent',
  meta: [
    {
      name: 'description',
      content: 'Learn about Dr. Janet Duffy, a licensed Las Vegas real estate agent with years of experience helping clients buy and sell homes in Nevada.',
    },
    {
      name: 'keywords',
      content: 'about real estate agent, Las Vegas realtor, Dr. Janet Duffy, Nevada real estate, professional real estate services',
    },
  ],
};
