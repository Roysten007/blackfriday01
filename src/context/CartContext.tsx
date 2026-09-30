"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import confetti from "canvas-confetti";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  quantity: number;
  tagline?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: {
    id: string;
    name: string;
    price: number;
    oldPrice: number;
    image: string;
    tagline?: string;
  }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  discountAmount: number;
  finalTotal: number;
  promoCode: string;
  applyPromoCode: (code: string) => boolean;
  promoApplied: boolean;
  promoError: string | null;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  generateWhatsAppLink: (customerName?: string, customerCity?: string) => string;
  triggerFlyingEffect: (startRect: DOMRect) => void;
  flyingPoints: { id: number; x: number; y: number }[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [flyingPoints, setFlyingPoints] = useState<{ id: number; x: number; y: number }[]>([]);

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("volta_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
      const savedPromo = localStorage.getItem("volta_promo");
      if (savedPromo === "VOLTA10") {
        setPromoApplied(true);
        setPromoCode("VOLTA10");
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    try {
      localStorage.setItem("volta_cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const triggerFlyingEffect = (startRect: DOMRect) => {
    const id = Date.now();
    setFlyingPoints((prev) => [
      ...prev,
      { id, x: startRect.left + startRect.width / 2, y: startRect.top + startRect.height / 2 },
    ]);
    setTimeout(() => {
      setFlyingPoints((prev) => prev.filter((p) => p.id !== id));
    }, 850);
  };

  const addItem = (product: {
    id: string;
    name: string;
    price: number;
    oldPrice: number;
    image: string;
    tagline?: string;
  }) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === "VOLTA10") {
      setPromoApplied(true);
      setPromoCode("VOLTA10");
      setPromoError(null);
      localStorage.setItem("volta_promo", "VOLTA10");
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#FFFA08", "#09314A", "#FFFFFF"],
        });
      } catch {
        // ignore
      }
      return true;
    } else {
      setPromoError("Code invalide. Essayez le code officiel : VOLTA10 (-10%)");
      return false;
    }
  };

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const generateWhatsAppLink = (customerName?: string, customerCity?: string) => {
    const phone = "22997000000"; // Numéro standard Bénin pour la démo
    let text = `⚡ *COMMANDE BLACK FRIDAY VOLTA*\n`;
    text += `--------------------------------\n`;

    if (items.length === 0) {
      text += `Bonjour VOLTA, je souhaite me renseigner sur vos offres Black Friday.\n`;
    } else {
      items.forEach((item, index) => {
        text += `${index + 1}. *${item.name}* x${item.quantity}\n`;
        text += `   Prix : ${(item.price * item.quantity).toLocaleString("fr-FR")} FCFA\n`;
      });

      text += `--------------------------------\n`;
      text += `Sous-total : ${subtotal.toLocaleString("fr-FR")} FCFA\n`;
      if (promoApplied) {
        text += `Code promo appliqué : VOLTA10 (-10%)\n`;
        text += `Réduction : -${discountAmount.toLocaleString("fr-FR")} FCFA\n`;
      }
      text += `*TOTAL À PAYER : ${finalTotal.toLocaleString("fr-FR")} FCFA*\n`;
      text += `--------------------------------\n`;
      text += `📍 *Livraison demandée* : ${customerCity || "Cotonou / Bénin"}\n`;
      text += `👤 *Client* : ${customerName || "Client VOLTA"}\n`;
      text += `Mode de règlement : Paiement à la livraison (Espèces ou MTN/Moov Money)\n`;
      text += `Garantie 12 mois demandée avec la facture officielle.`;
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        discountAmount,
        finalTotal,
        promoCode,
        applyPromoCode,
        promoApplied,
        promoError,
        isCartOpen,
        setIsCartOpen,
        generateWhatsAppLink,
        triggerFlyingEffect,
        flyingPoints,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
