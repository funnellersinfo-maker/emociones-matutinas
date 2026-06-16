'use client';

import { useState, useMemo } from 'react';
import { Header } from '@/components/shop/Header';
import { HeroBanner } from '@/components/shop/HeroBanner';
import { CategoryBar } from '@/components/shop/CategoryBar';
import { ProductGrid } from '@/components/shop/ProductGrid';
import { SpecialSection } from '@/components/shop/SpecialSections';
import { DigitalExperiences } from '@/components/shop/SpecialSections';
import { CartBar } from '@/components/shop/CartBar';
import { CartDrawer } from '@/components/shop/CartDrawer';
import { CheckoutFlow } from '@/components/shop/CheckoutFlow';
import { ProductDetail } from '@/components/shop/ProductDetail';
import { Footer } from '@/components/shop/Footer';
import { FloatingElements } from '@/components/shop/FloatingElements';
import { FloatingActions } from '@/components/shop/FloatingActions';
import { useCartStore } from '@/store/cart-store';
import { allProducts, filterProducts, Product } from '@/lib/products-data';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const cartItems = useCartStore((s) => s.items);

  // Client-side filtering for main product catalog
  const products = useMemo(
    () => filterProducts(allProducts, selectedCategory, searchQuery),
    [selectedCategory, searchQuery]
  );

  // Client-side filtering for special sections
  const bestSellers = useMemo(
    () => allProducts.filter(p => p.isBestSeller),
    []
  );
  const offers = useMemo(
    () => allProducts.filter(p => p.isOffer),
    []
  );
  const recommended = useMemo(
    () => allProducts.filter(p => p.isRecommended),
    []
  );
  const digitalProducts = useMemo(
    () => allProducts.filter(p => p.isDigitalExperience),
    []
  );

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

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setDetailOpen(true);
  };

  const handleDetailClose = () => {
    setDetailOpen(false);
    setSelectedProduct(null);
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
                onProductClick={handleProductClick}
              />

              <SpecialSection
                id="ofertas"
                title="Promociones del día"
                subtitle="¡Aprovecha estas ofertas antes de que se acaben!"
                products={offers}
                gradient="bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 border border-red-100/50"
                onProductClick={handleProductClick}
              />

              <SpecialSection
                id="recomendados"
                title="Regalos que enamoran"
                subtitle="Selección especial para conquistar corazones"
                products={recommended}
                gradient="bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 border border-pink-100/50"
                onProductClick={handleProductClick}
              />

              <DigitalExperiences products={digitalProducts} onProductClick={handleProductClick} />
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
            onProductClick={handleProductClick}
          />
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

      {/* Product Detail Modal */}
      <ProductDetail
        product={selectedProduct}
        isOpen={detailOpen}
        onClose={handleDetailClose}
      />

      {/* Bottom padding for cart bar */}
      {cartItems.length > 0 && <div className="h-20" />}

      {/* Floating WhatsApp + Scroll to Top */}
      <FloatingActions />
    </div>
  );
}
