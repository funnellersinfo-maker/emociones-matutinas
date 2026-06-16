'use client';

import { useState, useEffect, useCallback } from 'react';
import { Header } from '@/components/shop/Header';
import { HeroBanner } from '@/components/shop/HeroBanner';
import { CategoryBar } from '@/components/shop/CategoryBar';
import { ProductGrid } from '@/components/shop/ProductGrid';
import { SpecialSection } from '@/components/shop/SpecialSections';
import { DigitalExperiences } from '@/components/shop/SpecialSections';
import { CartBar } from '@/components/shop/CartBar';
import { CartDrawer } from '@/components/shop/CartDrawer';
import { CheckoutFlow } from '@/components/shop/CheckoutFlow';
import { Footer } from '@/components/shop/Footer';
import { FloatingElements } from '@/components/shop/FloatingElements';
import { useCartStore } from '@/store/cart-store';

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

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const cartItems = useCartStore((s) => s.items);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedCategory !== 'todos') params.set('category', selectedCategory);
      if (searchQuery) params.set('search', searchQuery);

      const res = await fetch(`/api/products?${params.toString()}`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Fetch special sections separately
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [offers, setOffers] = useState<Product[]>([]);
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [digitalProducts, setDigitalProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchSpecialSections() {
      try {
        const [bsRes, offRes, recRes, digRes] = await Promise.all([
          fetch('/api/products?section=bestSellers&category=todos'),
          fetch('/api/products?section=offers&category=todos'),
          fetch('/api/products?section=recommended&category=todos'),
          fetch('/api/products?section=digital&category=todos'),
        ]);
        const [bsData, offData, recData, digData] = await Promise.all([
          bsRes.json(),
          offRes.json(),
          recRes.json(),
          digRes.json(),
        ]);
        setBestSellers(bsData);
        setOffers(offData);
        setRecommended(recData);
        setDigitalProducts(digData);
      } catch (error) {
        console.error('Error fetching special sections:', error);
      }
    }
    fetchSpecialSections();
  }, []);

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const handleCartClick = () => {
    setCartOpen(true);
  };

  const handleCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const handleBackToCart = () => {
    setCheckoutOpen(false);
    setCartOpen(true);
  };

  const showSpecialSections = selectedCategory === 'todos' && !searchQuery;

  return (
    <div className="min-h-screen flex flex-col bg-[#fffbfc] relative">
      <FloatingElements />

      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cartCount}
        onCartClick={handleCartClick}
      />

      <main className="flex-1">
        {/* Hero Banner - only show when not filtering */}
        {selectedCategory === 'todos' && !searchQuery && <HeroBanner />}

        {/* Category Bar */}
        <CategoryBar selected={selectedCategory} onSelect={setSelectedCategory} />

        <div className="max-w-7xl mx-auto px-4">
          {/* Special Sections */}
          {showSpecialSections && (
            <>
              <SpecialSection
                id="mas-vendidos"
                title="Más vendidos"
                subtitle="Los favoritos de nuestros clientes esta semana"
                products={bestSellers}
                gradient="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border border-yellow-100/50"
              />

              <SpecialSection
                id="ofertas"
                title="Promociones del día"
                subtitle="¡Aprovecha estas ofertas antes de que se acaben!"
                products={offers}
                gradient="bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 border border-red-100/50"
              />

              <SpecialSection
                id="recomendados"
                title="Regalos que enamoran"
                subtitle="Selección especial para conquistar corazones"
                products={recommended}
                gradient="bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 border border-pink-100/50"
              />

              <DigitalExperiences products={digitalProducts} />
            </>
          )}

          {/* Main Product Catalog */}
          <ProductGrid
            id="productos"
            products={products}
            title={
              searchQuery
                ? `Resultados para "${searchQuery}"`
                : selectedCategory === 'todos'
                ? 'Todo nuestro catálogo'
                : undefined
            }
            showCount={true}
          />

          {/* Loading state */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-flex items-center gap-2 text-pink-400">
                <div className="w-5 h-5 border-2 border-pink-300 border-t-pink-500 rounded-full animate-spin" />
                <span className="text-sm font-medium">Cargando productos...</span>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Cart Bar (sticky bottom) */}
      <CartBar onClick={handleCartClick} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={handleCheckout}
      />

      {/* Checkout Flow */}
      <CheckoutFlow
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onBack={handleBackToCart}
      />

      {/* Bottom padding for cart bar */}
      {cartItems.length > 0 && <div className="h-20" />}
    </div>
  );
}
