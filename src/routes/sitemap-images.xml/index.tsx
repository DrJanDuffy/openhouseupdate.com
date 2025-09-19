import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return <div style={{ display: 'none' }}>{/* This component renders XML content */}</div>
})

export const head: DocumentHead = {
  title: 'Image Sitemap',
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
}

// Generate XML image sitemap
export const onGet = async () => {
  const currentDate = new Date().toISOString()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://www.openhouseupdate.com</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://www.openhouseupdate.com/images/og-default.jpg</image:loc>
      <image:caption>Open House Update - Las Vegas Real Estate</image:caption>
      <image:title>Las Vegas Real Estate Services</image:title>
    </image:image>
    <image:image>
      <image:loc>https://www.openhouseupdate.com/images/og-homepage.jpg</image:loc>
      <image:caption>Las Vegas Real Estate Homepage</image:caption>
      <image:title>Find Your Dream Home in Las Vegas</image:title>
    </image:image>
    <image:image>
      <image:loc>https://www.openhouseupdate.com/images/logo.png</image:loc>
      <image:caption>Open House Update Logo</image:caption>
      <image:title>Open House Update Brand</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://www.openhouseupdate.com/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://www.openhouseupdate.com/images/dr-janet-duffy.jpg</image:loc>
      <image:caption>Dr. Janet Duffy - Real Estate Agent</image:caption>
      <image:title>Professional Real Estate Agent</image:title>
    </image:image>
  </url>
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
