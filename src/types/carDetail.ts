// types/carDetail.ts
export interface CarFeature {
  name: string;
  description: string;
  image: string;
}

export interface CarHighlight {
  title: string;
  content: string;
  image: string;
}

export interface CarDetail {
  id: number;
  name: string;
  segment: string;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
  title: string;
  description: string;
  model_features: CarFeature[];
  model_highlights: CarHighlight[];
}
