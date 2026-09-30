"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function FlyToCartOverlay() {
  const { flyingPoints } = useCart();
  const [targetPos, setTargetPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const updateTarget = () => {
      const cartBtn = document.getElementById("nav-cart-btn");
      if (cartBtn) {
        const rect = cartBtn.getBoundingClientRect();
        setTargetPos({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      } else {
        setTargetPos({ x: window.innerWidth - 60, y: 50 });
      }
    };

    updateTarget();
    window.addEventListener("resize", updateTarget);
    return () => window.removeEventListener("resize", updateTarget);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {flyingPoints.map((point) => (
          <motion.div
            key={point.id}
            initial={{
              x: point.x - 14,
              y: point.y - 14,
              scale: 1.4,
              opacity: 1,
            }}
            animate={{
              x: targetPos.x - 14,
              y: targetPos.y - 14,
              scale: 0.3,
              opacity: 0.7,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            className="w-7 h-7 rounded-full bg-volta-yellow flex items-center justify-center text-volta-dark font-black text-xs yellow-glow shadow-2xl"
          >
            <i className="fa-solid fa-bolt text-xs"></i>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
