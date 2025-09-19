import { component$, useVisibleTask$ } from '@builder.io/qwik'

interface EnhancedAnalyticsProps {
  measurementId: string
}

export default component$<EnhancedAnalyticsProps>(({ measurementId }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _measurementId = measurementId
  useVisibleTask$(() => {
    // Enhanced Real Estate Analytics with Custom Dimensions
    const trackRealEstateEvent = (eventName: string, parameters: any = {}) => {
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
    const trackWidgetInteraction = (widgetType: string, action: string, details: any = {}) => {
      trackRealEstateEvent('widget_interaction', {
        event_category: 'RealScout Widgets',
        event_label: `${widgetType} - ${action}`,
        widgetType,
        action,
        ...details,
      })
    }

    // Track property searches with market intelligence
    const trackPropertySearch = (searchType: string, filters: any = {}) => {
      const searchValue = calculateSearchValue(filters)
      trackRealEstateEvent('property_search', {
        event_category: 'Property Search',
        event_label: `${searchType} Search`,
        searchType,
        filters: JSON.stringify(filters),
        value: searchValue,
        marketSegment: determineMarketSegment(filters.priceRange),
        neighborhood: filters.location || 'unknown',
        priceRange: filters.priceRange || 'unknown',
        depth: calculateInteractionDepth(filters),
      })
    }

    // Track home valuation requests
    const trackHomeValueRequest = (address: string, propertyType = 'unknown') => {
      trackRealEstateEvent('home_value_request', {
        event_category: 'Home Valuation',
        event_label: 'Home Value Request',
        address,
        propertyType,
        value: 50, // Base value for home valuation request
        depth: 'high', // High-value interaction
      })
    }

    // Track mortgage calculator usage
    const trackMortgageCalculation = (
      loanAmount: number,
      monthlyPayment: number,
      details: any = {}
    ) => {
      trackRealEstateEvent('mortgage_calculation', {
        event_category: 'Financial Tools',
        event_label: 'Mortgage Calculator',
        loan_amount: loanAmount,
        monthly_payment: monthlyPayment,
        value: Math.round(loanAmount / 10000), // Value in 10k increments
        depth: 'moderate',
        ...details,
      })
    }

    // Track contact form submissions with lead scoring
    const trackFormSubmission = (formType: string, success: boolean, formData: any = {}) => {
      const leadValue = calculateLeadValue(formType, formData)
      trackRealEstateEvent('form_submit', {
        event_category: 'Lead Generation',
        event_label: `${formType} - ${success ? 'Success' : 'Error'}`,
        form_type: formType,
        success,
        value: success ? leadValue : 0,
        depth: 'high',
        ...formData,
      })
    }

    // Track page engagement and time on site
    const trackPageEngagement = (pageType: string, engagementData: any = {}) => {
      trackRealEstateEvent('page_engagement', {
        event_category: 'User Engagement',
        event_label: `${pageType} Engagement`,
        page_type: pageType,
        ...engagementData,
      })
    }

    // Helper functions
    const calculateSearchValue = (filters: any) => {
      let value = 1
      if (filters.priceRange) {
        const price = Number.parseInt(filters.priceRange.replace(/[^0-9]/g, ''))
        if (price > 1000000)
          value = 5 // Luxury market
        else if (price > 500000)
          value = 3 // Mid-market
        else value = 2 // Entry-level
      }
      return value
    }

    const determineMarketSegment = (priceRange: string) => {
      if (!priceRange) return 'unknown'
      const price = Number.parseInt(priceRange.replace(/[^0-9]/g, ''))
      if (price > 1000000) return 'luxury'
      if (price > 500000) return 'mid-market'
      return 'entry-level'
    }

    const calculateInteractionDepth = (filters: any) => {
      let depth = 'basic'
      const filterCount = Object.keys(filters).length
      if (filterCount > 5) depth = 'high'
      else if (filterCount > 2) depth = 'moderate'
      return depth
    }

    const calculateLeadValue = (formType: string, formData: any) => {
      let baseValue = 10
      if (formType === 'home_valuation') baseValue = 50
      if (formType === 'buyer_consultation') baseValue = 100
      if (formType === 'seller_consultation') baseValue = 150

      // Add value based on property details
      if (formData.priceRange) {
        const price = Number.parseInt(formData.priceRange.replace(/[^0-9]/g, ''))
        if (price > 1000000) baseValue *= 2
      }

      return baseValue
    }

    // Track initial page load with enhanced data
    trackRealEstateEvent('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      event_category: 'Page Views',
      event_label: 'Real Estate Website',
      userType: 'visitor',
      depth: 'basic',
    })

    // Expose enhanced tracking functions globally
    ;(window as any).enhancedRealEstateAnalytics = {
      trackWidgetInteraction,
      trackPropertySearch,
      trackHomeValueRequest,
      trackMortgageCalculation,
      trackFormSubmission,
      trackPageEngagement,
    }

    // Track scroll depth for engagement
    let maxScrollDepth = 0
    const trackScrollDepth = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      )
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth
        if (scrollDepth >= 25 && scrollDepth < 50) {
          trackRealEstateEvent('scroll_depth', {
            event_category: 'Engagement',
            event_label: '25% Scroll',
            scroll_depth: 25,
          })
        } else if (scrollDepth >= 50 && scrollDepth < 75) {
          trackRealEstateEvent('scroll_depth', {
            event_category: 'Engagement',
            event_label: '50% Scroll',
            scroll_depth: 50,
          })
        } else if (scrollDepth >= 75 && scrollDepth < 100) {
          trackRealEstateEvent('scroll_depth', {
            event_category: 'Engagement',
            event_label: '75% Scroll',
            scroll_depth: 75,
          })
        } else if (scrollDepth >= 100) {
          trackRealEstateEvent('scroll_depth', {
            event_category: 'Engagement',
            event_label: '100% Scroll',
            scroll_depth: 100,
          })
        }
      }
    }

    // Add scroll tracking
    window.addEventListener('scroll', trackScrollDepth, { passive: true })

    // Track time on page
    const startTime = Date.now()
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000)
      if (timeOnPage >= 30 && timeOnPage < 60) {
        trackRealEstateEvent('time_on_page', {
          event_category: 'Engagement',
          event_label: '30+ Seconds',
          time_on_page: timeOnPage,
        })
      } else if (timeOnPage >= 60) {
        trackRealEstateEvent('time_on_page', {
          event_category: 'Engagement',
          event_label: '1+ Minute',
          time_on_page: timeOnPage,
        })
      }
    }

    // Track time on page every 30 seconds
    const timeInterval = setInterval(trackTimeOnPage, 30000)

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
      trackWidgetInteraction: (widgetType: string, action: string, details?: any) => void
      trackPropertySearch: (searchType: string, filters?: any) => void
      trackHomeValueRequest: (address: string, propertyType?: string) => void
      trackMortgageCalculation: (loanAmount: number, monthlyPayment: number, details?: any) => void
      trackFormSubmission: (formType: string, success: boolean, formData?: any) => void
      trackPageEngagement: (pageType: string, engagementData?: any) => void
    }
  }
}
