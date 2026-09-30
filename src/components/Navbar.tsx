"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { totalCount, setIsCartOpen } = useCart();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-[41px] z-40 bg-volta-dark/90 backdrop-blur-md border-b border-volta-surface/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-volta-surface flex items-center justify-center border border-volta-surfaceLight group-hover:border-volta-yellow transition-all yellow-glow">
            <span className="font-anton text-2xl text-volta-yellow">V</span>
          </div>
          <div>
            <span className="font-anton text-2xl sm:text-3xl tracking-wider text-white flex items-center gap-1.5">
              VOLTA
              <span className="w-2 h-2 rounded-full bg-volta-yellow inline-block animate-ping" />
            </span>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest hidden sm:block font-semibold">
              L&apos;électronique qui tient sa promesse
            </p>
          </div>
        </a>

        {/* Anchor Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-semibold tracking-wide text-slate-300">
          <button
            onClick={() => scrollTo("offres")}
            className="hover:text-volta-yellow transition-colors cursor-pointer"
          >
            Les 6 offres
          </button>
          <button
            onClick={() => scrollTo("pack-autonomie")}
            className="hover:text-volta-yellow transition-colors cursor-pointer text-volta-yellow/90 flex items-center gap-1.5"
          >
            <i className="fa-solid fa-fire text-volta-yellow text-xs"></i>
            <span>Kit autonomie</span>
          </button>
          <button
            onClick={() => scrollTo("pourquoi")}
            className="hover:text-volta-yellow transition-colors cursor-pointer"
          >
            Pourquoi ces prix ?
          </button>
          <button
            onClick={() => scrollTo("faq")}
            className="hover:text-volta-yellow transition-colors cursor-pointer"
          >
            Garantie & FAQ
          </button>
        </nav>

        {/* Right Actions: Direct WhatsApp & Cart Drawer */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://wa.me/22997000000?text=Bonjour%20VOLTA%2C%20je%20souhaite%20commander%20une%20offre%20Black%20Friday."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#09314A]/70 hover:bg-[#09314A] border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 text-xs font-bold transition-all"
          >
            <i className="fa-solid fa-phone text-xs"></i>
            <span>SAV Cotonou</span>
          </a>

          {/* Cart Button with Counter */}
          <motion.button
            id="nav-cart-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCartOpen(true)}
            aria-label="Ouvrir le panier"
            className="relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-volta-surface hover:bg-volta-surfaceLight border border-volta-surfaceLight text-white font-bold text-sm transition-all yellow-glow cursor-pointer"
          >
            <i className="fa-solid fa-cart-shopping text-volta-yellow text-base"></i>
            <span className="hidden sm:inline text-xs font-semibold">Panier</span>
            <span className="bg-volta-yellow text-volta-dark font-anton text-xs px-2 py-0.5 rounded-full font-black min-w-[20px] text-center">
              {totalCount}
            </span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
