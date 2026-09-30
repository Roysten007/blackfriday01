"use client";

import React from "react";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-volta-dark via-[#071F30] to-[#04121E] relative overflow-hidden text-center border-t border-volta-surface/70">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-volta-yellow/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-volta-surface border border-volta-surfaceLight text-slate-300 font-anton text-xs font-bold tracking-wider mb-6 shadow-md">
          <i className="fa-solid fa-clock text-amber-400"></i>
          <span>Clôture officielle du Black Friday</span>
        </span>

        <h2 className="font-anton text-3xl sm:text-5xl md:text-6xl text-white tracking-wide leading-tight mb-6">
          Ne laissez plus les délestages bloquer votre quotidien.
        </h2>

        <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Nous ne faisons pas de promotions permanentes toute l&apos;année. Le 30 novembre à 23h59 ou dès que les stocks alloués sont épuisés, les tarifs reviennent strictement à leurs prix initiaux.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#offres"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-volta-yellow hover:bg-volta-yellowHover text-volta-dark font-anton text-base sm:text-lg tracking-wider font-black transition-all yellow-glow hover:yellow-glow-lg text-center cursor-pointer"
          >
            Commander sur le site
          </a>
          <a
            href="https://wa.me/22997000000?text=Bonjour%20VOLTA%2C%20je%20souhaite%20commander%20mes%20produits%20Black%20Friday%20directement."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-anton text-base sm:text-lg tracking-wider font-black transition-all flex items-center justify-center gap-2.5"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
            <span>Commander sur WhatsApp</span>
          </a>
        </div>

        {/* Micro-guarantee */}
        <p className="mt-8 text-xs text-slate-400 font-medium">
          🔒 Paiement à la livraison à Cotonou • Garantie 12 mois avec remplacement immédiat • Zéro risque.
        </p>
      </div>
    </section>
  );
}
