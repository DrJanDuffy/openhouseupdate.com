import { component$, useSignal, $ } from '@builder.io/qwik';

interface FirstTimeBuyerGuideProps {
  variant?: 'card' | 'banner' | 'inline';
  className?: string;
}

export default component$<FirstTimeBuyerGuideProps>(({ 
  variant = 'card',
  className = ''
}) => {
  const isExpanded = useSignal(false);
  const email = useSignal('');
  const phone = useSignal('');
  const isSubmitting = useSignal(false);
  const isDownloaded = useSignal(false);

  const guideFeatures = [
    'Complete step-by-step home buying process',
    'Las Vegas market insights and trends',
    'First-time buyer programs and incentives',
    'Mortgage pre-approval checklist',
    'Neighborhood comparison guide',
    'Negotiation strategies and tips',
    'Closing cost breakdown',
    'Moving checklist and timeline'
  ];

  const toggleExpanded = $(() => {
    isExpanded.value = !isExpanded.value;
    
    // Track guide interaction
    if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackWidgetInteraction(
        'first_time_buyer_guide',
        isExpanded.value ? 'guide_expanded' : 'guide_collapsed',
        { depth: 'moderate', value: 2 }
      );
    }
  });

  const handleDownload = $(async () => {
    isSubmitting.value = true;

    // Track download attempt
    if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackFormSubmission('first_time_buyer_guide_download', true, {
        email: email.value,
        phone: phone.value,
        source: 'first_time_buyer_guide_widget'
      });
    }

    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create download link
    const link = document.createElement('a');
    link.href = '/downloads/first-time-buyer-guide-las-vegas.pdf';
    link.download = 'first-time-buyer-guide-las-vegas.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    isDownloaded.value = true;
    isSubmitting.value = false;
  });

  const getVariantStyles = () => {
    switch (variant) {
      case 'banner':
        return 'bg-gradient-to-r from-green-600 to-green-800 text-white p-6 rounded-lg shadow-lg';
      case 'inline':
        return 'bg-gray-50 border border-gray-200 p-4 rounded-lg';
      default: // card
        return 'bg-white border-2 border-green-500 p-6 rounded-lg shadow-lg';
    }
  };

  if (isDownloaded.value) {
    return (
      <div class={`${getVariantStyles()} ${className}`}>
        <div class="text-center">
          <div class="text-green-600 text-4xl mb-4">📚</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Guide Downloaded!</h3>
          <p class="text-gray-600 mb-4">
            Your First-Time Buyer Guide has been downloaded. Check your downloads folder.
          </p>
          <div class="bg-green-50 p-4 rounded-lg">
            <p class="text-sm text-green-800">
              <strong>What's Next:</strong> Dr. Janet Duffy will contact you within 24 hours to discuss your home buying goals and answer any questions about the process.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class={`${getVariantStyles()} ${className}`}>
      <style>{`
        .guide-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
      
      {!isExpanded.value ? (
        <div class="text-center">
          <div class="guide-pulse mb-4">
            <div class="text-4xl mb-2">🏡</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Free First-Time Buyer Guide
            </h3>
            <p class="text-gray-600 mb-4">
              Everything you need to know about buying your first home in Las Vegas. 
              Get expert insights, checklists, and insider tips from Dr. Janet Duffy.
            </p>
            <div class="bg-gray-50 p-4 rounded-lg mb-4 text-left">
              <h4 class="font-semibold text-gray-900 mb-2">What's Included:</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>✓ Complete home buying process</li>
                <li>✓ Las Vegas market insights</li>
                <li>✓ First-time buyer programs</li>
                <li>✓ Mortgage pre-approval checklist</li>
                <li>✓ And much more...</li>
              </ul>
            </div>
            <button
              onClick$={toggleExpanded}
              class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 w-full"
            >
              Download My Free Guide →
            </button>
            <p class="text-xs text-gray-500 mt-2">
              ✓ 25-page comprehensive guide ✓ No obligation ✓ Instant download
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-gray-900">First-Time Buyer Guide</h3>
            <button
              onClick$={toggleExpanded}
              class="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
          
          <div class="mb-6">
            <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h4 class="font-semibold text-green-800 mb-2">Complete Guide Includes:</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                {guideFeatures.map((feature, index) => (
                  <div key={index} class="flex items-center text-sm text-green-700">
                    <span class="text-green-500 mr-2">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 class="font-semibold text-blue-800 mb-2">Why This Guide?</h4>
              <ul class="text-sm text-blue-700 space-y-1">
                <li>• Written by Dr. Janet Duffy with 15+ years of Las Vegas real estate experience</li>
                <li>• Updated with current market conditions and programs</li>
                <li>• Includes exclusive first-time buyer incentives and programs</li>
                <li>• Real examples and case studies from successful buyers</li>
              </ul>
            </div>
          </div>

          <form onSubmit$={handleDownload} class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="buyer-email" class="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="buyer-email"
                  bind:value={email}
                  placeholder="your@email.com"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label for="buyer-phone" class="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="buyer-phone"
                  bind:value={phone}
                  placeholder="(702) 555-0123"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting.value}
              class="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              {isSubmitting.value ? 'Preparing Your Guide...' : 'Download My Free Guide Now!'}
            </button>
            
            <p class="text-xs text-gray-500 text-center">
              By downloading this guide, you agree to receive communications from Dr. Janet Duffy 
              about first-time buyer opportunities and real estate services in Las Vegas.
            </p>
          </form>
        </div>
      )}
    </div>
  );
});
