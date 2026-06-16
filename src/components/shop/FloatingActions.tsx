'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const items = useCartStore((s) => s.items);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Build a personalized WhatsApp message with current cart info
  const getWhatsAppUrl = () => {
    const phone = '573202761748';

    if (items.length === 0) {
      const message = encodeURIComponent(
        'Hola Emociones Matutinas 💝\n\nMe gustaría consultar sobre sus productos y disponibilidad. ¡Gracias!'
      );
      return `https://wa.me/${phone}?text=${message}`;
    }

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const productsList = items
      .map((item) => `  • ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}`)
      .join('\n');

    const message = encodeURIComponent(
      `Hola Emociones Matutinas 💝\n\nQuisiera consultar sobre:\n\n🛍️ PRODUCTOS:\n${productsList}\n\n💰 Total: ${formatPrice(total)}\n\n¡Gracias!`
    );
    return `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-40 right-3 sm:right-5 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-green-400/20 backdrop-blur-md border border-green-400/20 hover:bg-green-400/30 transition-all duration-300 group"
        style={{ bottom: items.length > 0 ? '5.5rem' : '1.5rem' }}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-green-600/60 group-hover:text-green-600/80 transition-colors" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed z-40 right-3 sm:right-5 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-pink-400/15 backdrop-blur-md border border-pink-300/20 hover:bg-pink-400/25 transition-all duration-300 flex items-center justify-center group"
          style={{ bottom: items.length > 0 ? '9rem' : '5rem' }}
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5 text-pink-500/60 group-hover:text-pink-500/80 transition-colors" />
        </button>
      )}
    </>
  );
}
