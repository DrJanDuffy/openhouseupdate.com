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
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  
  const newsPages = [
    // Market updates
    {
      url: 'https://openhouseupdate.com/market-updates/las-vegas-market-report-january-2024',
      publication_name: 'Open House Update',
      publication_language: 'en',
      title: 'Las Vegas Real Estate Market Report - January 2024',
      publication_date: yesterday,
      keywords: 'Las Vegas real estate market, January 2024, market trends, home prices'
    },
    {
      url: 'https://openhouseupdate.com/market-updates/summerlin-home-sales-december-2023',
      publication_name: 'Open House Update',
      publication_language: 'en',
      title: 'Summerlin Home Sales Surge in December 2023',
      publication_date: lastWeek,
      keywords: 'Summerlin real estate, home sales, December 2023, luxury homes'
    },
    
    // Neighborhood spotlights
    {
      url: 'https://openhouseupdate.com/neighborhood-spotlight/henderson-family-communities',
      publication_name: 'Open House Update',
      publication_language: 'en',
      title: 'Henderson Family Communities - Best Places to Live',
      publication_date: lastWeek,
      keywords: 'Henderson Nevada, family communities, best places to live, schools'
    },
    {
      url: 'https://openhouseupdate.com/neighborhood-spotlight/north-las-vegas-growth',
      publication_name: 'Open House Update',
      publication_language: 'en',
      title: 'North Las Vegas Growth - New Development Opportunities',
      publication_date: lastWeek,
      keywords: 'North Las Vegas, new development, growth, investment opportunities'
    },
    
    // Open house highlights
    {
      url: 'https://openhouseupdate.com/open-house-highlights/luxury-home-summerlin-weekend',
      publication_name: 'Open House Update',
      publication_language: 'en',
      title: 'Luxury Home Open Houses This Weekend in Summerlin',
      publication_date: yesterday,
      keywords: 'Summerlin luxury homes, open houses, weekend, luxury real estate'
    },
    {
      url: 'https://openhouseupdate.com/open-house-highlights/first-time-buyer-homes-henderson',
      publication_name: 'Open House Update',
      publication_language: 'en',
      title: 'First-Time Buyer Friendly Homes - Henderson Open Houses',
      publication_date: yesterday,
      keywords: 'first-time buyers, Henderson homes, affordable housing, starter homes'
    },
    
    // Market insights
    {
      url: 'https://openhouseupdate.com/insights/mortgage-rates-january-2024',
      publication_name: 'Open House Update',
      publication_language: 'en',
      title: 'Mortgage Rates Update - January 2024 Market Impact',
      publication_date: yesterday,
      keywords: 'mortgage rates, January 2024, market impact, home buying'
    },
    {
      url: 'https://openhouseupdate.com/insights/las-vegas-investment-properties-2024',
      publication_name: 'Open House Update',
      publication_language: 'en',
      title: 'Las Vegas Investment Properties - 2024 Outlook',
      publication_date: lastWeek,
      keywords: 'Las Vegas investment properties, 2024 outlook, real estate investment'
    },
    
    // Seasonal content
    {
      url: 'https://openhouseupdate.com/seasonal/winter-home-buying-tips-las-vegas',
      publication_name: 'Open House Update',
      publication_language: 'en',
      title: 'Winter Home Buying Tips for Las Vegas Market',
      publication_date: lastWeek,
      keywords: 'winter home buying, Las Vegas market, home buying tips, seasonal advice'
    },
    {
      url: 'https://openhouseupdate.com/seasonal/holiday-home-selling-strategies',
      publication_name: 'Open House Update',
      publication_language: 'en',
      title: 'Holiday Season Home Selling Strategies',
      publication_date: lastWeek,
      keywords: 'holiday home selling, selling strategies, winter real estate market'
    },
    
    // Local events
    {
      url: 'https://openhouseupdate.com/events/las-vegas-real-estate-expo-2024',
      publication_name: 'Open House Update',
      publication_language: 'en',
      title: 'Las Vegas Real Estate Expo 2024 - What to Expect',
      publication_date: lastWeek,
      keywords: 'Las Vegas real estate expo, 2024, real estate events, networking'
    },
    {
      url: 'https://openhouseupdate.com/events/first-time-buyer-workshop-january',
      publication_name: 'Open House Update',
      publication_language: 'en',
      title: 'First-Time Buyer Workshop - January 2024',
      publication_date: yesterday,
      keywords: 'first-time buyer workshop, home buying education, January 2024'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${newsPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <news:news>
      <news:publication>
        <news:name>${page.publication_name}</news:name>
        <news:language>${page.publication_language}</news:language>
      </news:publication>
      <news:title>${page.title}</news:title>
      <news:publication_date>${page.publication_date}</news:publication_date>
      <news:keywords>${page.keywords}</news:keywords>
    </news:news>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=1800, s-maxage=1800', // Shorter cache for news
    },
  });
};
