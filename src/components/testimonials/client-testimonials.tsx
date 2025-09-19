import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

interface Testimonial {
  id: string
  name: string
  location: string
  image: string
  rating: number
  text: string
  transaction: string
  price: string
  date: string
  verified: boolean
}

export default component$(() => {
  const currentTestimonial = useSignal(0)
  const isAutoPlaying = useSignal(true)

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah & Michael Johnson',
      location: 'Summerlin, Las Vegas',
      image: '/images/testimonials/sarah-michael.jpg',
      rating: 5,
      text: "Dr. Janet Duffy made our first home buying experience absolutely seamless. Her knowledge of the Las Vegas market is unmatched, and she found us the perfect home in Summerlin within our budget. We couldn't be happier!",
      transaction: 'First-time buyers',
      price: '$650,000',
      date: 'December 2024',
      verified: true,
    },
    {
      id: '2',
      name: 'Robert Chen',
      location: 'Henderson, NV',
      image: '/images/testimonials/robert-chen.jpg',
      rating: 5,
      text: "As an investor, I needed someone who understood the rental market. Dr. Duffy's expertise helped me find three investment properties that are already generating positive cash flow. Highly recommend!",
      transaction: 'Investment properties',
      price: '$1.2M total',
      date: 'November 2024',
      verified: true,
    },
    {
      id: '3',
      name: 'Maria Rodriguez',
      location: 'North Las Vegas',
      image: '/images/testimonials/maria-rodriguez.jpg',
      rating: 5,
      text: 'Selling our family home was emotional, but Dr. Duffy handled everything with such care and professionalism. She got us $50,000 over asking price and made the process stress-free.',
      transaction: 'Home sale',
      price: '$425,000',
      date: 'January 2025',
      verified: true,
    },
    {
      id: '4',
      name: 'David & Lisa Thompson',
      location: 'Spring Valley, Las Vegas',
      image: '/images/testimonials/david-lisa.jpg',
      rating: 5,
      text: 'We were relocating from California and had no idea about Las Vegas neighborhoods. Dr. Duffy spent hours showing us different areas and helped us find the perfect community for our family.',
      transaction: 'Relocation buyers',
      price: '$580,000',
      date: 'October 2024',
      verified: true,
    },
    {
      id: '5',
      name: 'Jennifer Park',
      location: 'Enterprise, Las Vegas',
      image: '/images/testimonials/jennifer-park.jpg',
      rating: 5,
      text: "Dr. Duffy's market analysis was spot-on. She helped us time our purchase perfectly and saved us thousands. Her attention to detail and negotiation skills are exceptional.",
      transaction: 'Luxury home purchase',
      price: '$1.1M',
      date: 'September 2024',
      verified: true,
    },
  ]

  const nextTestimonial = $(() => {
    currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length

    // Track testimonial navigation
    if (window?.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackWidgetInteraction(
        'testimonials',
        'testimonial_navigation',
        {
          depth: 'moderate',
          value: 1,
          testimonial_id: testimonials[currentTestimonial.value].id,
        }
      )
    }
  })

  const prevTestimonial = $(() => {
    currentTestimonial.value =
      currentTestimonial.value === 0 ? testimonials.length - 1 : currentTestimonial.value - 1

    // Track testimonial navigation
    if (window?.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackWidgetInteraction(
        'testimonials',
        'testimonial_navigation',
        {
          depth: 'moderate',
          value: 1,
          testimonial_id: testimonials[currentTestimonial.value].id,
        }
      )
    }
  })

  const goToTestimonial = $((index: number) => {
    currentTestimonial.value = index

    // Track testimonial selection
    if (window?.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackWidgetInteraction(
        'testimonials',
        'testimonial_selected',
        {
          depth: 'moderate',
          value: 1,
          testimonial_id: testimonials[index].id,
        }
      )
    }
  })

  useVisibleTask$(() => {
    if (!isAutoPlaying.value) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} class={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ))
  }

  return (
    <div class="bg-gray-50 py-16">
      <style>{`
        .testimonial-carousel {
          --translate-x: -${currentTestimonial.value * 100}%;
          transform: translateX(var(--translate-x));
        }
      `}</style>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real clients say about working with Dr.
            Janet Duffy for their Las Vegas real estate needs.
          </p>
        </div>

        <div class="relative">
          <div class="overflow-hidden">
            <div class="flex transition-transform duration-500 ease-in-out testimonial-carousel">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} class="w-full flex-shrink-0 px-4">
                  <div class="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                    <div class="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                      <div class="flex-shrink-0">
                        <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          {testimonial.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                      </div>

                      <div class="flex-1">
                        <div class="flex items-center space-x-2 mb-4">
                          <div class="flex">{renderStars(testimonial.rating)}</div>
                          {testimonial.verified && (
                            <span class="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                              ✓ Verified
                            </span>
                          )}
                        </div>

                        <blockquote class="text-lg text-gray-700 mb-6 leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>

                        <div class="border-t pt-4">
                          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <p class="font-semibold text-gray-900">{testimonial.name}</p>
                              <p class="text-gray-600">{testimonial.location}</p>
                            </div>
                            <div class="mt-2 sm:mt-0 text-sm text-gray-500">
                              <p>
                                {testimonial.transaction} • {testimonial.price}
                              </p>
                              <p>{testimonial.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick$={prevTestimonial}
            class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 rounded-full p-3 shadow-lg transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick$={nextTestimonial}
            class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 rounded-full p-3 shadow-lg transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div class="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick$={() => goToTestimonial(index)}
              class={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentTestimonial.value ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div class="text-center mt-6">
          <button
            type="button"
            onClick$={() => {
              isAutoPlaying.value = !isAutoPlaying.value
            }}
            class="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            {isAutoPlaying.value ? 'Pause' : 'Resume'} auto-play
          </button>
        </div>

        {/* Trust Indicators */}
        <div class="mt-12 text-center">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="flex flex-col items-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <p class="text-gray-600">Happy Clients</p>
            </div>
            <div class="flex flex-col items-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">$2.5B+</div>
              <p class="text-gray-600">In Sales Volume</p>
            </div>
            <div class="flex flex-col items-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <p class="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
