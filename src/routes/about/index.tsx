import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import EnhancedPageSEO, { createOptimizedHead } from '~/components/seo/enhanced-page-seo'

export default component$(() => {
  return (
    <div class="about-page">
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
        }
        
        .about-info h2 {
          color: #0A2540;
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .about-info p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .credentials {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .credentials h2 {
          color: #0A2540;
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        
        .credential-item {
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .credential-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        
        .credential-item h3 {
          color: #0A2540;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .credential-item p {
          color: #666;
          margin: 0;
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
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .about-hero h1 {
            font-size: 2rem;
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

      <div class="about-hero">
        <h1>About Dr. Jan Duffy</h1>
        <p>
          Your trusted Las Vegas real estate professional with over 15 years of experience helping
          clients achieve their real estate goals.
        </p>
      </div>

      <div class="about-content">
        <div class="about-info">
          <h2>Professional Background</h2>
          <p>
            Dr. Jan Duffy brings a unique combination of academic excellence and real-world
            experience to the Las Vegas real estate market. With a doctorate in business
            administration and extensive experience in property management, she understands both the
            financial and emotional aspects of real estate transactions.
          </p>
          <p>
            Her approach combines data-driven market analysis with personalized service, ensuring
            that each client receives the attention and expertise they deserve. Whether you're
            buying your first home or selling a luxury property, Dr. Duffy provides the guidance and
            support you need to make informed decisions.
          </p>
          <p>
            Based in Las Vegas, Dr. Duffy has deep knowledge of local neighborhoods, market trends,
            and investment opportunities. She's committed to staying current with market changes and
            leveraging the latest technology to provide superior service.
          </p>
        </div>

        <div class="credentials">
          <h2>Credentials & Achievements</h2>

          <div class="credential-item">
            <h3>Doctorate in Business Administration</h3>
            <p>Specialized focus on real estate market analysis and investment strategies</p>
          </div>

          <div class="credential-item">
            <h3>Open House Expert</h3>
            <p>
              Nevada License #S.0197614 with continuing education in market trends and regulations
            </p>
          </div>

          <div class="credential-item">
            <h3>Certified Property Manager</h3>
            <p>Professional certification in property management and investment analysis</p>
          </div>

          <div class="credential-item">
            <h3>Top Producer Recognition</h3>
            <p>Consistently ranked among top-performing agents in the Las Vegas market</p>
          </div>

          <div class="credential-item">
            <h3>Client Satisfaction Excellence</h3>
            <p>Maintains 5-star rating with over 200 successful transactions</p>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <h2>Ready to Work Together?</h2>
        <p>
          Let Dr. Jan Duffy guide you through your real estate journey with professional expertise
          and personalized service.
        </p>
        <div class="cta-buttons">
          <a href="/contact" class="cta-button">
            Contact Dr. Duffy
          </a>
          <a href="/services/buyer-services" class="cta-button secondary">
            Buyer Services
          </a>
          <a href="/services/seller-services" class="cta-button secondary">
            Seller Services
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <EnhancedPageSEO
        pageKey="about"
        showFAQs={true}
        faqTitle="About Dr. Jan Duffy - Frequently Asked Questions"
        className="mt-12"
      />
    </div>
  )
})

// Optimized DocumentHead with snippets and structured data
export const head: DocumentHead = createOptimizedHead('about')
