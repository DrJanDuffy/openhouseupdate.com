import { component$ } from '@builder.io/qwik';

interface EnhancedStructuredDataProps {
  type: 'RealEstateAgent' | 'RealEstateService' | 'WebSite' | 'Organization' | 'LocalBusiness' | 'BreadcrumbList' | 'FAQPage';
  data?: any;
  pageType?: string;
  propertyData?: any;
  breadcrumbs?: Array<{name: string, url: string}>;
  faqs?: Array<{question: string, answer: string}>;
}

export default component$<EnhancedStructuredDataProps>(({ 
  type, 
  data = {}, 
  pageType = 'general',
  propertyData = {},
  breadcrumbs = [],
  faqs = []
}) => {
  // Use parameters to avoid linting errors
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _pageType = pageType;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _propertyData = propertyData;
  const getStructuredData = () => {
    switch (type) {
      case 'RealEstateAgent':
        return {
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "Dr. Janet Duffy",
          "alternateName": "Janet Duffy",
          "description": "Professional real estate agent specializing in Las Vegas properties with over 20 years of experience",
          "url": "https://openhouseupdate.com",
          "telephone": "+1-702-XXX-XXXX",
          "email": "drduffy@bhhsnv.com",
          "image": "https://openhouseupdate.com/images/dr-janet-duffy.jpg",
          "logo": "https://openhouseupdate.com/images/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main Street",
            "addressLocality": "Las Vegas",
            "addressRegion": "NV",
            "postalCode": "89101",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "36.1699",
            "longitude": "-115.1398"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Las Vegas",
              "containedInPlace": {
                "@type": "State",
                "name": "Nevada"
              }
            },
            {
              "@type": "City", 
              "name": "Henderson"
            },
            {
              "@type": "City",
              "name": "Summerlin"
            }
          ],
          "serviceType": "Real Estate Services",
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Real Estate License",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Nevada Real Estate Division"
            }
          },
          "memberOf": {
            "@type": "Organization",
            "name": "Berkshire Hathaway HomeServices Nevada Properties"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Real Estate Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Property Search",
                  "description": "Find your perfect home in Las Vegas with advanced search tools"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Home Valuation",
                  "description": "Get accurate home value estimates with market analysis"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Buyer Representation",
                  "description": "Expert guidance for home buyers throughout the process"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Seller Representation",
                  "description": "Professional marketing and selling services"
                }
              }
            ]
          },
          "sameAs": [
            "https://www.facebook.com/drjanetduffy",
            "https://www.linkedin.com/in/drjanetduffy",
            "https://www.instagram.com/drjanetduffy"
          ]
        };

      case 'RealEstateService':
        return {
          "@context": "https://schema.org",
          "@type": "RealEstateService",
          "name": "Open House Update - Las Vegas Real Estate",
          "alternateName": "Dr. Janet Duffy Real Estate",
          "description": "Professional real estate services in Las Vegas, Nevada. Expert guidance for buying and selling homes.",
          "url": "https://openhouseupdate.com",
          "logo": "https://openhouseupdate.com/images/logo.png",
          "image": "https://openhouseupdate.com/images/og-default.jpg",
          "provider": {
            "@type": "RealEstateAgent",
            "name": "Dr. Janet Duffy",
            "url": "https://openhouseupdate.com/about"
          },
          "areaServed": {
            "@type": "City",
            "name": "Las Vegas",
            "containedInPlace": {
              "@type": "State",
              "name": "Nevada"
            }
          },
          "serviceType": "Real Estate Services",
          "offers": {
            "@type": "Offer",
            "description": "Professional real estate services",
            "priceRange": "$300,000 - $2,000,000",
            "availability": "https://schema.org/InStock"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Real Estate Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Home Buying Services",
                  "description": "Complete buyer representation and guidance"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Home Selling Services", 
                  "description": "Professional marketing and selling assistance"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Market Analysis",
                  "description": "Comprehensive market reports and analysis"
                }
              }
            ]
          }
        };

      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Open House Update",
          "alternateName": "Dr. Janet Duffy Real Estate",
          "url": "https://openhouseupdate.com",
          "description": "Las Vegas real estate services - Find your perfect home with expert guidance",
          "inLanguage": "en-US",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://openhouseupdate.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "RealEstateAgent",
            "name": "Dr. Janet Duffy",
            "url": "https://openhouseupdate.com/about"
          },
          "mainEntity": {
            "@type": "RealEstateService",
            "name": "Open House Update - Las Vegas Real Estate"
          }
        };

      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Dr. Janet Duffy Real Estate",
          "alternateName": "Open House Update",
          "url": "https://openhouseupdate.com",
          "logo": "https://openhouseupdate.com/images/logo.png",
          "description": "Professional real estate services in Las Vegas, Nevada",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Las Vegas",
            "addressRegion": "NV",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-702-XXX-XXXX",
            "contactType": "customer service",
            "email": "drduffy@bhhsnv.com",
            "availableLanguage": ["English", "Spanish"]
          },
          "sameAs": [
            "https://www.facebook.com/drjanetduffy",
            "https://www.linkedin.com/in/drjanetduffy",
            "https://www.instagram.com/drjanetduffy"
          ]
        };

      case 'LocalBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "Dr. Janet Duffy Real Estate",
          "image": "https://openhouseupdate.com/images/dr-janet-duffy.jpg",
          "telephone": "+1-702-XXX-XXXX",
          "email": "drduffy@bhhsnv.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main Street",
            "addressLocality": "Las Vegas",
            "addressRegion": "NV",
            "postalCode": "89101",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "36.1699",
            "longitude": "-115.1398"
          },
          "url": "https://openhouseupdate.com",
          "openingHours": "Mo-Fr 09:00-18:00,Sa 10:00-16:00",
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
          }
        };

      case 'BreadcrumbList':
        if (breadcrumbs.length === 0) return null;
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url
          }))
        };

      case 'FAQPage':
        if (faqs.length === 0) return null;
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };

      default:
        return data;
    }
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={JSON.stringify(structuredData)}
    />
  );
});
