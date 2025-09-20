import { $, component$, type QwikSubmitEvent, useSignal } from '@builder.io/qwik'

export default component$(() => {
  const formData = useSignal({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: 'buyer',
    budget: '',
    timeline: '',
  })

  const isSubmitting = useSignal(false)
  const submitStatus = useSignal<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = $(async (_event: QwikSubmitEvent<HTMLFormElement>) => {
    isSubmitting.value = true
    submitStatus.value = 'idle'

    try {
      // Simulate form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Here you would typically send the data to your backend
      // Form data would be sent to backend API here

      submitStatus.value = 'success'

      // Reset form
      formData.value = {
        name: '',
        email: '',
        phone: '',
        message: '',
        propertyType: 'buyer',
        budget: '',
        timeline: '',
      }
    } catch (_error) {
      // Handle form submission error
      submitStatus.value = 'error'
    } finally {
      isSubmitting.value = false
    }
  })

  return (
    <div class="contact-form-container">
      <style>{`
        .contact-form-container {
          max-width: 600px;
          margin: 2rem auto;
          padding: 2rem;
          background: #F7F9FC;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .contact-form-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .contact-form-header h2 {
          color: #0A2540;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .contact-form-header p {
          color: #3A8DDE;
          font-size: 1.1rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #0A2540;
          font-weight: 600;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e2e8f0;
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
          min-height: 120px;
          resize: vertical;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .submit-btn {
          width: 100%;
          background: #3A8DDE;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 6px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .submit-btn:hover:not(:disabled) {
          background: #2a7bc8;
        }
        
        .submit-btn:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }
        
        .status-message {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 6px;
          text-align: center;
          font-weight: 600;
        }
        
        .status-success {
          background: #dcfce7;
          color: #166534;
          border: 1px solid #bbf7d0;
        }
        
        .status-error {
          background: #fef2f2;
          color: #dc2626;
          border: 1px solid #fecaca;
        }

        @media (max-width: 768px) {
          .contact-form-container {
            margin: 1rem;
            padding: 1.5rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .contact-form-header h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div class="contact-form-header">
        <h2>Get In Touch</h2>
        <p>Ready to find your perfect Las Vegas home? Let's connect!</p>
      </div>

      <form preventdefault:submit onSubmit$={handleSubmit}>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Full Name *</label>
            <input
              type="text"
              id="name"
              required
              value={formData.value.name}
              onInput$={(event) => {
                formData.value = {
                  ...formData.value,
                  name: (event.target as HTMLInputElement).value,
                }
              }}
            />
          </div>

          <div class="form-group">
            <label for="email">Email Address *</label>
            <input
              type="email"
              id="email"
              required
              value={formData.value.email}
              onInput$={(event) => {
                formData.value = {
                  ...formData.value,
                  email: (event.target as HTMLInputElement).value,
                }
              }}
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={formData.value.phone}
              onInput$={(event) => {
                formData.value = {
                  ...formData.value,
                  phone: (event.target as HTMLInputElement).value,
                }
              }}
            />
          </div>

          <div class="form-group">
            <label for="propertyType">I'm looking to:</label>
            <select
              id="propertyType"
              value={formData.value.propertyType}
              onChange$={(event) => {
                formData.value = {
                  ...formData.value,
                  propertyType: (event.target as HTMLSelectElement).value,
                }
              }}
            >
              <option value="buyer">Buy a Home</option>
              <option value="seller">Sell a Home</option>
              <option value="both">Both Buy & Sell</option>
              <option value="investor">Real Estate Investment</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="budget">Budget Range</label>
            <select
              id="budget"
              value={formData.value.budget}
              onChange$={(event) => {
                formData.value = {
                  ...formData.value,
                  budget: (event.target as HTMLSelectElement).value,
                }
              }}
            >
              <option value="">Select Budget</option>
              <option value="under-300k">Under $300,000</option>
              <option value="300k-500k">$300,000 - $500,000</option>
              <option value="500k-750k">$500,000 - $750,000</option>
              <option value="750k-1m">$750,000 - $1,000,000</option>
              <option value="over-1m">Over $1,000,000</option>
            </select>
          </div>

          <div class="form-group">
            <label for="timeline">Timeline</label>
            <select
              id="timeline"
              value={formData.value.timeline}
              onChange$={(event) => {
                formData.value = {
                  ...formData.value,
                  timeline: (event.target as HTMLSelectElement).value,
                }
              }}
            >
              <option value="">Select Timeline</option>
              <option value="immediately">Immediately</option>
              <option value="1-3-months">1-3 Months</option>
              <option value="3-6-months">3-6 Months</option>
              <option value="6-12-months">6-12 Months</option>
              <option value="just-looking">Just Looking</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            placeholder="Tell us about your real estate needs, preferred neighborhoods, or any questions you have..."
            value={formData.value.message}
            onInput$={(event) => {
              formData.value = {
                ...formData.value,
                message: (event.target as HTMLTextAreaElement).value,
              }
            }}
          />
        </div>

        <button type="submit" class="submit-btn" disabled={isSubmitting.value}>
          {isSubmitting.value ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus.value === 'success' && (
          <div class="status-message status-success">
            Thank you! Your message has been sent successfully. We'll get back to you soon!
          </div>
        )}

        {submitStatus.value === 'error' && (
          <div class="status-message status-error">
            Sorry, there was an error sending your message. Please try again or call us directly.
          </div>
        )}
      </form>
    </div>
  )
})
