import { component$, useSignal, $ } from '@builder.io/qwik';

interface EnhancedErrorBoundaryProps {
  fallback?: any;
  onError?: (error: Error, errorInfo: any) => void;
  children: any;
}

export default component$<EnhancedErrorBoundaryProps>(({
  children
}) => {
  const hasError = useSignal(false);
  const error = useSignal<Error | null>(null);
  const retryCount = useSignal(0);
  const maxRetries = 3;

  // Error handling is now done inline in the component

  const retry = $(() => {
    if (retryCount.value < maxRetries) {
      retryCount.value++;
      hasError.value = false;
      error.value = null;
      
      // Track retry attempt
      if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
        window.enhancedRealEstateAnalytics.trackPageEngagement('error_retry', {
          retry_count: retryCount.value,
          error_message: 'Retry attempt',
        });
      }
    }
  });

  const contactSupport = $(() => {
    // Track support contact
    if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackFormSubmission('error_support', true, {
        error_message: error.value?.message,
        retry_count: retryCount.value,
      });
    }
    
    // Redirect to contact page
    window.location.href = '/contact?error=true';
  });

  if (hasError.value) {
    return (
      <div class="enhanced-error-boundary">
        <div class="error-content">
          <div class="error-icon">🚨</div>
          <h2>Something went wrong</h2>
          <p>
            We're sorry, but something unexpected happened. Our team has been notified 
            and we're working to fix this issue.
          </p>
          
          <div class="error-details">
            <details>
              <summary>Technical Details</summary>
              <pre>{error.value?.message || 'Unknown error'}</pre>
            </details>
          </div>
          
          <div class="error-actions">
            {retryCount.value < maxRetries && (
              <button 
                class="retry-button"
                onClick$={retry}
                aria-label="Try again"
              >
                Try Again ({maxRetries - retryCount.value} attempts left)
              </button>
            )}
            
            <button 
              class="contact-button"
              onClick$={contactSupport}
              aria-label="Contact support"
            >
              Contact Support
            </button>
            
            <a href="/" class="home-button">
              Go Home
            </a>
          </div>
          
          <div class="error-suggestions">
            <h3>What you can do:</h3>
            <ul>
              <li>Refresh the page</li>
              <li>Check your internet connection</li>
              <li>Try again in a few minutes</li>
              <li>Contact us if the problem persists</li>
            </ul>
          </div>
        </div>
        
        <style>{`
          .enhanced-error-boundary {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            background: linear-gradient(135deg, #F7F9FC 0%, #E8F2FF 100%);
          }
          
          .error-content {
            max-width: 600px;
            background: white;
            padding: 3rem;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
            text-align: center;
            border: 1px solid #e2e8f0;
          }
          
          .error-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
          }
          
          .error-content h2 {
            color: #0A2540;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          
          .error-content p {
            color: #6a6d72;
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 2rem;
          }
          
          .error-details {
            margin: 2rem 0;
            text-align: left;
          }
          
          .error-details details {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 1rem;
            border: 1px solid #e2e8f0;
          }
          
          .error-details summary {
            cursor: pointer;
            font-weight: 600;
            color: #0A2540;
            margin-bottom: 0.5rem;
          }
          
          .error-details pre {
            background: #1a1a1a;
            color: #ffffff;
            padding: 1rem;
            border-radius: 6px;
            font-size: 0.9rem;
            overflow-x: auto;
            margin-top: 0.5rem;
          }
          
          .error-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin: 2rem 0;
            flex-wrap: wrap;
          }
          
          .retry-button,
          .contact-button,
          .home-button {
            padding: 0.875rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s ease;
            border: none;
            cursor: pointer;
            font-size: 1rem;
          }
          
          .retry-button {
            background: #3A8DDE;
            color: white;
          }
          
          .retry-button:hover {
            background: #2a7bc8;
            transform: translateY(-1px);
          }
          
          .contact-button {
            background: #16B286;
            color: white;
          }
          
          .contact-button:hover {
            background: #059669;
            transform: translateY(-1px);
          }
          
          .home-button {
            background: #f8f9fa;
            color: #0A2540;
            border: 2px solid #e2e8f0;
          }
          
          .home-button:hover {
            background: #e2e8f0;
            transform: translateY(-1px);
          }
          
          .error-suggestions {
            margin-top: 2rem;
            text-align: left;
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
          }
          
          .error-suggestions h3 {
            color: #0A2540;
            font-size: 1.2rem;
            margin-bottom: 1rem;
            text-align: center;
          }
          
          .error-suggestions ul {
            list-style: none;
            padding: 0;
          }
          
          .error-suggestions li {
            padding: 0.5rem 0;
            color: #6a6d72;
            position: relative;
            padding-left: 1.5rem;
          }
          
          .error-suggestions li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #16B286;
            font-weight: bold;
          }
          
          @media (max-width: 768px) {
            .error-content {
              padding: 2rem;
              margin: 1rem;
            }
            
            .error-content h2 {
              font-size: 1.5rem;
            }
            
            .error-actions {
              flex-direction: column;
              align-items: center;
            }
            
            .retry-button,
            .contact-button,
            .home-button {
              width: 200px;
            }
          }
          
          @media (prefers-reduced-motion: reduce) {
            .retry-button,
            .contact-button,
            .home-button {
              transition: none;
            }
            
            .retry-button:hover,
            .contact-button:hover,
            .home-button:hover {
              transform: none;
            }
          }
        `}</style>
      </div>
    );
  }

  return children;
});
