# Open Graph Protocol Implementation

This document outlines the comprehensive Open Graph protocol implementation for the Open House Update real estate website.

## Overview

The Open Graph protocol enables web pages to become rich objects in social graphs, allowing for enhanced sharing on platforms like Facebook, Twitter, LinkedIn, and other social media platforms.

## Implementation Components

### 1. Core Open Graph Component (`src/components/seo/open-graph.tsx`)

A comprehensive React component that handles all Open Graph metadata types:

- **Basic Metadata**: title, description, type, url, image, site_name
- **Image Metadata**: secure_url, type, width, height, alt text
- **Audio/Video Metadata**: URLs, types, dimensions
- **Article Metadata**: author, published_time, modified_time, section, tags
- **Profile Metadata**: first_name, last_name, username, gender
- **Book Metadata**: author, ISBN, release_date, tags
- **Music Metadata**: duration, album, musician
- **Video Metadata**: actor, director, writer, duration, release_date, tags, series
- **Payment Metadata**: description, currency, amount, expires_at, status, ID, success_url

### 2. Utility Functions (`src/utils/open-graph-utils.ts`)

Helper functions and predefined configurations for common page types:

- `createOpenGraphMeta()`: Generates Open Graph metadata arrays
- `openGraphConfigs`: Predefined configurations for different page types

### 3. HTML Prefix (`src/root.tsx`)

Added the required Open Graph namespace prefix:
```html
<html prefix="og: https://ogp.me/ns#">
```

## Page-Specific Implementations

### Homepage (`src/routes/index.tsx`)
- **Type**: website
- **Image**: og-homepage.jpg
- **Tags**: real estate, Las Vegas, home search, property, Dr. Janet Duffy

### Home Valuation (`src/routes/services/home-valuation/index.tsx`)
- **Type**: website
- **Image**: og-valuation.jpg
- **Tags**: home valuation, property assessment, market analysis, CMA, Las Vegas

### Buyer Services (`src/routes/services/buyer-services/index.tsx`)
- **Type**: website
- **Image**: og-buyer-services.jpg
- **Tags**: buyer services, home buying, property search, real estate agent, Las Vegas

## Image Specifications

All Open Graph images should follow these specifications:

- **Dimensions**: 1200x630 pixels (recommended by Facebook)
- **Format**: JPEG or PNG
- **File Size**: Under 1MB
- **Aspect Ratio**: 1.91:1
- **Text**: Should be readable at small sizes
- **Brand Colors**: Use #0A2540, #3A8DDE, #16B286

### Required Images

Create the following images in `public/images/`:

1. `og-homepage.jpg` - Main homepage image
2. `og-valuation.jpg` - Home valuation service image
3. `og-buyer-services.jpg` - Buyer services image
4. `og-seller-services.jpg` - Seller services image
5. `og-market-analysis.jpg` - Market analysis image
6. `og-about.jpg` - About page image
7. `og-contact.jpg` - Contact page image
8. `og-search.jpg` - Property search image
9. `og-map.jpg` - Interactive map image
10. `og-open-houses.jpg` - Open houses image
11. `og-blog.jpg` - Blog image
12. `og-faq.jpg` - FAQ image

## Metadata Standards

### Required Properties
- `og:title` - Page title
- `og:type` - Object type (website, article, profile, etc.)
- `og:image` - Image URL
- `og:url` - Canonical URL

### Recommended Properties
- `og:description` - Page description
- `og:site_name` - Site name
- `og:locale` - Primary locale (en_US)
- `og:locale:alternate` - Alternate locales (es_US)
- `og:determiner` - Article determiner (auto)

### Image Properties
- `og:image:secure_url` - HTTPS version of image
- `og:image:type` - MIME type (image/jpeg)
- `og:image:width` - Image width (1200)
- `og:image:height` - Image height (630)
- `og:image:alt` - Alt text for accessibility

## Twitter Card Integration

All pages include Twitter Card metadata:
- `twitter:card` - summary_large_image
- `twitter:title` - Page title
- `twitter:description` - Page description
- `twitter:image` - Image URL
- `twitter:image:alt` - Alt text

## Testing and Validation

### Facebook Sharing Debugger
Use Facebook's Sharing Debugger to test your Open Graph implementation:
https://developers.facebook.com/tools/debug/

### Twitter Card Validator
Test Twitter Card implementation:
https://cards-dev.twitter.com/validator

### Google Rich Results Test
Validate structured data and Open Graph:
https://search.google.com/test/rich-results

## Best Practices

1. **Consistent Branding**: Use consistent images and messaging across all pages
2. **Unique Content**: Each page should have unique titles, descriptions, and images
3. **Relevant Tags**: Use appropriate article tags for better categorization
4. **Mobile Optimization**: Ensure images look good on mobile devices
5. **Accessibility**: Include alt text for all images
6. **Performance**: Optimize images for fast loading
7. **HTTPS**: Use secure URLs for all resources

## Future Enhancements

1. **Dynamic Images**: Generate Open Graph images dynamically based on content
2. **Video Support**: Add video metadata for property tours
3. **Location Data**: Include geographic metadata for location-based pages
4. **Real-time Updates**: Update metadata based on current market data
5. **A/B Testing**: Test different images and descriptions for better engagement

## Maintenance

- Regularly update images to reflect current branding
- Monitor social media sharing performance
- Update metadata when content changes
- Test new pages with sharing debuggers
- Keep up with Open Graph protocol updates

## Resources

- [Open Graph Protocol Documentation](https://ogp.me/)
- [Facebook Sharing Best Practices](https://developers.facebook.com/docs/sharing/best-practices)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Google Rich Results Guidelines](https://developers.google.com/search/docs/appearance/structured-data)
