"use client";

import React from "react";

export default function WhyThesePrices() {
  const reasons = [
    {
      step: "01",
      icon: "fa-solid fa-boxes-packing",
      title: "Fin de série & Renouvellement 2026",
      desc: "Nous déstockons les derniers contingents de notre catalogue 2026 pour libérer nos espaces d'entreposage à Cotonou avant l'arrivée des réassorts 2027. Plutôt que de stocker, nous liquidons au prix coûtant.",
    },
    {
      step: "02",
      icon: "fa-solid fa-handshake",
      title: "Importation directe sans intermédiaire",
      desc: "VOLTA travaille en direct avec les lignes de fabrication certifiées, sans passer par les grossistes importateurs de Dubaï ou de Lagos. Cette économie de marge de 35% à 40% est intégralement répercutée sur votre facture.",
    },
    {
      step: "03",
      icon: "fa-solid fa-calendar-xmark",
      title: "Opération stricte de 4 jours",
      desc: "Cette campagne Black Friday est une vitrine de démonstration pour asseoir la réputation de robustesse de VOLTA au Bénin. Le 30 novembre à 23h59 précises, tous les tarifs reviendront automatiquement à leur niveau normal.",
    },
  ];

  return (
    <section id="pourquoi" className="py-16 lg:py-24 bg-volta-dark relative border-t border-volta-surface/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-anton tracking-wider text-slate-300 bg-volta-surface px-3 py-1 rounded border border-volta-surfaceLight mb-3">
            Transparence totale • Zéro faux rabais
          </span>
          <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl text-white tracking-wide">
            Pourquoi de telles réductions ?
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Vous avez l&apos;habitude des prix barrés fictifs gonflés la veille pour faire croire à une fausse réduction. Chez Volta, nos prix normaux sont réels toute l&apos;année. Voici comment nous rendons ces prix possibles :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((r, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-volta-surfaceDark border border-volta-surfaceLight/70 hover:border-volta-surfaceLight transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-volta-surface flex items-center justify-center text-slate-300 text-xl group-hover:scale-110 transition-transform">
                    <i className={r.icon}></i>
                  </div>
                  <span className="font-anton text-2xl text-slate-600 group-hover:text-slate-400 transition-colors">
                    {r.step}
                  </span>
                </div>
                <h3 className="font-anton text-xl text-white mb-3 tracking-wide">
                  {r.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-bold text-slate-400 tracking-wider flex items-center gap-1.5">
                <i className="fa-solid fa-check text-[10px] text-emerald-400"></i>
                <span>Engagement officiel Volta Bénin</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
