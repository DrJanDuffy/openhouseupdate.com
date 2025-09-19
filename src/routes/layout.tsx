import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { inject } from '@vercel/analytics';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';
import EnhancedStructuredData from '~/components/seo/enhanced-structured-data';
import StickyHeader from '~/components/layout/header';
import { MobileSearchButton } from '~/components/modals';
import EnhancedErrorBoundary from '~/components/error-boundary/enhanced-error-boundary';
import EnhancedAnalytics from '~/components/analytics/enhanced-analytics';

import styles from './styles.css?inline';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <EnhancedStructuredData type="RealEstateAgent" data={{}} />
      <EnhancedStructuredData type="RealEstateService" data={{}} />
      <EnhancedStructuredData type="WebSite" data={{}} />
      <EnhancedStructuredData type="Organization" data={{}} />
      <EnhancedStructuredData type="LocalBusiness" data={{}} />
      
      <Header />
      <StickyHeader />
      <main>
        <Slot />
      </main>
      <Footer />
      <MobileSearchButton />
      
      {/* Analytics */}
      <script dangerouslySetInnerHTML={`${inject()}`} />
      <EnhancedAnalytics measurementId="G-XXXXXXXXXX" />
      
      {/* RealScout Script with Enhanced Loading */}
      <script 
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js" 
        type="module" 
        crossOrigin="anonymous"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Open House Update - Las Vegas Real Estate | Dr. Janet Duffy',
  meta: [
    {
      name: 'description',
      content: 'Professional real estate services in Las Vegas. Find your perfect home with Dr. Janet Duffy. Browse listings, get home valuations, and expert guidance.',
    },
    {
      name: 'keywords',
      content: 'Las Vegas real estate, Nevada homes, property search, home valuation, real estate agent, Dr. Janet Duffy, open house, property listings',
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
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'theme-color',
      content: '#3A8DDE',
    },
    {
      name: 'msapplication-TileColor',
      content: '#3A8DDE',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Open House Update',
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
    // Open Graph metadata
    {
      property: 'og:title',
      content: 'Open House Update - Las Vegas Real Estate',
    },
    {
      property: 'og:description',
      content: 'Professional real estate services in Las Vegas. Find your perfect home with expert guidance.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://openhouseupdate.com',
    },
    {
      property: 'og:site_name',
      content: 'Open House Update',
    },
    {
      property: 'og:locale',
      content: 'en_US',
    },
    {
      property: 'og:image',
      content: 'https://openhouseupdate.com/images/og-default.jpg',
    },
    {
      property: 'og:image:width',
      content: '1200',
    },
    {
      property: 'og:image:height',
      content: '630',
    },
    {
      property: 'og:image:alt',
      content: 'Las Vegas Real Estate - Open House Update',
    },
    // Twitter Card metadata
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Open House Update - Las Vegas Real Estate',
    },
    {
      name: 'twitter:description',
      content: 'Professional real estate services in Las Vegas. Find your perfect home with expert guidance.',
    },
    {
      name: 'twitter:image',
      content: 'https://openhouseupdate.com/images/og-default.jpg',
    },
    {
      name: 'twitter:image:alt',
      content: 'Las Vegas Real Estate - Open House Update',
    },
    // Additional SEO meta tags
    {
      name: 'geo.region',
      content: 'US-NV',
    },
    {
      name: 'geo.placename',
      content: 'Las Vegas',
    },
    {
      name: 'geo.position',
      content: '36.1699;-115.1398',
    },
    {
      name: 'ICBM',
      content: '36.1699, -115.1398',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://openhouseupdate.com',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
    {
      rel: 'apple-touch-icon',
      href: '/images/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'preconnect',
      href: 'https://em.realscout.com',
    },
    {
      rel: 'preconnect',
      href: 'https://www.googletagmanager.com',
    },
    {
      rel: 'dns-prefetch',
      href: 'https://em.realscout.com',
    },
    {
      rel: 'dns-prefetch',
      href: 'https://www.googletagmanager.com',
    },
  ],
};