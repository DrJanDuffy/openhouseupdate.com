import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class="sitemap-page">
      <style>{`
        .sitemap-page {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .sitemap-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem 0;
          background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
          color: white;
          border-radius: 12px;
        }
        
        .sitemap-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .sitemap-header p {
          font-size: 1.2rem;
          opacity: 0.9;
        }
        
        .sitemap-section {
          margin-bottom: 2rem;
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .sitemap-section h2 {
          color: #0A2540;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          border-bottom: 2px solid #3A8DDE;
          padding-bottom: 0.5rem;
        }
        
        .sitemap-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }
        
        .sitemap-links a {
          color: #3A8DDE;
          text-decoration: none;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          background: #F7F9FC;
          transition: all 0.3s ease;
          display: block;
        }
        
        .sitemap-links a:hover {
          background: #3A8DDE;
          color: white;
          transform: translateY(-2px);
        }
        
        .xml-sitemap {
          text-align: center;
          margin-top: 2rem;
          padding: 2rem;
          background: #F7F9FC;
          border-radius: 12px;
        }
        
        .xml-sitemap h3 {
          color: #0A2540;
          margin-bottom: 1rem;
        }
        
        .xml-sitemap a {
          color: #3A8DDE;
          text-decoration: none;
          font-weight: 600;
          padding: 1rem 2rem;
          background: white;
          border-radius: 8px;
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .xml-sitemap a:hover {
          background: #3A8DDE;
          color: white;
        }
        
        @media (max-width: 768px) {
          .sitemap-header h1 {
            font-size: 2rem;
          }
          
          .sitemap-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div class="sitemap-header">
        <h1>Site Map</h1>
        <p>Find all pages and sections of Open House Update</p>
      </div>

      <div class="sitemap-section">
        <h2>Main Pages</h2>
        <div class="sitemap-links">
          <a href="/">Home</a>
          <a href="/about/">About Dr. Janet Duffy</a>
          <a href="/services/">Real Estate Services</a>
          <a href="/contact/">Contact Us</a>
          <a href="/search/">Property Search</a>
          <a href="/map/">Property Map</a>
        </div>
      </div>

      <div class="sitemap-section">
        <h2>Services</h2>
        <div class="sitemap-links">
          <a href="/services/home-valuation/">Home Valuation</a>
          <a href="/services/buyer-services/">Buyer Services</a>
          <a href="/services/seller-services/">Seller Services</a>
          <a href="/services/market-analysis/">Market Analysis</a>
        </div>
      </div>

      <div class="sitemap-section">
        <h2>Open Houses</h2>
        <div class="sitemap-links">
          <a href="/this-weekend/">This Weekend's Open Houses</a>
          <a href="/open-houses-for-sale/under-400k/">Under $400K</a>
          <a href="/open-houses-for-sale/400k-600k/">$400K - $600K</a>
          <a href="/open-houses-for-sale/600k-800k/">$600K - $800K</a>
          <a href="/open-houses-for-sale/800k-1m/">$800K - $1M</a>
          <a href="/open-houses-for-sale/over-1m/">Over $1M</a>
        </div>
      </div>

      <div class="sitemap-section">
        <h2>Neighborhoods</h2>
        <div class="sitemap-links">
          <a href="/neighborhoods/summerlin/">Summerlin</a>
          <a href="/neighborhoods/henderson/">Henderson</a>
          <a href="/neighborhoods/north-las-vegas/">North Las Vegas</a>
          <a href="/neighborhoods/spring-valley/">Spring Valley</a>
          <a href="/neighborhoods/enterprise/">Enterprise</a>
        </div>
      </div>

      <div class="sitemap-section">
        <h2>Resources</h2>
        <div class="sitemap-links">
          <a href="/faq/">Frequently Asked Questions</a>
          <a href="/blog/">Real Estate Blog</a>
          <a href="/privacy-policy/">Privacy Policy</a>
          <a href="/terms-of-service/">Terms of Service</a>
        </div>
      </div>

      <div class="xml-sitemap">
        <h3>XML Sitemap for Search Engines</h3>
        <p>For search engines and developers:</p>
        <a href="/sitemap-index.xml" target="_blank" rel="noopener">View XML Sitemap Index</a>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Site Map - Open House Update',
  meta: [
    {
      name: 'description',
      content: 'Complete site map of Open House Update. Find all pages, services, neighborhoods, and resources for Las Vegas real estate.',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ],
}
