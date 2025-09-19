import { component$, useVisibleTask$ } from '@builder.io/qwik'

interface RealEstateAnalyticsProps {
  measurementId: string
}

export default component$<RealEstateAnalyticsProps>(() => {
  useVisibleTask$(() => {
    // Track RealScout widget interactions
    const trackWidgetInteraction = (widgetType: string, action: string, details?: any) => {
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
          event_label: `${formType} - ${success ? 'Success' : 'Error'}`,
          value: success ? 1 : 0,
        })
      }
    }

    // Track mortgage calculator usage
    const trackMortgageCalculation = (loanAmount: number, monthlyPayment: number) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'mortgage_calculation', {
          loan_amount: loanAmount,
          monthly_payment: monthlyPayment,
          event_category: 'Financial Tools',
          event_label: 'Mortgage Calculator',
          value: Math.round(loanAmount / 1000), // Value in thousands
        })
      }
    }

    // Track property searches
    const trackPropertySearch = (searchType: string, filters?: any) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'property_search', {
          search_type: searchType,
          filters: filters,
          event_category: 'Property Search',
          event_label: `${searchType} Search`,
          value: 1,
        })
      }
    }

    // Track home value requests
    const trackHomeValueRequest = (address?: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'home_value_request', {
          address: address,
          event_category: 'Home Valuation',
          event_label: 'Home Value Request',
          value: 1,
        })
      }
    }

    // Expose tracking functions globally for use by other components
    ;(window as any).realEstateAnalytics = {
      trackWidgetInteraction,
      trackFormSubmission,
      trackMortgageCalculation,
      trackPropertySearch,
      trackHomeValueRequest,
    }

    // Track initial page load
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
        event_category: 'Page Views',
        event_label: 'Real Estate Website',
      })
    }
  })

  return null // This component doesn't render anything
})

// Declare global analytics functions
declare global {
  interface Window {
    realEstateAnalytics: {
      trackWidgetInteraction: (widgetType: string, action: string, details?: any) => void
      trackFormSubmission: (formType: string, success: boolean) => void
      trackMortgageCalculation: (loanAmount: number, monthlyPayment: number) => void
      trackPropertySearch: (searchType: string, filters?: any) => void
      trackHomeValueRequest: (address?: string) => void
    }
  }
}
