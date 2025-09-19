import { component$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useVisibleTask$(() => {
    // Track seller services page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'seller_services_page_view', {
        event_category: 'service',
        event_label: 'seller_services',
        value: 1
      });
    }
  });

  return (
    <div class="seller-services-page">
      <style>{`
        .seller-services-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        
        .seller-hero {
          text-align: center;
          margin-bottom: 4rem;
          padding: 3rem 0;
          background: linear-gradient(135deg, #0A2540 0%, #16B286 100%);
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .seller-hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        
        .seller-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin: 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .services-overview {
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
          border-top: 4px solid #16B286;
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
          margin-bottom: 1rem;
        }
        
        .service-card ul {
          color: #666;
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .service-card li {
          margin-bottom: 0.5rem;
        }
        
        .pricing-section {
          background: #F7F9FC;
          border-radius: 12px;
          padding: 3rem 2rem;
          margin-bottom: 4rem;
        }
        
        .pricing-section h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .pricing-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          text-align: center;
          position: relative;
        }
        
        .pricing-card.featured {
          border: 3px solid #16B286;
          transform: scale(1.05);
        }
        
        .pricing-card.featured::before {
          content: 'Most Popular';
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: #16B286;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .pricing-card h3 {
          color: #0A2540;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .pricing-card .price {
          font-size: 2rem;
          font-weight: 700;
          color: #16B286;
          margin-bottom: 1rem;
        }
        
        .pricing-card ul {
          color: #666;
          text-align: left;
          margin-bottom: 2rem;
          padding-left: 1.5rem;
        }
        
        .pricing-card li {
          margin-bottom: 0.5rem;
        }
        
        .process-section {
          background: white;
          border-radius: 12px;
          padding: 3rem 2rem;
          margin-bottom: 4rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .process-section h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .process-step {
          background: #F7F9FC;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          position: relative;
        }
        
        .process-step::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: #16B286;
          border-radius: 50%;
        }
        
        .process-step h3 {
          color: #0A2540;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          margin-top: 1rem;
        }
        
        .process-step p {
          color: #666;
          line-height: 1.6;
        }
        
        .cta-section {
          background: linear-gradient(135deg, #16B286 0%, #3A8DDE 100%);
          color: white;
          border-radius: 12px;
          padding: 3rem 2rem;
          text-align: center;
        }
        
        .cta-section h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .cta-section p {
          font-size: 1.1rem;
          opacity: 0.9;
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
          background: white;
          color: #0A2540;
          padding: 1rem 2rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.2s;
        }
        
        .cta-button:hover {
          background: #f8f9fa;
        }
        
        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        @media (max-width: 768px) {
          .seller-hero h1 {
            font-size: 2rem;
          }
          
          .services-overview {
            grid-template-columns: 1fr;
          }
          
          .pricing-grid {
            grid-template-columns: 1fr;
          }
          
          .pricing-card.featured {
            transform: none;
          }
          
          .process-steps {
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

      <div class="seller-hero">
        <h1>Seller Services</h1>
        <p>
          Maximize your property's value and ensure a smooth selling process with our comprehensive seller services.
        </p>
      </div>

      <div class="services-overview">
        <div class="service-card">
          <h3>💰 Market Pricing Strategy</h3>
          <p>
            Get the optimal listing price with our comprehensive market analysis and pricing strategy.
          </p>
          <ul>
            <li>Comparative Market Analysis (CMA)</li>
            <li>Market trend analysis</li>
            <li>Competitive pricing strategy</li>
            <li>Price optimization recommendations</li>
            <li>Market timing advice</li>
          </ul>
        </div>

        <div class="service-card">
          <h3>🏠 Home Staging & Preparation</h3>
          <p>
            Present your home in its best light with professional staging recommendations and preparation guidance.
          </p>
          <ul>
            <li>Staging consultation</li>
            <li>Decluttering recommendations</li>
            <li>Minor repair suggestions</li>
            <li>Photography preparation</li>
            <li>First impression optimization</li>
          </ul>
        </div>

        <div class="service-card">
          <h3>📸 Professional Marketing</h3>
          <p>
            Reach the right buyers with our comprehensive marketing strategy and professional presentation.
          </p>
          <ul>
            <li>Professional photography</li>
            <li>Virtual tours and videos</li>
            <li>MLS listing optimization</li>
            <li>Online marketing campaigns</li>
            <li>Social media promotion</li>
          </ul>
        </div>

        <div class="service-card">
          <h3>🔍 Showings Coordination</h3>
          <p>
            Manage property showings efficiently while maintaining security and maximizing exposure.
          </p>
          <ul>
            <li>Showing scheduling</li>
            <li>Buyer qualification</li>
            <li>Security protocols</li>
            <li>Feedback collection</li>
            <li>Follow-up coordination</li>
          </ul>
        </div>

        <div class="service-card">
          <h3>📋 Transaction Management</h3>
          <p>
            Navigate the complex selling process with professional transaction management and support.
          </p>
          <ul>
            <li>Offer evaluation and negotiation</li>
            <li>Contract management</li>
            <li>Timeline coordination</li>
            <li>Document preparation</li>
            <li>Closing coordination</li>
          </ul>
        </div>

        <div class="service-card">
          <h3>📊 Market Analysis & Reporting</h3>
          <p>
            Stay informed with regular market updates and detailed performance reports throughout the selling process.
          </p>
          <ul>
            <li>Weekly market updates</li>
            <li>Showing activity reports</li>
            <li>Buyer feedback analysis</li>
            <li>Competitive analysis</li>
            <li>Performance metrics</li>
          </ul>
        </div>
      </div>

      <div class="pricing-section">
        <h2>Service Packages</h2>
        <div class="pricing-grid">
          <div class="pricing-card">
            <h3>Essential Package</h3>
            <div class="price">5.5%</div>
            <ul>
              <li>Market analysis & pricing</li>
              <li>MLS listing</li>
              <li>Basic marketing</li>
              <li>Showing coordination</li>
              <li>Transaction management</li>
            </ul>
          </div>
          
          <div class="pricing-card featured">
            <h3>Premium Package</h3>
            <div class="price">6.0%</div>
            <ul>
              <li>Everything in Essential</li>
              <li>Professional photography</li>
              <li>Virtual tour creation</li>
              <li>Advanced marketing</li>
              <li>Staging consultation</li>
              <li>Priority support</li>
            </ul>
          </div>
          
          <div class="pricing-card">
            <h3>Luxury Package</h3>
            <div class="price">6.5%</div>
            <ul>
              <li>Everything in Premium</li>
              <li>Professional staging</li>
              <li>Video marketing</li>
              <li>Premium advertising</li>
              <li>Dedicated coordinator</li>
              <li>White-glove service</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="process-section">
        <h2>Our Selling Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <h3>Initial Consultation</h3>
            <p>We assess your property and discuss your goals to create a customized selling strategy.</p>
          </div>
          
          <div class="process-step">
            <h3>Market Analysis</h3>
            <p>Conduct a comprehensive market analysis to determine the optimal listing price and timing.</p>
          </div>
          
          <div class="process-step">
            <h3>Property Preparation</h3>
            <p>Guide you through staging and preparation to maximize your home's appeal to buyers.</p>
          </div>
          
          <div class="process-step">
            <h3>Marketing Launch</h3>
            <p>Execute a comprehensive marketing campaign to reach the maximum number of qualified buyers.</p>
          </div>
          
          <div class="process-step">
            <h3>Showings & Feedback</h3>
            <p>Coordinate showings and collect feedback to continuously optimize your selling strategy.</p>
          </div>
          
          <div class="process-step">
            <h3>Offer Negotiation</h3>
            <p>Evaluate offers and negotiate on your behalf to secure the best possible terms.</p>
          </div>
          
          <div class="process-step">
            <h3>Transaction Management</h3>
            <p>Manage all aspects of the transaction from contract to closing.</p>
          </div>
          
          <div class="process-step">
            <h3>Closing & Beyond</h3>
            <p>Ensure a smooth closing and provide ongoing support for any post-sale needs.</p>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <h2>Ready to Sell Your Home?</h2>
        <p>
          Let Dr. Janet Duffy help you maximize your property's value and achieve a successful sale with professional service and expert market knowledge.
        </p>
        <div class="cta-buttons">
          <a href="/services/home-valuation" class="cta-button">Get Free Valuation</a>
          <a href="/contact" class="cta-button secondary">Contact Dr. Duffy</a>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Seller Services - Expert Home Selling Support | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Professional seller services in Las Vegas. Maximize your home value with expert marketing, staging, and transaction management from Dr. Janet Duffy.',
    },
    {
      name: 'keywords',
      content: 'Las Vegas seller services, home selling, property marketing, real estate agent, Dr. Janet Duffy, seller representation, home sale',
    },
    {
      name: 'author',
      content: 'Dr. Janet Duffy',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Seller Services - Expert Home Selling Support | Dr. Janet Duffy',
    },
    {
      property: 'og:description',
      content: 'Professional seller services in Las Vegas. Maximize your home value with expert marketing and transaction management.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://openhouseupdate.com/services/seller-services',
    },
    {
      property: 'og:site_name',
      content: 'Open House Update',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Seller Services - Expert Home Selling Support | Dr. Janet Duffy',
    },
    {
      name: 'twitter:description',
      content: 'Professional seller services in Las Vegas. Maximize your home value with expert marketing and transaction management.',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://openhouseupdate.com/services/seller-services',
    },
  ],
};
