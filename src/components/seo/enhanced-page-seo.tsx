import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { getPageFAQs } from '~/data/page-faqs'
import {
  generateMetaDescription,
  generateTitle,
  getPageSnippet,
} from '~/utils/snippet-optimization'
import {
  createSEOOptimizedOG,
  getPageOGMetadata,
} from '~/utils/og-seo-optimizer'
import EnhancedStructuredData from './enhanced-structured-data'
import FAQSection from './faq-section'

export interface EnhancedPageSEOProps {
  pageKey: string
  customTitle?: string
  customDescription?: string
  customKeywords?: string[]
  showFAQs?: boolean
  faqTitle?: string
  className?: string
}

export default component$<EnhancedPageSEOProps>(
  ({
    pageKey,
    customTitle,
    customDescription,
    customKeywords,
    showFAQs = true,
    faqTitle,
    className = '',
  }) => {
    const snippet = getPageSnippet(pageKey)
    const faqs = getPageFAQs(snippet.faqKey || pageKey)

    const _title = generateTitle(customTitle || snippet.title)
    const _description = generateMetaDescription(customDescription || snippet.description)
    const _keywords = customKeywords || snippet.keywords

    return (
      <>
        {/* Structured Data */}
        {snippet.structuredDataType && (
          <EnhancedStructuredData
            type={snippet.structuredDataType}
            breadcrumbs={snippet.breadcrumbs}
            faqs={showFAQs ? faqs : []}
          />
        )}

        {/* FAQ Section */}
        {showFAQs && faqs.length > 0 && (
          <FAQSection faqs={faqs} title={faqTitle} className={className} />
        )}
      </>
    )
  }
)

// Utility function to create DocumentHead with optimized snippets and enhanced OG
export const createOptimizedHead = (
  pageKey: string,
  customTitle?: string,
  customDescription?: string,
  customKeywords?: string[]
): DocumentHead => {
  const snippet = getPageSnippet(pageKey)
  const pageOGConfig = getPageOGMetadata(pageKey)

  const title = generateTitle(customTitle || snippet.title)
  const description = generateMetaDescription(customDescription || snippet.description)
  const keywords = customKeywords || snippet.keywords

  // Create SEO-optimized OG metadata
  const ogMeta = createSEOOptimizedOG({
    pageKey,
    title,
    description,
    keywords: [...keywords, ...(pageOGConfig.keywords || [])],
    type: 'website',
    articleTags: pageOGConfig.articleTags,
  })

  return {
    title,
    meta: [
      // Basic SEO
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content: keywords.join(', '),
      },
      {
        name: 'robots',
        content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      },
      // Enhanced OG metadata (SEO-optimized)
      ...ogMeta,
    ],
    links: [
      {
        rel: 'canonical',
        href: `https://www.openhouseupdate.com/${pageKey === 'homepage' ? '/' : `${pageKey}/`}`,
      },
    ],
  }
}

// Utility function to get FAQ data for a page
export const getPageFAQData = (pageKey: string) => {
  const snippet = getPageSnippet(pageKey)
  return getPageFAQs(snippet.faqKey || pageKey)
}
