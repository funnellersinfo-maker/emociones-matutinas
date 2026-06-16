'use client';

import { Search, Star, Gift, Truck, Clock, Heart, Sparkles, MapPin, ShoppingBag } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartCount: number;
  onCartClick: () => void;
}

const marqueeItems = [
  { icon: Star, text: '4.9 de satisfacción', color: 'text-yellow-200' },
  { icon: Gift, text: '+4.000 sorpresas compartidas', color: 'text-white' },
  { icon: Truck, text: 'Entregas programadas en Bogotá', color: 'text-white' },
  { icon: Clock, text: 'Pedidos hasta las 7pm — entrega el mismo día', color: 'text-pink-100' },
  { icon: Sparkles, text: 'Nuevos productos cada semana', color: 'text-yellow-200' },
  { icon: Heart, text: 'Hecho con amor en Colombia', color: 'text-pink-100' },
  { icon: MapPin, text: 'Cobertura toda Bogotá', color: 'text-white' },
  { icon: Star, text: 'Más de 2.000 clientes felices', color: 'text-yellow-200' },
  { icon: Gift, text: 'Dedicatoria gratis en cada pedido', color: 'text-white' },
  { icon: Truck, text: 'Envío express disponible', color: 'text-white' },
];

export function Header({ searchQuery, onSearchChange, cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-pink-100 shadow-sm">
      {/* Marquee Top Bar */}
      <div className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-white text-xs py-1.5 overflow-hidden">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {/* Duplicate the items for seamless loop */}
          {[...marqueeItems, ...marqueeItems].map((item, i) => {
            const Icon = item.icon;
            return (
              <span key={i} className="flex items-center gap-1.5 mx-6">
                <Icon className={`w-3 h-3 flex-shrink-0 ${item.color}`} />
                <span className={item.color}>{item.text}</span>
                <span className="mx-3 text-pink-300/50">•</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-2xl font-bold gradient-text tracking-tight">
              EMOCIONES
            </h1>
            <p className="text-xs sm:text-sm gradient-text font-semibold -mt-1">
              MATUTINAS
            </p>
          </div>

          {/* Search */}
          <div className="flex-1 relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-300" />
            <Input
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="¿Qué regalo estás buscando hoy?"
              className="pl-10 pr-4 py-2.5 bg-pink-50/60 border-pink-200/60 focus:border-pink-400 focus:ring-pink-400/30 rounded-full text-sm placeholder:text-pink-300"
            />
          </div>

          {/* Cart button */}
          <button
            onClick={onCartClick}
            className="relative flex-shrink-0 p-2.5 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors group"
          >
            <ShoppingBag className="w-5 h-5 text-pink-500 group-hover:text-pink-600 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse-soft">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
