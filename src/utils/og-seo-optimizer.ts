/**
 * Open Graph SEO Optimizer
 * Enhanced OG metadata generation for better SEO performance
 */

export interface OGSEOConfig {
  pageKey: string
  title: string
  description: string
  keywords?: string[]
  url?: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article' | 'profile'
  articleTags?: string[]
  customDescription?: string // SEO-optimized OG description (can differ from meta description)
}

/**
 * Maps page keys to their specific OG images
 * Falls back to default if image doesn't exist
 */
const pageOGImages: Record<string, string> = {
  homepage: 'https://www.openhouseupdate.com/images/og-homepage.jpg',
  'home-valuation': 'https://www.openhouseupdate.com/images/og-valuation.jpg',
  'buyer-services': 'https://www.openhouseupdate.com/images/og-buyer-services.jpg',
  'seller-services': 'https://www.openhouseupdate.com/images/og-seller-services.jpg',
  'market-analysis': 'https://www.openhouseupdate.com/images/og-market-analysis.jpg',
  about: 'https://www.openhouseupdate.com/images/og-about.jpg',
  contact: 'https://www.openhouseupdate.com/images/og-contact.jpg',
  search: 'https://www.openhouseupdate.com/images/og-search.jpg',
  'this-weekend': 'https://www.openhouseupdate.com/images/og-open-houses.jpg',
  summerlin: 'https://www.openhouseupdate.com/images/og-summerlin.jpg',
  henderson: 'https://www.openhouseupdate.com/images/og-henderson.jpg',
}

/**
 * Default OG image fallback
 */
const DEFAULT_OG_IMAGE = 'https://www.openhouseupdate.com/images/og-default.jpg'

/**
 * Get page-specific OG image URL
 */
export const getOGImage = (pageKey: string, customImage?: string): string => {
  if (customImage) return customImage
  return pageOGImages[pageKey] || DEFAULT_OG_IMAGE
}

/**
 * Generate SEO-optimized OG description with call-to-action
 * Optimized for social sharing and click-through rates
 */
export const generateOGDescription = (
  baseDescription: string,
  keywords?: string[],
  includeCTA = true
): string => {
  let description = baseDescription.trim()

  // Ensure description is compelling for social sharing
  // Add keywords naturally if they enhance the description
  if (keywords && keywords.length > 0) {
    const primaryKeywords = keywords.slice(0, 3).filter((kw) => !description.toLowerCase().includes(kw.toLowerCase()))
    if (primaryKeywords.length > 0 && description.length < 140) {
      // Add primary keyword if space allows and not already present
      const keyword = primaryKeywords[0]
      if (description.length + keyword.length + 2 < 155) {
        description = `${description}. ${keyword} in Las Vegas.`
      }
    }
  }

  // Add CTA for better engagement (keep under 155 chars for optimal display)
  if (includeCTA && description.length < 130) {
    const ctaOptions = [
      ' Browse listings today.',
      ' Get expert guidance.',
      ' Start your search now.',
      ' Contact us today.',
    ]
    const cta = ctaOptions[Math.floor(Math.random() * ctaOptions.length)]
    if (description.length + cta.length <= 155) {
      description += cta
    }
  }

  // Truncate to optimal length (155 chars for OG, leaves room for ellipsis)
  if (description.length > 155) {
    description = description.substring(0, 152).trim() + '...'
  }

  return description
}

/**
 * Generate SEO-optimized image alt text
 * Includes keywords for better accessibility and SEO
 */
export const generateOGImageAlt = (
  title: string,
  pageKey: string,
  keywords?: string[]
): string => {
  // Extract main keyword from title or use page context
  let mainKeyword = 'Las Vegas Real Estate'

  if (keywords && keywords.length > 0) {
    mainKeyword = keywords[0]
  } else if (title) {
    // Extract key phrase from title
    const titleWords = title.split(' ').slice(0, 3).join(' ')
    mainKeyword = titleWords.replace(/\|/g, '').trim()
  }

  // Create descriptive alt text with location
  return `${mainKeyword} - Open House Update | Dr. Jan Duffy - Las Vegas Real Estate Expert`
}

/**
 * Get article tags from keywords for OG article:tag metadata
 */
export const getArticleTags = (keywords?: string[]): string[] => {
  if (!keywords || keywords.length === 0) {
    return ['Las Vegas', 'real estate', 'Dr. Jan Duffy']
  }

  // Return top 10 keywords as article tags (OG protocol supports multiple)
  return keywords.slice(0, 10)
}

/**
 * Generate complete SEO-optimized OG metadata
 */
export const createSEOOptimizedOG = (config: OGSEOConfig) => {
  const {
    pageKey,
    title,
    description,
    keywords = [],
    url,
    image,
    imageAlt,
    type = 'website',
    articleTags,
    customDescription,
  } = config

  // Get optimized values
  const ogImage = getOGImage(pageKey, image)
  const ogDescription = customDescription || generateOGDescription(description, keywords, true)
  const ogImageAlt = imageAlt || generateOGImageAlt(title, pageKey, keywords)
  const tags = articleTags || getArticleTags(keywords)
  const canonicalUrl =
    url || `https://www.openhouseupdate.com/${pageKey === 'homepage' ? '' : `${pageKey}/`}`

  const meta = [
    // Required OG Properties
    { property: 'og:title', content: title },
    { property: 'og:type', content: type },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: ogImage },

    // Recommended OG Properties
    { property: 'og:description', content: ogDescription },
    { property: 'og:site_name', content: 'Open House Update' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'es_US' }, // Spanish for Las Vegas market

    // Image Structured Properties
    { property: 'og:image:secure_url', content: ogImage },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: ogImageAlt },

    // Twitter Card (for better Twitter sharing)
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: ogDescription },
    { name: 'twitter:image', content: ogImage },
    { name: 'twitter:image:alt', content: ogImageAlt },
  ]

  // Add article:tag metadata for better categorization (helps SEO)
  if (type === 'website' && tags.length > 0) {
    // Even for websites, article tags help with categorization
    tags.forEach((tag) => {
      meta.push({ property: 'article:tag', content: tag })
    })
  } else if (type === 'article' && tags.length > 0) {
    tags.forEach((tag) => {
      meta.push({ property: 'article:tag', content: tag })
    })
  }

  return meta
}

/**
 * Get enhanced OG metadata for specific page types
 */
export const getPageOGMetadata = (pageKey: string): Partial<OGSEOConfig> => {
  const pageConfigs: Record<string, Partial<OGSEOConfig>> = {
    homepage: {
      keywords: [
        'Las Vegas open houses',
        'weekend open houses',
        'Open House Expert',
        'Dr. Jan Duffy',
      ],
      articleTags: ['Las Vegas', 'open houses', 'weekend open houses', 'real estate', 'property search'],
    },
    'home-valuation': {
      keywords: ['home valuation', 'property value', 'market analysis', 'CMA'],
      articleTags: ['home valuation', 'property assessment', 'market analysis', 'CMA', 'Las Vegas'],
    },
    'buyer-services': {
      keywords: ['buyer representation', 'home buying', 'buyer agent', 'property search'],
      articleTags: ['buyer services', 'home buying', 'buyer representation', 'property search', 'Las Vegas'],
    },
    'seller-services': {
      keywords: ['seller representation', 'home selling', 'seller agent', 'property marketing'],
      articleTags: ['seller services', 'home selling', 'seller representation', 'property marketing', 'Las Vegas'],
    },
  }

  return pageConfigs[pageKey] || {}
}

