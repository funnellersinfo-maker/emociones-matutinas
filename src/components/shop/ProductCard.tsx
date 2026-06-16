'use client';

import { ShoppingCart, Star } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';
import { toast } from 'sonner';

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

interface ProductCardProps {
  product: Product;
}

const categoryGradients: Record<string, string> = {
  peluches: 'from-amber-100 via-orange-50 to-yellow-100',
  flores: 'from-rose-100 via-pink-50 to-red-50',
  desayunos: 'from-yellow-100 via-amber-50 to-orange-50',
  globos: 'from-blue-100 via-cyan-50 to-sky-50',
  cumpleanos: 'from-purple-100 via-pink-50 to-fuchsia-50',
  aniversarios: 'from-rose-100 via-red-50 to-pink-50',
  personalizados: 'from-violet-100 via-purple-50 to-indigo-50',
  sorpresas: 'from-emerald-100 via-teal-50 to-cyan-50',
};

const categoryEmojis: Record<string, string> = {
  peluches: '🧸',
  flores: '🌹',
  desayunos: '🎂',
  globos: '🎈',
  cumpleanos: '🎁',
  aniversarios: '💝',
  personalizados: '✨',
  sorpresas: '🎉',
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    toast.success(`${product.name} agregado al carrito 💝`, {
      duration: 2000,
    });
  };

  const gradient = categoryGradients[product.category] || 'from-pink-100 via-rose-50 to-pink-50';
  const emoji = categoryEmojis[product.category] || '🎁';

  return (
    <div className="product-card bg-white rounded-2xl border border-pink-100/50 overflow-hidden group">
      {/* Image area */}
      <div className={`relative bg-gradient-to-br ${gradient} p-4 pb-3`}>
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-pink-600 shadow-sm z-10">
            {product.badge}
          </div>
        )}

        {/* Offer badge */}
        {product.isOffer && (
          <div className="absolute top-2 right-2 px-2 py-0.5 bg-red-500 rounded-full text-[10px] font-bold text-white shadow-sm z-10">
            OFERTA 🔥
          </div>
        )}

        {/* Emoji placeholder */}
        <div className="flex items-center justify-center h-36 sm:h-40">
          <span className="text-6xl sm:text-7xl group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
            {emoji}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 px-1.5 py-0.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-[10px] font-bold text-gray-700">{product.rating}</span>
        </div>
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

export { formatPrice, categoryGradients, categoryEmojis };
