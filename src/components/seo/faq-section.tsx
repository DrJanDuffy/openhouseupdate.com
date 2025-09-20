import { component$ } from '@builder.io/qwik'
import EnhancedStructuredData from './enhanced-structured-data'

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQSectionProps {
  faqs: FAQItem[]
  title?: string
  className?: string
}

export default component$<FAQSectionProps>(
  ({ faqs, title = 'Frequently Asked Questions', className = '' }) => {
    if (faqs.length === 0) return null

    return (
      <>
        {/* Structured Data */}
        <EnhancedStructuredData type="FAQPage" faqs={faqs} />

        {/* Visual FAQ Section */}
        <section class={`faq-section ${className}`}>
          <div class="container mx-auto px-6 py-12 max-w-4xl">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>

            <div class="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={`faq-${faq.question.slice(0, 20)}-${index}`}
                  class="bg-white rounded-lg shadow-md p-6 border border-gray-200"
                >
                  <h3 class="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  {/* biome-ignore lint/security/noDangerouslySetInnerHtml: FAQ content is controlled and safe */}
                  <div class="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={faq.answer} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }
)
