import { component$ } from '@builder.io/qwik';

export interface CanonicalizationProps {
  currentUrl: string;
  preferredUrl: string;
  alternateUrls?: Array<{
    url: string;
    hreflang?: string;
    rel?: 'alternate' | 'canonical';
  }>;
}

export default component$<CanonicalizationProps>(({
  currentUrl,
  preferredUrl,
  alternateUrls = [],
}) => {
  return (
    <>
      {/* Canonical URL */}
      <link rel="canonical" href={preferredUrl} />
      
      {/* Alternate URLs with hreflang */}
      {alternateUrls.map((alt, index) => (
        <link
          key={index}
          rel={alt.rel || 'alternate'}
          href={alt.url}
          {...(alt.hreflang && { hreflang: alt.hreflang })}
        />
      ))}
      
      {/* Prevent indexing of non-canonical URLs */}
      {currentUrl !== preferredUrl && (
        <meta name="robots" content="noindex, follow" />
      )}
    </>
  );
});

// Utility function to detect duplicate content patterns
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
  params?: { [key: string]: string }
): string => {
  let canonicalUrl = `${baseUrl}${path}`;
  
  // Add query parameters if provided
  if (params && Object.keys(params).length > 0) {
    const searchParams = new URLSearchParams(params);
    canonicalUrl += `?${searchParams.toString()}`;
  }
  
  return canonicalUrl;
};

export const normalizeUrl = (url: string): string => {
  // Remove trailing slash unless it's the root
  if (url.endsWith('/') && url !== '/') {
    return url.slice(0, -1);
  }
  
  // Ensure HTTPS
  if (url.startsWith('http://')) {
    return url.replace('http://', 'https://');
  }
  
  return url;
};