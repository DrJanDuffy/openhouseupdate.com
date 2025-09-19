import { component$ } from '@builder.io/qwik';

export interface CrawlerManagementProps {
  pageType: 'home' | 'service' | 'listing' | 'neighborhood' | 'blog';
  hasImages?: boolean;
  hasVideo?: boolean;
  hasNews?: boolean;
  priority?: number;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export default component$<CrawlerManagementProps>(({
  pageType,
  hasImages = false,
  hasVideo = false,
  hasNews = false,
  priority = 0.5,
  changeFrequency = 'weekly',
}) => {
  // Generate crawl hints based on page type and content
  const getCrawlHints = () => {
    const hints = [];
    
    if (hasImages) {
      hints.push('image');
    }
    
    if (hasVideo) {
      hints.push('video');
    }
    
    if (hasNews) {
      hints.push('news');
    }
    
    // Page type specific hints
    switch (pageType) {
      case 'home':
        hints.push('homepage', 'navigation');
        break;
      case 'service':
        hints.push('service', 'contact');
        break;
      case 'listing':
        hints.push('property', 'real-estate');
        break;
      case 'neighborhood':
        hints.push('location', 'area');
        break;
      case 'blog':
        hints.push('article', 'content');
        break;
    }
    
    return hints;
  };

  const crawlHints = getCrawlHints();

  return (
    <>
      {/* Crawl hints meta tag */}
      <meta name="crawl-hints" content={crawlHints.join(', ')} />
      
      {/* Priority hint */}
      <meta name="page-priority" content={priority.toString()} />
      
      {/* Change frequency hint */}
      <meta name="change-frequency" content={changeFrequency} />
      
      {/* Content type hints */}
      {hasImages && <meta name="has-images" content="true" />}
      {hasVideo && <meta name="has-video" content="true" />}
      {hasNews && <meta name="has-news" content="true" />}
      
      {/* Page type hint */}
      <meta name="page-type" content={pageType} />
    </>
  );
});