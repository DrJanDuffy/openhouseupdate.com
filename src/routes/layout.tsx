import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { inject } from '@vercel/analytics';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';
import StructuredData from '~/components/seo/structured-data';

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
      <StructuredData type="RealEstateAgent" data={{}} />
      <StructuredData type="RealEstateService" data={{}} />
      <StructuredData type="WebSite" data={{}} />
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
      <script dangerouslySetInnerHTML={`${inject()}`} />
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
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://openhouseupdate.com',
    },
  ],
  scripts: [
    {
      src: 'https://em.realscout.com/widgets/realscout-web-components.umd.js',
      type: 'module',
      crossorigin: 'anonymous',
    },
  ],
};
