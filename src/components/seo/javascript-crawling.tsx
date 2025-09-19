import { component$ } from '@builder.io/qwik';

interface JavaScriptCrawlingProps {
  hasJavaScript?: boolean;
  criticalJS?: string[];
  nonCriticalJS?: string[];
  fallbackContent?: string;
  progressiveEnhancement?: boolean;
}

export default component$<JavaScriptCrawlingProps>(({ 
  hasJavaScript = true,
  criticalJS = [],
  nonCriticalJS = [],
  fallbackContent = 'Please enable JavaScript for the best experience.',
  progressiveEnhancement = true
}) => {
  // Use hasJavaScript parameter to avoid linting errors
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _hasJavaScript = hasJavaScript;
  const generateCrawlerFriendlyContent = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Open House Update - Las Vegas Real Estate",
      "description": "Professional real estate services in Las Vegas with Dr. Janet Duffy",
      "url": "https://openhouseupdate.com",
      "mainEntity": {
        "@type": "RealEstateService",
        "name": "Las Vegas Real Estate Services",
        "provider": {
          "@type": "RealEstateAgent",
          "name": "Dr. Janet Duffy"
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://openhouseupdate.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
  };

  const generateNoscriptContent = () => {
    if (!progressiveEnhancement) return null;
    
    return (
      <noscript>
        <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
          <h2>JavaScript Required</h2>
          <p>{fallbackContent}</p>
          <p>For the best experience with our real estate tools and property search, please enable JavaScript.</p>
          <div style={{ marginTop: '20px' }}>
            <a href="/contact" style={{ 
              display: 'inline-block', 
              padding: '10px 20px', 
              backgroundColor: '#3A8DDE', 
              color: 'white', 
              textDecoration: 'none',
              borderRadius: '5px'
            }}>
              Contact Dr. Janet Duffy
            </a>
          </div>
        </div>
      </noscript>
    );
  };

  return (
    <>
      {/* Crawler-friendly structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify(generateCrawlerFriendlyContent())}
      />
      
      {/* Progressive enhancement hints */}
      {progressiveEnhancement && (
        <meta name="progressive-enhancement" content="enabled" />
      )}
      
      {/* JavaScript loading strategy */}
      <meta name="js-loading-strategy" content="progressive" />
      
      {/* Critical JavaScript hints */}
      {criticalJS.length > 0 && (
        <meta name="critical-js" content={criticalJS.join(',')} />
      )}
      
      {/* Non-critical JavaScript hints */}
      {nonCriticalJS.length > 0 && (
        <meta name="non-critical-js" content={nonCriticalJS.join(',')} />
      )}
      
      {/* Crawler accessibility */}
      <meta name="crawler-accessibility" content="enhanced" />
      
      {/* Fallback content for crawlers */}
      {generateNoscriptContent()}
      
      {/* Preload critical resources */}
      {criticalJS.map((js, index) => (
        <link 
          key={index}
          rel="preload" 
          href={js} 
          as="script" 
          crossOrigin="anonymous"
        />
      ))}
      
      {/* Resource hints for better crawling */}
      <link rel="dns-prefetch" href="//em.realscout.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Crawler-friendly error handling */}
      <meta name="error-handling" content="graceful-degradation" />
    </>
  );
});

// JavaScript crawling utilities
export const optimizeJavaScriptForCrawlers = (scripts: string[]): {
  critical: string[];
  nonCritical: string[];
  recommendations: string[];
} => {
  const critical: string[] = [];
  const nonCritical: string[] = [];
  const recommendations: string[] = [];
  
  scripts.forEach(script => {
    // Critical scripts (needed for initial render)
    if (script.includes('analytics') || script.includes('gtag')) {
      critical.push(script);
    }
    // Non-critical scripts (can be loaded later)
    else if (script.includes('widget') || script.includes('realscout')) {
      nonCritical.push(script);
      recommendations.push(`Consider lazy loading: ${script}`);
    }
    // Default to critical for safety
    else {
      critical.push(script);
    }
  });
  
  return { critical, nonCritical, recommendations };
};

export const generateCrawlerFriendlyHTML = (content: string): string => {
  // Ensure content is accessible without JavaScript
  let crawlerFriendly = content;
  
  // Add fallback content for interactive elements
  crawlerFriendly = crawlerFriendly.replace(
    /<div class="widget"[^>]*>/g,
    '<div class="widget" data-fallback="true">'
  );
  
  // Add alt text for dynamic images
  crawlerFriendly = crawlerFriendly.replace(
    /<img([^>]*?)>/g,
    (match, attrs) => {
      if (!attrs.includes('alt=')) {
        return `<img${attrs} alt="Real Estate Content">`;
      }
      return match;
    }
  );
  
  return crawlerFriendly;
};

export const getJavaScriptCrawlingRecommendations = (): string[] => {
  return [
    'Use server-side rendering for critical content',
    'Implement progressive enhancement',
    'Provide fallback content for interactive elements',
    'Use structured data for crawler understanding',
    'Minimize JavaScript dependencies for initial render',
    'Implement lazy loading for non-critical scripts',
    'Test with JavaScript disabled',
    'Use semantic HTML for better crawler accessibility'
  ];
};
