export interface PageFAQ {
  question: string
  answer: string
}

export const pageFAQs: Record<string, PageFAQ[]> = {
  // Homepage FAQs
  homepage: [
    {
      question: 'What is an Open House Expert?',
      answer:
        'An Open House Expert is a real estate professional specifically trained in staging, hosting, and converting open house events. Dr. Jan Duffy is a recognized Open House Expert with Nevada License #S.0197614 and over 20 years of experience maximizing buyer engagement and lead generation through strategic open house management.',
    },
    {
      question: 'How do I search for open houses in Las Vegas?',
      answer:
        "Use our advanced search tool on the homepage to filter by price, location, bedrooms, and more. You can also browse by neighborhood or price range using our quick links to find this weekend's open houses.",
    },
    {
      question: 'What areas does Dr. Jan Duffy serve as an Open House Expert?',
      answer:
        'Dr. Jan Duffy serves all of Las Vegas Valley including Summerlin, Henderson, North Las Vegas, Spring Valley, Enterprise, and surrounding areas. She has deep expertise in 15+ Las Vegas neighborhoods.',
    },
    {
      question: 'How can I get a free home valuation?',
      answer:
        "Contact Dr. Jan Duffy directly at (702) 200-3422 or use our home valuation service to get an accurate estimate of your property's current market value.",
    },
    {
      question: 'What makes Dr. Jan Duffy different as an Open House Expert?',
      answer:
        'Dr. Jan Duffy consistently achieves 15-20% higher conversion rates at open houses compared to industry averages, with over 300 successful transactions. She specializes in strategic marketing, lead capture, and buyer conversion techniques.',
    },
    {
      question: 'What services does an Open House Expert provide?',
      answer:
        'Dr. Jan Duffy provides property staging consultation, strategic marketing, lead capture systems, market analysis, neighborhood expertise, and personalized follow-up strategies to maximize open house success.',
    },
  ],

  // About page FAQs
  about: [
    {
      question: "What is Dr. Jan Duffy's background in real estate?",
      answer:
        'Dr. Jan Duffy is an Open House Expert with over 20 years of experience in Las Vegas real estate. She holds Nevada License #S.0197614 and specializes in residential properties throughout the Las Vegas Valley.',
    },
    {
      question: 'What services does Dr. Jan Duffy provide?',
      answer:
        'Dr. Jan Duffy provides comprehensive real estate services including buyer representation, seller representation, home valuations, market analysis, and property search assistance.',
    },
    {
      question: 'Is Dr. Jan Duffy affiliated with a brokerage?',
      answer:
        'Yes, Dr. Jan Duffy is affiliated with Berkshire Hathaway HomeServices Nevada Properties, one of the most respected real estate brokerages in Las Vegas.',
    },
    {
      question: 'What areas does Dr. Jan Duffy specialize in?',
      answer:
        'Dr. Jan Duffy specializes in all Las Vegas Valley neighborhoods including Summerlin, Henderson, North Las Vegas, Spring Valley, Enterprise, and surrounding areas.',
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
        'Absolutely! Dr. Jan Duffy specializes in working with first-time homebuyers and provides guidance through every step of the home buying process, including financing options and market education.',
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
      question: "What's the best way to contact Dr. Jan Duffy?",
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
        'Summerlin offers master-planned communities, excellent schools, shopping centers, parks, and proximity to the Las Vegas Strip while maintaining a suburban feel. Located in zip codes 89134, 89135, 89138, and 89144, Summerlin features master-planned communities with Downtown Summerlin shopping, Red Rock Canyon access, world-class golf courses, and mountain views. Premium communities like The Ridges and The Summit offer luxury living, while established areas provide excellent value. Summerlin consistently ranks as one of the premier communities in Las Vegas Valley, attracting families, professionals, and retirees seeking quality living.',
    },
    {
      question: "What's the average home price in Summerlin?",
      answer:
        'Home prices in Summerlin vary by community, but typically range from $400,000 to over $2 million, with luxury properties in The Ridges and The Summit. In zip codes 89134, 89135, 89138, and 89144, entry-level homes start around $400,000-$600,000, mid-range homes range $600,000-$1,000,000, and luxury properties in The Ridges can exceed $2 million. Factors affecting prices include location within Summerlin, property size and age, views (mountain views command premium), and community amenities. Dr. Jan Duffy provides current pricing insights for Summerlin neighborhoods and can help you find homes within your budget.',
    },
    {
      question: 'Are there good schools in Summerlin?',
      answer:
        'Yes, Summerlin has excellent public and private schools, including top-rated elementary, middle, and high schools that are highly sought after by families. Schools in Summerlin zip codes 89134-89144 consistently rank among the top in Clark County School District, with many rated 8-10/10. The area offers both public and private school options, with strong academic programs, extracurricular activities, and parent involvement. School quality is a major factor driving Summerlin home values and family appeal. Dr. Jan Duffy can provide specific school information for Summerlin neighborhoods and help you understand how schools affect property values.',
    },
  ],

  henderson: [
    {
      question: 'What are the benefits of living in Henderson?',
      answer:
        'Henderson offers a family-friendly environment, excellent schools, lower crime rates, beautiful parks, and easy access to Las Vegas while maintaining its own identity. Located in zip codes 89002, 89011, 89012, 89014, 89015, 89052, and 89074, Henderson provides diverse neighborhoods from Green Valley Ranch (89012, 89014) to Seven Hills (89052, 89074), Lake Las Vegas (89011), and newer communities like Inspirada (89044) and Anthem (89044). Henderson consistently ranks as one of the safest cities in Nevada, with excellent schools, master-planned communities, and easy access to employment centers in Las Vegas.',
    },
    {
      question: "What's the commute like from Henderson to Las Vegas?",
      answer:
        'The commute from Henderson to Las Vegas typically takes 20-30 minutes depending on your destination, with good highway access via I-215 and I-515. From Green Valley (zip codes 89012, 89014) or Seven Hills (89052, 89074), the commute is straightforward with multiple route options. Many Henderson residents work in Las Vegas and appreciate the balance of suburban living with urban employment opportunities. Rush hour traffic can extend commutes, but the infrastructure supports efficient travel between Henderson and Las Vegas job centers.',
    },
    {
      question: 'Are there new construction homes in Henderson?',
      answer:
        'Yes, Henderson has several active new construction communities offering modern homes with energy-efficient features and contemporary designs. Areas like Inspirada (zip code 89044) and newer sections of existing communities provide new construction options. New homes in Henderson typically feature modern layouts, energy-efficient systems important for Las Vegas climate, and contemporary finishes. Dr. Jan Duffy can help you explore new construction opportunities in Henderson neighborhoods from Anthem to Green Valley, connecting you with builders and helping you understand the new construction process.',
    },
  ],

  'north-las-vegas': [
    {
      question: 'What makes North Las Vegas a good place to buy a home?',
      answer:
        'North Las Vegas offers excellent value for homebuyers with more affordable housing options than many Las Vegas areas. Located in zip codes 89030, 89031, 89032, 89081, 89084, and 89086, North Las Vegas features active new construction in communities like Skye Canyon (89084) and Centennial Hills (89031), providing modern homes with energy-efficient features. The area offers more square footage for your money, good highway access to Las Vegas employment centers, and growing amenities including shopping centers and restaurants. As one of the fastest-growing areas in Las Vegas Valley, North Las Vegas presents good appreciation potential and value for first-time buyers and families seeking affordable options.',
    },
    {
      question: 'What are the best neighborhoods in North Las Vegas?',
      answer:
        'Top neighborhoods in North Las Vegas include Skye Canyon (zip code 89084) - a master-planned community with new construction and modern amenities, Centennial Hills (89031) - established area with good schools and shopping, Aliante - community with shopping center, golf course, and parks, and Eldorado - established neighborhood with affordable options. Each area offers different benefits: Skye Canyon and Centennial Hills feature newer construction and modern amenities, while Aliante offers established community facilities. Dr. Jan Duffy can help you explore North Las Vegas neighborhoods and find the area that best matches your budget, lifestyle, and preferences.',
    },
    {
      question: 'Are home prices in North Las Vegas affordable?',
      answer:
        'Yes, North Las Vegas offers some of the most affordable housing in Las Vegas Valley, making it an excellent option for first-time buyers and those seeking value. Entry-level homes start around $250,000-$350,000, while mid-range homes typically range from $350,000-$500,000. Newer communities like Skye Canyon (89084) may have homes up to $600,000+. The average home price in North Las Vegas is approximately $400,000-$450,000 as of November 2025. Compared to Summerlin (89134-89144) or Henderson (89002-89015), North Las Vegas offers significantly more affordable options while still providing access to Las Vegas employment centers and amenities.',
    },
    {
      question: 'How are the schools in North Las Vegas?',
      answer:
        'North Las Vegas is served by the Clark County School District. School ratings vary by area, with newer communities like Skye Canyon (89084) and Centennial Hills (89031) having newer schools with improving ratings. Many families are attracted to North Las Vegas for its affordability and new construction options, with schools continuing to develop as the area grows. While school ratings may not be as high as premium areas like Summerlin or Henderson\'s Green Valley, the area offers good value and families often choose North Las Vegas for the combination of affordable housing and developing school systems. Dr. Jan Duffy can provide specific school information for North Las Vegas neighborhoods you\'re considering.',
    },
  ],

  'green-valley': [
    {
      question: 'What is Green Valley known for?',
      answer:
        'Green Valley, located in Henderson zip codes 89012 and 89014, is known for its excellent schools, upscale amenities, and family-friendly atmosphere. It\'s one of Henderson\'s most desirable and established communities, featuring Green Valley Ranch - a major shopping and entertainment destination with premium retailers, restaurants, and events. Green Valley is home to top-rated schools including Coronado High School, which consistently ranks among the best in Clark County. The area offers beautiful parks, trails, and recreational facilities, along with a range of housing from established mid-range homes to luxury properties. Green Valley consistently ranks among the safest areas in Henderson.',
    },
    {
      question: 'What is the average home price in Green Valley?',
      answer:
        'Green Valley offers a range of housing options from established mid-range homes to luxury properties. Entry-level homes start around $400,000-$500,000, while mid-range homes typically range from $500,000-$800,000. Luxury homes and custom estates can exceed $1 million. The average home price in Green Valley is approximately $650,000-$750,000 as of November 2025. Prices vary by specific neighborhood within Green Valley, proximity to Green Valley Ranch, home size and age, and property features. Premium communities like Coronado Country Club may command higher prices. Dr. Jan Duffy provides current pricing insights for Green Valley neighborhoods and can help you find homes within your budget.',
    },
    {
      question: 'Are the schools in Green Valley good?',
      answer:
        'Yes, Green Valley is home to some of Henderson\'s top-rated schools, making it a top choice for families prioritizing education. Coronado High School consistently ranks among the best in Clark County, with many elementary and middle schools in Green Valley also having excellent ratings. Schools in Green Valley benefit from strong parent involvement, quality academic programs, and well-maintained facilities. School quality is a major factor driving Green Valley home values and family appeal. The area\'s reputation for excellent schools makes it highly sought after by families moving to Henderson. Dr. Jan Duffy can provide specific school information for Green Valley neighborhoods and help you understand how schools affect property values.',
    },
    {
      question: 'What is Green Valley Ranch?',
      answer:
        'Green Valley Ranch is a major shopping and entertainment destination in Green Valley, Henderson, featuring premium retailers, restaurants, movie theater, and regular events. It serves as a central hub for Green Valley residents, providing convenient access to shopping and dining without traveling to the Las Vegas Strip. Green Valley Ranch includes a mix of retail stores, restaurants ranging from casual to fine dining, entertainment options, and community events. Many Green Valley residents appreciate having this premium shopping and entertainment destination nearby. The proximity to Green Valley Ranch can affect property values and desirability in surrounding neighborhoods. Dr. Jan Duffy can help you find homes in Green Valley with convenient access to Green Valley Ranch amenities.',
    },
  ],

  // This Weekend page FAQs
  'this-weekend': [
    {
      question: 'How do I find open houses this weekend in Las Vegas?',
      answer:
        'Use our this weekend page to browse open houses scheduled for Saturday and Sunday across Las Vegas Valley. You can filter by neighborhood including Summerlin (zip codes 89134-89144), Henderson (89002-89015), North Las Vegas (89030-89086), Spring Valley (89103-89147), or search by price range, bedrooms, and other criteria. Our RealScout search tool provides real-time listings of weekend open houses throughout Las Vegas Valley zip codes 89103-89148, 89002-89074, and 89030-89086. Dr. Jan Duffy, as an Open House Expert, hosts numerous weekend open houses and can help you find properties matching your criteria.',
    },
    {
      question: 'What should I bring to an open house this weekend?',
      answer:
        'For weekend open houses in Las Vegas Valley, bring: your ID (some agents may request it for security), questions about the property and neighborhood, a notepad or phone to take notes, a list of features important to you, and your contact information if you\'re interested. While pre-approval isn\'t required to attend, having it can strengthen your position if you want to make an offer. Dr. Jan Duffy welcomes all visitors to her weekend open houses throughout Las Vegas neighborhoods from The Ridges to Skye Canyon, from Lake Las Vegas to Centennial Hills.',
    },
    {
      question: 'Are weekend open houses more crowded than weekday showings?',
      answer:
        'Yes, weekend open houses in Las Vegas Valley typically see higher attendance than weekday showings, especially on Saturdays. This is common throughout Las Vegas neighborhoods in zip codes 89103-89148 (Las Vegas), 89002-89074 (Henderson), and 89030-89086 (North Las Vegas). Weekend open houses are popular because most people have free time, families can view together, and buyers often dedicate weekends to property searching. Popular areas like Summerlin (89134-89144) and Henderson\'s Green Valley (89012, 89014) may see particularly busy weekend open houses. Arriving early can help you view properties before crowds, and scheduling private showings during the week is also an option.',
    },
    {
      question: 'Can I attend multiple open houses this weekend?',
      answer:
        'Absolutely! Attending multiple open houses in one weekend is a great way to compare properties and neighborhoods across Las Vegas Valley. You can visit open houses in different areas like Summerlin (89134-89144), Henderson (89002-89015), North Las Vegas (89030-89086), or Spring Valley (89103-89147) all in the same day. Many serious buyers plan weekend "house hunting" routes to efficiently view multiple properties. Dr. Jan Duffy recommends viewing at least 3-5 properties before making an offer to understand market values and options. Our weekend open house listings make it easy to plan your viewing schedule across Las Vegas Valley neighborhoods.',
    },
    {
      question: 'How are weekend open houses different from private showings?',
      answer:
        'Weekend open houses in Las Vegas Valley are public events where anyone can walk in, while private showings require appointments. Weekend open houses allow you to browse at your own pace, see the property without pressure, meet the hosting agent (like Dr. Jan Duffy), compare with other potential buyers, and get neighborhood information. Private showings offer more personalized attention, ability to ask detailed questions, flexibility in scheduling, and privacy for serious buyers. Many buyers start with weekend open houses to narrow their search, then schedule private showings for properties they\'re seriously considering. Both approaches work well in Las Vegas real estate markets across zip codes 89103-89148, 89002-89074, and 89030-89086.',
    },
  ],

  // Search page FAQs
  search: [
    {
      question: 'How do I search for homes in Las Vegas?',
      answer:
        'Use our advanced search tool to find homes throughout Las Vegas Valley. You can filter by price range, location (including specific zip codes like 89134-89144 for Summerlin, 89002-89015 for Henderson, 89030-89086 for North Las Vegas), number of bedrooms and bathrooms, property type, and more. Our RealScout search integrates with the MLS to show real-time listings across all Las Vegas Valley neighborhoods in zip codes 89103-89148, 89002-89074, and 89030-89086. You can search by specific neighborhoods like The Ridges, Green Valley Ranch, Anthem, or Skye Canyon, or browse broader areas. Dr. Jan Duffy can help you refine your search criteria and find properties matching your needs.',
    },
    {
      question: 'Can I save my search criteria?',
      answer:
        'Yes, you can save your search criteria and set up alerts for new listings matching your preferences. Save searches for specific areas like Summerlin (zip codes 89134-89144), Henderson (89002-89015), or North Las Vegas (89030-89086), and receive notifications when new properties become available. Our search tool allows you to save multiple searches for different neighborhoods, price ranges, or property types. Working with Dr. Jan Duffy also gives you access to MLS alerts and personalized property recommendations based on your saved criteria. She can set up custom searches for neighborhoods from Lake Las Vegas to Centennial Hills, ensuring you don\'t miss opportunities.',
    },
    {
      question: 'What neighborhoods can I search in Las Vegas?',
      answer:
        'You can search across all Las Vegas Valley neighborhoods including: **Summerlin** (zip codes 89134, 89135, 89138, 89144) - premium master-planned community, **Henderson** (89002, 89011, 89012, 89014, 89015, 89052, 89074) - family-friendly with excellent schools, **North Las Vegas** (89030, 89031, 89032, 89081, 89084, 89086) - growing area with new construction, **Spring Valley** (89103, 89113, 89146, 89147) - diverse established neighborhoods, **Enterprise** (89118, 89123, 89139, 89148) - southwest Las Vegas, and many more. Specific communities like The Ridges, Green Valley Ranch, Anthem, Inspirada, Skye Canyon, Centennial Hills, Mountain\'s Edge, The Lakes, and Lake Las Vegas are all searchable. Dr. Jan Duffy serves all Las Vegas Valley areas and can help you explore neighborhoods matching your lifestyle and budget.',
    },
    {
      question: 'How often are search results updated?',
      answer:
        'Our search results are updated in real-time from the MLS (Multiple Listing Service), providing the most current listings available. New properties are added as soon as they\'re listed, and sold properties are removed immediately. This ensures you see accurate, up-to-date information for all Las Vegas Valley neighborhoods in zip codes 89103-89148, 89002-89074, and 89030-89086. However, working directly with Dr. Jan Duffy gives you even earlier access through her MLS connections, sometimes seeing listings before they\'re widely publicized. She can provide immediate notifications for new listings matching your criteria in neighborhoods from Summerlin to Henderson to North Las Vegas.',
    },
    {
      question: 'Can I search for open houses specifically?',
      answer:
        'Yes, our search tool allows you to filter specifically for properties with scheduled open houses. You can search for open houses by date (including this weekend), neighborhood (Summerlin 89134-89144, Henderson 89002-89015, etc.), price range, and other criteria. This makes it easy to plan your weekend property viewing schedule across Las Vegas Valley. Dr. Jan Duffy, as an Open House Expert, hosts numerous open houses throughout Las Vegas neighborhoods and can help you find open houses in areas of interest, whether you\'re looking in premium communities like The Ridges or more affordable areas like North Las Vegas (89030-89086).',
    },
  ],

  // Market Analysis page FAQs
  'market-analysis': [
    {
      question: 'What is included in a market analysis?',
      answer:
        'A comprehensive market analysis includes: current market trends for Las Vegas Valley neighborhoods (zip codes 89103-89148, 89002-89074, 89030-89086), comparable sales (recent sales of similar properties in your area), active listings and competition analysis, price per square foot trends, days on market statistics, inventory levels and supply/demand dynamics, neighborhood-specific data (including Summerlin 89134-89144, Henderson 89002-89015, North Las Vegas 89030-89086), seasonal market patterns, and pricing recommendations. Dr. Jan Duffy provides detailed market analysis tailored to specific neighborhoods from The Ridges to Skye Canyon, helping you understand current conditions and make informed decisions.',
    },
    {
      question: 'How often should I get a market analysis?',
      answer:
        'Market analysis frequency depends on your situation: **For sellers**: Get an analysis when considering selling, before listing, every 30-60 days while your property is on the market if not selling quickly, and before making pricing adjustments. **For buyers**: Before making offers to understand market value, monthly during active searching, and when market conditions change. **For investors**: Quarterly or when considering purchases, to track trends in specific neighborhoods like Summerlin (89134-89144), Henderson (89002-89015), or North Las Vegas (89030-89086). Las Vegas market conditions can change quickly, so regular analysis helps ensure you have current information. Dr. Jan Duffy provides ongoing market analysis to help you stay informed about Las Vegas Valley real estate trends.',
    },
    {
      question: 'What neighborhoods do you analyze?',
      answer:
        'Dr. Jan Duffy provides market analysis for all Las Vegas Valley neighborhoods including: **Summerlin** (zip codes 89134, 89135, 89138, 89144) including The Ridges, **Henderson** (89002, 89011, 89012, 89014, 89015, 89052, 89074) including Green Valley, Seven Hills, Lake Las Vegas, Anthem, and Inspirada, **North Las Vegas** (89030, 89031, 89032, 89081, 89084, 89086) including Skye Canyon and Centennial Hills, **Spring Valley** (89103, 89113, 89146, 89147), **Enterprise** (89118, 89123, 89139, 89148) including Mountain\'s Edge, and other Las Vegas Valley areas. Market analysis is customized to your specific neighborhood and property type, providing relevant comparables and trends for your area. Whether you\'re in premium communities like Macdonald Highlands or newer developments, Dr. Jan Duffy can provide detailed neighborhood-specific market data.',
    },
    {
      question: 'How accurate are market analysis predictions?',
      answer:
        'Market analysis provides data-driven insights based on current and historical market conditions, but doesn\'t predict the future with certainty. Market analysis accuracy depends on: quality and recency of data (we use current MLS data), understanding of local market factors, comparable sales selection and adjustments, neighborhood-specific trends, and market volatility. In Las Vegas Valley markets across zip codes 89103-89148, 89002-89074, and 89030-89086, analysis provides excellent guidance for pricing and timing decisions. However, unexpected events (economic changes, natural factors, etc.) can affect markets. Dr. Jan Duffy provides realistic, data-based analysis while acknowledging market uncertainties, helping you make informed decisions whether you\'re in Summerlin, Henderson, or North Las Vegas.',
    },
    {
      question: 'Is market analysis different from a home appraisal?',
      answer:
        'Yes, market analysis and home appraisals serve different purposes: **Market Analysis (CMA)**: Provides estimated value range, uses recent sales and current listings, helps with pricing decisions, performed by real estate agents, typically free, and less formal. **Home Appraisal**: Provides specific value determination, required for financing, performed by licensed appraisers, more detailed inspection process, and formal documentation. For Las Vegas Valley properties in zip codes 89103-89148, 89002-89074, and 89030-89086, market analysis helps you understand value before listing or making offers. Appraisals are typically required by lenders during purchase financing. Dr. Jan Duffy provides comprehensive market analysis for properties throughout Las Vegas Valley neighborhoods, helping you understand market value before formal appraisals.',
    },
    {
      question: 'How long does a market analysis take?',
      answer:
        'A basic market analysis can be completed within 24-48 hours, while comprehensive analysis may take 2-3 days depending on property complexity and data availability. Dr. Jan Duffy typically provides market analysis within 1-2 business days for properties throughout Las Vegas Valley neighborhoods including Summerlin (89134-89144), Henderson (89002-89015), North Las Vegas (89030-89086), Spring Valley (89103-89147), and other areas. Complex properties, unique neighborhoods, or properties requiring extensive comparable research may take slightly longer. The analysis includes detailed report with data, charts, comparable properties, pricing recommendations, and neighborhood insights. Dr. Jan Duffy prioritizes thorough, accurate analysis to ensure you have the best information for your real estate decisions.',
    },
  ],

  // Open Houses for Sale by Price Range FAQs
  'open-houses-for-sale': [
    {
      question: 'How do I find open houses by price range?',
      answer:
        'Browse open houses filtered by price range to find properties matching your budget. Common price ranges include: Under $400K (great for first-time buyers, often found in North Las Vegas 89030-89086 or Spring Valley 89103-89147), $400K-$600K (mid-range options in many Las Vegas Valley neighborhoods), $600K-$800K (premium options in areas like Henderson 89002-89015), $800K-$1M (luxury options in Summerlin 89134-89144 or Henderson), and Over $1M (ultra-luxury in The Ridges, Lake Las Vegas, or Macdonald Highlands). Each price range page shows available open houses in that range across Las Vegas Valley zip codes 89103-89148, 89002-89074, and 89030-89086. Dr. Jan Duffy can help you understand what to expect in each price range for different neighborhoods.',
    },
    {
      question: 'What neighborhoods have open houses in my price range?',
      answer:
        'Available neighborhoods vary by price range: **Under $400K**: North Las Vegas (89030-89086), Spring Valley (89103-89147), some Henderson areas (89002, 89015), and Enterprise (89118-89123). **$400K-$600K**: More Henderson options (89012, 89014), Spring Valley, some Summerlin areas, and North Las Vegas. **$600K-$800K**: Summerlin (89134-89144), Henderson Green Valley (89012, 89014), The Lakes (89128). **$800K-$1M**: Premium Summerlin, Henderson Seven Hills (89052, 89074), Anthem (89044). **Over $1M**: The Ridges Summerlin, Lake Las Vegas (89011), Macdonald Highlands (89052). Dr. Jan Duffy can show you which neighborhoods have the best open houses in your price range throughout Las Vegas Valley, helping you maximize value for your budget.',
    },
    {
      question: 'Are there open houses every weekend in all price ranges?',
      answer:
        'Open house frequency varies by price range and neighborhood in Las Vegas Valley. Higher-priced properties (over $800K) may have fewer scheduled open houses, often requiring appointments instead. Mid-range properties ($400K-$800K) typically have the most open house activity, especially in popular areas like Summerlin (89134-89144) and Henderson (89002-89015). Entry-level properties (under $400K) in areas like North Las Vegas (89030-89086) or Spring Valley (89103-89147) may have frequent open houses due to high demand. Peak open house times are weekends, especially Saturdays. Dr. Jan Duffy hosts open houses across all price ranges and can help you find properties in your budget with scheduled open houses in neighborhoods from Skye Canyon to The Ridges.',
    },
    {
      question: 'What should I expect at open houses in different price ranges?',
      answer:
        'Open house experiences vary by price range: **Under $400K**: May see more visitors, faster-paced viewing, competitive situations, and properties needing some updates. **$400K-$600K**: Balanced traffic, good variety of options, established neighborhoods, and turn-key or updated properties. **$600K-$800K**: Moderate traffic, higher-quality finishes, premium neighborhoods like Summerlin (89134-89144) or Henderson (89002-89015), and well-maintained properties. **Over $800K**: More exclusive viewings, luxury features and finishes, premium communities like The Ridges or Lake Las Vegas, and personalized attention. Dr. Jan Duffy adapts her open house presentation to each price range, ensuring all visitors receive appropriate attention and information, whether viewing starter homes in North Las Vegas or luxury properties in Summerlin.',
    },
  ],

  // People Also Ask page FAQs
  'people-also-ask': [
    {
      question: 'Do realtors get paid to do open houses?',
      answer:
        'Yes, realtors can get paid for hosting open houses, but the compensation structure varies. Typically, the listing agent hosts open houses to market the property and generate leads throughout Las Vegas Valley neighborhoods including Summerlin (zip codes 89134, 89135, 89138, 89144), Henderson (zip codes 89002, 89011, 89012, 89014, 89015, 89052, 89074), North Las Vegas (zip codes 89030, 89031, 89032, 89081, 89084, 89086), Spring Valley (zip code 89103, 89113, 89146, 89147), and Enterprise (zip codes 89113, 89118, 89123, 89139, 89141, 89148). The listing agent receives a commission when the property sells, which is split with their brokerage and potentially a buyer\'s agent if one is involved. For Open House Experts like Dr. Jan Duffy, hosting open houses serves multiple purposes: marketing the seller\'s property, generating buyer leads, building relationships, and demonstrating expertise. Compensation is typically received upon successful sale completion.',
    },
    {
      question: 'Why would a realtor not do an open house?',
      answer:
        'There are several reasons a realtor might choose not to host an open house: privacy concerns from the seller, security risks with unsupervised visitors, low expected turnout in certain markets or price ranges (such as luxury properties in The Ridges Summerlin, Macdonald Highlands Henderson, or Lake Las Vegas), the property may already have strong buyer interest, concerns about theft or property damage, limited time availability, or when the property has unique access challenges. However, many experienced agents like Dr. Jan Duffy recognize that open houses can be valuable marketing tools when properly managed with security measures, strategic timing, and professional presentation. In Las Vegas Valley neighborhoods from Spring Valley to Anthem, and from Skye Canyon to Inspirada, open houses serve as effective lead generation and marketing strategies. Some agents also host open houses primarily for lead generation rather than expecting the open house itself to sell the property.',
    },
    {
      question: 'What is the 80/20 rule for realtors?',
      answer:
        'The 80/20 rule in real estate, also known as the Pareto Principle, states that 80% of results come from 20% of efforts. For realtors, this typically means: 80% of sales come from 20% of clients, 80% of income comes from 20% of transactions, 80% of referrals come from 20% of past clients, and 80% of productivity comes from 20% of activities. Successful agents like Dr. Jan Duffy apply this by focusing on high-value activities such as building relationships with past clients for referrals, nurturing top buyer/seller leads, focusing on premium properties or neighborhoods (like Summerlin\'s The Ridges, Henderson\'s Seven Hills, or Centennial Hills), and prioritizing marketing strategies with highest ROI. In Las Vegas real estate markets spanning zip codes 89103 (Spring Valley) to 89144 (Summerlin South), and from 89002 (downtown Henderson) to 89081 (North Las Vegas), the key is identifying which 20% of activities generate 80% of results and dedicating more time to those activities.',
    },
    {
      question: 'Are real estate prices dropping in Las Vegas?',
      answer:
        'As of November 2025, Las Vegas real estate prices have shown resilience with slight fluctuations rather than significant drops across Las Vegas Valley neighborhoods. The market has normalized from rapid growth seen in 2021-2022, with steady appreciation continuing in areas like Summerlin (zip codes 89134, 89135, 89138, 89144), Henderson (zip codes 89002, 89011, 89012, 89014, 89015, 89052, 89074), and established communities like Green Valley and The Lakes. Inventory levels have increased, giving buyers more options, and price growth has moderated but remains positive in most areas. Strong population growth, job market expansion, and relatively affordable prices compared to California markets continue to drive demand. Market conditions vary significantly by neighborhood: premium areas like The Ridges in Summerlin and Seven Hills in Henderson tend to hold values well, while newer developments in North Las Vegas (zip codes 89030, 89031, 89081, 89084, 89086) and Southwest Las Vegas areas like Mountain\'s Edge (89178) may see more price sensitivity. Dr. Jan Duffy provides current market analysis and specific insights for neighborhoods across Las Vegas Valley, from Centennial Hills (89031) to Enterprise (89118, 89123, 89148).',
    },
    {
      question: 'What is the hardest month to sell a house?',
      answer:
        'Generally, December and January are considered the most challenging months to sell a house in most markets, including Las Vegas Valley. December sees reduced buyer activity due to holiday distractions, shorter days, and people focusing on holiday spending rather than home buying in neighborhoods from Summerlin to Henderson to North Las Vegas. January experiences a post-holiday lull and buyers recovering from holiday expenses. However, Las Vegas benefits from mild winters and snowbird season (retirees and tourists), which can create buyer activity in areas like Green Valley Ranch, Lake Las Vegas, and communities near Red Rock Canyon. The best months to sell in Las Vegas are typically spring (March-May) with highest buyer activity across zip codes 89103 (Spring Valley), 89134-89144 (Summerlin), 89002-89015 (Henderson), and 89030-89086 (North Las Vegas), summer (June-August) for families moving before school starts, and fall (September-November) with good balance. Even in challenging months, strategic pricing, staging, and marketing can yield successful sales in desirable communities like The Lakes, Anthem, or Inspirada.',
    },
    {
      question: 'Can you go to an open house without pre-approval?',
      answer:
        'Yes, you can absolutely attend an open house without pre-approval throughout Las Vegas Valley, from Summerlin open houses (zip codes 89134, 89135, 89138, 89144) to Henderson properties (89002, 89011, 89012, 89014, 89015, 89052, 89074), North Las Vegas homes (89030, 89031, 89032, 89081, 89084, 89086), Spring Valley listings (89103, 89113, 89146, 89147), and Enterprise area properties (89118, 89123, 89139, 89148). Open houses are public events designed for anyone interested in viewing the property. You don\'t need any documentation or pre-approval to walk through an open house. However, if you\'re seriously interested in making an offer on properties in neighborhoods like The Ridges, Green Valley Ranch, Anthem, or Skye Canyon, having pre-approval provides significant advantages: it shows sellers you\'re a serious, qualified buyer; it gives you a clear budget for your search; it strengthens your offer in competitive situations; and it speeds up the buying process. Many serious buyers attend open houses to explore properties and then get pre-approved when they find something they love in communities like Lake Las Vegas, Macdonald Highlands, or The Lakes. As an Open House Expert, Dr. Jan Duffy welcomes all visitors and can help guide you through the process, whether you\'re just browsing or ready to make an offer.',
    },
    {
      question: 'What decreases property value the most?',
      answer:
        'Several factors can significantly decrease property value in Las Vegas Valley neighborhoods: poor location factors like high crime rates, busy highways (like I-15, US-95, or Boulder Highway), or proximity to undesirable facilities; structural problems including foundation issues (especially important in desert climate), roof damage, or major system failures; significant deferred maintenance and visible disrepair; environmental hazards such as mold, asbestos, or contaminated soil; unfavorable neighborhood conditions like declining schools or increasing crime in specific zip codes; outdated or non-functional features requiring major updates; bad odors from pets, smoking, or other sources; excessive noise from traffic, McCarran International Airport (now Harry Reid International Airport), or neighbors; property condition issues like water damage, pest infestations, or safety hazards; and external factors like new construction blocking mountain views in Summerlin (zip codes 89134-89144) or Henderson (89002-89015). In areas like The Ridges, Lake Las Vegas, or Macdonald Highlands, blocked views can significantly impact luxury property values. Some of these are fixable (maintenance, updates, odors) while others are location-based and harder to change. Dr. Jan Duffy can help identify value-decreasing factors specific to your neighborhood in zip codes 89103-89148 (Las Vegas), 89002-89074 (Henderson), or 89030-89086 (North Las Vegas) and recommend solutions to maximize your property\'s value.',
    },
    {
      question: 'What are common selling mistakes?',
      answer:
        'Common selling mistakes that can cost sellers time and money throughout Las Vegas Valley include: overpricing the property, which can lead to extended days on market and lower final sale price (especially critical in competitive markets like Summerlin zip codes 89134-89144 or Henderson 89002-89015); poor property presentation with clutter, outdated decor, or deferred maintenance; being emotionally attached and making decisions based on feelings rather than market data for your specific neighborhood; limiting showings or being difficult to schedule, reducing buyer exposure in hot markets; ignoring minor repairs that can turn off buyers; poor marketing with bad photos, limited online presence, or inadequate promotion; choosing the wrong agent based on low commission rather than results; being present during showings, which makes buyers uncomfortable; refusing to negotiate reasonably, causing deals to fall through; and not understanding market conditions and timing specific to your area (zip codes 89103-89148 for Las Vegas, 89002-89074 for Henderson, 89030-89086 for North Las Vegas). Market dynamics vary significantly between premium areas like The Ridges in Summerlin, established communities like Green Valley in Henderson, or newer developments in Skye Canyon. Working with an experienced agent like Dr. Jan Duffy helps avoid these pitfalls through professional pricing strategies tailored to your specific neighborhood, staging advice, marketing expertise, and negotiation skills.',
    },
    {
      question: 'What is the 3-3-3 rule in real estate?',
      answer:
        'The 3-3-3 rule in real estate refers to different concepts depending on context: **Three-Phase Home Buying**: 1) Pre-approval and property search (about 3 weeks) - exploring neighborhoods like Summerlin (89134-89144), Henderson (89002-89015), or North Las Vegas (89030-89081), 2) Making offers and inspections (about 3 weeks), 3) Closing process (about 3 weeks) - totaling approximately 9 weeks from start to finish. **Three Property Viewing Rule**: View at least three properties before making an offer to understand market value and options across different Las Vegas Valley neighborhoods. **Three Offer Strategy**: Make your third offer your best one - start conservative, increase strategically. **Three Percent Rule**: Some use this to estimate commission (typically 3% to listing agent, 3% to buyer\'s agent = 6% total). The rule emphasizes taking time, viewing multiple options in different areas (from zip code 89103 in Spring Valley to 89144 in Summerlin South, or from 89002 downtown Henderson to 89086 in North Las Vegas), and making informed decisions rather than rushing. Whether you\'re looking in premium communities like The Ridges or Lake Las Vegas, established neighborhoods like Green Valley or The Lakes, or newer developments like Inspirada or Skye Canyon, Dr. Jan Duffy helps buyers navigate this process efficiently while ensuring they make well-informed decisions.',
    },
    {
      question: 'What is the biggest red flag in a home inspection?',
      answer:
        'The biggest red flags in home inspections throughout Las Vegas Valley typically include: **Foundation problems** - cracks, settling, or structural damage that can be extremely expensive to fix, especially important in desert soil conditions affecting homes in Summerlin (89134-89144), Henderson (89002-89015), North Las Vegas (89030-89086), and all Las Vegas zip codes. **Major electrical issues** - outdated wiring, safety hazards, or insufficient capacity that pose fire risks, particularly in older homes in Spring Valley (89103, 89113, 89146, 89147). **Roof problems** - significant damage, leaks, or end-of-life roof requiring immediate replacement, critical in Las Vegas\'s intense sun and occasional monsoon storms. **Plumbing issues** - leaks, water damage, mold, or outdated systems that can cause extensive damage, especially important with hard water throughout Las Vegas Valley. **Structural damage** - compromised load-bearing walls, sagging floors, or major structural deficiencies. **Environmental hazards** - asbestos, lead paint, mold, or radon that pose health risks. **HVAC system failures** - non-functional or end-of-life systems requiring expensive replacement, critical in Las Vegas where air conditioning is essential for homes in zip codes 89103-89148 (Las Vegas) and 89002-89086 (Henderson and North Las Vegas). While some issues are negotiable or fixable, foundation and major structural problems are the most serious as they can be extremely costly and affect the home\'s safety and value. Dr. Jan Duffy can help interpret inspection reports and negotiate repairs or price adjustments based on findings specific to your Las Vegas Valley neighborhood.',
    },
    {
      question: 'What is the etiquette for an open house?',
      answer:
        'Proper open house etiquette ensures a positive experience for everyone throughout Las Vegas Valley: **For Visitors**: Remove shoes if requested (especially important for luxury homes in The Ridges Summerlin, Lake Las Vegas, or Macdonald Highlands Henderson); respect the property by not touching personal belongings; don\'t open drawers, cabinets, or closets unless invited; ask before taking photos; be respectful of other visitors; sign in if requested (helps agents follow up appropriately); ask questions to the hosting agent about the neighborhood, schools in the area, or local amenities; avoid making negative comments about the property; and don\'t overstay - allow others to view. **For Sellers**: Remove or secure valuables and personal items; ensure the home is clean and well-presented; provide space by not being present during open house; make pets unavailable or clearly secured; and remove family photos or sensitive documents. **For Agents**: Be welcoming and approachable; provide property information including neighborhood details (whether in Summerlin zip codes 89134-89144, Henderson 89002-89015, or North Las Vegas 89030-89086); ensure security and supervise visitors; follow up appropriately with serious buyers; and respect seller privacy. As an Open House Expert, Dr. Jan Duffy ensures all visitors have a professional, comfortable experience while protecting seller interests in neighborhoods from Green Valley Ranch to Skye Canyon, from Anthem to Inspirada.',
    },
    {
      question: 'How much commission do you get on a $300,000 house?',
      answer:
        'Commission on a $300,000 house typically works as follows: The total commission is usually 5-6% of the sale price, which equals $15,000 to $18,000 on a $300,000 sale. This commission is typically split between the listing brokerage and buyer\'s brokerage (usually 50/50, so $7,500-$9,000 each). Each brokerage then splits their portion with their agent - typically 60-70% to the agent and 30-40% to the brokerage. So an agent might receive 60% of their brokerage\'s share, which would be $4,500-$5,400 for a $300,000 sale. **Important notes**: Commission percentages vary by market, brokerage, and negotiation; some agents charge flat fees or lower percentages; commission is only paid upon successful closing; and total commission is typically paid by the seller, not the buyer. The actual amount depends on the specific commission structure, market rates, and individual agent agreements. Dr. Jan Duffy provides transparent information about commission structures during initial consultations.',
    },
    {
      question: 'What scares a real estate agent the most?',
      answer:
        'Common concerns for real estate agents include: **Deals falling through** - especially near closing, causing lost time and income; **Legal issues** - disclosure mistakes, contract errors, or professional liability; **Market changes** - sudden shifts affecting pricing and closings; **Unrealistic clients** - sellers who won\'t price correctly or buyers who can\'t qualify; **Property issues discovered late** - major inspection problems or title issues; **Competition** - losing listings or buyers to other agents; **Technology failures** - system issues during critical moments; **Client dishonesty** - hidden financial problems or misrepresented information; **Safety concerns** - especially when showing properties alone; and **Reputation damage** - negative reviews or client dissatisfaction. Experienced agents like Dr. Jan Duffy mitigate these concerns through thorough preparation, professional networks, strong contracts, clear communication, and comprehensive market knowledge. Good agents also carry professional liability insurance and stay current with legal requirements.',
    },
    {
      question: 'Is it better to buy a house now or wait?',
      answer:
        'The decision to buy now or wait depends on personal circumstances, financial situation, and market conditions specific to Las Vegas Valley neighborhoods. Arguments for buying now include locking in interest rates for predictability, more inventory providing choices across zip codes 89103-89148 (Las Vegas), 89002-89074 (Henderson), and 89030-89086 (North Las Vegas), potential negotiation power, avoiding rent increases, and building equity. Arguments for waiting include potential interest rate decreases, more time to build savings, clearer market direction, and better preparation. Las Vegas-specific factors include strong population growth, relative affordability compared to California, diverse job growth in tech, healthcare, and hospitality sectors, and limited land availability in desirable areas like Summerlin (89134-89144), Henderson\'s Green Valley (89002, 89012, 89014), or established communities like The Lakes. Market conditions vary significantly by neighborhood - premium areas like The Ridges in Summerlin, Seven Hills in Henderson, or Lake Las Vegas may maintain values differently than newer developments in Skye Canyon (89084), Centennial Hills (89031), or Mountain\'s Edge (89178). The best time to buy is when you\'re financially ready and have found the right property in the right neighborhood. Dr. Jan Duffy can help evaluate your situation and make an informed decision based on current market conditions for specific areas like Spring Valley (89103), Anthem (89044), Inspirada (89044), or other Las Vegas Valley communities.',
    },
    {
      question: 'What is the 3 3 3 rule in sales?',
      answer:
        'The 3-3-3 rule in sales, particularly for real estate, emphasizes relationship-building and follow-up: **First 3 hours** - Immediate response and follow-up after initial contact or showing (call, email, or text within 3 hours of meeting) at open houses in Las Vegas Valley neighborhoods from Summerlin (zip codes 89134-89144) to Henderson (89002-89015) to Spring Valley (89103-89147). **First 3 days** - Send additional information, answer questions, and maintain engagement (provide market data, property details, or neighborhood info specific to areas like The Ridges, Green Valley Ranch, Anthem, or Skye Canyon). **First 3 weeks** - Continue nurturing the relationship with valuable content and check-ins (send market updates, new listings in zip codes 89103-89148, 89002-89074, 89030-89086, or helpful real estate tips). This rule helps agents stay top-of-mind, demonstrate responsiveness, and build trust with potential clients. It\'s about consistent, valuable communication rather than pushy sales tactics. For Open House Experts like Dr. Jan Duffy, this means following up with open house visitors across Las Vegas Valley communities from Lake Las Vegas to Macdonald Highlands, from Inspirada to Centennial Hills, providing helpful market insights specific to their neighborhood interests, and staying connected without being intrusive. The goal is building relationships that lead to successful transactions when clients are ready.',
    },
    {
      question: 'What part of Vegas to stay away from?',
      answer:
        'While Las Vegas overall is generally safe, some areas have higher crime rates and may be less desirable for residents. Areas that are often cited as having higher crime rates include parts of downtown Las Vegas (especially the east side, zip codes 89101, 89104), some neighborhoods in North Las Vegas (especially older areas in zip codes 89030, 89031), and certain areas along Boulder Highway. However, it\'s important to note that crime can vary significantly even within the same zip code, and many factors influence neighborhood safety. More important than avoiding specific areas is: researching specific neighborhoods you\'re considering (whether in zip codes 89103-89148 for Las Vegas, 89002-89074 for Henderson, or 89030-89086 for North Las Vegas), visiting areas at different times of day, checking crime statistics through official sources, working with a knowledgeable local agent like Dr. Jan Duffy who understands neighborhood dynamics across Las Vegas Valley from Summerlin to Henderson to Spring Valley, considering factors like proximity to schools, shopping (Downtown Summerlin, Green Valley Ranch, Aliante), and employment centers, and understanding that even "safe" areas can have isolated incidents. Many neighborhoods are undergoing revitalization, and what was once considered less desirable may now be improving. Dr. Jan Duffy can provide insights about specific neighborhoods from The Lakes to Skye Canyon, from Anthem to Inspirada, and help you find areas that match your lifestyle and safety priorities.',
    },
    {
      question: 'What salary do you need to live comfortably in Las Vegas?',
      answer:
        'The salary needed to live comfortably in Las Vegas depends on your lifestyle, family size, and financial goals, and varies significantly by neighborhood. As a general guideline: **Single person**: $40,000-$50,000 annually for basic comfort, $50,000-$70,000 for comfortable living. **Couple without children**: $60,000-$80,000 for comfortable living. **Family with children**: $80,000-$100,000+ depending on number of children and desired lifestyle. **Key cost factors**: Housing (rent or mortgage) varies by area - premium neighborhoods like Summerlin (zip codes 89134-89144) or Henderson\'s Green Valley (89002, 89012, 89014) cost more than areas like North Las Vegas (89030-89086) or Spring Valley (89103, 89113, 89146, 89147), utilities (especially air conditioning in summer), no state income tax (saves money compared to many states), relatively affordable food and entertainment costs, lower property taxes than many areas, and transportation costs. A comfortable budget typically allows for: housing (rent/mortgage): 30% of income, savings and investments: 20% of income, food, utilities, and essentials: 25% of income, transportation: 10% of income, entertainment and discretionary: 15% of income. Las Vegas offers good value compared to many major metropolitan areas, with lower housing costs than California but higher than some Midwestern cities. Home prices vary significantly: luxury communities like The Ridges in Summerlin or Lake Las Vegas require higher incomes, while areas like Skye Canyon (89084), Centennial Hills (89031), or Mountain\'s Edge (89178) offer more affordable options. Dr. Jan Duffy can help you find homes that fit your budget and provide guidance on neighborhoods throughout Las Vegas Valley (zip codes 89103-89148, 89002-89074, 89030-89086) that offer the best value for your lifestyle.',
    },
    {
      question: 'Are Las Vegas home prices dropping?',
      answer:
        'As of November 2025, Las Vegas home prices have shown resilience with some normalization from peak growth but not significant drops across Las Vegas Valley neighborhoods. Market trends indicate: prices have stabilized after rapid appreciation in 2021-2022, some price adjustments in certain segments and neighborhoods, increased inventory giving buyers more options, slower price growth rather than declines in most areas, and strong fundamentals supporting long-term value. Factors supporting prices include: continued population growth, diverse job market expansion, relative affordability compared to California, low property taxes, limited land availability in desirable areas, and strong tourism and convention economy. However, market conditions vary significantly by: price range (entry-level vs. luxury), specific neighborhoods - premium areas like Summerlin (zip codes 89134-89144) and Henderson\'s Green Valley/Seven Hills (89002-89015) typically more stable than newer developments, property type (single-family vs. condos), and market timing and seasonality. Premium communities like The Ridges in Summerlin, Lake Las Vegas, or Macdonald Highlands in Henderson tend to hold values well, while newer developments in Skye Canyon (89084), Centennial Hills (89031), or Mountain\'s Edge (89178) may see more price sensitivity. While some areas may see price adjustments, the overall market across zip codes 89103-89148 (Las Vegas), 89002-89074 (Henderson), and 89030-89086 (North Las Vegas) remains relatively stable. Dr. Jan Duffy provides current market analysis and can help you understand pricing trends for specific neighborhoods and property types you\'re considering.',
    },
    {
      question: 'Can I get alerts for new open houses on Zillow?',
      answer:
        'Yes, you can set up alerts for open houses on Zillow and similar platforms. Here\'s how: **Zillow Alerts**: Use the "Save Search" feature to get email notifications when new listings matching your criteria become available, filter by "Open House" dates to find properties with scheduled open houses, enable push notifications in the Zillow app for instant alerts, and set up saved searches with your preferred price range, location (including specific zip codes like 89134-89144 for Summerlin, 89002-89015 for Henderson, 89030-89086 for North Las Vegas), and features. **Other platforms**: Realtor.com, Redfin, and Trulia also offer similar alert features for open houses and new listings. **Limitations**: Third-party sites may have delays in listing updates, MLS data is most current and comprehensive, and working directly with an agent provides earliest access to listings and open house schedules. **Working with Dr. Jan Duffy**: As an Open House Expert, Dr. Duffy can provide: immediate notifications about new listings and open houses matching your criteria in neighborhoods from Summerlin to Henderson to Spring Valley, access to the MLS with most current data, personalized recommendations based on your preferences (whether you\'re looking in The Ridges, Green Valley Ranch, Anthem, or Skye Canyon), advance notice of upcoming open houses, and insider knowledge about properties before they\'re widely advertised. While online alerts are helpful, working with a local expert like Dr. Jan Duffy ensures you don\'t miss opportunities in Las Vegas Valley neighborhoods (zip codes 89103-89148, 89002-89074, 89030-89086) and get the most current market information.',
    },
    {
      question: 'How much are property taxes in Las Vegas?',
      answer:
        'Property taxes in Las Vegas are among the lowest in the nation, making Nevada an attractive state for homeowners. **Tax rates**: Nevada has a cap of 3% annual increase on assessed value, and the effective tax rate in Las Vegas Valley typically ranges from 0.6% to 1.2% of assessed value, depending on location and property type. **Assessed value**: Properties are assessed at 35% of their full cash value, then taxed at the local rate. **Example**: On a $400,000 home, the assessed value would be $140,000 (35% of $400,000). With a 1% tax rate, annual property taxes would be approximately $1,400 - significantly lower than states like California, New York, or Texas. **Benefits**: No state income tax and relatively low property taxes make Las Vegas very tax-friendly for homeowners. Property tax rates are generally consistent across Las Vegas Valley neighborhoods in zip codes 89103-89148 (Las Vegas), 89002-89074 (Henderson), and 89030-89086 (North Las Vegas), though rates may vary slightly by jurisdiction. Premium areas like Summerlin (89134-89144) and Henderson\'s Green Valley (89012, 89014) have the same favorable tax structure as more affordable areas like North Las Vegas (89030-89086) or Spring Valley (89103-89147). **Important notes**: Property taxes are typically paid semi-annually, exemptions are available for veterans and seniors, and property values are reassessed periodically. Dr. Jan Duffy can provide specific property tax information for any Las Vegas Valley neighborhood you\'re considering, helping you understand the full cost of ownership.',
    },
    {
      question: 'What is the safest area in Las Vegas?',
      answer:
        'Several Las Vegas areas are consistently ranked among the safest: **Summerlin** (zip codes 89134, 89135, 89138, 89144): Master-planned community with low crime rates, excellent schools, and strong community amenities. Sub-communities like The Ridges and The Summit are particularly safe. **Henderson** (zip codes 89002, 89011, 89012, 89014, 89015, 89052, 89074): Known for family-friendly environment, good schools, and lower crime statistics than Las Vegas city proper. **Green Valley** (Henderson zip codes 89012, 89014): Part of Henderson with excellent safety ratings and desirable neighborhoods. **Inspirada** (Henderson zip code 89044): Newer master-planned community in Henderson with modern safety features. **The Lakes** (Las Vegas zip code 89128): Gated communities and well-maintained neighborhoods. **Anthem** (Henderson zip code 89044): Gated community in Henderson with strong security. **Seven Hills** (Henderson zip codes 89052, 89074): Gated community with good safety ratings. **Lake Las Vegas** (Henderson zip code 89011): Upscale community with resort-style security. **Important considerations**: Safety can vary within neighborhoods, gated communities often have additional security, proximity to quality schools often correlates with safer areas, well-maintained neighborhoods tend to have better security, and newer developments often have modern safety features. **Factors to consider**: Crime statistics from official sources, school district ratings, community amenities and maintenance, proximity to emergency services, neighborhood watch programs, and property values and upkeep. Dr. Jan Duffy has extensive knowledge of Las Vegas neighborhoods across zip codes 89103-89148 (Las Vegas), 89002-89074 (Henderson), and 89030-89086 (North Las Vegas), and can help you find areas from Skye Canyon to Macdonald Highlands that match your safety priorities and lifestyle preferences.',
    },
    {
      question: 'Should I buy a condo or single-family home in Las Vegas?',
      answer:
        'The choice between a condo and single-family home in Las Vegas depends on your lifestyle, budget, and priorities. **Condos advantages**: Lower purchase price (often $200,000-$400,000 in Las Vegas Valley), minimal exterior maintenance (handled by HOA), amenities like pools, gyms, and clubhouses, security features, lock-and-leave convenience (great for snowbirds or frequent travelers), and often located in desirable areas like Summerlin (zip codes 89134-89144) or Henderson (89002-89015). **Single-family home advantages**: More privacy and space, no shared walls, yard and outdoor space, greater appreciation potential typically, more control over property, better for families with children, and no HOA restrictions on modifications. **Las Vegas considerations**: Condos are popular in areas like Summerlin, Downtown Las Vegas, and near the Strip, while single-family homes dominate in Henderson\'s Green Valley (89012, 89014), North Las Vegas (89030-89086), and Spring Valley (89103-89147). **HOA factors**: Condos typically have higher HOA fees ($200-$500+/month) that cover maintenance, insurance, and amenities, while single-family homes may have lower HOA fees ($50-$200/month) or none in some areas. **Investment perspective**: Single-family homes generally appreciate better, but condos can offer good rental yields in tourist areas. **Market factors**: In November 2025, both condos and single-family homes are available across Las Vegas Valley zip codes 89103-89148, 89002-89074, and 89030-89086. Dr. Jan Duffy can help you evaluate which property type aligns best with your goals, budget, and lifestyle in specific neighborhoods from The Ridges to Skye Canyon, from Lake Las Vegas to Centennial Hills.',
    },
    {
      question: 'Is rent expensive in Las Vegas?',
      answer:
        'Rent in Las Vegas is moderate compared to major metropolitan areas - more affordable than California but higher than some other regions, with significant variation by neighborhood. **Current rental ranges** (November 2025): Studio apartments: $800-$1,200/month. One-bedroom: $1,000-$1,500/month. Two-bedroom: $1,300-$2,000/month. Three-bedroom: $1,700-$2,800/month. Luxury properties: $2,500-$5,000+/month. **Factors affecting rent**: Location (Summerlin zip codes 89134-89144 and Henderson 89002-89015 typically higher than North Las Vegas 89030-89086 or Spring Valley 89103-89147), property age and condition, amenities (pool, gym, gated community), proximity to Strip and employment centers, and property size and features. Premium areas like The Ridges in Summerlin, Lake Las Vegas, or Macdonald Highlands command higher rents, while newer developments in Skye Canyon (89084), Centennial Hills (89031), or Mountain\'s Edge (89178) offer more affordable options. **Comparison to other cities**: Las Vegas rent is significantly lower than Los Angeles, San Francisco, or New York, but higher than many Midwestern cities. The lack of state income tax helps offset rental costs. **Rent vs. buying**: With current market conditions, buying may be comparable or cheaper than renting in many cases, especially for long-term residents in zip codes 89103-89148 (Las Vegas), 89002-89074 (Henderson), or 89030-89086 (North Las Vegas). Monthly mortgage payments (with 20% down) often compete favorably with rent for similar properties. **Trends**: Rent has increased over recent years but has stabilized, new construction brings more rental inventory, and demand remains strong due to population growth. Dr. Jan Duffy can help you evaluate whether renting or buying makes more financial sense for your situation and can provide insights about rental markets in different neighborhoods from Green Valley Ranch to Anthem to Inspirada.',
    },
    {
      question: 'What is a middle class salary in Las Vegas?',
      answer:
        'Middle class income in Las Vegas typically ranges from approximately $40,000 to $120,000 annually for a household, depending on family size and definition used, with cost-of-living varying significantly by neighborhood. **Common definitions**: Lower middle class: $40,000-$65,000 annually, Middle class: $50,000-$100,000 annually, Upper middle class: $80,000-$150,000 annually. **Household size considerations**: Single person: $35,000-$60,000 for middle class, Couple: $50,000-$100,000, Family of 3-4: $60,000-$120,000, Family of 5+: $80,000-$150,000+. **What middle class means in Las Vegas**: Ability to afford decent housing (rent or mortgage) in neighborhoods like Spring Valley (zip codes 89103, 89113, 89146, 89147), North Las Vegas (89030-89086), or more affordable Henderson areas, cover basic needs comfortably, save for retirement and emergencies, afford healthcare and insurance, enjoy entertainment and dining out occasionally, and provide quality education for children. **Key advantages**: No state income tax saves money, relatively affordable housing compared to coastal cities, lower property taxes than many states, affordable entertainment and dining options, and good value for cost of living. **Housing affordability**: Middle class families can typically afford homes in the $300,000-$500,000 range depending on down payment and debt, which provides good options in many Las Vegas neighborhoods including newer developments in Skye Canyon (89084), Centennial Hills (89031), Mountain\'s Edge (89178), established communities in Spring Valley, or more affordable areas of Henderson (89002-89074) and Summerlin (89134-89144). Luxury communities like The Ridges in Summerlin or Lake Las Vegas typically require upper-middle-class or higher incomes. Dr. Jan Duffy specializes in helping middle class families find homes that fit their budgets while maximizing value and neighborhood quality across Las Vegas Valley zip codes 89103-89148, 89002-89074, and 89030-89086.',
    },
    {
      question: 'What is the cheapest city to live in Las Vegas?',
      answer:
        'Within the Las Vegas metropolitan area, more affordable areas include: **North Las Vegas** (zip codes 89030, 89031, 89032, 89081, 89084, 89086): Generally more affordable, especially newer developments like Skye Canyon (89084) and Centennial Hills (89031), good value for newer construction, and growing community amenities. **East Las Vegas**: Some affordable neighborhoods, older homes that may need updates, and good access to employment centers. **Some Henderson areas** (zip codes 89002, 89015): While Henderson overall tends to be pricier, some neighborhoods offer good value, especially on the edges of the city away from premium areas like Green Valley (89012, 89014) or Seven Hills (89052, 89074). **Enterprise area** (zip codes 89118, 89123, 89139, 89148): Southwest Las Vegas with some affordable options and newer developments like Mountain\'s Edge (89178). **Spring Valley** (zip codes 89103, 89113, 89146, 89147): Diverse neighborhoods with some affordable options. **Challenges with "cheapest"**: Lower prices often reflect trade-offs like: older properties needing more maintenance, longer commutes to employment centers, fewer amenities and shopping options, potentially lower-rated schools, and less walkability. **Important considerations**: Cost includes more than purchase price (maintenance, utilities, transportation), property taxes are relatively low across the area, HOA fees vary significantly, and total cost of ownership matters more than initial price. **Better approach**: Instead of focusing solely on cheapest, consider: value for money (best quality for your budget), long-term appreciation potential, lifestyle fit and commute times, and overall cost of living in the area. Dr. Jan Duffy can help you find neighborhoods that offer the best value for your budget throughout Las Vegas Valley (zip codes 89103-89148, 89002-89074, 89030-89086), balancing affordability with quality of life, amenities, and long-term investment potential.',
    },
    {
      question: 'Is it safe to walk around downtown Las Vegas at night?',
      answer:
        'Safety in downtown Las Vegas at night (zip codes 89101, 89104) depends on specific areas and time, with significant variation by location. **Generally safer areas**: Fremont Street Experience (tourist area with security and crowds), areas with active casinos and entertainment, well-lit main streets with pedestrian traffic, and areas with visible police presence. **Use caution in**: Less populated side streets, areas away from main tourist attractions, certain areas east of downtown, and late night hours (after midnight) when crowds thin. **Safety tips**: Stay in well-lit, populated areas, travel in groups when possible, be aware of your surroundings, avoid displaying valuables obviously, use ride-share services for longer distances, stick to main tourist areas if unfamiliar, and trust your instincts. **General assessment**: Downtown Las Vegas has undergone significant revitalization, with improved safety measures and increased tourism development. The Fremont Street Experience and surrounding casino areas are generally safe due to security presence and crowds. However, like any urban area, awareness and common sense are important. **For residents**: Many Las Vegas residents avoid downtown at night unless attending specific events, choosing instead suburban areas like Summerlin (zip codes 89134-89144) and Henderson (89002-89015) for evening activities. Communities like Green Valley Ranch, The Lakes, or Anthem offer safer evening environments. **Real estate perspective**: If you\'re considering downtown living (zip codes 89101, 89104), Dr. Jan Duffy can provide insights about specific buildings, neighborhoods, and safety considerations for downtown properties versus suburban options in Summerlin, Henderson, Spring Valley (89103-89147), or North Las Vegas (89030-89086).',
    },
    {
      question: 'What is the nicest neighborhood in Las Vegas?',
      answer:
        'Several neighborhoods are consistently considered among the nicest in Las Vegas: **Summerlin** (zip codes 89134, 89135, 89138, 89144): Master-planned community, excellent schools, golf courses, parks, Downtown Summerlin shopping center, low crime rates, and beautiful mountain views. Often considered the premier community. Sub-communities like The Ridges offer luxury resort-style living. **Henderson** (zip codes 89002, 89011, 89012, 89014, 89015, 89052, 89074), especially Green Valley (89012, 89014) and Seven Hills (89052, 89074): Family-friendly, excellent schools, well-maintained, good amenities, and strong community feel. **The Ridges (Summerlin zip codes 89134-89144)**: Luxury gated community with high-end homes and resort-style living. **Lake Las Vegas (Henderson zip code 89011)**: Upscale community with waterfront properties and resort amenities. **Inspirada (Henderson zip code 89044)**: Modern master-planned community with new construction and great amenities. **Macdonald Highlands (Henderson zip code 89052)**: Luxury gated community with mountain views. **Anthem (Henderson zip code 89044)**: Gated community with strong security and amenities. **The Lakes (Las Vegas zip code 89128)**: Gated communities and well-maintained neighborhoods. **Factors that make neighborhoods "nice"**: Quality schools and education, low crime rates and safety, well-maintained streets and common areas, quality shopping and dining nearby (Downtown Summerlin, Green Valley Ranch, Aliante), parks and recreational amenities, strong property values, active homeowner associations, and community atmosphere. **Personal preferences matter**: What\'s "nicest" depends on your priorities - some prefer established neighborhoods like Green Valley, others want new construction like Skye Canyon (89084), some prioritize schools, others want nightlife proximity. **Investment consideration**: Nicer neighborhoods typically maintain or increase value better, offer better quality of life, and provide better long-term returns. Dr. Jan Duffy has extensive knowledge of Las Vegas\'s premier neighborhoods across zip codes 89103-89148 (Las Vegas), 89002-89074 (Henderson), and 89030-89086 (North Las Vegas) and can help you find the area that best matches your lifestyle, budget, and priorities.',
    },
    {
      question: 'Can I afford $1000 rent making $20 an hour?',
      answer:
        'Yes, you can likely afford $1,000 rent making $20 an hour, though it requires careful budgeting. **Math breakdown**: $20/hour x 40 hours/week = $800/week, $800/week x 52 weeks = $41,600 annually (before taxes), After taxes (approximately 20-25%): $31,200-$33,280 annually, Monthly take-home: approximately $2,600-$2,773. **Housing affordability rule**: General guideline suggests spending no more than 30% of gross income on housing, which would be about $1,040/month on $41,600 income. At $1,000/month, you\'d be at about 28.8% of gross income - within the guideline. **Budget considerations**: With $1,000 rent, you\'d have approximately $1,600-$1,773/month remaining for: utilities ($100-$200), food ($300-$500), transportation ($200-$400), savings and emergencies ($200-$300), insurance and healthcare ($200-$400), and discretionary spending ($300-$400). **Las Vegas advantages**: No state income tax increases take-home pay, relatively affordable utilities, and lower cost of living than many areas. **Important factors**: Debt payments (car, credit cards) reduce available income, emergency fund is crucial, and consider roommates if budget is tight. **Buying consideration**: With current interest rates and prices, you might be able to buy a home with similar monthly payments, building equity instead of paying rent. Dr. Jan Duffy can help you explore whether renting or buying makes more financial sense for your situation.',
    },
    {
      question: 'Is moving to Las Vegas a good idea?',
      answer:
        'Moving to Las Vegas can be a great idea depending on your priorities, career, and lifestyle preferences. **Advantages**: No state income tax (significant savings), relatively affordable housing compared to many major cities across neighborhoods in zip codes 89103-89148 (Las Vegas), 89002-89074 (Henderson), and 89030-89086 (North Las Vegas), growing job market in diverse sectors, year-round warm weather and sunshine, entertainment and dining options, outdoor recreation (Red Rock Canyon, Lake Mead, hiking trails), lower property taxes, diverse economy beyond tourism, and growing tech and healthcare sectors. **Considerations**: Hot summers (110°F+ temperatures), limited public transportation (car-dependent), water conservation concerns, tourist traffic on the Strip, varying school quality by area (with excellent schools in Summerlin zip codes 89134-89144 and Henderson 89002-89015), and some areas require research for safety. **Best for**: People seeking affordable housing (in areas like North Las Vegas 89030-89086 or Spring Valley 89103-89147), those wanting no income tax, individuals in hospitality, tech, healthcare, or construction, retirees seeking low taxes (considering communities like Sun City Summerlin, Anthem, or Green Valley), outdoor enthusiasts, and those wanting entertainment options. **Challenges for**: People who dislike extreme heat, those requiring robust public transit, families needing top-tier schools (though good options exist in Summerlin, Henderson\'s Green Valley, and Seven Hills), and people sensitive to tourist areas. **Real estate perspective**: Strong long-term growth potential, good investment opportunities, diverse housing options across price ranges (from affordable in Skye Canyon 89084 to luxury in The Ridges or Lake Las Vegas), and strong rental market if you want to invest. **Bottom line**: Las Vegas offers excellent value, growth opportunities, and lifestyle benefits for many people. Dr. Jan Duffy can help you understand specific neighborhoods from Enterprise to Macdonald Highlands, housing markets, and whether Las Vegas is right for your situation. She provides comprehensive guidance for newcomers to help you find the right area and home.',
    },
    {
      question: 'How much do groceries cost in Las Vegas?',
      answer:
        'Grocery costs in Las Vegas are generally moderate - more affordable than many coastal cities but similar to or slightly higher than some Midwestern areas, with prices relatively consistent across Las Vegas Valley neighborhoods. **Average monthly grocery costs** (November 2025 estimates for family of 4): Budget-conscious shopping: $400-$600/month, Moderate shopping: $600-$800/month, Premium/organic shopping: $800-$1,200+/month. **Cost factors**: Shopping at discount stores (Walmart, WinCo) vs. premium stores (Whole Foods, specialty markets), buying store brands vs. name brands, eating out frequency (Las Vegas has many affordable dining options), household size and dietary preferences, and seasonal produce availability. Major shopping centers like Downtown Summerlin in Summerlin (zip codes 89134-89144), Green Valley Ranch in Henderson (89012, 89014), or Aliante in North Las Vegas (89081, 89084) offer various grocery options. **Comparison**: Las Vegas groceries are typically cheaper than California, similar to Arizona and Texas, and slightly higher than some rural or Midwestern areas. **Ways to save**: Shop at discount grocery stores, use coupons and store loyalty programs, buy in bulk for non-perishables, take advantage of sales and promotions, and consider warehouse stores (Costco, Sam\'s Club) for families. **Unique considerations**: Many affordable restaurant options can reduce grocery needs, casinos often have affordable buffets and dining, and diverse international markets offer good variety and value. **Budget planning**: For real estate budgeting, factor in groceries as part of your monthly expenses when considering homes in zip codes 89103-89148 (Las Vegas), 89002-89074 (Henderson), or 89030-89086 (North Las Vegas). A typical rule of thumb is $150-$300 per person per month, depending on shopping habits. Dr. Jan Duffy can help you understand the full cost of living in different Las Vegas neighborhoods from Spring Valley to Enterprise, including grocery costs, to ensure your housing budget leaves room for all expenses.',
    },
    {
      question: 'What are typical HOA fees in Las Vegas neighborhoods?',
      answer:
        'HOA fees in Las Vegas vary significantly by neighborhood, property type, and amenities offered. **Typical ranges**: **Single-family homes**: $50-$300/month in most master-planned communities like Summerlin (zip codes 89134-89144) or Henderson (89002-89015), with premium communities like The Ridges or Lake Las Vegas potentially higher. **Condos**: $200-$600/month or more, covering exterior maintenance, insurance, and amenities. **Luxury communities**: Can exceed $500-$1,000+/month for high-end amenities. **What HOA fees cover**: Landscaping and common area maintenance, community amenities (pools, parks, gyms, clubhouses), security services, insurance for common areas, and sometimes utilities like water, trash, or cable. **Factors affecting fees**: Age of community (newer developments may have lower initial fees that increase over time), amenities offered (golf courses, concierge services increase costs), property type (condos typically higher than single-family), location (premium areas like Seven Hills Henderson 89052-89074 may have higher fees), and reserve fund requirements. **Master-planned communities**: Summerlin (89134-89144) and Henderson areas like Green Valley Ranch (89012, 89014) or Inspirada (89044) typically have well-managed HOAs with reasonable fees. **Areas with lower/no HOA**: Some older neighborhoods in Spring Valley (89103-89147), North Las Vegas (89030-89086), or unincorporated areas may have lower or no HOA fees. **Important considerations**: HOA fees are in addition to mortgage and property taxes, fees can increase annually (typically 3-5%), review HOA financials and reserves before buying, understand HOA rules and restrictions, and factor HOA fees into your total monthly housing costs. Dr. Jan Duffy can provide specific HOA fee information for any Las Vegas Valley neighborhood you\'re considering and help you understand the total cost of ownership including HOA, property taxes, and utilities.',
    },
    {
      question: 'What should I know about buying a home in Las Vegas desert climate?',
      answer:
        'Buying a home in Las Vegas\'s desert climate requires understanding unique considerations that affect property value, maintenance, and livability. **Climate challenges**: Extreme summer heat (110°F+ temperatures) making air conditioning essential, intense sun exposure requiring quality roofs and window treatments, low humidity causing materials to dry out faster, occasional monsoon storms requiring proper drainage, and hard water affecting plumbing and appliances. **Key home features to prioritize**: **HVAC systems**: Quality, properly sized, and well-maintained air conditioning is critical. Check age, efficiency ratings (SEER), and maintenance history. Replacing HVAC systems costs $5,000-$15,000+. **Roofing**: Look for materials that handle intense sun and heat. Tile roofs are common and durable. Check for sun damage, proper insulation, and adequate ventilation. **Windows**: Energy-efficient windows reduce cooling costs significantly. Double-pane windows are essential. South and west-facing windows may need additional shading. **Landscaping**: Desert-appropriate landscaping (xeriscaping) reduces water costs and maintenance. Pools are popular but require ongoing maintenance and heating costs. **Water systems**: Hard water requires water softeners ($1,500-$3,500). Check water pressure, well systems if applicable, and irrigation systems. **Solar considerations**: Las Vegas has excellent solar potential. Existing solar panels can reduce electricity costs substantially. **Foundation and soil**: Desert soil conditions require proper foundation construction. Check for settling, cracks, and drainage issues. **Energy efficiency**: Important for managing cooling costs. Look for insulation, energy-efficient appliances, and proper sealing. **Neighborhood variations**: Homes in newer developments like Skye Canyon (89084), Centennial Hills (89031), or Inspirada (89044) often have modern energy-efficient features, while older homes in Spring Valley (89103-89147) may need updates. Premium areas like Summerlin (89134-89144) and Henderson\'s Green Valley (89012, 89014) typically have well-maintained systems. **Ongoing costs**: Higher electricity bills in summer ($200-$500+/month), pool maintenance if applicable ($100-$300/month), landscaping/irrigation maintenance, and potential for higher appliance replacement due to hard water. Dr. Jan Duffy understands Las Vegas climate considerations and can help you identify homes with proper systems and factor climate-related costs into your budget across all Las Vegas Valley zip codes 89103-89148, 89002-89074, and 89030-89086.',
    },
    {
      question: 'Are there first-time homebuyer programs in Las Vegas?',
      answer:
        'Yes, there are several first-time homebuyer programs available in Las Vegas that can help make homeownership more accessible. **Nevada Housing Division (NHD) programs**: **Home Is Possible (HIP)**: Down payment assistance up to 5% of loan amount, reduced mortgage insurance, and competitive interest rates. Available for first-time and repeat buyers. **Home At Last**: Special programs for veterans, teachers, and other specific professions with down payment assistance and favorable terms. **FHA loans**: Popular for first-time buyers with 3.5% down payment (vs. typical 20%), more flexible credit requirements, and government-backed security. Common throughout Las Vegas Valley neighborhoods. **VA loans**: For eligible veterans and active military with no down payment required, no mortgage insurance, and competitive rates. **USDA loans**: Available for rural areas (some parts of North Las Vegas 89030-89086 or Enterprise 89118-89123 qualify) with no down payment for eligible buyers. **City-specific programs**: **Las Vegas**: Various assistance programs for low-to-moderate income buyers. **Henderson**: Local programs may be available through the city. **North Las Vegas**: Community development programs for qualified buyers. **Program benefits**: Down payment assistance, reduced closing costs, lower interest rates, reduced mortgage insurance, and homebuyer education courses. **Eligibility factors**: First-time buyer status (typically no ownership in past 3 years), income limits (varies by program), credit score requirements (often 620+), debt-to-income ratios, and completion of homebuyer education courses. **Neighborhood considerations**: Programs typically work across all Las Vegas Valley zip codes 89103-89148 (Las Vegas), 89002-89074 (Henderson), and 89030-89086 (North Las Vegas), though property price limits may apply. Affordable areas like North Las Vegas (89030-89086), Spring Valley (89103-89147), or more affordable Henderson areas (89002, 89015) may offer more options within program limits. **Important notes**: Program availability and terms change periodically, income limits vary by household size, property must meet certain requirements, and working with knowledgeable lenders and agents is crucial. Dr. Jan Duffy specializes in working with first-time homebuyers and can connect you with qualified lenders who understand these programs. She helps buyers navigate the application process, understand eligibility requirements, and find homes that qualify for assistance programs in neighborhoods from Skye Canyon to Green Valley, from Centennial Hills to Anthem.',
    },
    {
      question: 'How are schools rated in different Las Vegas neighborhoods?',
      answer:
        'School ratings in Las Vegas vary significantly by neighborhood, with some areas having excellent schools while others may need improvement. **Top-rated school districts**: **Clark County School District (CCSD)**: The main school district covering most of Las Vegas Valley, with ratings varying widely by specific school and zone. **Highly-rated schools** are typically found in: **Summerlin** (zip codes 89134, 89135, 89138, 89144): Many schools rated 8-10/10, including top-rated elementary, middle, and high schools. The Ridges area particularly known for excellent schools. **Henderson** (zip codes 89002, 89011, 89012, 89014, 89015, 89052, 89074): Green Valley and Seven Hills areas have highly-rated schools, with many rated 7-9/10. Coronado High School and other top-performing schools in the area. **Anthem** (Henderson zip code 89044): Strong schools serving the community. **The Lakes** (Las Vegas zip code 89128): Well-regarded schools in the area. **North Las Vegas** (zip codes 89030-89086): Ratings vary, with newer developments like Skye Canyon (89084) and Centennial Hills (89031) having newer schools with improving ratings. **Spring Valley** (zip codes 89103-89147): School ratings vary by specific zone, with some areas having better-rated schools than others. **Factors affecting school ratings**: Test scores and academic performance, teacher-to-student ratios, funding and resources, parent involvement, neighborhood demographics, and school facilities and programs. **Additional options**: **Magnet schools**: Specialized programs available throughout CCSD. **Charter schools**: Various charter school options across Las Vegas Valley. **Private schools**: Many private school options in Summerlin, Henderson, and other areas. **Important considerations**: School zones can change, ratings are one factor among many, visit schools personally when possible, consider school proximity to your home, understand that a "lower-rated" school may still be excellent for your child\'s needs, and factor school quality into long-term property value. **Impact on real estate**: Homes in top school zones (especially in Summerlin 89134-89144 and Henderson 89012-89014 areas) typically command premium prices and maintain value well. School quality is a major factor for families buying in Las Vegas Valley neighborhoods. Dr. Jan Duffy understands the importance of schools for families and can help you identify neighborhoods with the best schools for your children\'s needs, whether you\'re looking in premium areas like The Ridges or more affordable areas like North Las Vegas. She provides insights on school districts, ratings, and how schools affect property values across zip codes 89103-89148, 89002-89074, and 89030-89086.',
    },
    {
      question: 'Should I buy an investment property or primary residence in Las Vegas?',
      answer:
        'The decision between buying an investment property or primary residence in Las Vegas depends on your financial goals, timeline, and personal situation. **Primary residence advantages**: Lower interest rates and down payment requirements (as low as 3.5% for FHA loans), mortgage interest and property tax deductions, personal use and stability, potential for principal residence exemption, no landlord responsibilities, and ability to build equity while living there. **Investment property advantages**: Rental income potential (Las Vegas has strong rental market), tax benefits (depreciation, deductions, 1031 exchanges), diversification of assets, potential for appreciation, passive income stream, and flexibility to sell when market conditions are favorable. **Las Vegas market considerations** (November 2025): Strong rental demand due to population growth, tourism industry creating short-term rental opportunities, relatively affordable property prices compared to many markets, good cash flow potential in many areas, and appreciation potential over long term. **Best neighborhoods for investment**: **Areas near employment centers**: Good for long-term rentals (North Las Vegas 89030-89086, Spring Valley 89103-89147). **Tourist-adjacent areas**: Potential for short-term rentals (near Strip, though regulations vary). **Growing areas**: Skye Canyon (89084), Centennial Hills (89031), Mountain\'s Edge (89178) offer new construction and growth potential. **Established areas**: Summerlin (89134-89144) and Henderson (89002-89015) offer stable values and reliable tenants. **Considerations for investment properties**: Higher down payment typically required (20-25%), higher interest rates than primary residence, need property management (or DIY management), vacancy rates and maintenance costs, Las Vegas landlord-tenant laws, tax implications (consult tax professional), and cash flow analysis essential. **Considerations for primary residence**: Personal lifestyle needs (schools, commute, amenities), long-term plans and stability, ability to afford maintenance and repairs, and personal attachment to property. **Hybrid approach**: Some buyers purchase a primary residence with potential for future rental (multifamily properties, separate units, or homes in rental-friendly areas). **Financial factors**: Investment properties require analysis of cash-on-cash return, cap rates, vacancy rates, and operating expenses. Primary residences consider personal needs, lifestyle, and long-term goals. **Tax implications**: Investment properties offer different tax benefits than primary residences. Consult with tax professional for specific advice. Dr. Jan Duffy can help you evaluate both options based on your financial situation, goals, and timeline. She understands Las Vegas investment market dynamics across zip codes 89103-89148, 89002-89074, and 89030-89086, and can help you make informed decisions whether you\'re looking for a home in The Ridges or an investment property in North Las Vegas.',
    },
  ],
}

export const getPageFAQs = (pageKey: string): PageFAQ[] => {
  return pageFAQs[pageKey] || []
}
