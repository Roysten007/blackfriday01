"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 3,
    hours: 14,
    minutes: 28,
    seconds: 45,
  });

  useEffect(() => {
    // Calcul cible : 30 novembre 23h59:59 heure locale
    const now = new Date();
    const target = new Date(now.getFullYear(), 10, 30, 23, 59, 59); // 30 Nov

    const interval = setInterval(() => {
      const current = new Date();
      const diff = target.getTime() - current.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format2Digits = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="sticky top-0 z-50 bg-[#04131D] border-b border-volta-surfaceLight/60 text-xs sm:text-sm py-2 px-3 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Titre & Message */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center bg-volta-yellow text-volta-dark font-anton text-[11px] px-2 py-0.5 rounded font-black tracking-wider">
            ⚡ En direct
          </span>
          <p className="text-slate-200 font-medium">
            <span className="text-volta-yellow font-bold">Black Friday Volta :</span> Jusqu&apos;au 30 novembre à 23h59.
            <span className="hidden md:inline text-slate-400 ml-1">Stocks alloués pour le Bénin très limités.</span>
          </p>
        </div>

        {/* Compteur à rebours avec cartes flip */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-[11px] tracking-wider text-slate-400 font-semibold mr-1 hidden xs:inline">
            Fin de l&apos;offre dans :
          </span>

          <FlipUnit value={format2Digits(timeLeft.days)} label="Jours" />
          <span className="text-volta-yellow font-bold text-sm">:</span>
          <FlipUnit value={format2Digits(timeLeft.hours)} label="Heures" />
          <span className="text-volta-yellow font-bold text-sm">:</span>
          <FlipUnit value={format2Digits(timeLeft.minutes)} label="Min" />
          <span className="text-volta-yellow font-bold text-sm">:</span>
          <FlipUnit value={format2Digits(timeLeft.seconds)} label="Sec" isLast />
        </div>
      </div>
    </div>
  );
}

function FlipUnit({ value, label, isLast }: { value: string; label: string; isLast?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-[#061B29] border border-volta-surface/80 rounded px-1.5 py-0.5 min-w-[28px] sm:min-w-[32px] text-center shadow-inner overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={`block font-anton text-xs sm:text-sm tracking-widest ${
              isLast ? "text-volta-yellow font-bold" : "text-white"
            }`}
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[9px] uppercase tracking-tighter text-slate-400 font-medium scale-90">
        {label}
      </span>
    </div>
  );
}
