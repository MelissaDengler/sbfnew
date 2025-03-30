import { OptimizedImage } from '../shared/OptimizedImage';

// Inside the component JSX where you want to show images
<OptimizedImage 
  {...images.treatments[treatment.imageKey]}
  className="w-full h-64 rounded-t-xl"
/> 