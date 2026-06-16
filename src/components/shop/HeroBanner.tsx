'use client';

import Image from 'next/image';

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px]">
        <Image
          src="/hero-banner.png"
          alt="Emociones Matutinas - Regalos y Sorpresas"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 via-pink-800/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
          <div className="max-w-lg space-y-4 sm:space-y-6">
            {/* Floating hearts decoration */}
            <div className="flex items-center gap-2">
              <span className="animate-float text-2xl" style={{ animationDelay: '0s' }}>💝</span>
              <span className="animate-float text-lg" style={{ animationDelay: '0.5s' }}>✨</span>
              <span className="animate-float text-xl" style={{ animationDelay: '1s' }}>💝</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              Haz sonreír a quien más amas <span className="inline-block animate-pulse-soft">💝</span>
            </h2>

            <p className="text-base sm:text-lg text-pink-100/90 leading-relaxed drop-shadow">
              Regalos, desayunos y sorpresas para cualquier ocasión.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#productos"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                🎁 Comprar ahora
              </a>
              <a
                href="#mas-vendidos"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 transition-all duration-300 text-sm sm:text-base"
              >
                ⭐ Más vendidos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto fill-[#fffbfc]">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
