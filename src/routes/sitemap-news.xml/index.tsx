import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div style={{ display: 'none' }}>
      {/* This component renders XML content */}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'News Sitemap',
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
};

// Generate XML news sitemap
export const onGet = async () => {
  const currentDate = new Date().toISOString();
  const publicationDate = new Date().toISOString();
  
  const newsItems = [
    {
      url: 'https://www.openhouseupdate.com/market-analysis',
      title: 'Las Vegas Real Estate Market Update',
      publicationDate,
      keywords: 'Las Vegas real estate, market trends, property values',
    },
    {
      url: 'https://www.openhouseupdate.com/this-weekend',
      title: 'This Weekend\'s Open Houses in Las Vegas',
      publicationDate,
      keywords: 'open houses, Las Vegas, weekend, property viewing',
    },
    {
      url: 'https://www.openhouseupdate.com/buyer-services',
      title: 'Home Buying Guide for Las Vegas',
      publicationDate,
      keywords: 'home buying, Las Vegas, buyer guide, real estate',
    },
    {
      url: 'https://www.openhouseupdate.com/seller-services',
      title: 'Selling Your Home in Las Vegas',
      publicationDate,
      keywords: 'home selling, Las Vegas, seller services, real estate',
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${newsItems.map(item => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <news:news>
      <news:publication>
        <news:name>Open House Update</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${item.publicationDate}</news:publication_date>
      <news:title>${item.title}</news:title>
      <news:keywords>${item.keywords}</news:keywords>
    </news:news>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
};