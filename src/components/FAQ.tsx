"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-volta-dark relative border-t border-volta-surface/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-anton tracking-wider text-slate-300 bg-volta-surface px-3 py-1 rounded border border-volta-surfaceLight mb-3">
            Zéro doute avant de commander
          </span>
          <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl text-white tracking-wide">
            Foire aux questions & garanties
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Toutes les réponses précises sur le paiement MTN/Moov, la livraison à Cotonou et notre garantie échange direct de 12 mois.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-volta-surfaceLight/70 bg-volta-surfaceDark overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-volta-surface/30 transition-colors"
                >
                  <span className="font-anton text-base sm:text-lg text-white tracking-wide flex items-center gap-3">
                    <span className="text-slate-400 font-bold text-sm">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {item.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-volta-surface flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-slate-700 text-white" : ""
                  }`}>
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
