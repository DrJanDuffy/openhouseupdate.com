import { component$ } from '@builder.io/qwik'

interface EnhancedSitemapProps {
  includeImages?: boolean
  includeNews?: boolean
  includeVideo?: boolean
  dynamicContent?: boolean
}

interface SitemapPage {
  url: string
  priority: number
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  lastmod?: string
  images?: Array<{
    loc: string
    caption?: string
    title?: string
    license?: string
  }>
  news?: {
    publication_name: string
    publication_language: string
    title: string
    publication_date: string
  }
  video?: {
    thumbnail_loc: string
    title: string
    description: string
    content_loc?: string
    player_loc?: string
    duration?: number
  }
}

export default component$<EnhancedSitemapProps>(
  ({ includeImages = true, includeNews = false, includeVideo = false, dynamicContent = true }) => {
    // Component provides sitemap generation utilities
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _generateSitemapPages = (): SitemapPage[] => {
      const currentDate = new Date().toISOString()

      const basePages: SitemapPage[] = [
        // Main pages
        {
          url: 'https://openhouseupdate.com/',
          priority: 1.0,
          changefreq: 'daily',
          lastmod: currentDate,
          images: includeImages
            ? [
                {
                  loc: 'https://openhouseupdate.com/images/hero-las-vegas.jpg',
                  caption: 'Las Vegas Real Estate - Open House Update',
                  title: 'Las Vegas Real Estate Services',
                  license: 'https://openhouseupdate.com/license',
                },
                {
                  loc: 'https://openhouseupdate.com/images/dr-janet-duffy.jpg',
                  caption: 'Dr. Janet Duffy - Real Estate Agent',
                  title: 'Dr. Janet Duffy Professional Headshot',
                },
              ]
            : undefined,
        },
        {
          url: 'https://openhouseupdate.com/about',
          priority: 0.8,
          changefreq: 'monthly',
          lastmod: currentDate,
        },
        {
          url: 'https://openhouseupdate.com/contact',
          priority: 0.9,
          changefreq: 'monthly',
          lastmod: currentDate,
        },

        // Services with enhanced metadata
        {
          url: 'https://openhouseupdate.com/services',
          priority: 0.9,
          changefreq: 'weekly',
          lastmod: currentDate,
          images: includeImages
            ? [
                {
                  loc: 'https://openhouseupdate.com/images/services-hero.jpg',
                  caption: 'Real Estate Services in Las Vegas',
                  title: 'Professional Real Estate Services',
                },
              ]
            : undefined,
        },
        {
          url: 'https://openhouseupdate.com/services/home-valuation',
          priority: 0.8,
          changefreq: 'weekly',
          lastmod: currentDate,
          images: includeImages
            ? [
                {
                  loc: 'https://openhouseupdate.com/images/home-valuation-tool.jpg',
                  caption: 'Home Valuation Calculator',
                  title: 'Free Home Value Estimate',
                },
              ]
            : undefined,
        },
        {
          url: 'https://openhouseupdate.com/services/buyer-services',
          priority: 0.8,
          changefreq: 'weekly',
          lastmod: currentDate,
        },
        {
          url: 'https://openhouseupdate.com/services/seller-services',
          priority: 0.8,
          changefreq: 'weekly',
          lastmod: currentDate,
        },
        {
          url: 'https://openhouseupdate.com/services/market-analysis',
          priority: 0.8,
          changefreq: 'weekly',
          lastmod: currentDate,
          news: includeNews
            ? {
                publication_name: 'Open House Update',
                publication_language: 'en',
                title: 'Las Vegas Real Estate Market Analysis',
                publication_date: currentDate,
              }
            : undefined,
        },

        // Property search pages
        {
          url: 'https://openhouseupdate.com/search',
          priority: 0.9,
          changefreq: 'daily',
          lastmod: currentDate,
        },
        {
          url: 'https://openhouseupdate.com/map',
          priority: 0.8,
          changefreq: 'daily',
          lastmod: currentDate,
        },
        {
          url: 'https://openhouseupdate.com/this-weekend',
          priority: 0.9,
          changefreq: 'daily',
          lastmod: currentDate,
          news: includeNews
            ? {
                publication_name: 'Open House Update',
                publication_language: 'en',
                title: 'This Weekend Open Houses in Las Vegas',
                publication_date: currentDate,
              }
            : undefined,
        },

        // Price range pages
        {
          url: 'https://openhouseupdate.com/open-houses-for-sale/under-400k',
          priority: 0.7,
          changefreq: 'daily',
          lastmod: currentDate,
        },
        {
          url: 'https://openhouseupdate.com/open-houses-for-sale/400k-600k',
          priority: 0.7,
          changefreq: 'daily',
          lastmod: currentDate,
        },
        {
          url: 'https://openhouseupdate.com/open-houses-for-sale/600k-800k',
          priority: 0.7,
          changefreq: 'daily',
          lastmod: currentDate,
        },
        {
          url: 'https://openhouseupdate.com/open-houses-for-sale/800k-1m',
          priority: 0.7,
          changefreq: 'daily',
          lastmod: currentDate,
        },
        {
          url: 'https://openhouseupdate.com/open-houses-for-sale/over-1m',
          priority: 0.7,
          changefreq: 'daily',
          lastmod: currentDate,
        },

        // Neighborhood pages
        {
          url: 'https://openhouseupdate.com/neighborhoods/summerlin',
          priority: 0.6,
          changefreq: 'weekly',
          lastmod: currentDate,
          images: includeImages
            ? [
                {
                  loc: 'https://openhouseupdate.com/images/summerlin-neighborhood.jpg',
                  caption: 'Summerlin Real Estate',
                  title: 'Summerlin Neighborhood Properties',
                },
              ]
            : undefined,
        },
        {
          url: 'https://openhouseupdate.com/neighborhoods/henderson',
          priority: 0.6,
          changefreq: 'weekly',
          lastmod: currentDate,
          images: includeImages
            ? [
                {
                  loc: 'https://openhouseupdate.com/images/henderson-neighborhood.jpg',
                  caption: 'Henderson Real Estate',
                  title: 'Henderson Neighborhood Properties',
                },
              ]
            : undefined,
        },
        {
          url: 'https://openhouseupdate.com/neighborhoods/north-las-vegas',
          priority: 0.6,
          changefreq: 'weekly',
          lastmod: currentDate,
        },
        {
          url: 'https://openhouseupdate.com/neighborhoods/spring-valley',
          priority: 0.6,
          changefreq: 'weekly',
          lastmod: currentDate,
        },
        {
          url: 'https://openhouseupdate.com/neighborhoods/enterprise',
          priority: 0.6,
          changefreq: 'weekly',
          lastmod: currentDate,
        },

        // Legal and support pages
        {
          url: 'https://openhouseupdate.com/privacy-policy',
          priority: 0.3,
          changefreq: 'yearly',
          lastmod: currentDate,
        },
        {
          url: 'https://openhouseupdate.com/terms-of-service',
          priority: 0.3,
          changefreq: 'yearly',
          lastmod: currentDate,
        },
        {
          url: 'https://openhouseupdate.com/faq',
          priority: 0.5,
          changefreq: 'monthly',
          lastmod: currentDate,
        },
      ]

      // Add dynamic content if enabled
      if (dynamicContent) {
        // Add recent listings (simulated)
        for (let i = 1; i <= 10; i++) {
          basePages.push({
            url: `https://openhouseupdate.com/listings/property-${i}`,
            priority: 0.6,
            changefreq: 'weekly',
            lastmod: currentDate,
            images: includeImages
              ? [
                  {
                    loc: `https://openhouseupdate.com/images/property-${i}-main.jpg`,
                    caption: `Property ${i} - Las Vegas Real Estate`,
                    title: `Property ${i} Listing`,
                  },
                ]
              : undefined,
          })
        }
      }

      return basePages
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _generateXMLSitemap = (pages: SitemapPage[]): string => {
      const namespaces = [
        'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
        includeImages ? 'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"' : '',
        includeNews ? 'xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"' : '',
        includeVideo ? 'xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"' : '',
      ]
        .filter(Boolean)
        .join('\n        ')

      const urlEntries = pages
        .map((page) => {
          let entry = `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>`

          // Add image data
          if (page.images && includeImages) {
            page.images.forEach((image) => {
              entry += `
    <image:image>
      <image:loc>${image.loc}</image:loc>`
              if (image.caption)
                entry += `
      <image:caption>${image.caption}</image:caption>`
              if (image.title)
                entry += `
      <image:title>${image.title}</image:title>`
              if (image.license)
                entry += `
      <image:license>${image.license}</image:license>`
              entry += `
    </image:image>`
            })
          }

          // Add news data
          if (page.news && includeNews) {
            entry += `
    <news:news>
      <news:publication>
        <news:name>${page.news.publication_name}</news:name>
        <news:language>${page.news.publication_language}</news:language>
      </news:publication>
      <news:title>${page.news.title}</news:title>
      <news:publication_date>${page.news.publication_date}</news:publication_date>
    </news:news>`
          }

          // Add video data
          if (page.video && includeVideo) {
            entry += `
    <video:video>
      <video:thumbnail_loc>${page.video.thumbnail_loc}</video:thumbnail_loc>
      <video:title>${page.video.title}</video:title>
      <video:description>${page.video.description}</video:description>`
            if (page.video.content_loc)
              entry += `
      <video:content_loc>${page.video.content_loc}</video:content_loc>`
            if (page.video.player_loc)
              entry += `
      <video:player_loc>${page.video.player_loc}</video:player_loc>`
            if (page.video.duration)
              entry += `
      <video:duration>${page.video.duration}</video:duration>`
            entry += `
    </video:video>`
          }

          entry += `
  </url>`
          return entry
        })
        .join('\n')

      return `<?xml version="1.0" encoding="UTF-8"?>
<urlset ${namespaces}>
${urlEntries}
</urlset>`
    }

    return (
      <div style={{ display: 'none' }}>
        {/* This component provides sitemap generation utilities */}
      </div>
    )
  }
)

// Export sitemap generation function
export const generateEnhancedSitemap = (
  includeImages = true,
  includeNews = false,
  includeVideo = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _dynamicContent = true
): string => {
  const pages = [
    // Main pages
    {
      url: 'https://openhouseupdate.com/',
      priority: 1.0,
      changefreq: 'daily' as const,
      lastmod: new Date().toISOString(),
      images: includeImages
        ? [
            {
              loc: 'https://openhouseupdate.com/images/hero-las-vegas.jpg',
              caption: 'Las Vegas Real Estate - Open House Update',
              title: 'Las Vegas Real Estate Services',
              license: 'https://openhouseupdate.com/license',
            },
          ]
        : undefined,
    },
    // ... other pages would be added here
  ]

  const namespaces = [
    'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    includeImages ? 'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"' : '',
    includeNews ? 'xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"' : '',
    includeVideo ? 'xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"' : '',
  ]
    .filter(Boolean)
    .join('\n        ')

  const urlEntries = pages
    .map((page) => {
      let entry = `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>`

      if (page.images && includeImages) {
        page.images.forEach((image) => {
          entry += `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:caption>${image.caption}</image:caption>
      <image:title>${image.title}</image:title>
    </image:image>`
        })
      }

      entry += `
  </url>`
      return entry
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset ${namespaces}>
${urlEntries}
</urlset>`
}
