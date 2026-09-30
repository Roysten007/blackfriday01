"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative pt-14 pb-16 lg:pt-24 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#06080F] via-[#041422] to-[#06080F]">
      {/* Halo lumineux d'ambiance en arrière-plan */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-volta-surface/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-[#0c2b42]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Badge d'urgence centré */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/50 text-red-300 text-xs sm:text-sm font-semibold shadow-sm mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping shrink-0" />
          <span>Black Friday Bénin • Stocks limités au dépôt de Cotonou</span>
        </div>

        {/* Titre centré épuré */}
        <h1 className="font-anton text-[clamp(1.5rem,4.2vw,3.5rem)] text-white tracking-tight leading-[1.2] mb-5 text-center">
          <span className="block whitespace-nowrap">L&apos;électronique qui tient sa promesse,</span>
          <span className="block whitespace-nowrap text-slate-200">même en plein délestage.</span>
        </h1>

        {/* Phrase courte, humaine et directe */}
        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-normal text-center">
          Des équipements fiables et durables, conçus pour le quotidien à Cotonou.
        </p>

      </div>
    </section>
  );
}
