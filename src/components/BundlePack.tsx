"use client";

import React from "react";
import Image from "next/image";
import { FEATURED_BUNDLE } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function BundlePack() {
  const { addItem, triggerFlyingEffect, setIsCartOpen } = useCart();
  const bundle = FEATURED_BUNDLE;

  const handleAddBundle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    triggerFlyingEffect(rect);
    addItem({
      id: bundle.id,
      name: bundle.name,
      price: bundle.price,
      oldPrice: bundle.oldPriceTotal,
      image: bundle.image,
      tagline: bundle.subtitle,
    });
    setTimeout(() => {
      setIsCartOpen(true);
    }, 450);
  };

  return (
    <section id="pack-autonomie" className="py-12 lg:py-16 bg-[#04121E] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-volta-surface border border-volta-surfaceLight text-slate-300 font-anton text-xs font-bold tracking-wider mb-2 shadow">
            <i className="fa-solid fa-crown text-amber-400 text-[11px]"></i>
            Offre groupée exclusive • Pack complet
          </span>
          <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-white tracking-wide">
            Le kit autonomie totale
          </h2>
          <p className="mt-1.5 text-slate-300 text-xs sm:text-sm">
            {bundle.subtitle}
          </p>
        </div>

        {/* Refined & Sleeker Bundle Card */}
        <div className="rounded-2xl bg-gradient-to-b from-volta-surface/90 via-[#072438] to-volta-dark border border-volta-surfaceLight/80 p-5 sm:p-7 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual on Left */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-volta-surfaceLight shadow bg-black">
                <Image
                  src={bundle.image}
                  alt={bundle.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute top-2.5 left-2.5 bg-red-600 text-white font-anton text-xs px-2.5 py-1 rounded font-bold tracking-wider shadow">
                  Pack complet -59%
                </div>
              </div>

              {/* Stock Remaining */}
              <div className="w-full mt-3 p-3 rounded-lg bg-volta-dark/80 border border-volta-surfaceLight/60 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-300 flex items-center gap-1.5">
                  <i className="fa-solid fa-fire text-red-500"></i>
                  Stock disponible :
                </span>
                <span className="font-anton text-sm text-slate-200">
                  {bundle.stockRemaining} packs restants
                </span>
              </div>
            </div>

            {/* Value Stack Details on Right */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-slate-300 block mb-2">
                  Contenu du pack vedette :
                </span>

                <div className="space-y-2 mb-4">
                  {bundle.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-volta-dark/60 border border-volta-surfaceLight/50 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-volta-yellow text-volta-dark font-anton text-[10px] flex items-center justify-center shrink-0 font-black">
                          ✓
                        </span>
                        <div>
                          <span className="font-anton text-white text-xs sm:text-sm tracking-wide">
                            {item.title}
                          </span>
                          <span className="text-slate-400 text-[11px] block">
                            {item.details}
                          </span>
                        </div>
                      </div>
                      <span className={`font-anton text-xs shrink-0 ${
                        item.value === "OFFERTE" ? "text-emerald-400 font-bold" : "text-slate-400"
                      }`}>
                        {item.value === "OFFERTE" ? "Offerte" : item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Compact Price Summary */}
                <div className="p-3.5 rounded-xl bg-volta-surfaceDark border border-volta-surfaceLight mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 line-through block">
                      Valeur cumulée : {bundle.normalValue.toLocaleString("fr-FR")} F (Séparé BF: {bundle.oldPriceTotal.toLocaleString("fr-FR")} F)
                    </span>
                    <span className="font-anton text-2xl sm:text-3xl text-volta-yellow tracking-tight font-black">
                      {bundle.price.toLocaleString("fr-FR")} FCFA
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="bg-emerald-500 text-volta-dark font-anton text-xs px-2.5 py-1 rounded font-black tracking-wider inline-block">
                      Économie totale : 29 100 F
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleAddBundle}
                className="w-full py-3 px-4 rounded-xl bg-volta-yellow hover:bg-volta-yellowHover text-volta-dark font-anton text-base sm:text-lg tracking-wider font-black transition-all yellow-glow flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <i className="fa-solid fa-cart-arrow-down text-base"></i>
                <span>Commander le kit autonomie (19 900 FCFA)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
