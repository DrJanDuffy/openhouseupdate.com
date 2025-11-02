// SEO Utility Functions

export interface SEOConfig {
  siteName: string
  siteUrl: string
  defaultImage: string
  defaultImageAlt: string
  author: string
  locale: string
  twitterHandle?: string
}

export const seoConfig: SEOConfig = {
  siteName: 'Open House Update',
  siteUrl: 'https://openhouseupdate.com',
  defaultImage: 'https://openhouseupdate.com/images/og-default.jpg',
  defaultImageAlt: 'Open House Update - Las Vegas Real Estate',
  author: 'Dr. Jan Duffy',
  locale: 'en_US',
  twitterHandle: '@drjanetduffy',
}

// Generate canonical URL
export const getCanonicalUrl = (path = ''): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${seoConfig.siteUrl}${cleanPath}`
}

// Generate page title
export const generatePageTitle = (title: string, includeSiteName = true): string => {
  if (includeSiteName && !title.includes(seoConfig.siteName)) {
    return `${title} | ${seoConfig.siteName}`
  }
  return title
}

// Generate meta description
export const generateMetaDescription = (description: string, maxLength = 160): string => {
  if (description.length <= maxLength) {
    return description
  }

  // Try to cut at sentence boundary
  const sentences = description.split(/[.!?]+/)
  let result = ''

  for (const sentence of sentences) {
    if ((result + sentence).length <= maxLength - 3) {
      result += `${sentence}. `
    } else {
      break
    }
  }

  return result.trim() || `${description.substring(0, maxLength - 3)}...`
}

// Generate keywords from content
export const extractKeywords = (content: string, maxKeywords = 10): string[] => {
  // Remove HTML tags and normalize text
  const cleanText = content
    .replace(/<[^>]*>/g, ' ')
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  // Common stop words to exclude
  const stopWords = new Set([
    'the',
    'a',
    'an',
    'and',
    'or',
    'but',
    'in',
    'on',
    'at',
    'to',
    'for',
    'of',
    'with',
    'by',
    'from',
    'up',
    'about',
    'into',
    'through',
    'during',
    'before',
    'after',
    'above',
    'below',
    'between',
    'among',
    'is',
    'are',
    'was',
    'were',
    'be',
    'been',
    'being',
    'have',
    'has',
    'had',
    'do',
    'does',
    'did',
    'will',
    'would',
    'could',
    'should',
    'may',
    'might',
    'must',
    'can',
    'this',
    'that',
    'these',
    'those',
    'i',
    'you',
    'he',
    'she',
    'it',
    'we',
    'they',
    'me',
    'him',
    'her',
    'us',
    'them',
  ])

  // Extract words and count frequency
  const words = cleanText.split(' ').filter((word) => word.length > 2 && !stopWords.has(word))

  const wordCount: { [key: string]: number } = {}
  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1
  })

  // Sort by frequency and return top keywords
  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word)
}

// Define property data interface
interface PropertyData {
  name?: string
  description?: string
  address?:
    | {
        street?: string
        city?: string
        state?: string
        zip?: string
      }
    | string
  price?: number
  bedrooms?: number
  bathrooms?: number
  squareFeet?: number
  lotSize?: number
  yearBuilt?: number
  propertyType?: string
  listingStatus?: string
  images?: string[]
  coordinates?: {
    latitude: number
    longitude: number
  }
  [key: string]: unknown
}

// Generate structured data for real estate
export const generateRealEstateStructuredData = (propertyData: PropertyData) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: propertyData.name || 'Property Listing',
    description: propertyData.description,
    url: propertyData.url,
    image: propertyData.images || [seoConfig.defaultImage],
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        typeof propertyData.address === 'object'
          ? propertyData.address?.street
          : propertyData.address,
      addressLocality:
        typeof propertyData.address === 'object'
          ? propertyData.address?.city || 'Las Vegas'
          : 'Las Vegas',
      addressRegion:
        typeof propertyData.address === 'object' ? propertyData.address?.state || 'NV' : 'NV',
      postalCode: typeof propertyData.address === 'object' ? propertyData.address?.zip : undefined,
      addressCountry: 'US',
    },
    geo: propertyData.coordinates
      ? {
          '@type': 'GeoCoordinates',
          latitude: propertyData.coordinates.latitude,
          longitude: propertyData.coordinates.longitude,
        }
      : undefined,
    offers: {
      '@type': 'Offer',
      price: propertyData.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
    },
    floorSize: propertyData.squareFeet
      ? {
          '@type': 'QuantitativeValue',
          value: propertyData.squareFeet,
          unitCode: 'SQF',
        }
      : undefined,
    numberOfRooms: (propertyData.bedrooms || 0) + (propertyData.bathrooms || 0),
    numberOfBedrooms: propertyData.bedrooms,
    numberOfBathroomsTotal: propertyData.bathrooms,
  }
}

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (
  breadcrumbs: Array<{ name: string; url: string }>
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

// Generate FAQ structured data
export const generateFAQStructuredData = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Validate SEO elements
export const validateSEO = (seoData: {
  title: string
  description: string
  keywords: string[]
}) => {
  const issues: string[] = []

  // Title validation
  if (seoData.title.length < 30) {
    issues.push('Title is too short (minimum 30 characters recommended)')
  }
  if (seoData.title.length > 60) {
    issues.push('Title is too long (maximum 60 characters recommended)')
  }

  // Description validation
  if (seoData.description.length < 120) {
    issues.push('Meta description is too short (minimum 120 characters recommended)')
  }
  if (seoData.description.length > 160) {
    issues.push('Meta description is too long (maximum 160 characters recommended)')
  }

  // Keywords validation
  if (seoData.keywords.length === 0) {
    issues.push('No keywords provided')
  }
  if (seoData.keywords.length > 10) {
    issues.push('Too many keywords (maximum 10 recommended)')
  }

  return {
    isValid: issues.length === 0,
    issues,
  }
}

// Generate internal linking suggestions
export const generateInternalLinkingSuggestions = (
  currentPage: string, // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _allPages: string[]
) => {
  const suggestions: { [key: string]: string[] } = {
    '/': ['/search', '/home-valuation', '/about', '/contact'],
    '/search': ['/map', '/this-weekend', '/neighborhoods', '/buyer-services'],
    '/home-valuation': ['/market-analysis', '/seller-services', '/contact'],
    '/buyer-services': ['/search', '/neighborhoods', '/contact'],
    '/seller-services': ['/home-valuation', '/market-analysis', '/contact'],
    '/market-analysis': ['/home-valuation', '/seller-services', '/neighborhoods'],
  }

  return suggestions[currentPage] || []
}

// Generate related content suggestions
export const generateRelatedContentSuggestions = (currentPage: string) => {
  const relatedContent: {
    [key: string]: Array<{ title: string; url: string; description: string }>
  } = {
    '/': [
      {
        title: 'Las Vegas Property Search',
        url: '/search',
        description: 'Find your perfect home in Las Vegas',
      },
      {
        title: 'Free Home Valuation',
        url: '/home-valuation',
        description: "Get an accurate estimate of your home's value",
      },
      {
        title: "This Weekend's Open Houses",
        url: '/this-weekend',
        description: "See what's open this weekend",
      },
    ],
    '/search': [
      { title: 'Map Search', url: '/map', description: 'Search properties on an interactive map' },
      {
        title: 'Buyer Services',
        url: '/buyer-services',
        description: 'Professional buyer representation',
      },
      {
        title: 'Popular Neighborhoods',
        url: '/neighborhoods',
        description: 'Explore Las Vegas neighborhoods',
      },
    ],
    '/home-valuation': [
      {
        title: 'Market Analysis',
        url: '/market-analysis',
        description: 'Comprehensive market reports',
      },
      {
        title: 'Seller Services',
        url: '/seller-services',
        description: 'Professional selling assistance',
      },
      {
        title: 'Contact Dr. Duffy',
        url: '/contact',
        description: 'Get personalized real estate guidance',
      },
    ],
  }

  return relatedContent[currentPage] || []
}
