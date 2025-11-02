import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import EnhancedPageSEO, { createOptimizedHead } from '~/components/seo/enhanced-page-seo'
import InternalLinking from '~/components/seo/internal-linking'

export default component$(() => {
  return (
    <div class="neighborhood-page">
      <style>{`
        .neighborhood-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        
        .neighborhood-hero {
          text-align: center;
          margin-bottom: 3rem;
          padding: 3rem 0;
          background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .neighborhood-hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .neighborhood-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .main-content {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .info-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .info-card h3 {
          color: #0A2540;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          border-bottom: 2px solid #3A8DDE;
          padding-bottom: 0.5rem;
        }
        
        .info-card p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .stat-item {
          text-align: center;
          padding: 1rem;
          background: #F7F9FC;
          border-radius: 8px;
        }
        
        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #3A8DDE;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #666;
          margin-top: 0.25rem;
        }
        
        .main-content h2, .main-content h3 {
          color: #0A2540;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .main-content h2 {
          font-size: 2rem;
          border-bottom: 2px solid #3A8DDE;
          padding-bottom: 0.5rem;
        }
        
        .main-content h3 {
          font-size: 1.5rem;
        }
        
        .main-content ul, .main-content ol {
          margin: 1rem 0;
          padding-left: 2rem;
          color: #666;
          line-height: 1.8;
        }
        
        .main-content li {
          margin-bottom: 0.5rem;
        }
        
        @media (max-width: 968px) {
          .neighborhood-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div class="neighborhood-hero">
        <h1>North Las Vegas Real Estate</h1>
        <p style="font-size: 1.2rem; opacity: 0.9;">
          Growing community with new construction, affordable homes, and excellent value
        </p>
      </div>

      <div class="neighborhood-content">
        <div class="main-content">
          <h2>About North Las Vegas</h2>
          <p>
            North Las Vegas, located in zip codes 89030, 89031, 89032, 89081, 89084, and 89086, is one of the 
            fastest-growing areas in Las Vegas Valley. Known for its new construction, affordable housing options, 
            and improving amenities, North Las Vegas offers excellent value for homebuyers.
          </p>
          
          <h3>Why Choose North Las Vegas?</h3>
          <ul>
            <li><strong>Affordability:</strong> More affordable housing options than many Las Vegas areas</li>
            <li><strong>New Construction:</strong> Active new home construction in communities like Skye Canyon and Centennial Hills</li>
            <li><strong>Growing Amenities:</strong> Shopping centers, restaurants, and services expanding</li>
            <li><strong>Good Value:</strong> More square footage for your money</li>
            <li><strong>Easy Access:</strong> Good highway access to Las Vegas and employment centers</li>
            <li><strong>Family-Friendly:</strong> Safe neighborhoods suitable for families</li>
          </ul>

          <h3>Top Communities in North Las Vegas</h3>
          <ul>
            <li><strong>Skye Canyon (89084):</strong> Master-planned community with new construction and modern amenities</li>
            <li><strong>Centennial Hills (89031):</strong> Established area with good schools and shopping</li>
            <li><strong>Aliante:</strong> Community with shopping center, golf course, and parks</li>
            <li><strong>Eldorado:</strong> Established neighborhood with affordable options</li>
          </ul>

          <h3>Home Prices in North Las Vegas</h3>
          <p>
            North Las Vegas offers some of the most affordable housing in Las Vegas Valley. Entry-level homes 
            start around $250,000-$350,000, while mid-range homes typically range from $350,000-$500,000. Newer 
            communities like Skye Canyon may have homes up to $600,000+. The average home price in North Las Vegas 
            is approximately $400,000-$450,000 as of November 2025, making it an excellent option for first-time 
            buyers and those seeking value.
          </p>

          <h3>Schools in North Las Vegas</h3>
          <p>
            North Las Vegas is served by the Clark County School District. While school ratings vary, newer 
            communities like Skye Canyon and Centennial Hills have newer schools with improving ratings. Many 
            families are attracted to the area for its affordability and new construction options.
          </p>

          <h3>Growth & Development</h3>
          <p>
            North Las Vegas is experiencing significant growth and development, with new shopping centers, 
            restaurants, and services opening regularly. This growth brings improved amenities and property 
            value appreciation potential for homeowners.
          </p>
        </div>

        <div class="sidebar">
          <div class="info-card">
            <h3>Quick Facts</h3>
            <div class="stat-grid">
              <div class="stat-item">
                <div class="stat-value">$425K</div>
                <div class="stat-label">Avg Home Price</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">Fast</div>
                <div class="stat-label">Growing Area</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">New</div>
                <div class="stat-label">Construction</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">Value</div>
                <div class="stat-label">Affordable</div>
              </div>
            </div>
            <p><strong>Zip Codes:</strong> 89030, 89031, 89032, 89081, 89084, 89086</p>
            <p><strong>Population:</strong> ~260,000</p>
            <p><strong>Best For:</strong> First-time buyers, families seeking value</p>
          </div>

          <div class="info-card">
            <h3>Contact Dr. Jan Duffy</h3>
            <p>Expert North Las Vegas real estate guidance</p>
            <p><strong>Phone:</strong> (702) 200-3422</p>
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin-top: 1rem; padding: 0.75rem 1.5rem; background: #3A8DDE; color: white; border-radius: 6px; text-decoration: none;">
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Internal Linking */}
      <InternalLinking
        title="Explore More Las Vegas Neighborhoods"
        links={[
          {
            title: 'Summerlin Real Estate',
            url: '/neighborhoods/summerlin/',
            description: 'Premier master-planned community with luxury amenities',
          },
          {
            title: 'Henderson Properties',
            url: '/neighborhoods/henderson/',
            description: 'Family-friendly community with excellent schools',
          },
          {
            title: 'Green Valley Real Estate',
            url: '/neighborhoods/green-valley/',
            description: 'Upscale Henderson community',
          },
          {
            title: 'Search All Properties',
            url: '/search/',
            description: 'Browse all North Las Vegas homes and open houses',
          },
        ]}
        className="mt-8"
      />

      {/* FAQ Section */}
      <EnhancedPageSEO
        pageKey="north-las-vegas"
        showFAQs={true}
        faqTitle="North Las Vegas Real Estate - Frequently Asked Questions"
        className="mt-8"
      />
    </div>
  )
})

export const head: DocumentHead = createOptimizedHead('north-las-vegas')

