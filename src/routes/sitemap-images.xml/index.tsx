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
  title: 'Image Sitemap',
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
};

// Generate XML image sitemap
export const onGet = async () => {
  const currentDate = new Date().toISOString();
  
  const imagePages = [
    // Homepage images
    {
      url: 'https://openhouseupdate.com/',
      images: [
        {
          loc: 'https://openhouseupdate.com/images/hero-las-vegas.jpg',
          caption: 'Las Vegas Real Estate - Open House Update',
          title: 'Las Vegas Real Estate Services',
          license: 'https://openhouseupdate.com/license',
          geo_location: 'Las Vegas, NV, USA'
        },
        {
          loc: 'https://openhouseupdate.com/images/dr-janet-duffy.jpg',
          caption: 'Dr. Janet Duffy - Professional Real Estate Agent',
          title: 'Dr. Janet Duffy Professional Headshot',
          license: 'https://openhouseupdate.com/license'
        },
        {
          loc: 'https://openhouseupdate.com/images/las-vegas-skyline.jpg',
          caption: 'Las Vegas Skyline - Real Estate Market',
          title: 'Las Vegas City Skyline',
          license: 'https://openhouseupdate.com/license'
        }
      ]
    },
    
    // Services images
    {
      url: 'https://openhouseupdate.com/services',
      images: [
        {
          loc: 'https://openhouseupdate.com/images/services-hero.jpg',
          caption: 'Real Estate Services in Las Vegas',
          title: 'Professional Real Estate Services',
          license: 'https://openhouseupdate.com/license'
        },
        {
          loc: 'https://openhouseupdate.com/images/buyer-services.jpg',
          caption: 'Buyer Services - Find Your Dream Home',
          title: 'Real Estate Buyer Services',
          license: 'https://openhouseupdate.com/license'
        },
        {
          loc: 'https://openhouseupdate.com/images/seller-services.jpg',
          caption: 'Seller Services - Market Your Property',
          title: 'Real Estate Seller Services',
          license: 'https://openhouseupdate.com/license'
        }
      ]
    },
    
    // Home valuation images
    {
      url: 'https://openhouseupdate.com/services/home-valuation',
      images: [
        {
          loc: 'https://openhouseupdate.com/images/home-valuation-tool.jpg',
          caption: 'Home Valuation Calculator - Free Estimate',
          title: 'Free Home Value Estimate Tool',
          license: 'https://openhouseupdate.com/license'
        },
        {
          loc: 'https://openhouseupdate.com/images/property-analysis.jpg',
          caption: 'Property Analysis and Market Research',
          title: 'Real Estate Property Analysis',
          license: 'https://openhouseupdate.com/license'
        }
      ]
    },
    
    // Neighborhood images
    {
      url: 'https://openhouseupdate.com/neighborhoods/summerlin',
      images: [
        {
          loc: 'https://openhouseupdate.com/images/summerlin-neighborhood.jpg',
          caption: 'Summerlin Real Estate - Luxury Homes',
          title: 'Summerlin Neighborhood Properties',
          license: 'https://openhouseupdate.com/license',
          geo_location: 'Summerlin, Las Vegas, NV, USA'
        },
        {
          loc: 'https://openhouseupdate.com/images/summerlin-golf-course.jpg',
          caption: 'Summerlin Golf Course Community',
          title: 'Summerlin Golf Course Homes',
          license: 'https://openhouseupdate.com/license'
        }
      ]
    },
    
    {
      url: 'https://openhouseupdate.com/neighborhoods/henderson',
      images: [
        {
          loc: 'https://openhouseupdate.com/images/henderson-neighborhood.jpg',
          caption: 'Henderson Real Estate - Family Community',
          title: 'Henderson Neighborhood Properties',
          license: 'https://openhouseupdate.com/license',
          geo_location: 'Henderson, NV, USA'
        },
        {
          loc: 'https://openhouseupdate.com/images/henderson-lake.jpg',
          caption: 'Henderson Lake Las Vegas Community',
          title: 'Lake Las Vegas Henderson Homes',
          license: 'https://openhouseupdate.com/license'
        }
      ]
    },
    
    // Property search images
    {
      url: 'https://openhouseupdate.com/search',
      images: [
        {
          loc: 'https://openhouseupdate.com/images/property-search.jpg',
          caption: 'Property Search - Find Your Perfect Home',
          title: 'Las Vegas Property Search',
          license: 'https://openhouseupdate.com/license'
        },
        {
          loc: 'https://openhouseupdate.com/images/map-search.jpg',
          caption: 'Map Search - Explore Neighborhoods',
          title: 'Interactive Property Map Search',
          license: 'https://openhouseupdate.com/license'
        }
      ]
    },
    
    // Open houses images
    {
      url: 'https://openhouseupdate.com/this-weekend',
      images: [
        {
          loc: 'https://openhouseupdate.com/images/open-house-sign.jpg',
          caption: 'This Weekend Open Houses in Las Vegas',
          title: 'Las Vegas Open Houses This Weekend',
          license: 'https://openhouseupdate.com/license'
        },
        {
          loc: 'https://openhouseupdate.com/images/open-house-interior.jpg',
          caption: 'Beautiful Home Interior - Open House',
          title: 'Las Vegas Open House Interior',
          license: 'https://openhouseupdate.com/license'
        }
      ]
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imagePages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
${page.images.map(image => `    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:caption>${image.caption}</image:caption>
      <image:title>${image.title}</image:title>
      <image:license>${image.license}</image:license>${image.geo_location ? `
      <image:geo_location>${image.geo_location}</image:geo_location>` : ''}
    </image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
};
