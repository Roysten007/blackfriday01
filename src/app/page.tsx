"use client";

import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import ProductGrid from "@/components/ProductGrid";
import BundlePack from "@/components/BundlePack";
import WhyThesePrices from "@/components/WhyThesePrices";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import MobileStickyBar from "@/components/MobileStickyBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FlyToCartOverlay from "@/components/FlyToCartOverlay";

export default function Home() {
  return (
    <div className="min-h-screen bg-volta-dark text-slate-100 flex flex-col relative selection:bg-volta-yellow selection:text-volta-dark">
      {/* 1. Sticky announcement bar with live countdown */}
      <AnnouncementBar />

      {/* 2. Sleek Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 3. Hero section with word-by-word title & animated price countdown */}
        <Hero />

        {/* 4. Trust bar with 24h Cotonou delivery & marquee */}
        <TrustBar />

        {/* 5. Specific problem in Benin & Turnaround */}
        <ProblemSection />

        {/* 6. Grid of the 6 Black Friday offers */}
        <ProductGrid />

        {/* 7. Featured Bundle "Kit Autonomie" (Hormozi value stack) */}
        <BundlePack />

        {/* 8. "Pourquoi ces prix ?" - 3 transparent reasons */}
        <WhyThesePrices />

        {/* 9. Verified Customer Reviews (marked demo) */}
        <Testimonials />

        {/* 10. Anti-objection FAQ */}
        <FAQ />

        {/* 11. Final Urgency CTA */}
        <FinalCTA />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive & Functional Elements */}
      <CartDrawer />
      <MobileStickyBar />
      <FloatingWhatsApp />
      <FlyToCartOverlay />
    </div>
  );
}
