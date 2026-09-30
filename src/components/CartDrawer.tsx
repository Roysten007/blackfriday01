"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    updateQuantity,
    subtotal,
    discountAmount,
    finalTotal,
    promoCode,
    applyPromoCode,
    promoApplied,
    promoError,
    generateWhatsAppLink,
  } = useCart();

  const [inputCode, setInputCode] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerCity, setCustomerCity] = useState("Cotonou");

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCode) {
      applyPromoCode(inputCode);
    }
  };

  const handleWhatsAppCheckout = () => {
    const link = generateWhatsAppLink(customerName, customerCity);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Lateral Slide-Over Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#06121C] border-l border-volta-surfaceLight shadow-2xl flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-volta-surfaceLight flex items-center justify-between bg-volta-dark">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-volta-surface flex items-center justify-center text-volta-yellow">
                  <i className="fa-solid fa-cart-shopping text-sm"></i>
                </span>
                <div>
                  <h3 className="font-anton text-xl text-white tracking-wide">
                    Votre panier Volta
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {items.length} {items.length <= 1 ? "article sélectionné" : "articles sélectionnés"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-9 h-9 rounded-full bg-volta-surface hover:bg-volta-surfaceLight text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fermer le panier"
              >
                <i className="fa-solid fa-xmark text-base"></i>
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-volta-surface flex items-center justify-center text-slate-500 mx-auto mb-4 text-2xl">
                    <i className="fa-solid fa-basket-shopping"></i>
                  </div>
                  <h4 className="font-anton text-lg text-white mb-2">
                    Votre panier est vide
                  </h4>
                  <p className="text-slate-400 text-xs max-w-xs mx-auto mb-6">
                    Profitez des remises Black Friday jusqu&apos;à -45% avant l&apos;épuisement des stocks.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2.5 rounded-lg bg-volta-yellow text-volta-dark font-anton text-sm font-bold tracking-wider yellow-glow"
                  >
                    Voir les offres
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-volta-surfaceDark border border-volta-surfaceLight/60 flex items-center gap-3.5"
                  >
                    {/* Item Thumbnail */}
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-black shrink-0 border border-slate-700">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-anton text-sm text-white tracking-wide truncate">
                        {item.name}
                      </h4>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="font-anton text-sm text-volta-yellow">
                          {(item.price * item.quantity).toLocaleString("fr-FR")} FCFA
                        </span>
                        {item.quantity > 1 && (
                          <span className="text-[10px] text-slate-400">
                            ({item.price.toLocaleString("fr-FR")} F/u)
                          </span>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-volta-surfaceLight rounded-md bg-volta-dark">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-slate-300 hover:text-white text-xs cursor-pointer"
                            aria-label="Diminuer"
                          >
                            -
                          </button>
                          <span className="w-7 text-center font-anton text-xs text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center text-slate-300 hover:text-white text-xs cursor-pointer"
                            aria-label="Augmenter"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[11px] text-red-400 hover:text-red-300 underline cursor-pointer"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer & Checkout Actions */}
            {items.length > 0 && (
              <div className="p-5 border-t border-volta-surfaceLight bg-volta-dark/95 space-y-4">
                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="space-y-1.5">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Code promo (ex: VOLTA10)"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      className="flex-1 bg-volta-surfaceDark border border-volta-surfaceLight rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-volta-yellow uppercase font-mono"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 rounded-lg bg-volta-surface hover:bg-volta-surfaceLight text-volta-yellow border border-volta-surfaceLight font-anton text-xs uppercase font-bold cursor-pointer"
                    >
                      Appliquer
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                      <i className="fa-solid fa-circle-check"></i>
                      Code {promoCode} activé (-10% supplémentaire !)
                    </p>
                  )}
                  {promoError && (
                    <p className="text-[11px] text-red-400 font-semibold">{promoError}</p>
                  )}
                </form>

                {/* Delivery destination details */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                      Votre Prénom / Nom
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Boris"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-volta-surfaceDark border border-volta-surfaceLight rounded-md px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-volta-yellow"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                      Ville de livraison
                    </label>
                    <select
                      value={customerCity}
                      onChange={(e) => setCustomerCity(e.target.value)}
                      className="w-full bg-volta-surfaceDark border border-volta-surfaceLight rounded-md px-2 py-1.5 text-xs text-white focus:outline-none focus:border-volta-yellow"
                    >
                      <option value="Cotonou">Cotonou (24h)</option>
                      <option value="Abomey-Calavi">Abomey-Calavi (24h)</option>
                      <option value="Porto-Novo">Porto-Novo (24h)</option>
                      <option value="Ouidah">Ouidah (48h)</option>
                      <option value="Autre ville Bénin">Autre ville Bénin</option>
                    </select>
                  </div>
                </div>

                {/* Price Totals */}
                <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Sous-total Black Friday :</span>
                    <span className="font-anton text-sm text-slate-300">
                      {subtotal.toLocaleString("fr-FR")} FCFA
                    </span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-emerald-400 font-medium">
                      <span>Remise spéciale VOLTA10 :</span>
                      <span className="font-anton text-sm">
                        -{discountAmount.toLocaleString("fr-FR")} FCFA
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-baseline pt-2 border-t border-slate-800">
                    <span className="font-anton text-sm text-white">
                      Total à payer à la livraison :
                    </span>
                    <span className="font-anton text-2xl text-volta-yellow font-black">
                      {finalTotal.toLocaleString("fr-FR")} FCFA
                    </span>
                  </div>
                </div>

                {/* Main WhatsApp Checkout Button */}
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-4 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-anton text-base sm:text-lg tracking-wider font-black transition-all flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-2xl"></i>
                  <span>Commander sur WhatsApp</span>
                </button>

                <p className="text-[10px] text-center text-slate-400 leading-tight">
                  ⚡ Message récapitulatif généré instantanément. Un conseiller Volta confirme votre livraison immédiatement.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
