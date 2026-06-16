'use client';

import { ShoppingCart, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

interface CartBarProps {
  onClick: () => void;
}

export function CartBar({ onClick }: CartBarProps) {
  const { items, getTotalItems, getTotalPrice } = useCartStore();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-gradient-to-t from-white via-white/95 to-transparent pt-8">
      <button
        onClick={onClick}
        className="w-full max-w-2xl mx-auto flex items-center justify-between py-3.5 px-5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl shadow-2xl shadow-pink-400/40 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 w-4.5 h-4.5 bg-white text-pink-500 text-[10px] font-bold rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </div>
          <div className="text-left">
            <span className="text-sm font-semibold">{totalItems} {totalItems === 1 ? 'producto' : 'productos'}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">{formatPrice(totalPrice)}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </button>
    </div>
  );
}
