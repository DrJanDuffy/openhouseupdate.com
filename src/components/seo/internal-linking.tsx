import { component$ } from '@builder.io/qwik';

export interface InternalLinkProps {
  href: string;
  children: any;
  className?: string;
  title?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  rel?: string;
  onClick$?: () => void;
}

export default component$<InternalLinkProps>(({
  href,
  children,
  className = '',
  title,
  target = '_self',
  rel,
  onClick$,
}) => {
  // Determine if it's an internal or external link
  const isInternal = href.startsWith('/') || href.includes('openhouseupdate.com');
  
  // Set appropriate rel attributes for external links
  const linkRel = isInternal 
    ? rel 
    : `${rel ? rel + ' ' : ''}noopener noreferrer`;

  return (
    <a
      href={href}
      className={`internal-link ${className}`}
      title={title}
      target={target}
      rel={linkRel}
      onClick$={onClick$}
    >
      {children}
    </a>
  );
});

// Utility component for contextual internal links
export const ContextualLink = component$<{
  href: string;
  children: any;
  context: 'navigation' | 'content' | 'cta' | 'footer';
  className?: string;
}>(({ href, children, context, className = '' }) => {
  const getContextualClasses = (context: string) => {
    switch (context) {
      case 'navigation':
        return 'text-blue-600 hover:text-blue-800 font-medium transition-colors';
      case 'content':
        return 'text-blue-600 hover:text-blue-800 underline transition-colors';
      case 'cta':
        return 'bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block';
      case 'footer':
        return 'text-gray-300 hover:text-white transition-colors';
      default:
        return '';
    }
  };

  return (
    <InternalLink
      href={href}
      className={`${getContextualClasses(context)} ${className}`}
    >
      {children}
    </InternalLink>
  );
});

// Utility function for generating related content links
export const generateRelatedLinks = (currentPage: string) => {
  const relatedPages = {
    '/': [
      { href: '/search', text: 'Search Properties', context: 'cta' as const },
      { href: '/home-valuation', text: 'Get Home Valuation', context: 'cta' as const },
      { href: '/about', text: 'About Dr. Janet Duffy', context: 'content' as const },
    ],
    '/search': [
      { href: '/map', text: 'Map Search', context: 'content' as const },
      { href: '/this-weekend', text: 'This Weekend\'s Open Houses', context: 'content' as const },
      { href: '/neighborhoods', text: 'Browse Neighborhoods', context: 'content' as const },
    ],
    '/home-valuation': [
      { href: '/market-analysis', text: 'Market Analysis', context: 'content' as const },
      { href: '/seller-services', text: 'Seller Services', context: 'content' as const },
      { href: '/contact', text: 'Contact for Valuation', context: 'cta' as const },
    ],
    '/buyer-services': [
      { href: '/search', text: 'Start Property Search', context: 'cta' as const },
      { href: '/neighborhoods', text: 'Explore Neighborhoods', context: 'content' as const },
      { href: '/contact', text: 'Get Buyer Consultation', context: 'cta' as const },
    ],
    '/seller-services': [
      { href: '/home-valuation', text: 'Get Home Valuation', context: 'cta' as const },
      { href: '/market-analysis', text: 'Market Analysis', context: 'content' as const },
      { href: '/contact', text: 'List Your Home', context: 'cta' as const },
    ],
  };

  return relatedPages[currentPage] || [];
};
