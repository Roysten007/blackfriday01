"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProblemSection() {
  const painPoints = [
    {
      emoji: "fa-solid fa-battery-quarter",
      title: "La batterie '30 000 mAh' qui meurt en 1 charge",
      story: "Coupure SBEE inopinée : la batterie externe achetée au marché est vide après seulement 40 minutes sans recharger votre téléphone à moitié.",
    },
    {
      emoji: "fa-solid fa-volume-xmark",
      title: "Les écouteurs qui coupent en plein appel urgent",
      story: "En pleine conversation professionnelle, 'Battery Low' retentit au bout de 90 minutes. Zéro réduction de bruit, micro inaudible avec le vent.",
    },
    {
      emoji: "fa-solid fa-fire-burner",
      title: "Le chargeur brûlant qui détruit votre batterie",
      story: "Le bloc chauffe excessivement, fait grésiller les prises et détériore la santé de votre smartphone à chaque cycle de charge.",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-volta-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-[11px] font-anton tracking-wider text-slate-300 bg-volta-surface px-3 py-1 rounded border border-volta-surfaceLight mb-2.5">
            Réalité du terrain à Cotonou
          </span>
          <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-white tracking-wide">
            Vous aussi, vous avez déjà vécu ça ?
          </h2>
          <p className="mt-2 text-slate-300 text-xs sm:text-sm">
            Au Bénin, la chaleur, l&apos;humidité et les coupures révèlent immédiatement la fragilité des contrefaçons.
          </p>
        </div>

        {/* 3 Situations concrètes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="p-5 rounded-xl bg-volta-surfaceDark border border-red-500/20 hover:border-red-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-500/30 flex items-center justify-center text-red-400 mb-3.5 text-base">
                  <i className={point.emoji}></i>
                </div>
                <h3 className="font-anton text-base sm:text-lg text-white mb-2 leading-snug">
                  {point.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {point.story}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Le Retournement - Refined, Sleek Strip */}
        <div className="rounded-xl p-5 sm:p-6 bg-gradient-to-r from-volta-surface/80 via-[#07253a] to-volta-dark border border-volta-surfaceLight/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold text-slate-300 tracking-wider block mb-1">
              La vérité Volta
            </span>
            <h3 className="font-anton text-lg sm:text-xl text-white tracking-wide leading-tight">
              Le problème n&apos;est pas votre smartphone. Ce sont les accessoires au rabais.
            </h3>
            <p className="text-slate-300 text-xs mt-1 leading-relaxed">
              Puces GaN qui ne chauffent pas, cellules lithium certifiées et transducteurs en graphène : Volta tient sa promesse.
            </p>
          </div>

          <a
            href="#offres"
            className="shrink-0 px-4 py-2.5 rounded-lg bg-volta-yellow text-volta-dark font-anton text-xs font-bold tracking-wider hover:bg-volta-yellowHover transition-all text-center"
          >
            Voir les équipements fiables ↓
          </a>
        </div>
      </div>
    </section>
  );
}
