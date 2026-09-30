"use client";

import React from "react";

export default function TrustBar() {
  const advantages = [
    {
      icon: "fa-solid fa-truck-fast",
      title: "Livraison Cotonou 24h",
      desc: "Expédié à domicile ou au bureau sous 24h (Cotonou, Calavi, Porto-Novo).",
    },
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: "Paiement MTN & Moov Money",
      desc: "Réglez à la livraison en espèces ou par Mobile Money sans aucun frais supplémentaire.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Garantie 12 Mois Échange",
      desc: "Zéro réparation interminable : échange direct à neuf en 24h à Cotonou.",
    },
    {
      icon: "fa-solid fa-rotate-left",
      title: "Essai Satisfait 7 Jours",
      desc: "Testez l'appareil chez vous. Si la promesse n'est pas tenue, remboursement intégral.",
    },
  ];

  const marqueeItems = [
    "Livraison Cotonou 24h",
    "Paiement MTN & Moov Money",
    "Garantie 12 mois directe",
    "Puces GaN certifiées",
    "Cellules lithium haute densité",
    "Aucun faux prix barré",
    "Stocks démo limités",
  ];

  return (
    <section className="relative border-y border-volta-surface/70 bg-[#05111B] py-8 overflow-hidden">
      {/* Advantage Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-volta-surface/40 border border-volta-surfaceLight/50 hover:border-volta-yellow/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-volta-surface flex items-center justify-center mb-4 text-volta-yellow group-hover:scale-110 transition-transform">
                <i className={`${item.icon} text-xl`}></i>
              </div>
              <h3 className="font-anton text-lg text-white tracking-wide mb-1.5">
                {item.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Scrolling Marquee Banner */}
      <div className="relative w-full overflow-hidden bg-volta-surfaceDark border-y border-volta-surfaceLight/40 py-3">
        <div className="flex w-max animate-marquee space-x-8">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((text, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-anton tracking-wide text-slate-300">
              <span className="text-volta-yellow">⚡</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
