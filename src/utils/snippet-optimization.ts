export interface SnippetData {
  title: string
  description: string
  keywords: string[]
  structuredData?: Record<string, unknown>
  faqs?: Array<{ question: string; answer: string }>
}

export interface PageSnippetConfig {
  title: string
  description: string
  keywords: string[]
  faqKey?: string
  structuredDataType?: 'RealEstateAgent' | 'RealEstateService' | 'LocalBusiness' | 'WebSite'
  breadcrumbs?: Array<{ name: string; url: string }>
}

// Page-specific snippet configurations
export const pageSnippets: Record<string, PageSnippetConfig> = {
  homepage: {
    title: 'Las Vegas Open Houses - This Weekend | Dr. Janet Duffy',
    description:
      "Find this weekend's open houses in Las Vegas with featured open house expert Dr. Janet Duffy. Discover properties in Summerlin, Henderson, North Las Vegas and all Las Vegas Valley neighborhoods.",
    keywords: [
      'Las Vegas open houses',
      'weekend open houses',
      'open house expert',
      'Dr. Janet Duffy',
      'featured real estate agent',
      'open house listings',
      'Las Vegas real estate',
      'property viewing',
      'Summerlin open houses',
      'Henderson open houses',
      'North Las Vegas open houses',
      'real estate agent',
      'property search',
      'Spring Valley',
      'Enterprise',
      'home buying',
      'home selling',
      'market analysis',
      'Las Vegas neighborhoods',
    ],
    faqKey: 'homepage',
    structuredDataType: 'RealEstateService',
  },

  about: {
    title: 'About Dr. Janet Duffy - Las Vegas Real Estate Agent | Open House Update',
    description:
      'Meet Dr. Janet Duffy, your trusted Las Vegas real estate agent with over 20 years of experience. Licensed in Nevada, specializing in residential properties throughout the Las Vegas Valley.',
    keywords: [
      'Dr. Janet Duffy',
      'Las Vegas real estate agent',
      'Nevada real estate',
      'real estate experience',
      'Berkshire Hathaway',
      'Las Vegas agent',
      'property expert',
      'real estate professional',
    ],
    faqKey: 'about',
    structuredDataType: 'RealEstateAgent',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.openhouseupdate.com/' },
      { name: 'About', url: 'https://www.openhouseupdate.com/about/' },
    ],
  },

  services: {
    title: 'Real Estate Services in Las Vegas | Dr. Janet Duffy',
    description:
      'Comprehensive real estate services in Las Vegas including buyer representation, seller services, home valuations, and market analysis. Expert guidance for all your real estate needs.',
    keywords: [
      'Las Vegas real estate services',
      'buyer representation',
      'seller services',
      'home valuation',
      'market analysis',
      'real estate consultation',
      'property search',
      'transaction management',
    ],
    faqKey: 'services',
    structuredDataType: 'RealEstateService',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.openhouseupdate.com/' },
      { name: 'Services', url: 'https://www.openhouseupdate.com/services/' },
    ],
  },

  'home-valuation': {
    title: 'Free Home Valuation in Las Vegas | Dr. Janet Duffy',
    description:
      'Get an accurate home valuation for your Las Vegas property. Free market analysis and property value estimates from experienced real estate professionals.',
    keywords: [
      'home valuation Las Vegas',
      'property value estimate',
      'market analysis',
      'home appraisal',
      'property assessment',
      'Las Vegas home value',
      'free valuation',
      'property market value',
    ],
    faqKey: 'home-valuation',
    structuredDataType: 'RealEstateService',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.openhouseupdate.com/' },
      { name: 'Services', url: 'https://www.openhouseupdate.com/services/' },
      { name: 'Home Valuation', url: 'https://www.openhouseupdate.com/services/home-valuation/' },
    ],
  },

  'buyer-services': {
    title: 'Buyer Representation Services in Las Vegas | Dr. Janet Duffy',
    description:
      'Expert buyer representation in Las Vegas. Free services include property search, negotiation, financing guidance, and transaction management for home buyers.',
    keywords: [
      'buyer representation Las Vegas',
      'home buying services',
      'buyer agent',
      'property search',
      'home buying process',
      'first time home buyer',
      'buyer consultation',
      'real estate buyer services',
    ],
    faqKey: 'buyer-services',
    structuredDataType: 'RealEstateService',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.openhouseupdate.com/' },
      { name: 'Services', url: 'https://www.openhouseupdate.com/services/' },
      { name: 'Buyer Services', url: 'https://www.openhouseupdate.com/services/buyer-services/' },
    ],
  },

  'seller-services': {
    title: 'Seller Representation Services in Las Vegas | Dr. Janet Duffy',
    description:
      "Professional seller services in Las Vegas. Expert marketing, pricing strategy, negotiation, and transaction management to maximize your home's value and sale price.",
    keywords: [
      'seller representation Las Vegas',
      'home selling services',
      'seller agent',
      'home marketing',
      'property listing',
      'home selling process',
      'real estate seller services',
      'property marketing',
    ],
    faqKey: 'seller-services',
    structuredDataType: 'RealEstateService',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.openhouseupdate.com/' },
      { name: 'Services', url: 'https://www.openhouseupdate.com/services/' },
      { name: 'Seller Services', url: 'https://www.openhouseupdate.com/services/seller-services/' },
    ],
  },

  contact: {
    title: 'Contact Dr. Janet Duffy - Las Vegas Real Estate Agent',
    description:
      'Contact Dr. Janet Duffy for all your Las Vegas real estate needs. Call (702) 200-3422 or use our contact form for expert real estate guidance and consultation.',
    keywords: [
      'contact Dr. Janet Duffy',
      'Las Vegas real estate contact',
      'real estate consultation',
      'property expert contact',
      'real estate agent phone',
      'Las Vegas agent contact',
    ],
    faqKey: 'contact',
    structuredDataType: 'RealEstateAgent',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.openhouseupdate.com/' },
      { name: 'Contact', url: 'https://www.openhouseupdate.com/contact/' },
    ],
  },

  summerlin: {
    title: 'Summerlin Real Estate - Homes for Sale | Dr. Janet Duffy',
    description:
      'Find your dream home in Summerlin, Las Vegas. Browse Summerlin homes for sale, learn about neighborhoods, and work with Dr. Janet Duffy for expert guidance.',
    keywords: [
      'Summerlin real estate',
      'Summerlin homes for sale',
      'Summerlin neighborhoods',
      'Las Vegas Summerlin',
      'Summerlin properties',
      'Summerlin homes',
      'Summerlin real estate agent',
    ],
    faqKey: 'summerlin',
    structuredDataType: 'LocalBusiness',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.openhouseupdate.com/' },
      { name: 'Neighborhoods', url: 'https://www.openhouseupdate.com/neighborhoods/' },
      { name: 'Summerlin', url: 'https://www.openhouseupdate.com/neighborhoods/summerlin/' },
    ],
  },

  henderson: {
    title: 'Henderson Real Estate - Homes for Sale | Dr. Janet Duffy',
    description:
      'Discover Henderson real estate opportunities. Browse Henderson homes for sale, explore neighborhoods, and get expert guidance from Dr. Janet Duffy.',
    keywords: [
      'Henderson real estate',
      'Henderson homes for sale',
      'Henderson neighborhoods',
      'Las Vegas Henderson',
      'Henderson properties',
      'Henderson homes',
      'Henderson real estate agent',
    ],
    faqKey: 'henderson',
    structuredDataType: 'LocalBusiness',
    breadcrumbs: [
      { name: 'Home', url: 'https://www.openhouseupdate.com/' },
      { name: 'Neighborhoods', url: 'https://www.openhouseupdate.com/neighborhoods/' },
      { name: 'Henderson', url: 'https://www.openhouseupdate.com/neighborhoods/henderson/' },
    ],
  },
}

export const getPageSnippet = (pageKey: string): PageSnippetConfig => {
  return pageSnippets[pageKey] || pageSnippets.homepage
}

// Utility function to generate optimized meta descriptions
export const generateMetaDescription = (baseDescription: string, maxLength = 160): string => {
  if (baseDescription.length <= maxLength) {
    return baseDescription
  }

  // Try to cut at sentence boundary
  const sentences = baseDescription.split('. ')
  let result = ''

  for (const sentence of sentences) {
    if (`${result}${sentence}. `.length <= maxLength) {
      result += `${sentence}. `
    } else {
      break
    }
  }

  // If no sentences fit, cut at word boundary
  if (!result) {
    const words = baseDescription.split(' ')
    result = words.slice(0, -1).join(' ')

    while (result.length > maxLength - 3) {
      const words = result.split(' ')
      words.pop()
      result = words.join(' ')
    }

    result += '...'
  }

  return result.trim()
}

// Utility function to generate title tags
export const generateTitle = (baseTitle: string, maxLength = 60): string => {
  if (baseTitle.length <= maxLength) {
    return baseTitle
  }

  // Try to cut at logical break points
  const breakPoints = [' | ', ' - ', ' • ']
  let result = baseTitle

  for (const breakPoint of breakPoints) {
    if (baseTitle.includes(breakPoint)) {
      const parts = baseTitle.split(breakPoint)
      let current = parts[0]

      for (let i = 1; i < parts.length; i++) {
        const test = current + breakPoint + parts[i]
        if (test.length <= maxLength) {
          current = test
        } else {
          break
        }
      }

      if (current.length <= maxLength) {
        result = current
        break
      }
    }
  }

  // If still too long, cut at word boundary
  if (result.length > maxLength) {
    const words = result.split(' ')
    result = words.slice(0, -1).join(' ')

    while (result.length > maxLength - 3) {
      const words = result.split(' ')
      words.pop()
      result = words.join(' ')
    }

    result += '...'
  }

  return result.trim()
}
