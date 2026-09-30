"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function MobileStickyBar() {
  const { totalCount, finalTotal, setIsCartOpen } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-volta-dark/95 backdrop-blur-md border-t border-volta-surfaceLight p-3 px-4 flex items-center justify-between gap-3 shadow-2xl">
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-slate-400">
          {totalCount === 0 ? "Offres Black Friday" : `${totalCount} article(s) au panier`}
        </span>
        <div className="flex items-baseline gap-1.5">
          <span className="font-anton text-xl text-volta-yellow">
            {totalCount === 0 ? "Jusqu'à -45%" : `${finalTotal.toLocaleString("fr-FR")} FCFA`}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {totalCount > 0 ? (
          <button
            onClick={() => setIsCartOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-volta-yellow text-volta-dark font-anton text-sm font-black tracking-wider flex items-center gap-2 yellow-glow cursor-pointer"
          >
            <i className="fa-solid fa-cart-shopping text-xs"></i>
            <span>Commander ({totalCount})</span>
          </button>
        ) : (
          <a
            href="#offres"
            className="px-5 py-2.5 rounded-xl bg-volta-yellow text-volta-dark font-anton text-sm font-black tracking-wider flex items-center gap-2 yellow-glow"
          >
            <span>Voir les offres</span>
            <i className="fa-solid fa-arrow-down text-xs"></i>
          </a>
        )}
      </div>
    </div>
  );
}
