import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { imageOptimizer } from '../../utils/imageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  effect?: 'fade' | 'zoom' | 'blur' | 'none';
  placeholder?: 'blur' | 'pulse' | 'shimmer' | 'color';
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  width, 
  height,
  priority = false,
  effect = 'fade',
  placeholder = 'blur'
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [webpSrc, setWebpSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP source if supported
  useEffect(() => {
    const checkWebP = async () => {
      if (await imageOptimizer.supportsWebP()) {
        setWebpSrc(imageOptimizer.convertToWebP(src));
      }
    };
    checkWebP();
  }, [src]);

  // Image effects variants
  const imageEffects = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    zoom: {
      hidden: { opacity: 0, scale: 1.1 },
      visible: { opacity: 1, scale: 1 }
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      visible: { opacity: 1, filter: 'blur(0px)' }
    },
    none: {
      hidden: {},
      visible: {}
    }
  };

  // Placeholder styles
  const placeholderStyles = {
    blur: "bg-gray-100 backdrop-blur-lg",
    pulse: "bg-gray-100 animate-pulse",
    shimmer: "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer",
    color: "bg-pink-50"
  };

  // Handle image caching
  useEffect(() => {
    const cachedImage = imageOptimizer.getCachedImage(src);
    if (cachedImage) {
      setIsLoading(false);
    } else if (priority) {
      const img = new Image();
      img.src = webpSrc || src;
      img.onload = () => {
        setIsLoading(false);
        imageOptimizer.cacheImage(src, img);
      };
      img.onerror = () => setError(true);
    }
  }, [src, webpSrc, priority]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!priority && imgRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = webpSrc || src;
              observer.unobserve(img);
            }
          });
        },
        { rootMargin: '50px' }
      );

      observer.observe(imgRef.current);
      return () => observer.disconnect();
    }
  }, [src, webpSrc, priority]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        {isLoading && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 ${placeholderStyles[placeholder]}`}
          >
            {placeholder === 'shimmer' && (
              <div className="absolute inset-0 bg-shimmer-gradient animate-shimmer" />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {error ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400">
          <span>Failed to load image</span>
        </div>
      ) : (
        <motion.div
          variants={imageEffects[effect]}
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
          transition={{ duration: 0.5 }}
        >
          <picture>
            {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
            <img
              ref={imgRef}
              src={priority ? (webpSrc || src) : ''}
              srcSet={imageOptimizer.generateSrcSet(webpSrc || src)}
              sizes={imageOptimizer.generateSizes(width)}
              alt={alt}
              width={width}
              height={height}
              loading={priority ? "eager" : "lazy"}
              onLoad={() => setIsLoading(false)}
              onError={() => setError(true)}
              className={`w-full h-full object-cover transition-all duration-300`}
            />
          </picture>
        </motion.div>
      )}
    </div>
  );
} 