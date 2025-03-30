import { imageOptimizer } from './imageOptimization';

// Define image metadata for better optimization
interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
}

export const images = {
  logo: {
    main: {
      src: '/images/logo/logo.png',
      width: 200,
      height: 60,
      alt: 'Skin & Body Fitness Logo',
      priority: true
    } as ImageMetadata,
    favicon: '/images/logo/favicon.ico',
  },
  treatments: {
    fatFreezing: {
      src: '/images/treatments/fat-freezing.jpg',
      width: 800,
      height: 600,
      alt: 'Fat Freezing Treatment',
    } as ImageMetadata,
    injections: {
      src: '/images/treatments/injections.jpg',
      width: 800,
      height: 600,
      alt: 'Slimming Injections Treatment',
    } as ImageMetadata,
    sauna: {
      src: '/images/treatments/sauna.jpg',
      width: 800,
      height: 600,
      alt: 'Infrared Sauna Treatment',
    } as ImageMetadata,
  },
  beforeAfter: {
    result1: {
      before: {
        src: '/images/before-after/result1-before.jpg',
        width: 600,
        height: 800,
        alt: 'Before Treatment',
      } as ImageMetadata,
      after: {
        src: '/images/before-after/result1-after.jpg',
        width: 600,
        height: 800,
        alt: 'After Treatment',
      } as ImageMetadata,
    },
    // Add more results...
  },
  testimonials: {
    client1: '/images/testimonials/client1.jpg',
    // Add more testimonials...
  },
  branch: {
    johannesburg: '/images/branch/johannesburg.jpg',
    capetown: '/images/branch/capetown.jpg',
  }
};

// Preload critical images
const criticalImages = [
  images.logo.main.src,
  // Add other critical images
];

imageOptimizer.preloadImages(criticalImages); 