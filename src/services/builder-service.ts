import { builder } from '@builder.io/sdk'

// Initialize Builder.io client
const BUILDER_API_KEY =
  process.env.BUILDER_API_KEY ||
  process.env.PUBLIC_BUILDER_API_KEY ||
  '2fe6022b3c6d46e7b88fe8d36775b365'

builder.init(BUILDER_API_KEY)

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
    // Normalize URL path
    const normalizedPath = urlPath.startsWith('/') ? urlPath : `/${urlPath}`

    // Build query options - Builder.io matches pages by URL field
    // biome-ignore lint/suspicious/noExplicitAny: Builder.io SDK options are dynamic
    const options: any = {
      options: {
        noTargeting: true,
      },
      userAttributes: {
        urlPath: normalizedPath,
      },
    }

    // Add preview mode if needed
    if (preview) {
      options.includeRefs = true
      options.prerender = false
    }

    // Fetch page from Builder.io by URL
    // Builder.io automatically matches pages where data.url matches the urlPath
    const page = await builder.get('page', options).promise()

    if (!page) {
      // Try without leading slash as fallback
      const altPath = normalizedPath === '/' ? '/' : normalizedPath.slice(1)
      const altPage = await builder
        .get('page', {
          ...options,
          userAttributes: {
            urlPath: altPath,
          },
        })
        .promise()
      return altPage ? (altPage as unknown as BuilderPageData) : null
    }

    return page as unknown as BuilderPageData
  } catch (error) {
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
