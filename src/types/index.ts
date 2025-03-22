export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface ServiceLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Treatment {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
  image?: string;
}

export interface Booking {
  id: string;
  treatmentId: string;
  userId: string;
  locationId: string;
  date: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
  notes?: string;
} 