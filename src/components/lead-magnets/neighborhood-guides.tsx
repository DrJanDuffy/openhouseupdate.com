import { component$, useSignal, $, type QwikSubmitEvent } from '@builder.io/qwik';

interface NeighborhoodGuide {
  id: string;
  name: string;
  description: string;
  image: string;
  downloadUrl: string;
  features: string[];
  priceRange: string;
  schools: string;
  amenities: string[];
}

export default component$(() => {
  const isExpanded = useSignal(false);
  const selectedGuide = useSignal<NeighborhoodGuide | null>(null);
  const email = useSignal('');
  const phone = useSignal('');
  const isSubmitting = useSignal(false);
  const isDownloaded = useSignal(false);

  const neighborhoodGuides: NeighborhoodGuide[] = [
    {
      id: 'summerlin',
      name: 'Summerlin Neighborhood Guide',
      description: 'Complete guide to Las Vegas\' premier master-planned community with luxury homes, top-rated schools, and world-class amenities.',
      image: '/images/neighborhoods/summerlin.jpg',
      downloadUrl: '/downloads/summerlin-guide.pdf',
      features: ['Luxury Homes', 'Top Schools', 'Golf Courses', 'Shopping Centers'],
      priceRange: '$500K - $2M+',
      schools: '9/10 Average Rating',
      amenities: ['Red Rock Casino', 'Downtown Summerlin', 'Red Rock Canyon', 'Golf Courses']
    },
    {
      id: 'henderson',
      name: 'Henderson Living Guide',
      description: 'Everything you need to know about Henderson, Nevada\'s second-largest city with family-friendly neighborhoods and excellent schools.',
      image: '/images/neighborhoods/henderson.jpg',
      downloadUrl: '/downloads/henderson-guide.pdf',
      features: ['Family-Friendly', 'Excellent Schools', 'Parks & Recreation', 'Low Crime'],
      priceRange: '$300K - $800K',
      schools: '8/10 Average Rating',
      amenities: ['Green Valley Ranch', 'Lake Las Vegas', 'Anthem', 'Seven Hills']
    },
    {
      id: 'north-las-vegas',
      name: 'North Las Vegas Community Guide',
      description: 'Discover the fastest-growing area of Las Vegas with new construction, affordable homes, and modern amenities.',
      image: '/images/neighborhoods/north-las-vegas.jpg',
      downloadUrl: '/downloads/north-las-vegas-guide.pdf',
      features: ['New Construction', 'Affordable Prices', 'Growing Community', 'Modern Amenities'],
      priceRange: '$250K - $600K',
      schools: '7/10 Average Rating',
      amenities: ['Aliante Casino', 'Craig Ranch Regional Park', 'Skye Canyon', 'Centennial Hills']
    },
    {
      id: 'spring-valley',
      name: 'Spring Valley Area Guide',
      description: 'Comprehensive guide to Spring Valley\'s diverse neighborhoods, from established communities to new developments.',
      image: '/images/neighborhoods/spring-valley.jpg',
      downloadUrl: '/downloads/spring-valley-guide.pdf',
      features: ['Diverse Communities', 'Established Areas', 'New Developments', 'Great Value'],
      priceRange: '$200K - $700K',
      schools: '7/10 Average Rating',
      amenities: ['Red Rock Casino', 'Spring Valley', 'Rhodes Ranch', 'Mountain\'s Edge']
    },
    {
      id: 'enterprise',
      name: 'Enterprise Neighborhood Guide',
      description: 'Explore Enterprise\'s unique blend of rural charm and urban convenience, perfect for those seeking space and privacy.',
      image: '/images/neighborhoods/enterprise.jpg',
      downloadUrl: '/downloads/enterprise-guide.pdf',
      features: ['Rural Charm', 'Large Lots', 'Privacy', 'Urban Convenience'],
      priceRange: '$400K - $1.2M',
      schools: '8/10 Average Rating',
      amenities: ['Mountain\'s Edge', 'Inspirada', 'Southern Highlands', 'Enterprise']
    }
  ];

  const toggleExpanded = $(() => {
    isExpanded.value = !isExpanded.value;
    
    // Track guide interaction
    if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackWidgetInteraction(
        'neighborhood_guides',
        isExpanded.value ? 'guides_expanded' : 'guides_collapsed',
        { depth: 'moderate', value: 1 }
      );
    }
  });

  const selectGuide = $((guide: NeighborhoodGuide) => {
    selectedGuide.value = guide;
    
    // Track guide selection
    if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackWidgetInteraction(
        'neighborhood_guide_selection',
        'guide_selected',
        { 
          depth: 'high', 
          value: 2,
          neighborhood: guide.name,
          priceRange: guide.priceRange
        }
      );
    }
  });

  const handleDownload = $(async (event: QwikSubmitEvent<HTMLFormElement>) => {
    isSubmitting.value = true;

    // Track download attempt
    if (typeof window !== 'undefined' && window.enhancedRealEstateAnalytics) {
      window.enhancedRealEstateAnalytics.trackFormSubmission('neighborhood_guide_download', true, {
        email: email.value,
        phone: phone.value,
        guide: selectedGuide.value?.name,
        source: 'neighborhood_guides_widget'
      });
    }

    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create download link
    const link = document.createElement('a');
    link.href = selectedGuide.value?.downloadUrl || '#';
    link.download = `${selectedGuide.value?.name.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    isDownloaded.value = true;
    isSubmitting.value = false;
  });

  if (isDownloaded.value) {
    return (
      <div class="bg-green-50 border border-green-200 p-6 rounded-lg">
        <div class="text-center">
          <div class="text-green-600 text-4xl mb-4">📥</div>
          <h3 class="text-xl font-bold text-green-800 mb-2">Download Complete!</h3>
          <p class="text-green-700 mb-4">
            Your {selectedGuide.value?.name} has been downloaded. Check your downloads folder.
          </p>
          <div class="bg-white p-4 rounded-lg border border-green-200">
            <p class="text-sm text-green-800">
              <strong>What's Next:</strong> Dr. Janet Duffy will contact you within 24 hours to discuss your real estate needs and answer any questions about the neighborhood.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
      <style>{`
        .guide-card {
          transition: all 0.3s ease;
        }
        .guide-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        .guide-image {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
      `}</style>
      
      <div class="text-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">
          Free Neighborhood Guides
        </h2>
        <p class="text-gray-600">
          Get detailed insights into Las Vegas' most popular neighborhoods. 
          Download your free guide and discover the perfect area for your next home.
        </p>
      </div>

      {!isExpanded.value ? (
        <div class="text-center">
          <button
            onClick$={toggleExpanded}
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            View All Neighborhood Guides →
          </button>
        </div>
      ) : (
        <div>
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold text-gray-900">Choose Your Guide</h3>
            <button
              onClick$={toggleExpanded}
              class="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {neighborhoodGuides.map((guide) => (
              <div
                key={guide.id}
                onClick$={() => selectGuide(guide)}
                class={`guide-card cursor-pointer border-2 rounded-lg p-4 ${
                  selectedGuide.value?.id === guide.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div class="guide-image h-32 rounded-lg mb-3 flex items-center justify-center text-white text-2xl">
                  🏘️
                </div>
                <h4 class="font-bold text-gray-900 mb-2">{guide.name}</h4>
                <p class="text-sm text-gray-600 mb-3">{guide.description}</p>
                <div class="space-y-1">
                  <p class="text-sm font-medium text-blue-600">{guide.priceRange}</p>
                  <p class="text-xs text-gray-500">{guide.schools}</p>
                </div>
              </div>
            ))}
          </div>

          {selectedGuide.value && (
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 class="text-lg font-bold text-gray-900 mb-4">
                Download {selectedGuide.value.name}
              </h4>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 class="font-semibold text-gray-900 mb-2">Key Features:</h5>
                  <ul class="space-y-1">
                    {selectedGuide.value.features.map((feature, index) => (
                      <li key={index} class="text-sm text-gray-600 flex items-center">
                        <span class="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 class="font-semibold text-gray-900 mb-2">Top Amenities:</h5>
                  <ul class="space-y-1">
                    {selectedGuide.value.amenities.map((amenity, index) => (
                      <li key={index} class="text-sm text-gray-600 flex items-center">
                        <span class="text-blue-500 mr-2">📍</span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <form onSubmit$={handleDownload} class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="guide-email" class="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="guide-email"
                      bind:value={email}
                      placeholder="your@email.com"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label for="guide-phone" class="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="guide-phone"
                      bind:value={phone}
                      placeholder="(702) 555-0123"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting.value}
                  class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {isSubmitting.value ? 'Preparing Download...' : `Download ${selectedGuide.value.name}`}
                </button>
                
                <p class="text-xs text-gray-500 text-center">
                  By downloading this guide, you agree to receive communications from Dr. Janet Duffy about real estate opportunities in this neighborhood.
                </p>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
});
