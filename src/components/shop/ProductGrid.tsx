'use client';

import { Search, Package } from 'lucide-react';
import { ProductCard, Product } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  title?: string;
  id?: string;
  showCount?: boolean;
  onProductClick?: (product: Product) => void;
}

export function ProductGrid({ products, title, id, showCount, onProductClick }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-pink-50 rounded-full flex items-center justify-center">
          <Search className="w-8 h-8 text-pink-200" />
        </div>
        <p className="text-gray-400 text-lg">No se encontraron productos</p>
        <p className="text-gray-300 text-sm">Intenta con otra categoría o búsqueda</p>
      </div>
    );
  }

  return (
    <section id={id} className="py-6 sm:py-8">
      {title && (
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <Package className="w-6 h-6 text-pink-400" />
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
          <ProductCard key={product.id} product={product} onProductClick={onProductClick || (() => {})} />
        ))}
      </div>
    </section>
  );
}
