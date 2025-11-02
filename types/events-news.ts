export interface Event {
  id: number;
  title: string;
  date: string;
  month: string;
  location: string;
  href: string;
  featured?: boolean;
  time?: string;
  description?: string;
}

export interface News {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  href: string;
  category: string;
  content?: string;
  author?: string;
}

export interface NewsCategory {
  id: string;
  label: string;
}
