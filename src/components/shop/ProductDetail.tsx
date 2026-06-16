'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Star, ShoppingCart, Heart, Share2, Check, ChevronRight, Sparkles, Palette, Ruler, Package } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';
import { toast } from 'sonner';

interface ColorOption {
  name: string;
  hex: string;
}

interface SizeOption {
  name: string;
  priceDiff: number;
}

interface Feature {
  icon: string;
  text: string;
}

interface Combination {
  name: string;
  priceDiff: number;
  description: string;
}

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

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

const categoryImages: Record<string, string> = {
  peluches: '/products/peluche_1.png',
  flores: '/products/flor_1.png',
  desayunos: '/products/desayuno_1.png',
  globos: '/products/globo_1.png',
  cumpleanos: '/products/cumple_1.png',
  aniversarios: '/products/aniversario_1.png',
  personalizados: '/products/personalizado_1.png',
  sorpresas: '/products/sorpresa_1.png',
};

const featureIcons: Record<string, string> = {
  'handmade': 'Hecho a mano',
  'premium': 'Material premium',
  'delivery': 'Entrega programada',
  'card': 'Tarjeta dedicatoria',
  'box': 'Caja regalo',
  'photo': 'Foto personalizable',
  'fresh': 'Producto fresco',
  'wrapping': 'Envoltura elegante',
};

export function ProductDetail({ product, isOpen, onClose }: ProductDetailProps) {
  const addItem = useCartStore((s) => s.addItem);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedCombos, setSelectedCombos] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!isOpen || !product) return null;

  // Parse JSON fields safely
  const parseJSON = <T,>(str: string, fallback: T): T => {
    try {
      return JSON.parse(str) as T;
    } catch {
      return fallback;
    }
  };

  const colors: ColorOption[] = parseJSON(product.colors, []);
  const sizes: SizeOption[] = parseJSON(product.sizes, []);
  const features: Feature[] = parseJSON(product.features, []);
  const combinations: Combination[] = parseJSON(product.combinations, []);
  const allImages: string[] = parseJSON(product.images, []);

  const displayImages = allImages.length > 0 ? allImages : [product.image || categoryImages[product.category] || '/products/peluche_1.png'];

  // Calculate total price with options
  const getSizeDiff = () => {
    if (!selectedSize) return 0;
    const size = sizes.find(s => s.name === selectedSize);
    return size?.priceDiff || 0;
  };

  const getComboDiff = () => {
    return selectedCombos.reduce((sum, comboName) => {
      const combo = combinations.find(c => c.name === comboName);
      return sum + (combo?.priceDiff || 0);
    }, 0);
  };

  const totalPrice = product.price + getSizeDiff() + getComboDiff();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: totalPrice,
      image: product.image,
      category: product.category,
      selectedColor: selectedColor || undefined,
      selectedSize: selectedSize || undefined,
      selectedCombos: selectedCombos.length > 0 ? selectedCombos : undefined,
    });
    toast.success(`${product.name} agregado al carrito`, {
      duration: 2500,
      description: selectedColor ? `Color: ${selectedColor}` : undefined,
    });
    onClose();
  };

  const toggleCombo = (name: string) => {
    setSelectedCombos(prev =>
      prev.includes(name)
        ? prev.filter(n => n !== name)
        : [...prev, name]
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
        <div className="w-full sm:max-w-2xl bg-white sm:rounded-3xl rounded-t-3xl max-h-[95vh] flex flex-col shadow-2xl animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-pink-100">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-xs font-medium text-pink-400 uppercase tracking-wider">Detalle del producto</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-2 rounded-full hover:bg-pink-50 transition-colors"
              >
                <Heart className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-pink-500 text-pink-500' : 'text-gray-300'}`} />
              </button>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: product.name, text: product.description, url: window.location.href });
                  }
                }}
                className="p-2 rounded-full hover:bg-pink-50 transition-colors"
              >
                <Share2 className="w-5 h-5 text-gray-300" />
              </button>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-pink-50 transition-colors">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Image Gallery */}
            <div className="relative">
              <div className="relative aspect-[4/3] bg-pink-50/30 overflow-hidden">
                <Image
                  src={displayImages[currentImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 640px"
                  priority
                />
                {/* Badges */}
                {product.badge && (
                  <div className="absolute top-3 left-3 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-pink-600 shadow-sm">
                    {product.badge}
                  </div>
                )}
                {product.isOffer && (
                  <div className="absolute top-3 right-3 px-3 py-1.5 bg-red-500 rounded-full text-xs font-bold text-white shadow-sm">
                    OFERTA
                  </div>
                )}
              </div>

              {/* Thumbnail strip */}
              {displayImages.length > 1 && (
                <div className="flex gap-2 p-3 overflow-x-auto hide-scrollbar bg-pink-50/20">
                  {displayImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                        i === currentImageIndex ? 'border-pink-400 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" sizes="64px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-5 sm:p-6 space-y-5">
              {/* Name & Rating */}
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">{product.name}</h2>
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-yellow-50 rounded-full flex-shrink-0">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-yellow-700">{product.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-1">{product.description}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-pink-600">{formatPrice(totalPrice)}</span>
                {product.originalPrice && (
                  <span className="text-base text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                )}
                {(getSizeDiff() + getComboDiff()) > 0 && (
                  <span className="text-xs text-gray-400">(precio base: {formatPrice(product.price)})</span>
                )}
              </div>

              {/* Detail Description */}
              {product.detailDescription && (
                <div className="bg-pink-50/50 rounded-2xl p-4">
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{product.detailDescription}</p>
                </div>
              )}

              {/* Features */}
              {features.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Package className="w-4 h-4 text-pink-400" />
                    <h3 className="text-sm font-bold text-gray-700">Incluye</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-pink-100/50">
                        <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selector */}
              {colors.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Palette className="w-4 h-4 text-pink-400" />
                    <h3 className="text-sm font-bold text-gray-700">Color</h3>
                    {selectedColor && <span className="text-xs text-pink-400 ml-1">— {selectedColor}</span>}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 transition-all text-sm font-medium ${
                          selectedColor === color.name
                            ? 'border-pink-400 bg-pink-50 text-pink-700 shadow-sm'
                            : 'border-pink-100 bg-white text-gray-600 hover:border-pink-200'
                        }`}
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-gray-200 flex-shrink-0 shadow-inner"
                          style={{ backgroundColor: color.hex }}
                        />
                        {color.name}
                        {selectedColor === color.name && (
                          <Check className="w-3.5 h-3.5 text-pink-500" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {sizes.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Ruler className="w-4 h-4 text-pink-400" />
                    <h3 className="text-sm font-bold text-gray-700">Tamaño</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size.name}
                        onClick={() => setSelectedSize(size.name)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 transition-all text-sm font-medium ${
                          selectedSize === size.name
                            ? 'border-pink-400 bg-pink-50 text-pink-700 shadow-sm'
                            : 'border-pink-100 bg-white text-gray-600 hover:border-pink-200'
                        }`}
                      >
                        {size.name}
                        {size.priceDiff > 0 && (
                          <span className="text-xs text-gray-400">+{formatPrice(size.priceDiff)}</span>
                        )}
                        {selectedSize === size.name && (
                          <Check className="w-3.5 h-3.5 text-pink-500" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Combinations / Add-ons */}
              {combinations.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-pink-400" />
                    <h3 className="text-sm font-bold text-gray-700">Combinaciones y complementos</h3>
                  </div>
                  <div className="space-y-2">
                    {combinations.map((combo) => (
                      <button
                        key={combo.name}
                        onClick={() => toggleCombo(combo.name)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${
                          selectedCombos.includes(combo.name)
                            ? 'border-pink-400 bg-pink-50'
                            : 'border-pink-100/50 bg-white hover:border-pink-200'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 ${
                          selectedCombos.includes(combo.name) ? 'border-pink-400 bg-pink-400' : 'border-gray-300'
                        }`}>
                          {selectedCombos.includes(combo.name) && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">{combo.name}</span>
                            <span className="text-sm font-bold text-pink-500">+{formatPrice(combo.priceDiff)}</span>
                          </div>
                          {combo.description && (
                            <p className="text-xs text-gray-400 mt-0.5">{combo.description}</p>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-3">Cantidad</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-xl border border-pink-200 flex items-center justify-center hover:bg-pink-50 transition-colors text-pink-500 font-bold"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-lg font-bold text-gray-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-xl border border-pink-200 flex items-center justify-center hover:bg-pink-50 transition-colors text-pink-500 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Add to Cart */}
          <div className="border-t border-pink-100 p-4 bg-white/95 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="text-xs text-gray-400">Total</div>
                <div className="text-xl font-bold text-pink-600">{formatPrice(totalPrice * quantity)}</div>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-[2] flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-xl shadow-lg shadow-pink-200/50 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <ShoppingCart className="w-5 h-5" />
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
