// Image optimization utilities
export const imageOptimizer = {
  getOptimizedSrc: (src: string, width?: number, quality: number = 75) => {
    // Add query parameters for optimization
    const params = new URLSearchParams({
      q: quality.toString(),
      ...(width && { w: width.toString() })
    });
    
    return `${src}?${params.toString()}`;
  },

  preloadImages: (images: string[]) => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  },

  generateBlurHash: async (src: string) => {
    // Implement blur hash generation if needed
    return 'LEHV6nWB2yk8pyo0adR*.7kCMdnj';
  },

  supportsWebP: async () => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  },

  convertToWebP: (src: string) => {
    return src.replace(/\.(jpg|jpeg|png)$/, '.webp');
  },

  generateSrcSet: (src: string) => {
    const sizes = [320, 640, 768, 1024, 1280, 1536];
    return sizes
      .map(size => `${src}?w=${size}&q=75 ${size}w`)
      .join(', ');
  },

  generateSizes: (width?: number) => {
    if (width) {
      return `(max-width: ${width}px) 100vw, ${width}px`;
    }
    return '(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw';
  },

  cacheImage: (key: string, img: HTMLImageElement) => {
    const cache = new Map<string, HTMLImageElement>();
    cache.set(key, img);
  },

  getCachedImage: (key: string): HTMLImageElement | null => {
    const cache = new Map<string, HTMLImageElement>();
    return cache.get(key) || null;
  }
}; 