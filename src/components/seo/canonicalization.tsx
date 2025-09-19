import { component$ } from '@builder.io/qwik';

interface CanonicalizationProps {
  currentUrl: string;
  preferredUrl?: string;
  alternateUrls?: Array<{
    url: string;
    hreflang: string;
    rel?: 'alternate' | 'canonical';
  }>;
  duplicateContent?: Array<{
    url: string;
    type: 'duplicate' | 'similar' | 'redirect';
    reason?: string;
  }>;
}

export default component$<CanonicalizationProps>(({ 
  currentUrl,
  preferredUrl,
  alternateUrls = [],
  duplicateContent = []
}) => {
  const getCanonicalUrl = () => {
    return preferredUrl || currentUrl;
  };

  const getHreflangAlternates = () => {
    return alternateUrls.filter(alt => alt.rel === 'alternate');
  };

  const getCanonicalAlternates = () => {
    return alternateUrls.filter(alt => alt.rel === 'canonical');
  };

  const generateCanonicalStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": getCanonicalUrl(),
      "mainEntity": {
        "@type": "RealEstateService",
        "name": "Las Vegas Real Estate Services",
        "url": getCanonicalUrl()
      },
      "alternateName": alternateUrls.map(alt => alt.url),
      "isPartOf": {
        "@type": "WebSite",
        "name": "Open House Update",
        "url": "https://openhouseupdate.com"
      }
    };
  };

  return (
    <>
      {/* Primary canonical URL */}
      <link rel="canonical" href={getCanonicalUrl()} />
      
      {/* Hreflang alternates for internationalization */}
      {getHreflangAlternates().map((alt, index) => (
        <link 
          key={index}
          rel="alternate" 
          hrefLang={alt.hreflang} 
          href={alt.url} 
        />
      ))}
      
      {/* Canonical alternates for duplicate content */}
      {getCanonicalAlternates().map((alt, index) => (
        <link 
          key={index}
          rel="canonical" 
          href={alt.url} 
        />
      ))}
      
      {/* Self-referencing canonical for consistency */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Structured data for canonicalization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify(generateCanonicalStructuredData())}
      />
      
      {/* Duplicate content detection hints */}
      {duplicateContent.length > 0 && (
        <meta name="duplicate-content" content={duplicateContent.map(dup => `${dup.url}:${dup.type}`).join(',')} />
      )}
      
      {/* Canonicalization preferences */}
      <meta name="canonical-preference" content="preferred" />
    </>
  );
});

// Canonicalization utilities
export const detectDuplicateContent = (urls: string[]): Array<{
  url: string;
  type: 'duplicate' | 'similar' | 'redirect';
  reason: string;
}> => {
  const duplicates: Array<{
    url: string;
    type: 'duplicate' | 'similar' | 'redirect';
    reason: string;
  }> = [];
  
  // Check for common duplicate patterns
  urls.forEach(url => {
    // Check for trailing slash variations
    const withoutSlash = url.replace(/\/$/, '');
    const withSlash = url.endsWith('/') ? url : url + '/';
    
    if (urls.includes(withoutSlash) && urls.includes(withSlash)) {
      duplicates.push({
        url: withSlash,
        type: 'duplicate',
        reason: 'trailing-slash-variation'
      });
    }
    
    // Check for protocol variations
    const httpVersion = url.replace('https://', 'http://');
    const httpsVersion = url.replace('http://', 'https://');
    
    if (urls.includes(httpVersion) && urls.includes(httpsVersion)) {
      duplicates.push({
        url: httpVersion,
        type: 'redirect',
        reason: 'protocol-variation'
      });
    }
    
    // Check for www variations
    const wwwVersion = url.replace('://', '://www.');
    const nonWwwVersion = url.replace('://www.', '://');
    
    if (urls.includes(wwwVersion) && urls.includes(nonWwwVersion)) {
      duplicates.push({
        url: wwwVersion,
        type: 'redirect',
        reason: 'www-variation'
      });
    }
  });
  
  return duplicates;
};

export const generateCanonicalUrl = (
  baseUrl: string,
  path: string,
  options: {
    forceHttps?: boolean;
    forceWww?: boolean;
    removeTrailingSlash?: boolean;
  } = {}
): string => {
  let canonical = `${baseUrl}${path}`;
  
  // Force HTTPS
  if (options.forceHttps) {
    canonical = canonical.replace('http://', 'https://');
  }
  
  // Force www
  if (options.forceWww) {
    canonical = canonical.replace('://', '://www.');
  }
  
  // Remove trailing slash
  if (options.removeTrailingSlash && canonical.endsWith('/') && canonical !== baseUrl) {
    canonical = canonical.slice(0, -1);
  }
  
  return canonical;
};

export const getCanonicalizationRecommendations = (url: string): string[] => {
  const recommendations = [];
  
  // Check for common canonicalization issues
  if (url.includes('?')) {
    recommendations.push('Consider removing query parameters for canonical URL');
  }
  
  if (url.includes('#')) {
    recommendations.push('Remove fragment identifiers from canonical URL');
  }
  
  if (url.includes('www.') && !url.includes('https://www.')) {
    recommendations.push('Use consistent www subdomain');
  }
  
  if (url.endsWith('/') && url !== 'https://openhouseupdate.com/') {
    recommendations.push('Consider removing trailing slash for consistency');
  }
  
  return recommendations;
};
