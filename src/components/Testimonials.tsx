"use client";

import React, { useState, useEffect, useRef } from "react";
import { REVIEWS } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const total = REVIEWS.length;

  // Auto-scroll carousel every 4.5s
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay, total]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Visible items window (up to 3 items on desktop, 1 on mobile)
  const getVisibleReviews = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(REVIEWS[(currentIndex + i) % total]);
    }
    return items;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section className="py-14 lg:py-20 bg-[#05111C] relative border-t border-volta-surface/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-volta-surface/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-volta-surface border border-volta-surfaceLight text-slate-300 text-xs font-semibold mb-3">
            <span className="text-volta-yellow">★ 4.9/5</span>
            <span>• Basé sur 1 420+ livraisons au Bénin</span>
            <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-400/40">
              Données démo
            </span>
          </div>

          <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-white tracking-wide">
            Ce qu&apos;en disent les utilisateurs au Bénin
          </h2>
          <p className="mt-2 text-slate-300 text-xs sm:text-sm">
            Retours d&apos;expérience sur l&apos;autonomie réelle, la résistance aux coupures et la rapidité des coursiers.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
            setIsAutoPlay(false);
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current !== null) {
              const diff = touchStartX.current - e.changedTouches[0].clientX;
              if (diff > 50) nextSlide();
              if (diff < -50) prevSlide();
              touchStartX.current = null;
            }
            setIsAutoPlay(true);
          }}
        >
          {/* Controls: Left & Right navigation arrows */}
          <div className="flex items-center justify-between absolute -top-12 right-0 gap-2">
            <button
              onClick={prevSlide}
              aria-label="Avis précédent"
              className="w-8 h-8 rounded-lg bg-volta-surface hover:bg-volta-surfaceLight border border-volta-surfaceLight text-slate-300 hover:text-volta-yellow flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="fa-solid fa-chevron-left text-xs"></i>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Avis suivant"
              className="w-8 h-8 rounded-lg bg-volta-surface hover:bg-volta-surfaceLight border border-volta-surfaceLight text-slate-300 hover:text-volta-yellow flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="fa-solid fa-chevron-right text-xs"></i>
            </button>
          </div>

          {/* Carousel Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {visibleReviews.map((review, idx) => (
                <motion.div
                  key={`${review.id}-${currentIndex}`}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className={`p-5 sm:p-6 rounded-xl bg-volta-dark border border-volta-surfaceLight/70 flex flex-col justify-between shadow-lg relative ${
                    idx > 0 ? "hidden md:flex" : "flex"
                  } ${idx === 2 ? "hidden lg:flex" : ""}`}
                >
                  <div>
                    {/* Stars + Location tag */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1 text-volta-yellow text-xs">
                        {[...Array(review.rating)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 bg-volta-surface px-2 py-0.5 rounded">
                        {review.date}
                      </span>
                    </div>

                    {/* Review text */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 italic">
                      &ldquo;{review.comment}&rdquo;
                    </p>
                  </div>

                  {/* Customer details */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <h4 className="font-anton text-sm text-white tracking-wide flex items-center gap-1.5">
                        {review.name}
                        <i className="fa-solid fa-circle-check text-emerald-400 text-[11px]" title="Achat vérifié"></i>
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        {review.profession} • {review.location}
                      </p>
                    </div>
                    <span className="text-[10px] text-volta-yellow/90 font-semibold text-right">
                      {review.product}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Aller à l'avis ${i + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === i ? "w-6 bg-volta-yellow" : "w-2 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Continuous ticker marquee of quick reviews */}
        <div className="mt-8 pt-6 border-t border-volta-surfaceLight/30 overflow-hidden">
          <div className="flex w-max animate-marquee space-x-6 text-xs text-slate-400">
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <div key={i} className="flex items-center gap-2 bg-volta-surfaceDark/80 px-3 py-1.5 rounded-full border border-slate-800">
                <span className="text-volta-yellow font-bold">★ 5.0</span>
                <span className="text-white font-semibold">{r.name} ({r.location}) :</span>
                <span className="italic truncate max-w-xs">&ldquo;{r.comment}&rdquo;</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency note */}
        <p className="mt-4 text-[10px] text-center text-slate-400">
          Avis de démonstration simulant les retours utilisateurs pour la marque prototype VOLTA Bénin.
        </p>
      </div>
    </section>
  );
}
