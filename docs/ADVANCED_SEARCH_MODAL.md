# Advanced Search Modal Component

## Overview
The Advanced Search Modal provides a floating action button that opens a full-screen modal containing the RealScout advanced search widget. This allows users to access comprehensive property search functionality from anywhere on the site.

## Features

### 🎯 Modal Functionality
- **Floating Action Button**: Fixed position bottom-right corner with gradient styling
- **Full-Screen Modal**: Responsive modal with backdrop blur effect
- **Smooth Animations**: Slide-in animation with scale effect
- **Click Outside to Close**: Intuitive UX for closing the modal
- **Accessibility**: Proper focus management and keyboard navigation

### 🔍 RealScout Integration
- **Agent ID**: Configured with `QWdlbnQtMjI1MDUw`
- **Expanded Mode**: Shows all available search filters
- **Full Width**: Widget utilizes complete modal width
- **Custom Styling**: Branded colors matching site design system

### 📱 Responsive Design
- **Mobile Optimized**: Button repositions for mobile screens
- **Tablet Friendly**: Modal adapts to different screen sizes
- **Desktop Enhanced**: Full feature set on larger screens

## Usage

### Automatic Integration
The modal is automatically available site-wide through the main layout component (`src/routes/layout.tsx`). No additional setup required.

### Manual Integration (if needed)
```tsx
import { AdvancedSearchModal } from '~/components/modals';

// In your component
<AdvancedSearchModal />
```

## Styling Customization

### Brand Colors
The component uses the established design system:
- **Primary**: #0A2540 (Dark Blue)
- **Secondary**: #3A8DDE (Light Blue) 
- **Accent**: #16B286 (Green)
- **Background**: #F7F9FC (Light Gray)

### CSS Custom Properties
You can override RealScout widget styling using CSS custom properties:
```css
realscout-advanced-search {
  --rs-as-button-color: #your-color;
  --rs-as-accent-color: #your-accent;
  --rs-as-background-color: #your-bg;
}
```

## Technical Details

### Component Structure
```
src/components/modals/
├── advanced-search-modal.tsx    # Main modal component
└── index.ts                     # Export file
```

### Dependencies
- **Qwik**: Reactive framework for component state
- **RealScout**: Property search widget integration
- **Custom Elements**: Web Components for RealScout widgets

### Performance Considerations
- **Lazy Loading**: Script loads only when modal is accessed
- **Optimized Animations**: Respects `prefers-reduced-motion`
- **Efficient Rendering**: Modal only renders when open

## Browser Support
- **Modern Browsers**: Full support for all features
- **Mobile Safari**: Optimized touch interactions
- **Chrome/Firefox**: Complete functionality
- **Edge**: Full compatibility

## Testing
The modal has been tested for:
- ✅ Responsive behavior across devices
- ✅ Accessibility compliance
- ✅ RealScout widget integration
- ✅ Animation performance
- ✅ Cross-browser compatibility

## Troubleshooting

### Modal Not Appearing
1. Check browser console for JavaScript errors
2. Verify RealScout script is loading
3. Ensure component is imported in layout

### Styling Issues
1. Check CSS custom properties are supported
2. Verify z-index conflicts
3. Test in different browsers

### Performance Issues
1. Check network tab for script loading
2. Verify no memory leaks in modal state
3. Test on slower devices

## Future Enhancements
- [ ] Analytics tracking for modal interactions
- [ ] A/B testing for button placement
- [ ] Keyboard shortcuts for quick access
- [ ] Search history persistence
- [ ] Multi-language support
