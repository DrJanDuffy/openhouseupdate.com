import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const currentDate = new Date().toISOString();
  
  const pages = [
    // Main pages
    { url: 'https://openhouseupdate.com/', priority: '1.0', changefreq: 'daily' },
    { url: 'https://openhouseupdate.com/about', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://openhouseupdate.com/contact', priority: '0.9', changefreq: 'monthly' },
    
    // Services
    { url: 'https://openhouseupdate.com/services', priority: '0.9', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/services/home-valuation', priority: '0.8', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/services/buyer-services', priority: '0.8', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/services/seller-services', priority: '0.8', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/services/market-analysis', priority: '0.8', changefreq: 'weekly' },
    
    // Property search
    { url: 'https://openhouseupdate.com/search', priority: '0.9', changefreq: 'daily' },
    { url: 'https://openhouseupdate.com/map', priority: '0.8', changefreq: 'daily' },
    { url: 'https://openhouseupdate.com/this-weekend', priority: '0.9', changefreq: 'daily' },
    
    // Price ranges
    { url: 'https://openhouseupdate.com/open-houses-for-sale/under-400k', priority: '0.7', changefreq: 'daily' },
    { url: 'https://openhouseupdate.com/open-houses-for-sale/400k-600k', priority: '0.7', changefreq: 'daily' },
    { url: 'https://openhouseupdate.com/open-houses-for-sale/600k-800k', priority: '0.7', changefreq: 'daily' },
    { url: 'https://openhouseupdate.com/open-houses-for-sale/800k-1m', priority: '0.7', changefreq: 'daily' },
    { url: 'https://openhouseupdate.com/open-houses-for-sale/over-1m', priority: '0.7', changefreq: 'daily' },
    
    // Neighborhoods
    { url: 'https://openhouseupdate.com/neighborhoods/summerlin', priority: '0.6', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/neighborhoods/henderson', priority: '0.6', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/neighborhoods/north-las-vegas', priority: '0.6', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/neighborhoods/spring-valley', priority: '0.6', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/neighborhoods/enterprise', priority: '0.6', changefreq: 'weekly' },
    
    // Legal pages
    { url: 'https://openhouseupdate.com/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { url: 'https://openhouseupdate.com/terms-of-service', priority: '0.3', changefreq: 'yearly' },
    { url: 'https://openhouseupdate.com/faq', priority: '0.5', changefreq: 'monthly' },
  ];

  return (
    <div style={{ display: 'none' }}>
      {/* This component renders XML content */}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sitemap',
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
};

// Generate XML sitemap
export const onGet = async () => {
  const currentDate = new Date().toISOString();
  
  const pages = [
    // Main pages
    { url: 'https://openhouseupdate.com/', priority: '1.0', changefreq: 'daily' },
    { url: 'https://openhouseupdate.com/about', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://openhouseupdate.com/contact', priority: '0.9', changefreq: 'monthly' },
    
    // Services
    { url: 'https://openhouseupdate.com/services', priority: '0.9', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/services/home-valuation', priority: '0.8', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/services/buyer-services', priority: '0.8', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/services/seller-services', priority: '0.8', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/services/market-analysis', priority: '0.8', changefreq: 'weekly' },
    
    // Property search
    { url: 'https://openhouseupdate.com/search', priority: '0.9', changefreq: 'daily' },
    { url: 'https://openhouseupdate.com/map', priority: '0.8', changefreq: 'daily' },
    { url: 'https://openhouseupdate.com/this-weekend', priority: '0.9', changefreq: 'daily' },
    
    // Price ranges
    { url: 'https://openhouseupdate.com/open-houses-for-sale/under-400k', priority: '0.7', changefreq: 'daily' },
    { url: 'https://openhouseupdate.com/open-houses-for-sale/400k-600k', priority: '0.7', changefreq: 'daily' },
    { url: 'https://openhouseupdate.com/open-houses-for-sale/600k-800k', priority: '0.7', changefreq: 'daily' },
    { url: 'https://openhouseupdate.com/open-houses-for-sale/800k-1m', priority: '0.7', changefreq: 'daily' },
    { url: 'https://openhouseupdate.com/open-houses-for-sale/over-1m', priority: '0.7', changefreq: 'daily' },
    
    // Neighborhoods
    { url: 'https://openhouseupdate.com/neighborhoods/summerlin', priority: '0.6', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/neighborhoods/henderson', priority: '0.6', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/neighborhoods/north-las-vegas', priority: '0.6', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/neighborhoods/spring-valley', priority: '0.6', changefreq: 'weekly' },
    { url: 'https://openhouseupdate.com/neighborhoods/enterprise', priority: '0.6', changefreq: 'weekly' },
    
    // Legal pages
    { url: 'https://openhouseupdate.com/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { url: 'https://openhouseupdate.com/terms-of-service', priority: '0.3', changefreq: 'yearly' },
    { url: 'https://openhouseupdate.com/faq', priority: '0.5', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
};
