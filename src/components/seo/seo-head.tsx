import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article' | 'profile';
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleTags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  breadcrumbs?: Array<{name: string, url: string}>;
  faqs?: Array<{question: string, answer: string}>;
  structuredData?: any;
}

export const createSEOHead = (props: SEOHeadProps): DocumentHead => {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogImage = 'https://openhouseupdate.com/images/og-default.jpg',
    ogImageAlt = 'Open House Update - Las Vegas Real Estate',
    ogType = 'website',
    articleAuthor,
    articlePublishedTime,
    articleModifiedTime,
    articleSection,
    articleTags = [],
    noindex = false,
    nofollow = false,
  } = props;

  const fullTitle = title.includes('Open House Update') ? title : `${title} | Open House Update`;
  const robotsContent = noindex || nofollow 
    ? `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`
    : 'index, follow';

  const metaTags = [
    // Basic SEO
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'author', content: 'Dr. Janet Duffy' },
    { name: 'robots', content: robotsContent },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'theme-color', content: '#3A8DDE' },
    
    // Open Graph
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:type', content: ogType },
    { property: 'og:url', content: canonicalUrl || 'https://openhouseupdate.com' },
    { property: 'og:site_name', content: 'Open House Update' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: ogImageAlt },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
    { name: 'twitter:image:alt', content: ogImageAlt },
    
    // Geographic
    { name: 'geo.region', content: 'US-NV' },
    { name: 'geo.placename', content: 'Las Vegas' },
    { name: 'geo.position', content: '36.1699;-115.1398' },
    { name: 'ICBM', content: '36.1699, -115.1398' },
  ];

  // Add article-specific meta tags
  if (ogType === 'article') {
    if (articleAuthor) metaTags.push({ property: 'article:author', content: articleAuthor });
    if (articlePublishedTime) metaTags.push({ property: 'article:published_time', content: articlePublishedTime });
    if (articleModifiedTime) metaTags.push({ property: 'article:modified_time', content: articleModifiedTime });
    if (articleSection) metaTags.push({ property: 'article:section', content: articleSection });
    articleTags.forEach(tag => metaTags.push({ property: 'article:tag', content: tag }));
  }

  const links = [
    {
      rel: 'canonical',
      href: canonicalUrl || 'https://openhouseupdate.com',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
    {
      rel: 'apple-touch-icon',
      href: '/images/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ];

  return {
    title: fullTitle,
    meta: metaTags,
    links,
  };
};

export default component$<SEOHeadProps>((props) => {
  return null; // This component is for type safety and utility functions only
});
