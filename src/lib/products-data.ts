import products from '../../public/products-data.json';

export type Product = {
  id: string;
  name: string;
  description: string;
  detailDescription: string;
  price: number;
  category: string;
  badge: string | null;
  rating: number;
  image: string;
  images: string;
  colors: string;
  sizes: string;
  features: string;
  combinations: string;
  isBestSeller: boolean;
  isOffer: boolean;
  isRecommended: boolean;
  isDigitalExperience: boolean;
  originalPrice: number | null;
};

export const allProducts: Product[] = products as Product[];

export const filterProducts = (products: Product[], category: string, search: string): Product[] => {
  let filtered = products;
  if (category && category !== 'todos') {
    filtered = filtered.filter(p => p.category === category);
  }
  if (search) {
    const s = search.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(s) || p.description.toLowerCase().includes(s)
    );
  }
  return filtered;
};
