import type { DocumentMeta } from '@builder.io/qwik-city'

export interface OpenGraphMeta {
  title: string
  description: string
  type?: 'website' | 'article' | 'profile'
  url?: string
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  imageType?: string
  siteName?: string
  locale?: string
  localeAlternate?: string[]
  determiner?: 'a' | 'an' | 'the' | '' | 'auto'
  articleAuthor?: string[]
  articlePublishedTime?: string
  articleModifiedTime?: string
  articleSection?: string
  articleTag?: string[]
  profileFirstName?: string
  profileLastName?: string
  profileUsername?: string
}

export function createOpenGraphMeta(meta: OpenGraphMeta): DocumentMeta[] {
  const {
    title,
    description,
    type = 'website',
    url,
    image = 'https://openhouseupdate.com/images/og-default.jpg',
    imageAlt = 'Open House Update - Las Vegas Real Estate',
    imageWidth = 1200,
    imageHeight = 630,
    imageType = 'image/jpeg',
    siteName = 'Open House Update',
    locale = 'en_US',
    localeAlternate = ['es_US'],
    determiner = 'auto',
    articleAuthor,
    articlePublishedTime,
    articleModifiedTime,
    articleSection,
    articleTag,
    profileFirstName,
    profileLastName,
    profileUsername,
  } = meta

  const ogMeta: DocumentMeta[] = [
    // Basic Open Graph metadata
    { property: 'og:title', content: title },
    { property: 'og:type', content: type },
    { property: 'og:description', content: description },
    { property: 'og:site_name', content: siteName },
    { property: 'og:locale', content: locale },
    { property: 'og:determiner', content: determiner },

    // Image metadata
    { property: 'og:image', content: image },
    { property: 'og:image:secure_url', content: image.replace('http://', 'https://') },
    { property: 'og:image:type', content: imageType },
    { property: 'og:image:width', content: imageWidth.toString() },
    { property: 'og:image:height', content: imageHeight.toString() },
    { property: 'og:image:alt', content: imageAlt },

    // Twitter Card metadata
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { name: 'twitter:image:alt', content: imageAlt },
  ]

  // Add URL if provided
  if (url) {
    ogMeta.push({ property: 'og:url', content: url })
  }

  // Add alternate locales
  localeAlternate.forEach((altLocale) => {
    ogMeta.push({ property: 'og:locale:alternate', content: altLocale })
  })

  // Article specific metadata
  if (type === 'article') {
    if (articleAuthor) {
      articleAuthor.forEach((author) => {
        ogMeta.push({ property: 'article:author', content: author })
      })
    }
    if (articlePublishedTime) {
      ogMeta.push({ property: 'article:published_time', content: articlePublishedTime })
    }
    if (articleModifiedTime) {
      ogMeta.push({ property: 'article:modified_time', content: articleModifiedTime })
    }
    if (articleSection) {
      ogMeta.push({ property: 'article:section', content: articleSection })
    }
    if (articleTag) {
      articleTag.forEach((tag) => {
        ogMeta.push({ property: 'article:tag', content: tag })
      })
    }
  }

  // Profile specific metadata
  if (type === 'profile') {
    if (profileFirstName) {
      ogMeta.push({ property: 'profile:first_name', content: profileFirstName })
    }
    if (profileLastName) {
      ogMeta.push({ property: 'profile:last_name', content: profileLastName })
    }
    if (profileUsername) {
      ogMeta.push({ property: 'profile:username', content: profileUsername })
    }
  }

  return ogMeta
}

// Predefined Open Graph configurations for common page types
export const openGraphConfigs = {
  homepage: (): DocumentMeta[] =>
    createOpenGraphMeta({
      title: 'Las Vegas Real Estate - Find Your Dream Home | Open House Update',
      description:
        'Professional real estate services in Las Vegas. Search thousands of properties, get home valuations, and work with Dr. Jan Duffy for expert guidance.',
      type: 'website',
      url: 'https://openhouseupdate.com',
      image: 'https://openhouseupdate.com/images/og-homepage.jpg',
      imageAlt: 'Las Vegas Real Estate - Open House Update',
      articleTag: ['real estate', 'Las Vegas', 'home search', 'property', 'Dr. Jan Duffy'],
    }),

  homeValuation: (): DocumentMeta[] =>
    createOpenGraphMeta({
      title: 'Free Home Valuation - Las Vegas Real Estate | Dr. Jan Duffy',
      description:
        'Get a free, accurate home valuation for your Las Vegas property. Professional market analysis and property assessment from Dr. Jan Duffy.',
      type: 'website',
      url: 'https://openhouseupdate.com/services/home-valuation',
      image: 'https://openhouseupdate.com/images/og-valuation.jpg',
      imageAlt: 'Free Home Valuation - Las Vegas Real Estate',
      articleTag: ['home valuation', 'property assessment', 'market analysis', 'CMA', 'Las Vegas'],
    }),

  buyerServices: (): DocumentMeta[] =>
    createOpenGraphMeta({
      title: 'Buyer Services - Expert Home Buying Support | Dr. Jan Duffy',
      description:
        'Professional buyer services in Las Vegas. Complete support from property search to closing with Dr. Jan Duffy, your trusted real estate agent.',
      type: 'website',
      url: 'https://openhouseupdate.com/services/buyer-services',
      image: 'https://openhouseupdate.com/images/og-buyer-services.jpg',
      imageAlt: 'Buyer Services - Las Vegas Real Estate',
      articleTag: [
        'buyer services',
        'home buying',
        'property search',
        'real estate agent',
        'Las Vegas',
      ],
    }),

  sellerServices: (): DocumentMeta[] =>
    createOpenGraphMeta({
      title: 'Seller Services - Expert Home Selling Support | Dr. Jan Duffy',
      description:
        'Professional seller services in Las Vegas. Complete support from listing to closing with Dr. Jan Duffy, your trusted real estate agent.',
      type: 'website',
      url: 'https://openhouseupdate.com/services/seller-services',
      image: 'https://openhouseupdate.com/images/og-seller-services.jpg',
      imageAlt: 'Seller Services - Las Vegas Real Estate',
      articleTag: [
        'seller services',
        'home selling',
        'property listing',
        'real estate agent',
        'Las Vegas',
      ],
    }),

  marketAnalysis: (): DocumentMeta[] =>
    createOpenGraphMeta({
      title: 'Market Analysis - Las Vegas Real Estate Trends | Dr. Jan Duffy',
      description:
        'Comprehensive market analysis for Las Vegas real estate. Get insights on trends, pricing, and investment opportunities.',
      type: 'website',
      url: 'https://openhouseupdate.com/services/market-analysis',
      image: 'https://openhouseupdate.com/images/og-market-analysis.jpg',
      imageAlt: 'Market Analysis - Las Vegas Real Estate',
      articleTag: [
        'market analysis',
        'real estate trends',
        'Las Vegas market',
        'investment',
        'pricing',
      ],
    }),

  about: (): DocumentMeta[] =>
    createOpenGraphMeta({
      title: 'About Dr. Jan Duffy - Las Vegas Real Estate Agent',
      description:
        'Learn about Dr. Jan Duffy, your trusted Las Vegas real estate agent. Professional service, local expertise, and personalized guidance.',
      type: 'profile',
      url: 'https://openhouseupdate.com/about',
      image: 'https://openhouseupdate.com/images/og-about.jpg',
      imageAlt: 'Dr. Jan Duffy - Las Vegas Real Estate Agent',
      profileFirstName: 'Janet',
      profileLastName: 'Duffy',
      profileUsername: 'drjanetduffy',
    }),

  contact: (): DocumentMeta[] =>
    createOpenGraphMeta({
      title: 'Contact Dr. Jan Duffy - Las Vegas Real Estate Agent',
      description:
        'Contact Dr. Jan Duffy for professional real estate services in Las Vegas. Get expert guidance for buying or selling your home.',
      type: 'website',
      url: 'https://openhouseupdate.com/contact',
      image: 'https://openhouseupdate.com/images/og-contact.jpg',
      imageAlt: 'Contact Dr. Jan Duffy - Las Vegas Real Estate',
      articleTag: ['contact', 'real estate agent', 'Las Vegas', 'Dr. Jan Duffy'],
    }),

  search: (): DocumentMeta[] =>
    createOpenGraphMeta({
      title: 'Property Search - Find Las Vegas Real Estate | Open House Update',
      description:
        'Search thousands of Las Vegas properties with our advanced real estate search. Find your perfect home with Dr. Jan Duffy.',
      type: 'website',
      url: 'https://openhouseupdate.com/search',
      image: 'https://openhouseupdate.com/images/og-search.jpg',
      imageAlt: 'Property Search - Las Vegas Real Estate',
      articleTag: ['property search', 'Las Vegas homes', 'real estate search', 'home search'],
    }),

  map: (): DocumentMeta[] =>
    createOpenGraphMeta({
      title: 'Las Vegas Real Estate Map - Interactive Property Search',
      description:
        'Explore Las Vegas properties on our interactive map. Find homes by location with detailed neighborhood information.',
      type: 'website',
      url: 'https://openhouseupdate.com/map',
      image: 'https://openhouseupdate.com/images/og-map.jpg',
      imageAlt: 'Las Vegas Real Estate Map',
      articleTag: [
        'real estate map',
        'Las Vegas properties',
        'interactive map',
        'neighborhood search',
      ],
    }),

  neighborhoods: (neighborhood: string): DocumentMeta[] =>
    createOpenGraphMeta({
      title: `${neighborhood} Real Estate - Las Vegas Neighborhood Guide`,
      description: `Discover ${neighborhood} real estate opportunities. Get neighborhood insights, market trends, and property listings.`,
      type: 'website',
      url: `https://openhouseupdate.com/neighborhoods/${neighborhood}`,
      image: `https://openhouseupdate.com/images/og-neighborhood-${neighborhood.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      imageAlt: `${neighborhood} Real Estate - Las Vegas`,
      articleTag: [neighborhood, 'Las Vegas', 'real estate', 'neighborhood guide', 'property'],
    }),

  openHouses: (priceRange?: string): DocumentMeta[] =>
    createOpenGraphMeta({
      title: priceRange
        ? `Open Houses ${priceRange} - Las Vegas Real Estate`
        : 'Open Houses - Las Vegas Real Estate This Weekend',
      description: priceRange
        ? `Find open houses in Las Vegas priced ${priceRange}. Tour properties this weekend with Dr. Jan Duffy.`
        : 'Discover open houses in Las Vegas this weekend. Tour properties and find your next home.',
      type: 'website',
      url: priceRange
        ? `https://openhouseupdate.com/open-houses-for-sale/${priceRange}`
        : 'https://openhouseupdate.com/this-weekend',
      image: 'https://openhouseupdate.com/images/og-open-houses.jpg',
      imageAlt: 'Open Houses - Las Vegas Real Estate',
      articleTag: ['open houses', 'Las Vegas', 'weekend tours', 'property viewing', 'real estate'],
    }),

  blog: (): DocumentMeta[] =>
    createOpenGraphMeta({
      title: 'Las Vegas Real Estate Blog - Market Insights & Tips',
      description:
        'Stay informed with the latest Las Vegas real estate market insights, tips, and trends from Dr. Jan Duffy.',
      type: 'website',
      url: 'https://openhouseupdate.com/blog',
      image: 'https://openhouseupdate.com/images/og-blog.jpg',
      imageAlt: 'Las Vegas Real Estate Blog',
      articleTag: ['real estate blog', 'Las Vegas market', 'real estate tips', 'market insights'],
    }),

  faq: (): DocumentMeta[] =>
    createOpenGraphMeta({
      title: 'Frequently Asked Questions - Las Vegas Real Estate',
      description:
        'Get answers to common real estate questions about buying and selling homes in Las Vegas with Dr. Jan Duffy.',
      type: 'website',
      url: 'https://openhouseupdate.com/faq',
      image: 'https://openhouseupdate.com/images/og-faq.jpg',
      imageAlt: 'Real Estate FAQ - Las Vegas',
      articleTag: [
        'real estate FAQ',
        'home buying questions',
        'home selling questions',
        'Las Vegas',
      ],
    }),
}
