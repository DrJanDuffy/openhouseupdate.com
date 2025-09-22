import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import EnhancedPageSEO, { createOptimizedHead } from '~/components/seo/enhanced-page-seo'

export default component$(() => {
  return (
    <div class="services-page">
      <style>{`
        .services-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        
        .services-hero {
          text-align: center;
          margin-bottom: 4rem;
          padding: 3rem 0;
          background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .services-hero h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        
        .services-hero p {
          font-size: 1.3rem;
          opacity: 0.9;
          margin: 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .service-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-top: 4px solid #3A8DDE;
        }
        
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
        
        .service-card h3 {
          color: #0A2540;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .service-card p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .service-card ul {
          color: #666;
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .service-card li {
          margin-bottom: 0.5rem;
        }
        
        .service-link {
          display: inline-block;
          background: #3A8DDE;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.2s;
        }
        
        .service-link:hover {
          background: #2a7bc7;
        }
        
        .cta-section {
          background: #F7F9FC;
          border-radius: 12px;
          padding: 3rem 2rem;
          text-align: center;
          margin-top: 4rem;
        }
        
        .cta-section h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .cta-section p {
          color: #666;
          font-size: 1.1rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-button {
          background: #3A8DDE;
          color: white;
          padding: 1rem 2rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.2s;
        }
        
        .cta-button:hover {
          background: #2a7bc7;
        }
        
        .cta-button.secondary {
          background: white;
          color: #0A2540;
          border: 2px solid #3A8DDE;
        }
        
        .cta-button.secondary:hover {
          background: #f8f9fa;
        }
        
        @media (max-width: 768px) {
          .services-hero h1 {
            font-size: 2.5rem;
          }
          
          .services-hero p {
            font-size: 1.1rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-button {
            width: 200px;
          }
        }
      `}</style>

      <div class="services-hero">
        <h1>Professional Real Estate Services</h1>
        <p>
          Expert guidance and comprehensive services to help you navigate the Las Vegas real estate
          market with confidence.
        </p>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <h3>🏠 Home Valuation</h3>
          <p>
            Get an accurate assessment of your property's current market value with our
            comprehensive home valuation service.
          </p>
          <ul>
            <li>Comparative Market Analysis (CMA)</li>
            <li>Current market trends analysis</li>
            <li>Property condition assessment</li>
            <li>Neighborhood market insights</li>
            <li>Detailed valuation report</li>
          </ul>
          <a href="/services/home-valuation" class="service-link">
            Get Your Valuation
          </a>
        </div>

        <div class="service-card">
          <h3>🛒 Buyer Services</h3>
          <p>
            Complete support throughout your home buying journey, from initial search to closing
            day.
          </p>
          <ul>
            <li>Property search and matching</li>
            <li>Market analysis and insights</li>
            <li>Negotiation and offer strategy</li>
            <li>Inspection coordination</li>
            <li>Closing assistance</li>
          </ul>
          <a href="/services/buyer-services" class="service-link">
            Start Your Search
          </a>
        </div>

        <div class="service-card">
          <h3>🏡 Seller Services</h3>
          <p>
            Maximize your property's value and ensure a smooth selling process with our expert
            seller services.
          </p>
          <ul>
            <li>Market pricing strategy</li>
            <li>Home staging recommendations</li>
            <li>Marketing and advertising</li>
            <li>Showings coordination</li>
            <li>Transaction management</li>
          </ul>
          <a href="/services/seller-services" class="service-link">
            Sell Your Home
          </a>
        </div>

        <div class="service-card">
          <h3>📊 Market Analysis</h3>
          <p>
            Stay informed with detailed market reports and trends analysis for informed
            decision-making.
          </p>
          <ul>
            <li>Monthly market reports</li>
            <li>Neighborhood trend analysis</li>
            <li>Price movement tracking</li>
            <li>Inventory level insights</li>
            <li>Investment opportunity analysis</li>
          </ul>
          <a href="/services/market-analysis" class="service-link">
            View Market Data
          </a>
        </div>
      </div>

      <div class="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>
          Whether you're buying, selling, or just exploring the market, Dr. Jan Duffy is here to
          provide expert guidance and personalized service.
        </p>
        <div class="cta-buttons">
          <a href="/contact" class="cta-button">
            Contact Dr. Duffy
          </a>
          <a href="/search" class="cta-button secondary">
            Start Property Search
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <EnhancedPageSEO
        pageKey="services"
        showFAQs={true}
        faqTitle="Real Estate Services - Frequently Asked Questions"
        className="mt-12"
      />
    </div>
  )
})

// Optimized DocumentHead with snippets and structured data
export const head: DocumentHead = createOptimizedHead('services')
