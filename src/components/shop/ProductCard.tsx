'use client';

import Image from 'next/image';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';
import { toast } from 'sonner';

interface Product {
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
}

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    toast.success(`${product.name} agregado al carrito`, {
      duration: 2000,
    });
  };

  // Parse colors to check if options exist
  const hasOptions = (() => {
    try {
      const colors = JSON.parse(product.colors || '[]');
      const sizes = JSON.parse(product.sizes || '[]');
      const combos = JSON.parse(product.combinations || '[]');
      return colors.length > 0 || sizes.length > 0 || combos.length > 0;
    } catch {
      return false;
    }
  })();

  return (
    <div
      className="product-card bg-white rounded-2xl border border-pink-100/50 overflow-hidden group cursor-pointer"
      onClick={() => onProductClick(product)}
    >
      {/* Image area */}
      <div className="relative aspect-square bg-pink-50/30 overflow-hidden">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2 left-2 z-10 px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-bold text-pink-600 shadow-sm">
            {product.badge}
          </div>
        )}

        {/* Offer badge */}
        {product.isOffer && (
          <div className="absolute top-2 right-2 z-10 px-2.5 py-1 bg-red-500 rounded-full text-[10px] font-bold text-white shadow-sm">
            OFERTA
          </div>
        )}

        {/* Product image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        />

        {/* Hover overlay - View detail */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
              <Eye className="w-4 h-4 text-pink-500" />
              <span className="text-xs font-semibold text-gray-700">Ver detalle</span>
            </div>
          </div>
        </div>

        {/* Options indicator */}
        {hasOptions && (
          <div className="absolute top-2 right-2 z-10 px-2 py-1 bg-pink-500/90 rounded-full text-[9px] font-bold text-white shadow-sm">
            + Opciones
          </div>
        )}

        {/* Rating */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 bg-white/95 backdrop-blur-sm rounded-full shadow-sm z-10">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-[10px] font-bold text-gray-700">{product.rating}</span>
        </div>

        {/* Best seller indicator */}
        {product.isBestSeller && (
          <div className="absolute bottom-2 left-2 px-2 py-1 bg-pink-500 rounded-full text-[9px] font-bold text-white shadow-sm z-10 uppercase tracking-wider">
            Best Seller
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 space-y-2">
        <h3 className="font-semibold text-sm sm:text-base text-gray-800 line-clamp-2 leading-tight min-h-[2.5rem]">
          {product.name}
        </h3>
        <p className="text-xs text-gray-400 line-clamp-1">{product.description}</p>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg sm:text-xl font-bold text-pink-600">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-pink-200/50 hover:shadow-pink-300/70 transition-all duration-300 hover:scale-[1.02] active:scale-95"
        >
          <ShoppingCart className="w-4 h-4" />
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export { formatPrice };
export type { Product };
