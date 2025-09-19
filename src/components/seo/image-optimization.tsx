import { component$ } from '@builder.io/qwik';

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export default component$<OptimizedImageProps>(({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
}) => {
  // Generate responsive image URLs for different sizes
  const generateSrcSet = (baseSrc: string) => {
    const sizes = [320, 640, 768, 1024, 1200, 1600];
    return sizes
      .map(size => `${baseSrc}?w=${size}&q=${quality} ${size}w`)
      .join(', ');
  };

  const srcSet = generateSrcSet(src);

  return (
    <picture>
      {/* WebP format for modern browsers */}
      <source
        srcSet={generateSrcSet(src.replace(/\.(jpg|jpeg|png)$/i, '.webp'))}
        sizes={sizes}
        type="image/webp"
      />
      
      {/* Fallback for older browsers */}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? 'eager' : loading}
        decoding="async"
        style={{
          width: width ? `${width}px` : 'auto',
          height: height ? `${height}px` : 'auto',
        }}
        onError$={(event) => {
          // Fallback to original src if optimized version fails
          const target = event.target as HTMLImageElement;
          if (!target.src.includes('?')) {
            target.src = src;
          }
        }}
      />
    </picture>
  );
});

// Utility function for generating optimized image URLs
export const getOptimizedImageUrl = (
  src: string, 
  width: number, 
  quality: number = 75
): string => {
  // If using Vercel Image Optimization
  if (src.startsWith('/') || src.includes('openhouseupdate.com')) {
    return `${src}?w=${width}&q=${quality}`;
  }
  
  // For external images, return as-is
  return src;
};

// Utility function for generating responsive image URLs
export const getResponsiveImageUrls = (
  src: string,
  sizes: number[] = [320, 640, 768, 1024, 1200, 1600],
  quality: number = 75
): { srcSet: string; sizes: string } => {
  const srcSet = sizes
    .map(size => `${getOptimizedImageUrl(src, size, quality)} ${size}w`)
    .join(', ');
    
  const sizesString = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  
  return { srcSet, sizes: sizesString };
};
