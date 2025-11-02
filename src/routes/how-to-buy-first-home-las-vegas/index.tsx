import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import EnhancedPageSEO, { createOptimizedHead } from '~/components/seo/enhanced-page-seo'
import InternalLinking from '~/components/seo/internal-linking'

export default component$(() => {
  return (
    <div class="guide-page">
      <style>{`
        .guide-page {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        
        .guide-hero {
          text-align: center;
          margin-bottom: 3rem;
          padding: 3rem 0;
          background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .guide-hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .step-section {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-bottom: 2rem;
        }
        
        .step-number {
          display: inline-block;
          width: 40px;
          height: 40px;
          background: #3A8DDE;
          color: white;
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
          font-weight: 700;
          margin-right: 1rem;
          vertical-align: top;
        }
        
        .step-section h2 {
          color: #0A2540;
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
          display: inline-block;
        }
        
        .step-section h3 {
          color: #0A2540;
          font-size: 1.3rem;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .step-section p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        
        .step-section ul, .step-section ol {
          color: #666;
          line-height: 1.8;
          margin: 1rem 0;
          padding-left: 2rem;
        }
        
        .step-section li {
          margin-bottom: 0.5rem;
        }
        
        .tip-box {
          background: #F0F9FF;
          border-left: 4px solid #3A8DDE;
          padding: 1.5rem;
          border-radius: 8px;
          margin: 1.5rem 0;
        }
        
        .tip-box strong {
          color: #0A2540;
        }
        
        .cta-box {
          background: linear-gradient(135deg, #3A8DDE 0%, #16B286 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          margin: 2rem 0;
        }
        
        .cta-box h2 {
          color: white;
          margin-bottom: 1rem;
        }
        
        .cta-button {
          display: inline-block;
          background: white;
          color: #3A8DDE;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          margin-top: 1rem;
        }
      `}</style>

      <div class="guide-hero">
        <h1>Complete Guide to Buying Your First Home in Las Vegas</h1>
        <p style="font-size: 1.2rem; opacity: 0.9;">
          Step-by-step guide from pre-approval to closing with expert tips from Dr. Jan Duffy
        </p>
      </div>

      <div class="step-section">
        <h2><span class="step-number">1</span>Get Pre-Approved for a Mortgage</h2>
        <p>
          Before you start house hunting in Las Vegas Valley, get pre-approved for a mortgage. This tells you 
          exactly how much you can afford and shows sellers you're a serious buyer. Pre-approval is essential 
          in competitive markets like Summerlin (zip codes 89134-89144) or Henderson (89002-89015).
        </p>
        <h3>What You'll Need:</h3>
        <ul>
          <li>Proof of income (pay stubs, tax returns)</li>
          <li>Bank statements</li>
          <li>Credit report</li>
          <li>Employment verification</li>
          <li>Down payment documentation</li>
        </ul>
        <div class="tip-box">
          <strong>Tip:</strong> First-time homebuyer programs in Las Vegas like Home Is Possible (HIP) can help 
          with down payment assistance. Dr. Jan Duffy can connect you with qualified lenders familiar with 
          Nevada first-time buyer programs.
        </div>
      </div>

      <div class="step-section">
        <h2><span class="step-number">2</span>Determine Your Budget and Preferences</h2>
        <p>
          Calculate your total monthly housing budget (mortgage, insurance, property taxes, HOA fees, utilities). 
          In Las Vegas, property taxes are low (0.6%-1.2% of assessed value), but HOA fees vary by neighborhood. 
          Consider what's important: schools, commute, amenities, neighborhood safety.
        </p>
        <h3>Las Vegas Budget Considerations:</h3>
        <ul>
          <li><strong>Entry-level ($250K-$400K):</strong> North Las Vegas (89030-89086), Spring Valley (89103-89147)</li>
          <li><strong>Mid-range ($400K-$700K):</strong> Henderson (89002-89015), some Summerlin areas</li>
          <li><strong>Luxury ($700K+):</strong> Summerlin The Ridges, Henderson Seven Hills, Lake Las Vegas</li>
        </ul>
      </div>

      <div class="step-section">
        <h2><span class="step-number">3</span>Find the Right Neighborhood</h2>
        <p>
          Las Vegas Valley offers diverse neighborhoods, each with unique character. Research areas based on 
          your priorities: schools, safety, amenities, commute, and lifestyle preferences.
        </p>
        <h3>Top Neighborhoods for First-Time Buyers:</h3>
        <ul>
          <li><strong>North Las Vegas:</strong> Affordable, new construction, growing (Skye Canyon, Centennial Hills)</li>
          <li><strong>Spring Valley:</strong> Established, diverse, good value</li>
          <li><strong>Henderson:</strong> Family-friendly, excellent schools, safe</li>
          <li><strong>Summerlin:</strong> Premium amenities, top schools (higher price range)</li>
        </ul>
        <div class="tip-box">
          <strong>Tip:</strong> Visit neighborhoods at different times of day to experience traffic, noise levels, 
          and community activity. Dr. Jan Duffy provides neighborhood tours to help you find the perfect area.
        </div>
      </div>

      <div class="step-section">
        <h2><span class="step-number">4</span>Start Your Property Search</h2>
        <p>
          Use our advanced search tool to browse available properties, filter by price, location, bedrooms, 
          and features. Attend open houses (especially weekend open houses) to see properties in person. 
          View at least 3-5 properties before making an offer to understand market values.
        </p>
        <h3>What to Look For:</h3>
        <ul>
          <li>HVAC system age and condition (critical in Las Vegas heat)</li>
          <li>Roof condition (tile roofs handle sun well)</li>
          <li>Energy-efficient windows (reduce cooling costs)</li>
          <li>Water softener system (hard water in Las Vegas)</li>
          <li>Pool condition if applicable</li>
          <li>Foundation and drainage (desert soil considerations)</li>
        </ul>
      </div>

      <div class="step-section">
        <h2><span class="step-number">5</span>Make an Offer</h2>
        <p>
          Once you find the right property, work with Dr. Jan Duffy to craft a competitive offer. In November 2025, 
          Las Vegas market conditions vary by neighborhood - some areas see multiple offers, while others offer 
          more negotiation room.
        </p>
        <h3>Your Offer Should Include:</h3>
        <ul>
          <li>Purchase price</li>
          <li>Down payment amount</li>
          <li>Contingencies (inspection, appraisal, financing)</li>
          <li>Earnest money deposit</li>
          <li>Desired closing date</li>
          <li>Requested repairs or credits</li>
        </ul>
      </div>

      <div class="step-section">
        <h2><span class="step-number">6</span>Home Inspection</h2>
        <p>
          After offer acceptance, schedule a professional home inspection. In Las Vegas, pay special attention to:
        </p>
        <ul>
          <li><strong>HVAC System:</strong> Essential for 110°F+ summers - replacement costs $5,000-$15,000+</li>
          <li><strong>Roof:</strong> Check for sun damage, proper insulation, ventilation</li>
          <li><strong>Foundation:</strong> Desert soil conditions require proper foundation</li>
          <li><strong>Plumbing:</strong> Hard water can affect pipes and appliances</li>
          <li><strong>Electrical:</strong> Ensure capacity for air conditioning loads</li>
        </ul>
        <div class="tip-box">
          <strong>Tip:</strong> Dr. Jan Duffy can recommend trusted Las Vegas inspectors familiar with desert 
          climate considerations.
        </div>
      </div>

      <div class="step-section">
        <h2><span class="step-number">7</span>Finalize Financing</h2>
        <p>
          Work with your lender to finalize your mortgage. Provide any additional documentation requested. 
          The lender will order an appraisal to ensure the property value supports the loan amount.
        </p>
      </div>

      <div class="step-section">
        <h2><span class="step-number">8</span>Closing Process</h2>
        <p>
          Typically 30-45 days after offer acceptance, you'll close on your new Las Vegas home. Closing involves:
        </p>
        <ul>
          <li>Final walkthrough to verify property condition</li>
          <li>Review and sign closing documents</li>
          <li>Pay closing costs and down payment</li>
          <li>Receive keys to your new home</li>
        </ul>
        <div class="tip-box">
          <strong>Tip:</strong> Nevada is a title insurance state, so title insurance protects your ownership. 
          Dr. Jan Duffy will guide you through the entire closing process.
        </div>
      </div>

      <div class="cta-box">
        <h2>Ready to Buy Your First Home in Las Vegas?</h2>
        <p>
          Dr. Jan Duffy specializes in helping first-time homebuyers navigate the Las Vegas market. Get expert 
          guidance, access to first-time buyer programs, and personalized support throughout your home buying journey.
        </p>
        <a href="/contact" class="cta-button">Get Started Today</a>
      </div>

      {/* Internal Linking */}
      <InternalLinking
        title="First-Time Homebuyer Resources"
        links={[
          {
            title: 'First-Time Homebuyer Programs',
            url: '/services/buyer-services/',
            description: 'Learn about Nevada first-time buyer assistance programs',
          },
          {
            title: 'Home Search',
            url: '/search/',
            description: 'Browse available Las Vegas homes',
          },
          {
            title: 'Neighborhoods Guide',
            url: '/neighborhoods/',
            description: 'Explore Las Vegas Valley neighborhoods',
          },
          {
            title: 'Market Analysis',
            url: '/services/market-analysis/',
            description: 'Get current Las Vegas market insights',
          },
        ]}
        className="mt-8"
      />

      {/* FAQ Section */}
      <EnhancedPageSEO
        pageKey="first-time-buyer-guide"
        showFAQs={false}
        className="mt-8"
      />
    </div>
  )
})

export const head: DocumentHead = {
  title: 'How to Buy Your First Home in Las Vegas - Complete Guide | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content:
        'Complete guide to buying your first home in Las Vegas. Step-by-step instructions from pre-approval to closing, first-time buyer programs, and expert tips from Dr. Jan Duffy.',
    },
    {
      name: 'keywords',
      content:
        'first time homebuyer Las Vegas, buy first home Las Vegas, Las Vegas home buying guide, first-time buyer programs, Nevada home buying, Las Vegas real estate guide',
    },
    {
      property: 'og:title',
      content: 'How to Buy Your First Home in Las Vegas - Complete Guide',
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      rel: 'canonical',
      href: 'https://www.openhouseupdate.com/how-to-buy-first-home-las-vegas/',
    },
  ],
}
