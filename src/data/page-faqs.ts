export interface PageFAQ {
  question: string
  answer: string
}

export const pageFAQs: Record<string, PageFAQ[]> = {
  // Homepage FAQs
  homepage: [
    {
      question: 'How do I search for homes in Las Vegas?',
      answer:
        'Use our advanced search tool on the homepage to filter by price, location, bedrooms, and more. You can also browse by neighborhood or price range using our quick links.',
    },
    {
      question: 'What areas does Dr. Janet Duffy serve?',
      answer:
        'Dr. Janet Duffy serves all of Las Vegas Valley including Summerlin, Henderson, North Las Vegas, Spring Valley, Enterprise, and surrounding areas.',
    },
    {
      question: 'How can I get a free home valuation?',
      answer:
        "Contact Dr. Janet Duffy directly at (702) 200-3422 or use our home valuation service to get an accurate estimate of your property's current market value.",
    },
    {
      question: 'What makes Dr. Janet Duffy different from other real estate agents?',
      answer:
        "Dr. Janet Duffy brings over 20 years of experience, deep local market knowledge, and a personalized approach to every transaction. She's licensed in Nevada and specializes in Las Vegas real estate.",
    },
  ],

  // About page FAQs
  about: [
    {
      question: "What is Dr. Janet Duffy's background in real estate?",
      answer:
        "Dr. Janet Duffy has over 20 years of experience in Las Vegas real estate. She's a licensed real estate agent in Nevada and specializes in residential properties throughout the Las Vegas Valley.",
    },
    {
      question: 'What services does Dr. Janet Duffy provide?',
      answer:
        'Dr. Janet Duffy provides comprehensive real estate services including buyer representation, seller representation, home valuations, market analysis, and property search assistance.',
    },
    {
      question: 'Is Dr. Janet Duffy affiliated with a brokerage?',
      answer:
        'Yes, Dr. Janet Duffy is affiliated with Berkshire Hathaway HomeServices Nevada Properties, one of the most respected real estate brokerages in Las Vegas.',
    },
    {
      question: 'What areas does Dr. Janet Duffy specialize in?',
      answer:
        'Dr. Janet Duffy specializes in all Las Vegas Valley neighborhoods including Summerlin, Henderson, North Las Vegas, Spring Valley, Enterprise, and surrounding areas.',
    },
  ],

  // Services page FAQs
  services: [
    {
      question: 'What real estate services do you offer?',
      answer:
        'We offer comprehensive real estate services including buyer representation, seller representation, home valuations, market analysis, property search, and transaction management.',
    },
    {
      question: 'How much do your services cost?',
      answer:
        'Our buyer representation services are typically free to buyers as commissions are paid by the seller. For sellers, we offer competitive commission rates. Contact us for a personalized quote.',
    },
    {
      question: 'Do you work with first-time homebuyers?',
      answer:
        'Absolutely! Dr. Janet Duffy specializes in working with first-time homebuyers and provides guidance through every step of the home buying process, including financing options and market education.',
    },
    {
      question: 'How long does the home buying process take?',
      answer:
        "The home buying process typically takes 30-45 days from offer acceptance to closing, but can vary based on financing, inspections, and other factors. We'll guide you through each step.",
    },
  ],

  // Home valuation FAQs
  'home-valuation': [
    {
      question: 'How accurate are your home valuations?',
      answer:
        "Our home valuations use current market data, comparable sales, and local market trends to provide accurate estimates. While not a formal appraisal, they give you a solid understanding of your home's value.",
    },
    {
      question: "What factors affect my home's value?",
      answer:
        'Key factors include location, size, condition, recent improvements, market trends, comparable sales, and neighborhood amenities. We analyze all these factors in our valuation process.',
    },
    {
      question: 'How often should I get my home valued?',
      answer:
        'We recommend getting a home valuation annually or before making major decisions like selling, refinancing, or home improvements. Market conditions can change quickly in Las Vegas.',
    },
    {
      question: 'Is the home valuation service free?',
      answer:
        "Yes, our home valuation service is completely free with no obligation. We provide detailed market analysis to help you understand your home's current value.",
    },
  ],

  // Buyer services FAQs
  'buyer-services': [
    {
      question: 'What does buyer representation include?',
      answer:
        'Buyer representation includes property search, market analysis, negotiation, inspection coordination, financing guidance, and transaction management from start to closing.',
    },
    {
      question: 'Do I need to pay for buyer representation?',
      answer:
        'No, buyer representation is typically free to buyers. The commission is paid by the seller, so you get professional representation at no cost to you.',
    },
    {
      question: 'How do you help with financing?',
      answer:
        'We work with trusted lenders and can help you understand different loan options, get pre-approved, and navigate the financing process to ensure a smooth transaction.',
    },
    {
      question: 'What should I look for when viewing homes?',
      answer:
        "We'll guide you through what to look for including structural issues, neighborhood factors, resale potential, and how properties compare to market values.",
    },
  ],

  // Seller services FAQs
  'seller-services': [
    {
      question: 'How do you determine the right listing price?',
      answer:
        "We analyze comparable sales, current market conditions, your home's unique features, and recent trends to recommend the optimal listing price for maximum return.",
    },
    {
      question: 'What marketing strategies do you use?',
      answer:
        'We use professional photography, virtual tours, MLS listing, social media marketing, open houses, and targeted advertising to reach qualified buyers.',
    },
    {
      question: 'How long does it take to sell a home?',
      answer:
        "In Las Vegas, homes typically sell within 30-60 days, but this varies based on price, location, condition, and market conditions. We'll provide a realistic timeline.",
    },
    {
      question: 'What should I do to prepare my home for sale?',
      answer:
        "We'll provide a comprehensive home preparation checklist including staging, repairs, cleaning, and improvements that maximize your home's appeal and value.",
    },
  ],

  // Contact page FAQs
  contact: [
    {
      question: "What's the best way to contact Dr. Janet Duffy?",
      answer:
        'Call (702) 200-3422 for immediate assistance, or use our contact form for non-urgent inquiries. We typically respond within 2 hours during business hours.',
    },
    {
      question: 'What are your business hours?',
      answer:
        "We're available Monday-Friday 9 AM-6 PM and Saturday 10 AM-4 PM. For urgent matters, we can be reached outside these hours.",
    },
    {
      question: 'Do you offer virtual consultations?',
      answer:
        'Yes, we offer virtual consultations via video call for initial meetings, property tours, and consultations. This is especially convenient for out-of-state buyers.',
    },
    {
      question: 'Is there a consultation fee?',
      answer:
        "Initial consultations are always free with no obligation. We're happy to discuss your real estate needs and answer any questions you may have.",
    },
  ],

  // Neighborhood-specific FAQs
  summerlin: [
    {
      question: 'What makes Summerlin a desirable neighborhood?',
      answer:
        'Summerlin offers master-planned communities, excellent schools, shopping centers, parks, and proximity to the Las Vegas Strip while maintaining a suburban feel.',
    },
    {
      question: "What's the average home price in Summerlin?",
      answer:
        'Home prices in Summerlin vary by community, but typically range from $400,000 to over $2 million, with luxury properties in The Ridges and The Summit.',
    },
    {
      question: 'Are there good schools in Summerlin?',
      answer:
        'Yes, Summerlin has excellent public and private schools, including top-rated elementary, middle, and high schools that are highly sought after by families.',
    },
  ],

  henderson: [
    {
      question: 'What are the benefits of living in Henderson?',
      answer:
        'Henderson offers a family-friendly environment, excellent schools, lower crime rates, beautiful parks, and easy access to Las Vegas while maintaining its own identity.',
    },
    {
      question: "What's the commute like from Henderson to Las Vegas?",
      answer:
        'The commute from Henderson to Las Vegas typically takes 20-30 minutes depending on your destination, with good highway access via I-215 and I-515.',
    },
    {
      question: 'Are there new construction homes in Henderson?',
      answer:
        'Yes, Henderson has several active new construction communities offering modern homes with energy-efficient features and contemporary designs.',
    },
  ],
}

export const getPageFAQs = (pageKey: string): PageFAQ[] => {
  return pageFAQs[pageKey] || []
}
