import { type RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async (requestEvent) => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.openhouseupdate.com/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.openhouseupdate.com/sitemap-images.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.openhouseupdate.com/sitemap-news.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;

  requestEvent.response.headers.set('Content-Type', 'application/xml');
  requestEvent.response.headers.set('Cache-Control', 'public, max-age=3600');
  
  return new Response(sitemapIndex, {
    status: 200,
    headers: requestEvent.response.headers,
  });
};
