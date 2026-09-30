"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#03090F] border-t border-volta-surface/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1 : Marque */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-anton text-2xl text-white tracking-wider">
                VOLTA
              </span>
              <span className="text-volta-yellow font-anton text-xs bg-volta-surface px-2 py-0.5 rounded">
                BÉNIN
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm mb-4 leading-relaxed">
              L&apos;électronique qui tient sa promesse. Conçue pour résister aux contraintes locales et offrir une fiabilité sans compromis.
            </p>
            <p className="text-slate-400 text-xs">
              📍 Siège & Dépôt logistique : Cotonou, Haie Vive, République du Bénin.
            </p>
          </div>

          {/* Col 2 : Liens Rapides */}
          <div>
            <h4 className="font-anton text-sm text-white tracking-wider uppercase mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#offres" className="hover:text-volta-yellow transition-colors">
                  Les 6 Offres Black Friday
                </a>
              </li>
              <li>
                <a href="#pack-autonomie" className="hover:text-volta-yellow transition-colors">
                  Kit Autonomie Totale
                </a>
              </li>
              <li>
                <a href="#pourquoi" className="hover:text-volta-yellow transition-colors">
                  Pourquoi ces prix ?
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-volta-yellow transition-colors">
                  Conditions de garantie
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 : SAV & Paiement */}
          <div>
            <h4 className="font-anton text-sm text-white tracking-wider uppercase mb-3">
              Paiement & Support
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-money-bill-wave text-volta-yellow text-xs"></i>
                <span>Espèces à la livraison</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-mobile-screen text-volta-yellow text-xs"></i>
                <span>MTN Mobile Money / Moov Money</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-brands fa-whatsapp text-emerald-400 text-xs"></i>
                <span>Assistance WhatsApp : +229 97 00 00 00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-400">
          <p>
            © 2026 VOLTA Bénin. Tous droits réservés. Marque fictive de démonstration pour l&apos;opération Black Friday.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300">Mentions Légales Démo</span>
            <span>•</span>
            <span className="hover:text-slate-300">Politique de Confidentialité</span>
            <span>•</span>
            <span className="hover:text-slate-300">Conditions Générales de Vente</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
