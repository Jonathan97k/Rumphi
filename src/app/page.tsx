"use client";

import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import BulkOrderSection from "@/components/BulkOrderSection";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-amber-50">
        <Header />
        <main>
          <Hero />
          <ProductSection />
          <WhyChooseUs />
          <AboutSection />
          <BulkOrderSection />
          <Gallery />
          <HowItWorks />
          <FinalCTA />
        </main>
        <Footer />
        <CartDrawer />
        <MobileBottomBar />
      </div>
    </CartProvider>
  );
}