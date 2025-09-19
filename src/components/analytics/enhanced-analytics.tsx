import { component$, useVisibleTask$ } from '@builder.io/qwik'

interface EnhancedAnalyticsProps {
  measurementId: string
}

// Define proper types for analytics parameters
interface AnalyticsEventParameters {
  userType?: string
  widgetType?: string
  depth?: string
  value?: number
  marketSegment?: string
  neighborhood?: string
  priceRange?: string
  event_category?: string
  event_label?: string
  [key: string]: unknown
}

interface WidgetInteractionDetails {
  userType?: string
  depth?: string
  value?: number
  marketSegment?: string
  neighborhood?: string
  priceRange?: string
  [key: string]: unknown
}

interface SearchFilters {
  priceRange?: string
  bedrooms?: number
  bathrooms?: number
  neighborhood?: string
  propertyType?: string
  [key: string]: unknown
}

interface MortgageCalculationDetails {
  downPayment?: number
  interestRate?: number
  term?: number
  [key: string]: unknown
}

interface FormData {
  email?: string
  phone?: string
  name?: string
  propertyAddress?: string
  budget?: number
  [key: string]: unknown
}

interface EngagementData {
  timeOnPage?: number
  scrollDepth?: number
  clicks?: number
  [key: string]: unknown
}

export default component$<EnhancedAnalyticsProps>(({ measurementId }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _measurementId = measurementId
  useVisibleTask$(() => {
    // Enhanced Real Estate Analytics with Custom Dimensions
    const trackRealEstateEvent = (eventName: string, parameters: AnalyticsEventParameters = {}) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, {
          ...parameters,
          // Custom dimensions for real estate tracking
          custom_map: {
            cd1: 'userType', // visitor, buyer, seller, investor
            cd2: 'widgetType', // search, valuation, calculator, map
            cd3: 'interactionDepth', // basic, moderate, high
            cd4: 'conversionValue', // estimated lead value
            cd5: 'marketSegment', // luxury, mid-market, entry-level
            cd6: 'neighborhood', // Summerlin, Henderson, etc.
            cd7: 'priceRange', // under-500k, 500k-1m, 1m-plus
            cd8: 'deviceType', // mobile, tablet, desktop
          },
          // Real estate specific parameters
          user_type: parameters.userType || 'visitor',
          widget_type: parameters.widgetType || 'unknown',
          interaction_depth: parameters.depth || 'basic',
          conversion_value: parameters.value || 0,
          market_segment: parameters.marketSegment || 'unknown',
          neighborhood: parameters.neighborhood || 'unknown',
          price_range: parameters.priceRange || 'unknown',
          device_type: /Mobi|Android/i.test(navigator.userAgent)
            ? 'mobile'
            : /Tablet|iPad/i.test(navigator.userAgent)
              ? 'tablet'
              : 'desktop',
        })
      }
    }

    // Track RealScout widget interactions with enhanced data
    const trackWidgetInteraction = (widgetType: string, action: string, details: WidgetInteractionDetails = {}) => {
      trackRealEstateEvent('widget_interaction', {
        event_category: 'RealScout Widgets',
        event_label: `${widgetType} - ${action}`,
        widgetType,
        action,
        ...details,
      })
    }

    // Track property searches with market intelligence
    const trackPropertySearch = (searchType: string, filters: SearchFilters = {}) => {
      const searchValue = calculateSearchValue(filters)
      trackRealEstateEvent('property_search', {
        event_category: 'Property Search',
        event_label: searchType,
        search_type: searchType,
        search_value: searchValue,
        ...filters,
      })
    }

    // Track home value requests with property details
    const trackHomeValueRequest = (address: string, propertyType = 'single_family') => {
      trackRealEstateEvent('home_value_request', {
        event_category: 'Home Valuation',
        event_label: address,
        property_address: address,
        property_type: propertyType,
      })
    }

    // Track mortgage calculations with financial details
    const trackMortgageCalculation = (
      loanAmount: number,
      monthlyPayment: number,
      details: MortgageCalculationDetails = {}
    ) => {
      trackRealEstateEvent('mortgage_calculation', {
        event_category: 'Mortgage Calculator',
        event_label: `$${loanAmount.toLocaleString()} loan`,
        loan_amount: loanAmount,
        monthly_payment: monthlyPayment,
        ...details,
      })
    }

    // Track contact form submissions with lead scoring
    const trackFormSubmission = (formType: string, success: boolean, formData: FormData = {}) => {
      const leadValue = calculateLeadValue(formType, formData)
      trackRealEstateEvent('form_submit', {
        event_category: 'Lead Generation',
        event_label: formType,
        form_type: formType,
        success,
        lead_value: leadValue,
        ...formData,
      })
    }

    // Track page engagement and time on site
    const trackPageEngagement = (pageType: string, engagementData: EngagementData = {}) => {
      trackRealEstateEvent('page_engagement', {
        event_category: 'User Engagement',
        event_label: pageType,
        page_type: pageType,
        ...engagementData,
      })
    }

    // Helper functions
    const calculateSearchValue = (filters: SearchFilters) => {
      let value = 1
      if (filters.priceRange) {
        const priceRange = filters.priceRange
        if (priceRange.includes('1m')) value += 2
        if (priceRange.includes('500k')) value += 1
      }
      if (filters.bedrooms && filters.bedrooms >= 4) value += 1
      if (filters.bathrooms && filters.bathrooms >= 3) value += 1
      return value
    }

    const _calculateInteractionDepth = (filters: SearchFilters) => {
      let depth = 'basic'
      const filterCount = Object.keys(filters).length
      if (filterCount >= 3) depth = 'high'
      else if (filterCount >= 2) depth = 'moderate'
      return depth
    }

    const calculateLeadValue = (formType: string, formData: FormData) => {
      let baseValue = 10
      if (formType === 'home_valuation') baseValue = 50
      else if (formType === 'mortgage_calculator') baseValue = 30
      else if (formType === 'contact') baseValue = 20

      // Add value based on property budget
      if (formData.budget && formData.budget > 1000000) baseValue += 20
      else if (formData.budget && formData.budget > 500000) baseValue += 10

      return baseValue
    }

    // Track page engagement automatically
    let timeOnPage = 0
    let scrollDepth = 0
    let clickCount = 0

    const timeInterval = setInterval(() => {
      timeOnPage += 5
      if (timeOnPage % 30 === 0) {
        // Track every 30 seconds
        trackPageEngagement('property_search', {
          timeOnPage,
          scrollDepth,
          clicks: clickCount,
        })
      }
    }, 5000)

    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
      if (scrollPercent > scrollDepth) {
        scrollDepth = scrollPercent
        if (scrollDepth % 25 === 0) {
          // Track at 25%, 50%, 75%, 100%
          trackPageEngagement('scroll_depth', {
            scrollDepth,
            timeOnPage,
          })
        }
      }
    }

    document.addEventListener('scroll', trackScrollDepth)
    document.addEventListener('click', () => clickCount++)

    // Expose enhanced tracking functions globally
    ;(window as Window & { enhancedRealEstateAnalytics: typeof window.enhancedRealEstateAnalytics }).enhancedRealEstateAnalytics = {
      trackWidgetInteraction,
      trackPropertySearch,
      trackHomeValueRequest,
      trackMortgageCalculation,
      trackFormSubmission,
      trackPageEngagement,
    }

    // Track initial page load
    trackPageEngagement('page_load', {
      timeOnPage: 0,
      scrollDepth: 0,
    })

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
      clearInterval(timeInterval)
      window.removeEventListener('scroll', trackScrollDepth)
    })
  })

  return null // This component doesn't render anything
})

// Declare global enhanced analytics functions
declare global {
  interface Window {
    enhancedRealEstateAnalytics: {
      trackWidgetInteraction: (widgetType: string, action: string, details?: WidgetInteractionDetails) => void
      trackPropertySearch: (searchType: string, filters?: SearchFilters) => void
      trackHomeValueRequest: (address: string, propertyType?: string) => void
      trackMortgageCalculation: (loanAmount: number, monthlyPayment: number, details?: MortgageCalculationDetails) => void
      trackFormSubmission: (formType: string, success: boolean, formData?: FormData) => void
      trackPageEngagement: (pageType: string, engagementData?: EngagementData) => void
    }
  }
}