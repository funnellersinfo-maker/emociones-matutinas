'use client';

import { Phone, Mail, MapPin, Clock, Heart, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-pink-50 border-t border-pink-100/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold gradient-text mb-2">EMOCIONES MATUTINAS</h3>
            <p className="text-sm text-gray-400 mb-3">Hacemos felices a quienes más amas</p>
            <p className="text-xs text-gray-300">Regalos, desayunos y sorpresas para cualquier ocasión en Bogotá.</p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-gray-700 text-sm mb-3">Categorías</h4>
            <div className="space-y-1.5">
              {['Peluches', 'Flores', 'Desayunos', 'Globos', 'Cumpleaños', 'Aniversarios', 'Personalizados', 'Sorpresas'].map((cat) => (
                <p key={cat} className="text-xs text-gray-400 hover:text-pink-500 cursor-pointer transition-colors">{cat}</p>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-gray-700 text-sm mb-3">Información</h4>
            <div className="space-y-1.5">
              {['Sobre nosotros', 'Política de envío', 'Preguntas frecuentes', 'Términos y condiciones', 'Contacto'].map((item) => (
                <p key={item} className="text-xs text-gray-400 hover:text-pink-500 cursor-pointer transition-colors">{item}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-700 text-sm mb-3">Contáctanos</h4>
            <div className="space-y-2">
              <a
                href="https://wa.me/573202761748?text=Hola%20Emociones%20Matutinas%20💝%20Me%20gustaría%20consultar%20sobre%20sus%20productos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-pink-500 flex items-center gap-2 transition-colors"
                aria-label="Contactar por WhatsApp: +57 320 276 1748"
              >
                <Phone className="w-3 h-3 flex-shrink-0" /> WhatsApp: +57 320 276 1748
              </a>
              <a
                href="mailto:funnellers.info@gmail.com"
                className="text-xs text-gray-400 hover:text-pink-500 flex items-center gap-2 transition-colors break-all"
                aria-label="Enviar correo electrónico"
              >
                <Mail className="w-3 h-3 flex-shrink-0" /> funnellers.info@gmail.com
              </a>
              <p className="text-xs text-gray-400 flex items-center gap-2">
                <MapPin className="w-3 h-3 flex-shrink-0" /> Bogotá, Colombia
              </p>
              <p className="text-xs text-gray-400 flex items-center gap-2">
                <Clock className="w-3 h-3 flex-shrink-0" /> L-S 7am-7pm, Dom 8am-5pm
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-pink-100/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-300">
            &copy; 2025 Emociones Matutinas. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Media */}
            <a
              href="https://instagram.com/emocionesmatutinas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition-colors"
              aria-label="Síguenos en Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com/emocionesmatutinas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition-colors"
              aria-label="Síguenos en Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-300">Hecho con</span>
              <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
              <span className="text-xs text-gray-300">en Bogotá</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
