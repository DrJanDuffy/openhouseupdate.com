# RealScout Theme System

This directory contains RealScout components with a comprehensive theme system that supports Light, Dark, and Vegas themes.

## Components

### Core Components
- `realscout-advanced-search.tsx` - Advanced property search with filters
- `realscout-simple-search.tsx` - Quick address/neighborhood search
- `realscout-home-value.tsx` - Home valuation widget
- `realscout-listings.tsx` - Property listings display
- `realscout-loader.tsx` - Script loading utility

### Theme System
- `theme-switcher.tsx` - Reusable theme switching component
- `realscout-themes.css` - Shared CSS custom properties for all themes

## Theme Variants

### Light Theme (Default)
- **Background**: White (#ffffff)
- **Primary Button**: Blue (rgb(35, 93, 137))
- **Text**: Dark (#000000)
- **Borders**: Light gray (hsl(0, 0%, 80%))

### Dark Theme
- **Background**: Dark gray (#1f2937)
- **Primary Button**: Blue (#3b82f6)
- **Text**: White (#ffffff)
- **Borders**: Medium gray (#4b5563)

### Vegas Theme
- **Primary Button**: Red (#dc2626)
- **Accent Color**: Gold (#eab308)
- **Borders**: Red (#dc2626)
- **Secondary Elements**: Gold accents

## CSS Custom Properties

Each RealScout widget supports theme-specific CSS custom properties:

### Advanced Search (`realscout-advanced-search`)
- `--rs-as-button-text-color`
- `--rs-as-background-color`
- `--rs-as-button-color`
- `--rs-as-text-color`
- `--rs-as-accent-color`

### Simple Search (`realscout-simple-search`)
- `--rs-ss-font-primary-color`
- `--rs-ss-searchbar-border-color`
- `--rs-ss-box-shadow`
- `--rs-ss-background-color`
- `--rs-ss-button-color`
- `--rs-ss-accent-color`

### Home Value (`realscout-home-value`)
- `--rs-hvw-background-color`
- `--rs-hvw-title-color`
- `--rs-hvw-subtitle-color`
- `--rs-hvw-primary-button-text-color`
- `--rs-hvw-primary-button-color`
- `--rs-hvw-secondary-button-text-color`
- `--rs-hvw-secondary-button-color`

### Listings (`realscout-office-listings`)
- `--rs-listing-divider-color`
- `--rs-listing-background-color`
- `--rs-listing-text-color`
- `--rs-listing-button-color`
- `--rs-listing-accent-color`

## Usage

### Basic Implementation
```tsx
import { component$, useSignal } from '@builder.io/qwik';
import ThemeSwitcher from './theme-switcher';

export default component$(() => {
  const currentTheme = useSignal<'light' | 'dark' | 'vegas'>('light');

  return (
    <div>
      <ThemeSwitcher currentTheme={currentTheme} />
      <realscout-widget class={currentTheme.value} />
    </div>
  );
});
```

### Manual Theme Application
```tsx
<realscout-advanced-search 
  agent-encoded-id="QWdlbnQtMjI1MDUw"
  class="dark" // or "vegas" or "light"
></realscout-advanced-search>
```

## Design System Integration

The theme system integrates with the established design system:

- **Primary Colors**: #0A2540 (dark blue), #3A8DDE (blue)
- **Secondary Colors**: #16B286 (green), #F7F9FC (light gray)
- **Container Styling**: Consistent padding, margins, and shadows
- **Responsive Design**: Mobile-first approach with breakpoint adjustments

## Accessibility

- **Focus States**: Proper outline styles for keyboard navigation
- **Color Contrast**: WCAG compliant color combinations
- **Screen Readers**: Semantic HTML structure maintained
- **Theme Persistence**: User preferences can be stored in localStorage

## Performance

- **CSS Custom Properties**: Efficient theme switching without DOM manipulation
- **Lazy Loading**: Scripts loaded only when components are visible
- **Shadow DOM**: Prevents CSS conflicts with parent styles
- **Z-index Management**: Proper layering (z-index: 1000) for modal components

## Browser Support

- **Modern Browsers**: Full CSS custom property support
- **Legacy Support**: Fallback colors for older browsers
- **Mobile**: Responsive design for all screen sizes
- **Cross-Origin**: Scripts loaded with `crossorigin="anonymous"`

## Customization

To add new themes or modify existing ones:

1. Update `realscout-themes.css` with new CSS custom properties
2. Add theme variant to the `ThemeSwitcher` component
3. Update TypeScript types in component files
4. Test across all RealScout widgets

## Troubleshooting

### Common Issues
- **Script Loading**: Ensure RealScout script loads before component initialization
- **Theme Not Applying**: Check that CSS custom properties are supported
- **Mobile Issues**: Verify responsive breakpoints are working correctly
- **Z-index Conflicts**: Ensure proper layering with other page elements
