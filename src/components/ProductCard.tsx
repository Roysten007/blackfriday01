"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, triggerFlyingEffect, setIsCartOpen } = useCart();
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt interaction on hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [3, -3]);
  const rotateY = useTransform(x, [-80, 80], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btnRect = e.currentTarget.getBoundingClientRect();
    triggerFlyingEffect(btnRect);
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      image: product.image,
      tagline: product.tagline,
    });
    setTimeout(() => {
      setIsCartOpen(true);
    }, 400);
  };

  const stockPercent = Math.min(
    100,
    Math.round((product.stockRemaining / product.stockInitial) * 100)
  );

  const percentSold = 100 - stockPercent;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="group relative rounded-xl bg-gradient-to-b from-[#09314A]/50 to-volta-dark border border-volta-surfaceLight/70 hover:border-volta-yellow/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg"
    >
      <div>
        {/* Compact Product Image */}
        <div className="relative aspect-[4/3] w-full bg-[#04121E] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-volta-dark/85 via-transparent to-transparent pointer-events-none" />

          {/* Discount Badge */}
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-volta-yellow text-volta-dark font-anton text-xs font-black tracking-wider shadow">
              -{product.discountPercent}%
            </span>
          </div>

          {/* Active Urgency Indicator Pill */}
          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-950/80 border border-red-500/60 text-red-300 backdrop-blur-md animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>Plus que {product.stockRemaining} restants</span>
            </span>
          </div>

          {/* Live Viewers hint */}
          <div className="absolute bottom-2 left-2.5 z-10">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/70 border border-slate-800 text-[10px] text-slate-300 backdrop-blur-md">
              <i className="fa-solid fa-eye text-slate-400 text-[9px]"></i>
              <span>{product.viewersCount} personnes regardent</span>
            </span>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider">
              {product.category}
            </span>
          </div>

          <h3 className="font-anton text-lg sm:text-xl text-white tracking-wide mb-1 group-hover:text-amber-300 transition-colors">
            {product.name}
          </h3>

          <p className="text-slate-300 text-xs italic mb-3 line-clamp-1">
            &ldquo;{product.tagline}&rdquo;
          </p>

          {/* Specific Urgency Strip */}
          <div className="mb-3 px-2.5 py-1.5 rounded-lg bg-red-950/40 border border-red-500/30 text-[11px] font-bold text-red-300 flex items-center gap-1.5">
            <i className="fa-solid fa-triangle-exclamation text-red-400 text-xs shrink-0"></i>
            <span className="truncate">{product.urgencyText}</span>
          </div>

          {/* 2 Benefits in Compact Pills */}
          <div className="space-y-1.5 mb-3.5 pt-2 border-t border-volta-surfaceLight/40">
            {product.benefits.map((b, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                <i className={`fa-solid ${b.icon} text-slate-400 text-[11px] w-4`}></i>
                <span className="text-[11px] sm:text-xs font-medium truncate">{b.text}</span>
              </div>
            ))}
          </div>

          {/* Compact Pricing Row */}
          <div className="flex items-baseline justify-between mb-3 pt-2 border-t border-volta-surfaceLight/40">
            <div>
              <span className="text-[10px] text-slate-400 line-through block font-medium">
                {product.oldPrice.toLocaleString("fr-FR")} FCFA
              </span>
              <span className="font-anton text-xl sm:text-2xl text-volta-yellow tracking-tight font-black">
                {product.price.toLocaleString("fr-FR")} FCFA
              </span>
            </div>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
              -{(product.oldPrice - product.price).toLocaleString("fr-FR")} F
            </span>
          </div>

          {/* Dynamic Stock Gauge with Depletion Alert */}
          <div className="mb-2">
            <div className="flex items-center justify-between text-[10px] font-bold mb-1">
              <span className="text-red-400 flex items-center gap-1">
                <i className="fa-solid fa-fire text-red-500 text-[9px]"></i>
                {percentSold}% déjà réservés
              </span>
              <span className="text-slate-400">
                {product.stockRemaining} dispos
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-volta-surfaceDark border border-volta-surface overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentSold}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-red-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-4 sm:p-5 pt-0">
        <button
          onClick={handleAddToCart}
          className="w-full py-2.5 px-3 rounded-lg bg-volta-yellow hover:bg-volta-yellowHover text-volta-dark font-anton text-xs sm:text-sm tracking-wider font-black transition-all yellow-glow flex items-center justify-center gap-2 cursor-pointer active:scale-95"
        >
          <i className="fa-solid fa-cart-shopping text-xs"></i>
          <span>Réserver maintenant</span>
        </button>
      </div>
    </motion.div>
  );
}
