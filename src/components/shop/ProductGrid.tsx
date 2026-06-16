'use client';

import { ProductCard } from './ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  badge: string | null;
  rating: number;
  image: string;
  isBestSeller: boolean;
  isOffer: boolean;
  isRecommended: boolean;
  isDigitalExperience: boolean;
  originalPrice: number | null;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
  emoji?: string;
  id?: string;
  showCount?: boolean;
}

export function ProductGrid({ products, title, emoji, id, showCount }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <span className="text-4xl mb-4 block">🔍</span>
        <p className="text-gray-400 text-lg">No se encontraron productos</p>
        <p className="text-gray-300 text-sm">Intenta con otra categoría o búsqueda</p>
      </div>
    );
  }

  return (
    <section id={id} className="py-6 sm:py-8">
      {title && (
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <span className="text-2xl sm:text-3xl">{emoji}</span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h2>
          {showCount && (
            <span className="text-sm text-pink-400 font-medium ml-2">
              ({products.length} productos)
            </span>
          )}
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
