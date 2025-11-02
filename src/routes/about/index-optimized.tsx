import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import EnhancedPageSEO, { createOptimizedHead } from '~/components/seo/enhanced-page-seo'

export default component$(() => {
  return (
    <div class="about-page">
      {/* Enhanced SEO with FAQs */}
      <EnhancedPageSEO
        pageKey="about"
        showFAQs={true}
        faqTitle="About Dr. Jan Duffy - Frequently Asked Questions"
        className="mt-12"
      />

      <style>{`
        .about-page {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        
        .about-hero {
          text-align: center;
          margin-bottom: 3rem;
          padding: 3rem 0;
          background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .about-hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        
        .about-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin: 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .about-info {
          background: #F7F9FC;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .about-info h2 {
          color: #0A2540;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .about-info p {
          color: #4A5568;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .about-info ul {
          color: #4A5568;
          line-height: 1.6;
          padding-left: 1.5rem;
        }
        
        .about-info li {
          margin-bottom: 0.5rem;
        }
        
        .about-image {
          text-align: center;
        }
        
        .about-image img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .credentials {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-bottom: 3rem;
        }
        
        .credentials h2 {
          color: #0A2540;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .credentials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        
        .credential-item {
          text-align: center;
          padding: 1rem;
          background: #F7F9FC;
          border-radius: 8px;
        }
        
        .credential-item h3 {
          color: #0A2540;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .credential-item p {
          color: #4A5568;
          font-size: 0.9rem;
        }
        
        .cta-section {
          text-align: center;
          background: linear-gradient(135deg, #3A8DDE 0%, #16B286 100%);
          color: white;
          padding: 3rem 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .cta-section h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .cta-section p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-button {
          background: white;
          color: #3A8DDE;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .cta-button:hover {
          background: #F7F9FC;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .about-hero h1 {
            font-size: 2rem;
          }
          
          .about-hero p {
            font-size: 1rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div class="about-hero">
        <h1>Meet Dr. Jan Duffy</h1>
        <p>
          Your trusted Las Vegas real estate professional with over 20 years of experience helping
          clients find their perfect home.
        </p>
      </div>

      {/* Main Content */}
      <div class="about-content">
        <div class="about-info">
          <h2>Professional Background</h2>
          <p>
            Dr. Jan Duffy brings over two decades of real estate expertise to the Las Vegas market.
            As an Open House Expert with Nevada License #S.0197614, she has helped hundreds of
            families find their dream homes and achieve their real estate goals.
          </p>
          <p>
            Her deep understanding of the Las Vegas Valley market, combined with her personalized
            approach to client service, makes her the ideal choice for both first-time homebuyers
            and experienced investors.
          </p>

          <h2>Areas of Expertise</h2>
          <ul>
            <li>Residential property sales and purchases</li>
            <li>First-time homebuyer guidance</li>
            <li>Investment property analysis</li>
            <li>Market trend analysis</li>
            <li>Negotiation and transaction management</li>
            <li>Home valuation and pricing strategies</li>
          </ul>
        </div>

        <div class="about-image">
          <img
            src="/images/dr-janet-duffy.jpg"
            alt="Dr. Jan Duffy - Las Vegas Real Estate Agent"
            width="400"
            height="500"
          />
        </div>
      </div>

      {/* Credentials Section */}
      <div class="credentials">
        <h2>Professional Credentials</h2>
        <div class="credentials-grid">
          <div class="credential-item">
            <h3>Nevada Real Estate License</h3>
            <p>Open House Expert - Nevada License #S.0197614</p>
          </div>
          <div class="credential-item">
            <h3>Berkshire Hathaway</h3>
            <p>Affiliated with Berkshire Hathaway HomeServices Nevada Properties</p>
          </div>
          <div class="credential-item">
            <h3>20+ Years Experience</h3>
            <p>Over two decades of real estate expertise in Las Vegas</p>
          </div>
          <div class="credential-item">
            <h3>Local Market Expert</h3>
            <p>Deep knowledge of Las Vegas Valley neighborhoods and market trends</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div class="cta-section">
        <h2>Ready to Work Together?</h2>
        <p>
          Let Dr. Jan Duffy help you navigate the Las Vegas real estate market with confidence and
          expertise.
        </p>
        <div class="cta-buttons">
          <a href="/contact/" class="cta-button">
            Contact Dr. Duffy
          </a>
          <a href="/services/" class="cta-button">
            View Services
          </a>
          <a href="/search/" class="cta-button">
            Search Properties
          </a>
        </div>
      </div>
    </div>
  )
})

// Optimized DocumentHead with snippets and structured data
export const head: DocumentHead = createOptimizedHead('about')
