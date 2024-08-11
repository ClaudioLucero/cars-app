// types/CarFeature.ts

export interface CarFeature {
  name: string;
  description: string;
  image: string;
}

export interface CarouselProps {
  features: CarFeature[];
}
