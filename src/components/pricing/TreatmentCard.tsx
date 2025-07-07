import { OptimizedImage } from '../shared/OptimizedImage';
import { images } from '../../utils/imageAssets';

interface TreatmentCardProps {
  treatment: {
    imageKey: keyof typeof images.treatments;
    [key: string]: any;
  };
}

export const TreatmentCard = ({ treatment }: TreatmentCardProps) => (
  <OptimizedImage
    {...images.treatments[treatment.imageKey]}
    className="w-full h-64 rounded-t-xl"
  />
); 