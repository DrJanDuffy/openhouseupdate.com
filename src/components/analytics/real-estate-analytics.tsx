import { component$, useVisibleTask$ } from '@builder.io/qwik'

interface RealEstateAnalyticsProps {
  measurementId: string
}

// Define proper types for analytics parameters
interface WidgetInteractionDetails {
  userType?: string
  depth?: string
  value?: number
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

export default component$<RealEstateAnalyticsProps>(() => {
  useVisibleTask$(() => {
    // Track RealScout widget interactions
    const trackWidgetInteraction = (widgetType: string, action: string, details?: WidgetInteractionDetails) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'widget_interaction', {
          widget_type: widgetType,
          action: action,
          event_category: 'RealScout Widgets',
          event_label: `${widgetType} - ${action}`,
          custom_map: {
            cd1: 'userType', // Custom dimension 1
            cd2: 'widgetType', // Custom dimension 2
            cd3: 'interactionDepth', // Custom dimension 3
            cd4: 'conversionValue', // Custom dimension 4
          },
          user_type: details?.userType || 'visitor',
          interaction_depth: details?.depth || 'basic',
          conversion_value: details?.value || 0,
        })
      }
    }

    // Track contact form submissions
    const trackFormSubmission = (formType: string, success: boolean) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
          form_type: formType,
          success: success,
          event_category: 'Lead Generation',
          event_label: formType,
          custom_map: {
            cd1: 'userType',
            cd2: 'widgetType',
            cd3: 'interactionDepth',
            cd4: 'conversionValue',
          },
        })
      }
    }

    // Track mortgage calculations
    const trackMortgageCalculation = (loanAmount: number, monthlyPayment: number) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'mortgage_calculation', {
          loan_amount: loanAmount,
          monthly_payment: monthlyPayment,
          event_category: 'Mortgage Calculator',
          event_label: `$${loanAmount.toLocaleString()} loan`,
          custom_map: {
            cd1: 'userType',
            cd2: 'widgetType',
            cd3: 'interactionDepth',
            cd4: 'conversionValue',
          },
        })
      }
    }

    // Track property searches
    const trackPropertySearch = (searchType: string, filters?: SearchFilters) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'property_search', {
          search_type: searchType,
          event_category: 'Property Search',
          event_label: searchType,
          custom_map: {
            cd1: 'userType',
            cd2: 'widgetType',
            cd3: 'interactionDepth',
            cd4: 'conversionValue',
          },
          ...filters,
        })
      }
    }

    // Track home value requests
    const trackHomeValueRequest = (address?: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'home_value_request', {
          property_address: address || 'unknown',
          event_category: 'Home Valuation',
          event_label: address || 'unknown',
          custom_map: {
            cd1: 'userType',
            cd2: 'widgetType',
            cd3: 'interactionDepth',
            cd4: 'conversionValue',
          },
        })
      }
    }

    // Expose tracking functions globally for use by other components
    ;(window as Window & { realEstateAnalytics: typeof window.realEstateAnalytics }).realEstateAnalytics = {
      trackWidgetInteraction,
      trackFormSubmission,
      trackMortgageCalculation,
      trackPropertySearch,
      trackHomeValueRequest,
    }
  })

  return null // This component doesn't render anything
})

// Declare global analytics functions
declare global {
  interface Window {
    realEstateAnalytics: {
      trackWidgetInteraction: (widgetType: string, action: string, details?: WidgetInteractionDetails) => void
      trackFormSubmission: (formType: string, success: boolean) => void
      trackMortgageCalculation: (loanAmount: number, monthlyPayment: number) => void
      trackPropertySearch: (searchType: string, filters?: SearchFilters) => void
      trackHomeValueRequest: (address?: string) => void
    }
  }
}