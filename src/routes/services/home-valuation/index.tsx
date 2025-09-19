import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const propertyAddress = useSignal('');
  const ownerName = useSignal('');
  const email = useSignal('');
  const phone = useSignal('');
  const propertyType = useSignal('single-family');
  const bedrooms = useSignal('');
  const bathrooms = useSignal('');
  const squareFootage = useSignal('');
  const yearBuilt = useSignal('');
  const additionalInfo = useSignal('');

  const isSubmitting = useSignal(false);
  const isSubmitted = useSignal(false);

  const handleSubmit = $(async () => {
    isSubmitting.value = true;
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Track valuation request
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'valuation_request', {
        event_category: 'service',
        event_label: 'home_valuation',
        value: 1
      });
    }
    
    isSubmitting.value = false;
    isSubmitted.value = true;
  });

  return (
    <div class="valuation-page">
      <style>{`
        .valuation-page {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        
        .valuation-hero {
          text-align: center;
          margin-bottom: 3rem;
          padding: 3rem 0;
          background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
          color: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .valuation-hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        
        .valuation-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin: 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .valuation-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .valuation-info {
          background: #F7F9FC;
          border-radius: 12px;
          padding: 2rem;
        }
        
        .valuation-info h2 {
          color: #0A2540;
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .valuation-info ul {
          color: #666;
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .valuation-info li {
          margin-bottom: 0.5rem;
        }
        
        .valuation-form {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .valuation-form h2 {
          color: #0A2540;
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          color: #0A2540;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3A8DDE;
        }
        
        .form-group textarea {
          height: 100px;
          resize: vertical;
        }
        
        .submit-button {
          background: #3A8DDE;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
          width: 100%;
        }
        
        .submit-button:hover:not(:disabled) {
          background: #2a7bc7;
        }
        
        .submit-button:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }
        
        .success-message {
          background: #d1fae5;
          color: #065f46;
          padding: 1rem;
          border-radius: 6px;
          text-align: center;
          margin-top: 1rem;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .benefit-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          text-align: center;
          border-top: 4px solid #16B286;
        }
        
        .benefit-card h3 {
          color: #0A2540;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .benefit-card p {
          color: #666;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .valuation-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .valuation-hero h1 {
            font-size: 2rem;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div class="valuation-hero">
        <h1>Free Home Valuation</h1>
        <p>
          Get an accurate assessment of your property's current market value with our comprehensive home valuation service.
        </p>
      </div>

      <div class="valuation-content">
        <div class="valuation-info">
          <h2>What You'll Receive</h2>
          <ul>
            <li>Detailed Comparative Market Analysis (CMA)</li>
            <li>Current market trends and pricing insights</li>
            <li>Property condition assessment</li>
            <li>Neighborhood market analysis</li>
            <li>Professional valuation report</li>
            <li>Recommendations for maximizing value</li>
          </ul>
          
          <h2>Why Choose Our Valuation?</h2>
          <ul>
            <li>Local market expertise</li>
            <li>Up-to-date market data</li>
            <li>Professional analysis</li>
            <li>No obligation consultation</li>
            <li>Quick turnaround time</li>
          </ul>
        </div>

        <div class="valuation-form">
          <h2>Request Your Free Valuation</h2>
          
          {!isSubmitted.value ? (
            <form preventdefault:submit onSubmit$={handleSubmit}>
              <div class="form-group">
                <label for="propertyAddress">Property Address *</label>
                <input
                  type="text"
                  id="propertyAddress"
                  value={formData.value.propertyAddress}
                  onInput$={(e) => formData.value = { ...formData.value, propertyAddress: (e.target as HTMLInputElement).value }}
                  required
                  placeholder="123 Main Street, Las Vegas, NV 89101"
                />
              </div>

              <div class="form-group">
                <label for="ownerName">Your Name *</label>
                <input
                  type="text"
                  id="ownerName"
                  value={formData.value.ownerName}
                  onInput$={(e) => formData.value = { ...formData.value, ownerName: (e.target as HTMLInputElement).value }}
                  required
                  placeholder="John Smith"
                />
              </div>

              <div class="form-group">
                <label for="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.value.email}
                  onInput$={(e) => formData.value = { ...formData.value, email: (e.target as HTMLInputElement).value }}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.value.phone}
                  onInput$={(e) => formData.value = { ...formData.value, phone: (e.target as HTMLInputElement).value }}
                  placeholder="(702) 555-0123"
                />
              </div>

              <div class="form-group">
                <label for="propertyType">Property Type *</label>
                <select
                  id="propertyType"
                  value={formData.value.propertyType}
                  onChange$={(e) => formData.value = { ...formData.value, propertyType: (e.target as HTMLSelectElement).value }}
                  required
                >
                  <option value="single-family">Single Family Home</option>
                  <option value="condo">Condominium</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="multi-family">Multi-Family</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label for="bedrooms">Bedrooms</label>
                <input
                  type="number"
                  id="bedrooms"
                  value={formData.value.bedrooms}
                  onInput$={(e) => formData.value = { ...formData.value, bedrooms: (e.target as HTMLInputElement).value }}
                  placeholder="3"
                />
              </div>

              <div class="form-group">
                <label for="bathrooms">Bathrooms</label>
                <input
                  type="number"
                  id="bathrooms"
                  value={formData.value.bathrooms}
                  onInput$={(e) => formData.value = { ...formData.value, bathrooms: (e.target as HTMLInputElement).value }}
                  placeholder="2"
                  step="0.5"
                />
              </div>

              <div class="form-group">
                <label for="squareFootage">Square Footage</label>
                <input
                  type="number"
                  id="squareFootage"
                  value={formData.value.squareFootage}
                  onInput$={(e) => formData.value = { ...formData.value, squareFootage: (e.target as HTMLInputElement).value }}
                  placeholder="2000"
                />
              </div>

              <div class="form-group">
                <label for="yearBuilt">Year Built</label>
                <input
                  type="number"
                  id="yearBuilt"
                  value={formData.value.yearBuilt}
                  onInput$={(e) => formData.value = { ...formData.value, yearBuilt: (e.target as HTMLInputElement).value }}
                  placeholder="2010"
                  min="1900"
                  max="2024"
                />
              </div>

              <div class="form-group">
                <label for="additionalInfo">Additional Information</label>
                <textarea
                  id="additionalInfo"
                  value={formData.value.additionalInfo}
                  onInput$={(e) => formData.value = { ...formData.value, additionalInfo: (e.target as HTMLTextAreaElement).value }}
                  placeholder="Any special features, recent renovations, or other details..."
                ></textarea>
              </div>

              <button type="submit" class="submit-button" disabled={isSubmitting.value}>
                {isSubmitting.value ? 'Submitting...' : 'Get My Free Valuation'}
              </button>
            </form>
          ) : (
            <div class="success-message">
              <h3>Thank You!</h3>
              <p>Your valuation request has been submitted. Dr. Janet Duffy will contact you within 24 hours to discuss your property valuation.</p>
            </div>
          )}
        </div>
      </div>

      <div class="benefits-grid">
        <div class="benefit-card">
          <h3>🏠 Accurate Valuations</h3>
          <p>Our valuations are based on current market data and local expertise to give you the most accurate assessment.</p>
        </div>
        
        <div class="benefit-card">
          <h3>📊 Market Insights</h3>
          <p>Get detailed insights into your neighborhood's market trends and how they affect your property's value.</p>
        </div>
        
        <div class="benefit-card">
          <h3>⚡ Quick Turnaround</h3>
          <p>Receive your comprehensive valuation report within 24-48 hours of your request.</p>
        </div>
        
        <div class="benefit-card">
          <h3>💼 Professional Service</h3>
          <p>Work with Dr. Janet Duffy, a licensed real estate professional with extensive local market knowledge.</p>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Free Home Valuation - Las Vegas Real Estate | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Get a free, accurate home valuation for your Las Vegas property. Professional market analysis and property assessment from Dr. Janet Duffy.',
    },
    {
      name: 'keywords',
      content: 'home valuation Las Vegas, property assessment, market analysis, CMA, home value, Dr. Janet Duffy, real estate valuation',
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
      content: 'Free Home Valuation - Las Vegas Real Estate | Dr. Janet Duffy',
    },
    {
      property: 'og:description',
      content: 'Get a free, accurate home valuation for your Las Vegas property. Professional market analysis and property assessment.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://openhouseupdate.com/services/home-valuation',
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
      content: 'Free Home Valuation - Las Vegas Real Estate | Dr. Janet Duffy',
    },
    {
      name: 'twitter:description',
      content: 'Get a free, accurate home valuation for your Las Vegas property. Professional market analysis and property assessment.',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://openhouseupdate.com/services/home-valuation',
    },
  ],
};
