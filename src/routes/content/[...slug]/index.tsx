import { component$ } from '@builder.io/qwik'
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city'
import BuilderContent from '~/components/builder/builder-content'
import BuilderPreview from '~/components/builder/builder-preview'
import { type BuilderPageData, getBuilderPage, isPreviewMode } from '~/services/builder-service'

// Load Builder.io page content on the server
export const useBuilderPageLoader = routeLoader$(async ({ params, url }) => {
  const slug = params.slug || ''
  // Handle slug - it can be a string or array depending on route matching
  const slugArray = Array.isArray(slug)
    ? slug
    : typeof slug === 'string'
      ? slug.split('/').filter(Boolean)
      : []
  // Build URL path - Builder.io pages should have their URL field set to match this pattern
  // e.g., if slug is ['test'], then URL path is '/content/test'
  const urlPath = slugArray.length > 0 ? `/content/${slugArray.join('/')}` : '/content'
  const preview = isPreviewMode(new URL(url.href))

  // Fetch page from Builder.io
  // Builder.io pages should have their data.url field set to match this path
  const page = await getBuilderPage(urlPath, preview)

  return {
    page,
    urlPath,
    preview,
  }
})

export default component$(() => {
  const pageData = useBuilderPageLoader()

  const page = pageData.value.page
  const preview = pageData.value.preview

  // If no page found, show 404
  if (!page) {
    return (
      <div class="container mx-auto px-6 py-16 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p class="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist or hasn't been created in Builder.io yet.
        </p>
        <a href="/" class="text-blue-600 hover:text-blue-800 underline">
          Return to Homepage
        </a>
      </div>
    )
  }

  return (
    <div class="builder-page">
      {/* Builder.io Preview Mode */}
      {preview && <BuilderPreview />}

      {/* Builder.io Content */}
      <BuilderContent content={page} className="min-h-screen" />
    </div>
  )
})

export const head: DocumentHead = ({ resolveValue }) => {
  const pageData = resolveValue(useBuilderPageLoader)
  const page = pageData.page as BuilderPageData | null

  if (!page) {
    return {
      title: 'Page Not Found - Open House Update',
      meta: [
        {
          name: 'description',
          content: 'The page you are looking for could not be found.',
        },
        {
          name: 'robots',
          content: 'noindex, follow',
        },
      ],
    }
  }

  // Extract SEO data from Builder.io page
  const title = page.data?.title || page.name || 'Open House Update'
  const description = page.data?.description || 'Las Vegas real estate services'
  // Use the page URL from Builder.io or fallback to the route path
  const pageUrl = page.data?.url || page.url || pageData.urlPath
  const canonicalUrl = `https://www.openhouseupdate.com${pageUrl.startsWith('/') ? pageUrl : `/${pageUrl}`}`

  return {
    title: `${title} | Open House Update`,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        name: 'robots',
        content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: canonicalUrl,
      },
      {
        property: 'og:site_name',
        content: 'Open House Update',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: canonicalUrl.endsWith('/') ? canonicalUrl : `${canonicalUrl}/`,
      },
    ],
  }
}
