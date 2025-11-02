import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { getPageFAQs } from '~/data/page-faqs'
import {
  generateMetaDescription,
  generateTitle,
  getPageSnippet,
} from '~/utils/snippet-optimization'
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

// Utility function to create DocumentHead with optimized snippets
export const createOptimizedHead = (
  pageKey: string,
  customTitle?: string,
  customDescription?: string,
  customKeywords?: string[]
): DocumentHead => {
  const snippet = getPageSnippet(pageKey)

  const title = generateTitle(customTitle || snippet.title)
  const description = generateMetaDescription(customDescription || snippet.description)
  const keywords = customKeywords || snippet.keywords

  return {
    title,
    meta: [
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
        content: `https://www.openhouseupdate.com/${pageKey === 'homepage' ? '/' : `${pageKey}/`}`,
      },
      {
        property: 'og:site_name',
        content: 'Open House Update',
      },
      {
        property: 'og:locale',
        content: 'en_US',
      },
      {
        property: 'og:image',
        content: 'https://www.openhouseupdate.com/images/og-default.jpg',
      },
      {
        property: 'og:image:secure_url',
        content: 'https://www.openhouseupdate.com/images/og-default.jpg',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:image:type',
        content: 'image/jpeg',
      },
      {
        property: 'og:image:alt',
        content: 'Open House Update - Las Vegas Real Estate',
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
      {
        name: 'twitter:image',
        content: 'https://www.openhouseupdate.com/images/og-default.jpg',
      },
      {
        name: 'twitter:image:alt',
        content: 'Open House Update - Las Vegas Real Estate',
      },
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
