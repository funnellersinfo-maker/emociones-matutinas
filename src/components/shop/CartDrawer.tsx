'use client';

import { ShoppingCart, Minus, Plus, X, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

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

export function CartDrawer({ isOpen, onClose, onCheckout }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems, clearCart } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-pink-100">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-pink-500" />
            <h2 className="text-lg font-bold text-gray-800">
              Tu carrito <span className="text-pink-400">({getTotalItems()})</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-pink-50 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <span className="text-5xl block mb-4">🛒</span>
              <p className="text-gray-400 font-medium">Tu carrito está vacío</p>
              <p className="text-gray-300 text-sm mt-1">¡Agrega algo bonito!</p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors"
              >
                Explorar productos
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-pink-50/50 rounded-xl border border-pink-100/50"
              >
                {/* Product emoji */}
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-2xl">{categoryEmojis[item.category] || '🎁'}</span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-800 truncate">{item.name}</h4>
                  <p className="text-sm font-bold text-pink-500">{formatPrice(item.price)}</p>
                </div>

                {/* Quantity controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-full bg-white border border-pink-200 flex items-center justify-center hover:bg-pink-50 transition-colors"
                  >
                    <Minus className="w-3 h-3 text-pink-500" />
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-gray-700">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 rounded-full bg-white border border-pink-200 flex items-center justify-center hover:bg-pink-50 transition-colors"
                  >
                    <Plus className="w-3 h-3 text-pink-500" />
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-1.5 rounded-full hover:bg-red-50 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-300 hover:text-red-400" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-pink-100 p-4 space-y-3 bg-white">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">Total:</span>
              <span className="text-2xl font-bold text-pink-600">{formatPrice(getTotalPrice())}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-xl shadow-lg shadow-pink-200/50 transition-all duration-300 hover:scale-[1.02]"
            >
              Continuar compra
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={clearCart}
              className="w-full text-center text-xs text-gray-400 hover:text-gray-500 py-1 transition-colors"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
}
