export interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  client: string;
  completionDate: string;
  image: string;
  gallery: string[];
  challenge: string;
  solution: string;
  results: string;
  testimonial: Testimonial;
}

export interface Category {
  id: string;
  name: string;
}