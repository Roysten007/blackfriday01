"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/22997000000?text=Bonjour%20VOLTA%2C%20je%20souhaite%20des%20informations%20sur%20les%20offres%20Black%20Friday.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contacter VOLTA sur WhatsApp"
      className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-colors group cursor-pointer"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
      {/* Tooltip hint on desktop */}
      <span className="absolute right-16 bg-volta-dark text-slate-100 text-xs font-semibold py-1.5 px-3 rounded-lg border border-volta-surfaceLight shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
        Assistance WhatsApp directe
      </span>
      {/* Subtle pulse ring */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10" />
    </motion.a>
  );
}
