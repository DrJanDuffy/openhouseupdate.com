import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

interface ExitIntentPopupProps {
  isVisible: boolean
  onClose: () => void
}

export default component$<ExitIntentPopupProps>(({ isVisible, onClose }) => {
  const email = useSignal('')
  const phone = useSignal('')
  const isSubmitting = useSignal(false)
  const isSubmitted = useSignal(false)
  const selectedOffer = useSignal('')

  const handleClose = $(() => {
    // Use setTimeout to avoid serialization issues
    setTimeout(() => onClose(), 0)
  })

  const openHouseOffers = [
    {
      id: 'weekend-tour',
      title: 'Free Weekend Open House Tour',
      description: 'Get a personalized tour of 3-5 homes this weekend that match your criteria',
      icon: '🏠',
      value: '$500 value',
    },
    {
      id: 'market-report',
      title: 'Exclusive Market Report',
      description:
        'Receive our monthly Las Vegas market analysis with pricing trends and predictions',
      icon: '📊',
      value: '$200 value',
    },
    {
      id: 'buyer-consultation',
      title: 'Free Buyer Consultation',
      description: '30-minute consultation with Dr. Jan Duffy to discuss your home buying strategy',
      icon: '💬',
      value: '$300 value',
    },
    {
      id: 'neighborhood-guide',
      title: 'Complete Neighborhood Guide',
      description: 'Detailed guide to Las Vegas neighborhoods with school ratings and amenities',
      icon: '🗺️',
      value: '$150 value',
    },
  ]

  const handleSubmit = $(async () => {
    isSubmitting.value = true

    // Track exit intent conversion
    if (window?.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackFormSubmission('exit_intent_offer', true, {
        email: email.value,
        phone: phone.value,
        offer: selectedOffer.value,
        source: 'exit_intent_popup',
      })
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    isSubmitted.value = true
    isSubmitting.value = false
  })

  const selectOffer = $((offerId: string) => {
    selectedOffer.value = offerId

    // Track offer selection
    if (window?.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackWidgetInteraction(
        'exit_intent_offer',
        'offer_selected',
        {
          depth: 'high',
          value: 3,
          offer: offerId,
        }
      )
    }
  })

  useVisibleTask$(() => {
    if (isVisible) {
      // Track exit intent popup shown
      if (window?.enhancedRealEstateAnalytics) {
        window.enhancedRealEstateAnalytics.trackWidgetInteraction(
          'exit_intent_popup',
          'popup_shown',
          { depth: 'moderate', value: 1 }
        )
      }
    }
  })

  if (!isVisible) return null

  if (isSubmitted.value) {
    return (
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-lg max-w-md w-full p-6 text-center">
          <div class="text-green-600 text-6xl mb-4">🎉</div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Congratulations!</h3>
          <p class="text-gray-600 mb-6">
            You've claimed your free offer! Dr. Jan Duffy will contact you within 24 hours to
            schedule your personalized real estate consultation.
          </p>
          <div class="bg-blue-50 p-4 rounded-lg mb-6">
            <p class="text-sm text-blue-800">
              <strong>What's Next:</strong> Check your email for confirmation and prepare for your
              exclusive real estate experience in Las Vegas.
            </p>
          </div>
          <button
            type="button"
            onClick$={handleClose}
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 w-full"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <style>{`
          .offer-card {
            transition: all 0.3s ease;
          }
          .offer-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
          .offer-card.selected {
            border-color: #3b82f6;
            background-color: #eff6ff;
          }
        `}</style>

        <div class="p-6">
          <div class="flex justify-between items-start mb-6">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-2">Wait! Don't Miss Out! 🏠</h2>
              <p class="text-gray-600">
                You're about to leave our site. Claim one of these exclusive offers before you go
                and start your Las Vegas real estate journey today!
              </p>
            </div>
            <button
              type="button"
              onClick$={handleClose}
              class="text-gray-400 hover:text-gray-600 text-3xl ml-4"
            >
              ×
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {openHouseOffers.map((offer) => (
              <div
                key={offer.id}
                onClick$={() => selectOffer(offer.id)}
                class={`offer-card cursor-pointer border-2 rounded-lg p-4 ${
                  selectedOffer.value === offer.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div class="flex items-start space-x-3">
                  <div class="text-3xl">{offer.icon}</div>
                  <div class="flex-1">
                    <h3 class="font-bold text-gray-900 mb-1">{offer.title}</h3>
                    <p class="text-sm text-gray-600 mb-2">{offer.description}</p>
                    <span class="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      {offer.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedOffer.value && (
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-4">Claim Your Free Offer</h3>

              <form onSubmit$={handleSubmit} class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="exit-email" class="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="exit-email"
                      bind:value={email}
                      placeholder="your@email.com"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label for="exit-phone" class="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="exit-phone"
                      bind:value={phone}
                      placeholder="(702) 200-3422"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div class="bg-blue-50 p-4 rounded-lg">
                  <p class="text-sm text-blue-800">
                    <strong>Selected Offer:</strong>{' '}
                    {openHouseOffers.find((o) => o.id === selectedOffer.value)?.title}
                  </p>
                  <p class="text-xs text-blue-600 mt-1">
                    {openHouseOffers.find((o) => o.id === selectedOffer.value)?.description}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting.value}
                  class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {isSubmitting.value ? 'Claiming Your Offer...' : 'Claim My Free Offer Now!'}
                </button>

                <p class="text-xs text-gray-500 text-center">
                  By claiming this offer, you agree to receive communications from Dr. Jan Duffy
                  about real estate opportunities and services in Las Vegas.
                </p>
              </form>
            </div>
          )}

          <div class="mt-6 text-center">
            <button
              type="button"
              onClick$={handleClose}
              class="text-gray-500 hover:text-gray-700 text-sm underline"
            >
              No thanks, I'll pass
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})
