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
          background: linear-gradient(135deg, #0A2540 0%, #16B286 100%);
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
          border-bottom: 2px solid #16B286;
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
          color: #16B286;
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
          border-bottom: 2px solid #16B286;
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
        <h1>Henderson Real Estate - Las Vegas</h1>
        <p style="font-size: 1.2rem; opacity: 0.9;">
          Family-friendly community consistently ranked among the safest cities in America
        </p>
      </div>

      <div class="neighborhood-content">
        <div class="main-content">
          <h2>About Henderson</h2>
          <p>
            Henderson, Nevada, located in zip codes 89002, 89011, 89012, 89014, 89015, 89052, and 89074, 
            is one of the most desirable places to live in Las Vegas Valley. Known for its excellent schools, 
            low crime rates, and family-friendly atmosphere, Henderson consistently ranks as one of the safest 
            cities in America.
          </p>
          
          <h3>Why Choose Henderson?</h3>
          <ul>
            <li><strong>Safety:</strong> Consistently ranked among the safest cities in America</li>
            <li><strong>Excellent Schools:</strong> Top-rated schools with strong academic programs</li>
            <li><strong>Master-Planned Communities:</strong> Green Valley, Seven Hills, Anthem, and Inspirada</li>
            <li><strong>Recreation:</strong> Parks, trails, Lake Las Vegas, and outdoor activities</li>
            <li><strong>Employment:</strong> Growing job market with diverse opportunities</li>
            <li><strong>Affordability:</strong> Better value than many comparable communities</li>
          </ul>

          <h3>Top Henderson Communities</h3>
          <ul>
            <li><strong>Green Valley (89012, 89014):</strong> Established community with excellent schools and amenities</li>
            <li><strong>Seven Hills (89052, 89074):</strong> Gated luxury community with mountain views</li>
            <li><strong>Lake Las Vegas (89011):</strong> Resort-style community with waterfront properties</li>
            <li><strong>Anthem (89044):</strong> Gated community with strong security and family focus</li>
            <li><strong>Inspirada (89044):</strong> Modern master-planned community with new construction</li>
            <li><strong>Macdonald Highlands (89052):</strong> Luxury gated community with estate homes</li>
          </ul>

          <h3>Home Prices in Henderson</h3>
          <p>
            Henderson offers diverse housing options from affordable starter homes to luxury estates. Entry-level 
            homes start around $300,000-$400,000, while mid-range homes typically range from $400,000-$700,000. 
            Luxury communities like Seven Hills, Lake Las Vegas, and Macdonald Highlands feature homes from 
            $700,000 to over $3 million. The average home price in Henderson is approximately $550,000-$650,000 
            as of November 2025.
          </p>

          <h3>Schools in Henderson</h3>
          <p>
            Henderson is served by the Clark County School District, with many schools in Green Valley and Seven 
            Hills consistently ranking among the top in the district. Schools like Coronado High School and 
            various elementary and middle schools are highly sought after by families. Private school options 
            are also available throughout Henderson.
          </p>

          <h3>Commute to Las Vegas</h3>
          <p>
            Henderson offers easy access to Las Vegas with a typical commute of 20-30 minutes depending on your 
            destination. Highway access via I-215 and I-515 provides efficient travel to Las Vegas employment 
            centers, the Strip, and McCarran International Airport.
          </p>
        </div>

        <div class="sidebar">
          <div class="info-card">
            <h3>Quick Facts</h3>
            <div class="stat-grid">
              <div class="stat-item">
                <div class="stat-value">$600K</div>
                <div class="stat-label">Avg Home Price</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">#2</div>
                <div class="stat-label">Safest City NV</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">4.6/5</div>
                <div class="stat-label">School Rating</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">25min</div>
                <div class="stat-label">To Las Vegas</div>
              </div>
            </div>
            <p><strong>Zip Codes:</strong> 89002, 89011, 89012, 89014, 89015, 89052, 89074</p>
            <p><strong>Population:</strong> ~320,000</p>
            <p><strong>Founded:</strong> 1953</p>
          </div>

          <div class="info-card">
            <h3>Contact Dr. Jan Duffy</h3>
            <p>Expert Henderson real estate guidance</p>
            <p><strong>Phone:</strong> (702) 200-3422</p>
            <a href="/contact" style="display: inline-block; margin-top: 1rem; padding: 0.75rem 1.5rem; background: #16B286; color: white; border-radius: 6px; text-decoration: none;">
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
            title: 'North Las Vegas Properties',
            url: '/neighborhoods/north-las-vegas/',
            description: 'Growing area with new construction and value',
          },
          {
            title: 'Green Valley Real Estate',
            url: '/neighborhoods/green-valley/',
            description: 'Upscale Henderson community with excellent schools',
          },
          {
            title: 'Search Henderson Properties',
            url: '/search/',
            description: 'Browse all Henderson homes and open houses',
          },
        ]}
        className="mt-8"
      />

      {/* FAQ Section */}
      <EnhancedPageSEO
        pageKey="henderson"
        showFAQs={true}
        faqTitle="Henderson Real Estate - Frequently Asked Questions"
        className="mt-8"
      />
    </div>
  )
})

export const head: DocumentHead = createOptimizedHead('henderson')

