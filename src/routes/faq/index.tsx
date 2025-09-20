import { $, component$, useSignal } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  const openFAQ = useSignal<number | null>(null)

  const toggleFAQ = $((index: number) => {
    openFAQ.value = openFAQ.value === index ? null : index
  })

  const faqs = [
    {
      question: 'How do I get started with buying a home in Las Vegas?',
      answer:
        'The first step is to get pre-approved for a mortgage. This will help you understand your budget and make you a more competitive buyer. Dr. Janet Duffy can connect you with trusted lenders and guide you through the entire process from pre-approval to closing.',
    },
    {
      question: "What's the current Las Vegas real estate market like?",
      answer:
        'The Las Vegas market has been strong with steady appreciation. Home prices have increased approximately 8% year-over-year. Inventory levels vary by neighborhood, with Summerlin and Henderson typically having more competitive markets. Dr. Duffy provides regular market updates and can give you specific insights for your target areas.',
    },
    {
      question: 'How much does it cost to sell my home?',
      answer:
        'Typical selling costs include real estate commission (usually 5-6% total), closing costs (1-3%), and any repairs or staging expenses. Dr. Duffy provides a detailed cost breakdown during your initial consultation and can help you maximize your net proceeds through strategic pricing and marketing.',
    },
    {
      question: 'What neighborhoods are best for families in Las Vegas?',
      answer:
        "Popular family-friendly neighborhoods include Summerlin (excellent schools, master-planned community), Henderson (great amenities, family-oriented), and parts of North Las Vegas (newer construction, good value). Each area has unique benefits, and Dr. Duffy can help you find the perfect fit for your family's needs.",
    },
    {
      question: 'How long does the home buying process take?',
      answer:
        'Typically 30-45 days from accepted offer to closing, but this can vary based on financing, inspections, and other factors. The entire process from starting your search to moving in usually takes 2-4 months. Dr. Duffy will guide you through each step and keep you informed of timelines.',
    },
    {
      question: 'Do I need a real estate agent to buy or sell?',
      answer:
        "While not legally required, having a professional agent provides significant advantages. Agents have access to MLS listings, market expertise, negotiation skills, and can handle complex paperwork. Dr. Duffy's local market knowledge and professional network can save you time, money, and stress.",
    },
    {
      question: 'What should I look for in a Las Vegas home?',
      answer:
        'Key considerations include location (schools, commute, amenities), condition of HVAC systems (important in desert climate), energy efficiency, HOA fees and restrictions, and future development plans in the area. Dr. Duffy can help you identify potential issues and opportunities during showings.',
    },
    {
      question: 'How do I get a home valuation?',
      answer:
        "Dr. Duffy provides free home valuations using current market data, comparable sales, and local market trends. You can request a valuation through our website form or by contacting her directly. The valuation includes detailed market analysis and recommendations for maximizing your home's value.",
    },
    {
      question: 'What financing options are available for Las Vegas homes?',
      answer:
        'Common options include conventional loans, FHA loans (great for first-time buyers), VA loans (for veterans), and jumbo loans (for higher-priced homes). Dr. Duffy works with trusted lenders who can explain all options and help you find the best rates and terms for your situation.',
    },
    {
      question: 'How can I prepare my home for sale?',
      answer:
        "Key steps include decluttering, deep cleaning, minor repairs, professional staging, and professional photography. Dr. Duffy provides a comprehensive home preparation checklist and can recommend trusted contractors, stagers, and photographers to help maximize your home's appeal and value.",
    },
  ]

  return (
    <section class="faq-page">
      <div class="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span class="text-blue-600">Questions</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about buying and selling real estate in Las Vegas. Can't
            find what you're looking for? Contact Dr. Janet Duffy for personalized assistance.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div class="max-w-4xl mx-auto mb-16">
          <div class="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={`faq-${faq.question.slice(0, 20)}-${index}`}
                class="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  type="button"
                  onClick$={() => toggleFAQ(index)}
                  class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 class="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <div class="text-blue-600 text-2xl">{openFAQ.value === index ? '−' : '+'}</div>
                </button>
                {openFAQ.value === index && (
                  <div class="px-6 pb-4">
                    <p class="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 text-center mb-8">Browse by Topic</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white rounded-lg shadow-lg p-6 text-center">
              <div class="text-4xl mb-4">🏠</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Buying a Home</h3>
              <p class="text-gray-600 mb-4">
                Everything you need to know about purchasing your Las Vegas home
              </p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Pre-approval process</li>
                <li>• Market conditions</li>
                <li>• Neighborhood selection</li>
                <li>• Financing options</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-6 text-center">
              <div class="text-4xl mb-4">💰</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Selling a Home</h3>
              <p class="text-gray-600 mb-4">Expert guidance for selling your Las Vegas property</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Home preparation</li>
                <li>• Pricing strategy</li>
                <li>• Marketing approach</li>
                <li>• Cost considerations</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-6 text-center">
              <div class="text-4xl mb-4">📊</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Market & Services</h3>
              <p class="text-gray-600 mb-4">Understanding the Las Vegas market and our services</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Market trends</li>
                <li>• Home valuations</li>
                <li>• Professional services</li>
                <li>• Local expertise</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div class="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 class="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p class="text-xl mb-8 opacity-90">
            Dr. Janet Duffy is here to provide personalized answers and expert guidance for your
            real estate needs.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              class="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Dr. Duffy
            </a>
            <a
              href="/home-valuation"
              class="bg-white bg-opacity-20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-opacity-30 transition-colors"
            >
              Get Free Valuation
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div class="mt-16">
          <h2 class="text-2xl font-bold text-gray-900 text-center mb-8">Quick Links</h2>
          <div class="grid md:grid-cols-4 gap-4">
            <a
              href="/search"
              class="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow"
            >
              <div class="text-2xl mb-2">🔍</div>
              <div class="font-semibold text-gray-900">Search Properties</div>
            </a>
            <a
              href="/neighborhoods"
              class="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow"
            >
              <div class="text-2xl mb-2">🏘️</div>
              <div class="font-semibold text-gray-900">Neighborhoods</div>
            </a>
            <a
              href="/blog"
              class="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow"
            >
              <div class="text-2xl mb-2">📝</div>
              <div class="font-semibold text-gray-900">Market Blog</div>
            </a>
            <a
              href="/about"
              class="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow"
            >
              <div class="text-2xl mb-2">👩‍💼</div>
              <div class="font-semibold text-gray-900">About Dr. Duffy</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
})

export const head: DocumentHead = {
  title: 'FAQ - Las Vegas Real Estate Questions | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content:
        'Get answers to frequently asked questions about buying and selling real estate in Las Vegas. Expert guidance from Dr. Janet Duffy.',
    },
    {
      name: 'keywords',
      content:
        'Las Vegas real estate FAQ, home buying questions, selling home advice, real estate agent help, Nevada property questions',
    },
  ],
}
