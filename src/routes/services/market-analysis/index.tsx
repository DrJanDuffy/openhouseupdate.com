import { component$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useVisibleTask$(() => {
    // Track market analysis page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'market_analysis_page_view', {
        event_category: 'service',
        event_label: 'market_analysis',
        value: 1
      });
    }
  });

  return (
    <div class="market-analysis-page">
      <style>{`
        .market-analysis-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        
        .market-hero {
          text-align: center;
          margin-bottom: 4rem;
          padding: 3rem 0;
          background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .market-hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        
        .market-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin: 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .analysis-overview {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .analysis-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-top: 4px solid #3A8DDE;
        }
        
        .analysis-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
        
        .analysis-card h3 {
          color: #0A2540;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .analysis-card p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .analysis-card ul {
          color: #666;
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .analysis-card li {
          margin-bottom: 0.5rem;
        }
        
        .market-data-section {
          background: #F7F9FC;
          border-radius: 12px;
          padding: 3rem 2rem;
          margin-bottom: 4rem;
        }
        
        .market-data-section h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .data-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .data-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .data-card .metric {
          font-size: 2.5rem;
          font-weight: 700;
          color: #3A8DDE;
          margin-bottom: 0.5rem;
        }
        
        .data-card .label {
          color: #666;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .data-card .change {
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .data-card .change.positive {
          color: #16B286;
        }
        
        .data-card .change.negative {
          color: #dc2626;
        }
        
        .reports-section {
          background: white;
          border-radius: 12px;
          padding: 3rem 2rem;
          margin-bottom: 4rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .reports-section h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .reports-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .report-card {
          background: #F7F9FC;
          border-radius: 12px;
          padding: 2rem;
          border-left: 4px solid #3A8DDE;
        }
        
        .report-card h3 {
          color: #0A2540;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .report-card p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .report-card .frequency {
          color: #3A8DDE;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .neighborhoods-section {
          background: #F7F9FC;
          border-radius: 12px;
          padding: 3rem 2rem;
          margin-bottom: 4rem;
        }
        
        .neighborhoods-section h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .neighborhoods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .neighborhood-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }
        
        .neighborhood-card:hover {
          transform: translateY(-2px);
        }
        
        .neighborhood-card h3 {
          color: #0A2540;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .neighborhood-card .avg-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #3A8DDE;
          margin-bottom: 0.5rem;
        }
        
        .neighborhood-card .trend {
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .neighborhood-card .trend.up {
          color: #16B286;
        }
        
        .neighborhood-card .trend.down {
          color: #dc2626;
        }
        
        .cta-section {
          background: linear-gradient(135deg, #3A8DDE 0%, #16B286 100%);
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
          .market-hero h1 {
            font-size: 2rem;
          }
          
          .analysis-overview {
            grid-template-columns: 1fr;
          }
          
          .data-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .reports-grid {
            grid-template-columns: 1fr;
          }
          
          .neighborhoods-grid {
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

      <div class="market-hero">
        <h1>Market Analysis</h1>
        <p>
          Stay informed with detailed market reports, trends analysis, and neighborhood insights for informed decision-making.
        </p>
      </div>

      <div class="analysis-overview">
        <div class="analysis-card">
          <h3>📊 Monthly Market Reports</h3>
          <p>
            Comprehensive monthly reports covering market trends, inventory levels, and pricing movements across Las Vegas.
          </p>
          <ul>
            <li>Sales volume analysis</li>
            <li>Price trend tracking</li>
            <li>Inventory level monitoring</li>
            <li>Days on market analysis</li>
            <li>Market forecast predictions</li>
          </ul>
        </div>

        <div class="analysis-card">
          <h3>🏘️ Neighborhood Analysis</h3>
          <p>
            Detailed analysis of specific neighborhoods, including market performance, amenities, and investment potential.
          </p>
          <ul>
            <li>Neighborhood market trends</li>
            <li>Property value analysis</li>
            <li>Amenity impact assessment</li>
            <li>School district analysis</li>
            <li>Future development plans</li>
          </ul>
        </div>

        <div class="analysis-card">
          <h3>💰 Investment Analysis</h3>
          <p>
            Strategic investment analysis to identify opportunities and assess potential returns in the Las Vegas market.
          </p>
          <ul>
            <li>ROI calculations</li>
            <li>Cash flow projections</li>
            <li>Market timing analysis</li>
            <li>Risk assessment</li>
            <li>Portfolio optimization</li>
          </ul>
        </div>

        <div class="analysis-card">
          <h3>📈 Trend Forecasting</h3>
          <p>
            Forward-looking analysis to help you anticipate market changes and make proactive decisions.
          </p>
          <ul>
            <li>Price trend predictions</li>
            <li>Market cycle analysis</li>
            <li>Seasonal pattern recognition</li>
            <li>Economic indicator correlation</li>
            <li>Long-term projections</li>
          </ul>
        </div>
      </div>

      <div class="market-data-section">
        <h2>Current Market Data</h2>
        <div class="data-grid">
          <div class="data-card">
            <div class="metric">$485,000</div>
            <div class="label">Median Home Price</div>
            <div class="change positive">+3.2% vs last month</div>
          </div>
          
          <div class="data-card">
            <div class="metric">28</div>
            <div class="label">Days on Market</div>
            <div class="change negative">-5 days vs last month</div>
          </div>
          
          <div class="data-card">
            <div class="metric">2,847</div>
            <div class="label">Active Listings</div>
            <div class="change positive">+8.5% vs last month</div>
          </div>
          
          <div class="data-card">
            <div class="metric">1,234</div>
            <div class="label">Monthly Sales</div>
            <div class="change positive">+12.3% vs last month</div>
          </div>
          
          <div class="data-card">
            <div class="metric">98.5%</div>
            <div class="label">List-to-Sale Ratio</div>
            <div class="change positive">+0.8% vs last month</div>
          </div>
          
          <div class="data-card">
            <div class="metric">4.2%</div>
            <div class="label">Months of Inventory</div>
            <div class="change negative">-0.3 months vs last month</div>
          </div>
        </div>
      </div>

      <div class="reports-section">
        <h2>Available Reports</h2>
        <div class="reports-grid">
          <div class="report-card">
            <h3>Monthly Market Summary</h3>
            <p>Comprehensive overview of Las Vegas real estate market performance including sales, pricing, and inventory trends.</p>
            <div class="frequency">Updated Monthly</div>
          </div>
          
          <div class="report-card">
            <h3>Neighborhood Spotlight</h3>
            <p>In-depth analysis of specific neighborhoods including market trends, amenities, and investment opportunities.</p>
            <div class="frequency">Updated Quarterly</div>
          </div>
          
          <div class="report-card">
            <h3>Price Range Analysis</h3>
            <p>Detailed breakdown of market performance across different price ranges and property types.</p>
            <div class="frequency">Updated Monthly</div>
          </div>
          
          <div class="report-card">
            <h3>Investment Opportunities</h3>
            <p>Strategic analysis of investment potential including ROI projections and market timing recommendations.</p>
            <div class="frequency">Updated Quarterly</div>
          </div>
          
          <div class="report-card">
            <h3>Forecasting Report</h3>
            <p>Forward-looking analysis with predictions for market trends, pricing, and investment opportunities.</p>
            <div class="frequency">Updated Bi-Annually</div>
          </div>
          
          <div class="report-card">
            <h3>Custom Analysis</h3>
            <p>Tailored market analysis for specific properties, neighborhoods, or investment strategies.</p>
            <div class="frequency">On Request</div>
          </div>
        </div>
      </div>

      <div class="neighborhoods-section">
        <h2>Neighborhood Market Overview</h2>
        <div class="neighborhoods-grid">
          <div class="neighborhood-card">
            <h3>Summerlin</h3>
            <div class="avg-price">$785,000</div>
            <div class="trend up">+4.2% this quarter</div>
          </div>
          
          <div class="neighborhood-card">
            <h3>Henderson</h3>
            <div class="avg-price">$625,000</div>
            <div class="trend up">+2.8% this quarter</div>
          </div>
          
          <div class="neighborhood-card">
            <h3>North Las Vegas</h3>
            <div class="avg-price">$425,000</div>
            <div class="trend up">+3.5% this quarter</div>
          </div>
          
          <div class="neighborhood-card">
            <h3>Spring Valley</h3>
            <div class="avg-price">$485,000</div>
            <div class="trend up">+2.1% this quarter</div>
          </div>
          
          <div class="neighborhood-card">
            <h3>Enterprise</h3>
            <div class="avg-price">$695,000</div>
            <div class="trend up">+3.8% this quarter</div>
          </div>
          
          <div class="neighborhood-card">
            <h3>Downtown</h3>
            <div class="avg-price">$385,000</div>
            <div class="trend up">+5.2% this quarter</div>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <h2>Get Your Market Analysis</h2>
        <p>
          Stay ahead of the market with detailed analysis and insights from Dr. Janet Duffy's expert market knowledge.
        </p>
        <div class="cta-buttons">
          <a href="/contact" class="cta-button">Request Custom Analysis</a>
          <a href="/services/home-valuation" class="cta-button secondary">Get Property Valuation</a>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Market Analysis - Las Vegas Real Estate Trends | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive market analysis and trends for Las Vegas real estate. Monthly reports, neighborhood insights, and investment analysis from Dr. Janet Duffy.',
    },
    {
      name: 'keywords',
      content: 'Las Vegas market analysis, real estate trends, market reports, neighborhood analysis, investment analysis, Dr. Janet Duffy, market data',
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
      content: 'Market Analysis - Las Vegas Real Estate Trends | Dr. Janet Duffy',
    },
    {
      property: 'og:description',
      content: 'Comprehensive market analysis and trends for Las Vegas real estate. Monthly reports and neighborhood insights.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://openhouseupdate.com/services/market-analysis',
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
      content: 'Market Analysis - Las Vegas Real Estate Trends | Dr. Janet Duffy',
    },
    {
      name: 'twitter:description',
      content: 'Comprehensive market analysis and trends for Las Vegas real estate. Monthly reports and neighborhood insights.',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://openhouseupdate.com/services/market-analysis',
    },
  ],
};
