"use client";

import React from "react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="offres" className="py-12 lg:py-20 bg-volta-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgent Stock Notice Banner */}
        <div className="mb-10 p-4 rounded-xl bg-red-950/40 border border-red-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-400 shrink-0 text-base animate-pulse">
              <i className="fa-solid fa-triangle-exclamation"></i>
            </span>
            <div>
              <h4 className="font-anton text-sm sm:text-base text-white tracking-wide">
                Avertissement stock : les commandes sont traitées par ordre d&apos;arrivée
              </h4>
              <p className="text-slate-300 text-xs mt-0.5">
                Une fois le contingent de Cotonou écoulé, les prix reviendront strictement à leurs tarifs normaux.
              </p>
            </div>
          </div>
          <span className="shrink-0 px-3 py-1.5 rounded-lg bg-red-500 text-white font-anton text-xs tracking-wider font-bold shadow">
            Stocks très limités
          </span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-volta-surface border border-volta-surfaceLight text-slate-300 text-xs font-anton tracking-wider mb-2">
            <i className="fa-solid fa-fire text-red-400"></i>
            <span>Les 6 offres officielles</span>
          </div>
          <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-white tracking-wide">
            Choisissez votre équipement Volta
          </h2>
          <p className="mt-2 text-slate-300 text-xs sm:text-sm">
            Chaque produit résout une contrainte locale réelle : autonomie face aux coupures, charge ultra-rapide et acoustique pure.
          </p>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
