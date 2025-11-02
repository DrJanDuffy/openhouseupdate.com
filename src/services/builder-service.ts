import { builder } from '@builder.io/sdk'

// Initialize Builder.io client
const BUILDER_API_KEY =
  process.env.BUILDER_API_KEY ||
  process.env.PUBLIC_BUILDER_API_KEY ||
  '2fe6022b3c6d46e7b88fe8d36775b365'

builder.init(BUILDER_API_KEY)

// Builder.io API endpoint for fetching rendered content
const BUILDER_API_URL = 'https://cdn.builder.io/api/v3/content/page'

export interface BuilderPageData {
  id: string
  name: string
  published: string
  data: {
    title?: string
    description?: string
    blocks?: any[]
    [key: string]: any
  }
  url?: string
  lastUpdated?: number
}

/**
 * Get a Builder.io page by URL path
 * @param urlPath - The URL path to match against Builder.io page URLs
 * @param preview - Whether to fetch preview/draft content
 * @returns Builder.io page data or null if not found
 */
export async function getBuilderPage(
  urlPath: string,
  preview = false
): Promise<BuilderPageData | null> {
  try {
    // Normalize URL path - Builder.io expects URLs to match the page's url field
    const normalizedPath = urlPath.startsWith('/') ? urlPath : `/${urlPath}`

    // Build query options - Builder.io matches pages by URL directly
    // biome-ignore lint/suspicious/noExplicitAny: Builder.io SDK options are dynamic
    const options: any = {
      url: normalizedPath,
      options: {
        noTargeting: true,
      },
    }

    // Add preview mode if needed
    if (preview) {
      options.includeRefs = true
      options.prerender = false
    }

    // Try fetching via Builder.io SDK first
    const page = await builder.get('page', options).promise()

    // Debug: Log what we got from Builder.io
    if (page) {
      // biome-ignore lint/suspicious/noConsole: Debug logging for Builder.io integration
      console.log('[Builder.io] Page found:', {
        id: page.id,
        name: page.name,
        url: page.url,
        hasData: !!page.data,
        dataKeys: page.data ? Object.keys(page.data) : [],
      })
    }

    if (!page) {
      // biome-ignore lint/suspicious/noConsole: Debug logging for Builder.io integration
      console.log('[Builder.io] No page found for URL:', normalizedPath)
      // Try without leading slash as fallback
      const altPath = normalizedPath === '/' ? '/' : normalizedPath.slice(1)
      const altPage = await builder
        .get('page', {
          url: altPath,
          options: {
            noTargeting: true,
          },
        })
        .promise()
      
      if (altPage) {
        return altPage as unknown as BuilderPageData
      }

      // If SDK fails, try REST API as fallback
      try {
        const apiUrl = `${BUILDER_API_URL}?apiKey=${BUILDER_API_KEY}&url=${encodeURIComponent(normalizedPath)}`
        const response = await fetch(apiUrl)
        if (response.ok) {
          const apiPage = await response.json()
          if (apiPage) {
            return apiPage as unknown as BuilderPageData
          }
        }
      } catch (apiError) {
        // biome-ignore lint/suspicious/noConsole: Fallback API error logging
        console.error('Builder.io REST API fallback failed:', apiError)
      }
      
      return null
    }

    return page as unknown as BuilderPageData
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: This is a critical error that should be logged
    console.error('Error fetching Builder.io page:', error)
    return null
  }
}

/**
 * Get all Builder.io pages (for sitemap generation)
 * @returns Array of Builder.io pages
 */
export async function getAllBuilderPages(): Promise<BuilderPageData[]> {
  try {
    const pages = await builder.getAll('page', {
      options: {
        noTargeting: true,
      },
      limit: 100,
    })
    return pages as unknown as BuilderPageData[]
  } catch (error) {
    console.error('Error fetching all Builder.io pages:', error)
    return []
  }
}

/**
 * Check if Builder.io preview mode is active
 * @param url - Current URL with search params
 * @returns boolean indicating if preview mode is active
 */
export function isPreviewMode(url: URL): boolean {
  return url.searchParams.get('builder.preview') === 'true' || url.searchParams.has('preview')
}
