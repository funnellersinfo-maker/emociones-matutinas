'use client';

import { Music, QrCode, Video, Mail, Sparkles } from 'lucide-react';
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

interface SpecialSectionProps {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
  gradient: string;
}

export function SpecialSection({ id, title, subtitle, products, gradient }: SpecialSectionProps) {
  if (products.length === 0) return null;

  return (
    <section id={id} className="py-6 sm:py-8">
      <div className={`rounded-3xl ${gradient} p-4 sm:p-6`}>
        {/* Section header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          </div>
          <button className="text-sm text-pink-500 hover:text-pink-600 font-semibold transition-colors">
            Ver todos →
          </button>
        </div>

        {/* Horizontal scrollable products */}
        <div className="flex gap-3 sm:gap-4 overflow-x-auto hide-scrollbar pb-2">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[180px] sm:w-[200px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface DigitalExperiencesProps {
  products: Product[];
}

const digitalItems = [
  { icon: Music, name: 'Canción Personalizada', desc: 'Una canción original creada solo para ti', color: 'from-violet-500 to-purple-500' },
  { icon: QrCode, name: 'Experiencia QR', desc: 'Página web personalizada con código QR', color: 'from-blue-500 to-cyan-500' },
  { icon: Video, name: 'Video Sorpresa', desc: 'Video editado con fotos y mensajes de seres queridos', color: 'from-pink-500 to-rose-500' },
  { icon: Mail, name: 'Carta Interactiva', desc: 'Carta digital con animaciones y música personalizada', color: 'from-amber-500 to-orange-500' },
];

export function DigitalExperiences({ products }: DigitalExperiencesProps) {
  return (
    <section id="digitales" className="py-6 sm:py-8">
      <div className="rounded-3xl bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 p-4 sm:p-6 border border-violet-100/50">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-7 h-7 text-violet-500" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Experiencias Digitales</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4 sm:mb-6">Sorpresas digitales que conquistan corazones a distancia</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {digitalItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="relative overflow-hidden rounded-2xl p-4 sm:p-5 text-white shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${item.color} absolute inset-0`} />
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base">{item.name}</h3>
                  <p className="text-[10px] sm:text-xs opacity-80 mt-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {products.length > 0 && (
          <div className="flex gap-3 sm:gap-4 overflow-x-auto hide-scrollbar pb-2">
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[180px] sm:w-[200px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
