export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  image: string;
  gallery: string[];
  badge: string;
  shortDescription: string;
  description: string;
  features: string[];
  material: string;
  sizes: string[];
  colors: string[];
  specifications: Record<string, string>;
  care: string[];
  bestSeller: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}
