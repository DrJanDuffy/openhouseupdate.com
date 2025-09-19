import { component$ } from '@builder.io/qwik';

interface CrawlerManagementProps {
  pageType?: 'home' | 'listing' | 'service' | 'neighborhood' | 'search';
  lastModified?: string;
  hasImages?: boolean;
  hasVideo?: boolean;
  hasNews?: boolean;
  priority?: number;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export default component$<CrawlerManagementProps>(({ 
  pageType = 'home',
  lastModified,
  hasImages = false,
  hasVideo = false,
  hasNews = false,
  priority = 0.8,
  changeFrequency = 'weekly'
}) => {
  const getCrawlDirectives = () => {
    const directives = [];
    
    // Page-specific crawl directives
    switch (pageType) {
      case 'listing':
        directives.push('max-snippet:-1', 'max-image-preview:large', 'max-video-preview:-1');
        break;
      case 'service':
        directives.push('max-snippet:-1', 'max-image-preview:standard');
        break;
      case 'neighborhood':
        directives.push('max-snippet:-1', 'max-image-preview:large');
        break;
      case 'search':
        directives.push('max-snippet:-1', 'noarchive');
        break;
      default:
        directives.push('max-snippet:-1', 'max-image-preview:large', 'max-video-preview:-1');
    }
    
    return directives.join(', ');
  };

  const getStructuredCrawlData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "mainEntity": {
        "@type": "RealEstateService",
        "name": "Las Vegas Real Estate Services",
        "provider": {
          "@type": "RealEstateAgent",
          "name": "Dr. Janet Duffy"
        }
      },
      "dateModified": lastModified || new Date().toISOString(),
      "datePublished": "2024-01-01T00:00:00Z",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Open House Update",
        "url": "https://openhouseupdate.com"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://openhouseupdate.com"
          }
        ]
      }
    };
  };

  return (
    <>
      {/* Enhanced robots meta tag */}
      <meta name="robots" content={`index, follow, ${getCrawlDirectives()}`} />
      
      {/* Page-specific crawl hints */}
      <meta name="googlebot" content={`index, follow, ${getCrawlDirectives()}`} />
      <meta name="bingbot" content={`index, follow, ${getCrawlDirectives()}`} />
      
      {/* Crawl budget optimization */}
      <meta name="crawl-budget" content={`priority:${priority}, frequency:${changeFrequency}`} />
      
      {/* Content type hints for crawlers */}
      {hasImages && <meta name="content-type" content="text/html; images=true" />}
      {hasVideo && <meta name="content-type" content="text/html; video=true" />}
      {hasNews && <meta name="content-type" content="text/html; news=true" />}
      
      {/* Structured data for crawler understanding */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify(getStructuredCrawlData())}
      />
      
      {/* Crawl-friendly navigation hints */}
      <link rel="canonical" href={`https://openhouseupdate.com/${pageType}`} />
      
      {/* Preload critical resources for crawlers */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/logo.svg" as="image" />
      
      {/* Crawler-friendly error handling */}
      <meta name="crawler-error-handling" content="graceful-degradation" />
    </>
  );
});

// Crawl budget optimization utilities
export const getCrawlBudgetRecommendations = (pageType: string, contentSize: number) => {
  const recommendations = [];
  
  if (contentSize > 10000) {
    recommendations.push('Consider pagination for large content');
  }
  
  if (pageType === 'listing' && contentSize < 500) {
    recommendations.push('Add more descriptive content for better indexing');
  }
  
  return recommendations;
};

// Dynamic crawl frequency based on content type
export const getOptimalCrawlFrequency = (pageType: string, lastUpdate: Date) => {
  const now = new Date();
  const daysSinceUpdate = Math.floor((now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24));
  
  switch (pageType) {
    case 'listing':
      return daysSinceUpdate < 7 ? 'daily' : 'weekly';
    case 'service':
      return daysSinceUpdate < 30 ? 'weekly' : 'monthly';
    case 'neighborhood':
      return daysSinceUpdate < 14 ? 'weekly' : 'monthly';
    default:
      return 'weekly';
  }
};
