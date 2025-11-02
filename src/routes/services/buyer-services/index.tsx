import { component$, useVisibleTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  useVisibleTask$(() => {
    // Track buyer services page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'buyer_services_page_view', {
        event_category: 'service',
        event_label: 'buyer_services',
        value: 1,
      })
    }
  })

  return (
    <div class="buyer-services-page">
      <style>{`
        .buyer-services-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        
        .buyer-hero {
          text-align: center;
          margin-bottom: 4rem;
          padding: 3rem 0;
          background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .buyer-hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        
        .buyer-hero p {
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
        
        .process-section {
          background: #F7F9FC;
          border-radius: 12px;
          padding: 3rem 2rem;
          margin-bottom: 4rem;
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
          background: white;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
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
          background: #3A8DDE;
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
          .buyer-hero h1 {
            font-size: 2rem;
          }
          
          .services-overview {
            grid-template-columns: 1fr;
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

      <div class="buyer-hero">
        <h1>Buyer Services</h1>
        <p>
          Complete support throughout your home buying journey, from initial search to closing day
          and beyond.
        </p>
      </div>

      <div class="services-overview">
        <div class="service-card">
          <h3>🔍 Property Search & Matching</h3>
          <p>
            Find the perfect home that matches your criteria, lifestyle, and budget with our
            comprehensive search services.
          </p>
          <ul>
            <li>Custom property search setup</li>
            <li>MLS access and alerts</li>
            <li>Neighborhood analysis</li>
            <li>Market trend insights</li>
            <li>Property comparison reports</li>
          </ul>
        </div>

        <div class="service-card">
          <h3>📊 Market Analysis & Insights</h3>
          <p>
            Make informed decisions with detailed market analysis and neighborhood insights tailored
            to your needs.
          </p>
          <ul>
            <li>Comparative Market Analysis (CMA)</li>
            <li>Neighborhood market trends</li>
            <li>Price trend analysis</li>
            <li>Investment potential assessment</li>
            <li>Future market predictions</li>
          </ul>
        </div>

        <div class="service-card">
          <h3>🤝 Negotiation & Offer Strategy</h3>
          <p>
            Secure the best deal with expert negotiation strategies and professional offer
            management.
          </p>
          <ul>
            <li>Competitive offer strategies</li>
            <li>Negotiation representation</li>
            <li>Counter-offer management</li>
            <li>Contract review and advice</li>
            <li>Timeline coordination</li>
          </ul>
        </div>

        <div class="service-card">
          <h3>🔧 Inspection & Due Diligence</h3>
          <p>
            Ensure your investment is sound with comprehensive inspection coordination and due
            diligence support.
          </p>
          <ul>
            <li>Inspector recommendations</li>
            <li>Inspection scheduling</li>
            <li>Repair negotiation</li>
            <li>Property condition assessment</li>
            <li>Title and legal review</li>
          </ul>
        </div>

        <div class="service-card">
          <h3>📋 Closing & Transaction Management</h3>
          <p>
            Navigate the closing process smoothly with professional transaction management and
            support.
          </p>
          <ul>
            <li>Closing coordination</li>
            <li>Document preparation</li>
            <li>Timeline management</li>
            <li>Final walkthrough</li>
            <li>Post-closing support</li>
          </ul>
        </div>

        <div class="service-card">
          <h3>🏠 Post-Purchase Support</h3>
          <p>
            Continue to receive support even after closing with our comprehensive post-purchase
            services.
          </p>
          <ul>
            <li>Home warranty coordination</li>
            <li>Service provider referrals</li>
            <li>Market updates</li>
            <li>Future selling consultation</li>
            <li>Ongoing relationship</li>
          </ul>
        </div>
      </div>

      <div class="process-section">
        <h2>Our Buyer Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <h3>Initial Consultation</h3>
            <p>
              We start with understanding your needs, budget, and preferences to create a
              personalized buying strategy.
            </p>
          </div>

          <div class="process-step">
            <h3>Pre-Approval & Budget</h3>
            <p>
              Help you get pre-approved and establish a realistic budget based on your financial
              situation.
            </p>
          </div>

          <div class="process-step">
            <h3>Property Search</h3>
            <p>
              Set up custom searches and alerts to find properties that match your criteria and
              lifestyle.
            </p>
          </div>

          <div class="process-step">
            <h3>Property Tours</h3>
            <p>
              Schedule and accompany you on property tours, providing expert insights and analysis.
            </p>
          </div>

          <div class="process-step">
            <h3>Offer & Negotiation</h3>
            <p>
              Develop competitive offer strategies and negotiate on your behalf to secure the best
              deal.
            </p>
          </div>

          <div class="process-step">
            <h3>Inspection & Due Diligence</h3>
            <p>Coordinate inspections and ensure all due diligence is completed before closing.</p>
          </div>

          <div class="process-step">
            <h3>Closing</h3>
            <p>
              Guide you through the closing process and ensure all documents are properly executed.
            </p>
          </div>

          <div class="process-step">
            <h3>Post-Closing</h3>
            <p>Provide ongoing support and referrals for services you may need in your new home.</p>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <h2>Ready to Start Your Home Search?</h2>
        <p>
          Let Dr. Jan Duffy guide you through the entire home buying process with personalized
          service and expert market knowledge.
        </p>
        <div class="cta-buttons">
          <a href="/search" class="cta-button">
            Start Property Search
          </a>
          <a href="/contact" class="cta-button secondary">
            Contact Dr. Duffy
          </a>
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Buyer Services - Expert Home Buying Support | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content:
        'Professional buyer services in Las Vegas. Complete support from property search to closing with Dr. Jan Duffy, your trusted real estate agent.',
    },
    {
      name: 'keywords',
      content:
        'Las Vegas buyer services, home buying, property search, real estate agent, Dr. Jan Duffy, buyer representation, home purchase',
    },
    {
      name: 'author',
      content: 'Dr. Jan Duffy',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    // Open Graph metadata
    {
      property: 'og:title',
      content: 'Buyer Services - Expert Home Buying Support | Dr. Jan Duffy',
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:description',
      content:
        'Professional buyer services in Las Vegas. Complete support from property search to closing with Dr. Jan Duffy, your trusted real estate agent.',
    },
    { property: 'og:url', content: 'https://grokipedia.com/services/buyer-services' },
    { property: 'og:site_name', content: 'Open House Update' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'es_US' },
    { property: 'og:determiner', content: 'auto' },
    { property: 'og:image', content: 'https://grokipedia.com/images/og-buyer-services.jpg' },
    {
      property: 'og:image:secure_url',
      content: 'https://grokipedia.com/images/og-buyer-services.jpg',
    },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Buyer Services - Las Vegas Real Estate' },
    { property: 'article:tag', content: 'buyer services' },
    { property: 'article:tag', content: 'home buying' },
    { property: 'article:tag', content: 'property search' },
    { property: 'article:tag', content: 'real estate agent' },
    { property: 'article:tag', content: 'Las Vegas' },
    // Twitter Card metadata
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Buyer Services - Expert Home Buying Support | Dr. Jan Duffy',
    },
    {
      name: 'twitter:description',
      content:
        'Professional buyer services in Las Vegas. Complete support from property search to closing with Dr. Jan Duffy, your trusted real estate agent.',
    },
    { name: 'twitter:image', content: 'https://grokipedia.com/images/og-buyer-services.jpg' },
    { name: 'twitter:image:alt', content: 'Buyer Services - Las Vegas Real Estate' },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://grokipedia.com/services/buyer-services',
    },
  ],
}
