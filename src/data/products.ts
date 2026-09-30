export interface Product {
  id: string;
  name: string;
  category: string;
  oldPrice: number;
  price: number;
  discountPercent: number;
  tagline: string;
  description: string;
  benefits: {
    icon: string;
    text: string;
  }[];
  stockRemaining: number;
  stockInitial: number;
  image: string;
  badge?: string;
  isHeroFeatured?: boolean;
  urgencyText: string;
  viewersCount: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "volta-pods",
    name: "Écouteurs VOLTA Pods",
    category: "Audio sans fil",
    oldPrice: 35000,
    price: 19900,
    discountPercent: 43,
    tagline: "Le silence absolu, même au cœur du marché Dantokpa.",
    description: "Écouteurs intra-auriculaires à transducteurs graphène avec réduction active du bruit ambiant et micro anti-vent.",
    benefits: [
      { icon: "fa-battery-full", text: "30h d'autonomie avec boîtier" },
      { icon: "fa-volume-xmark", text: "Réduction active de bruit" },
    ],
    stockRemaining: 9,
    stockInitial: 25,
    image: "/images/volta-pods.jpg",
    badge: "-43% BLACK FRIDAY",
    urgencyText: "RUPTURE IMMINENTE : Plus que 9 unités !",
    viewersCount: 14,
  },
  {
    id: "volta-boom",
    name: "Enceinte VOLTA Boom",
    category: "Enceinte étanche",
    oldPrice: 45000,
    price: 27500,
    discountPercent: 39,
    tagline: "Le son lourd et clair qui résiste aux averses tropicales.",
    description: "Enceinte acoustique portable Bluetooth 5.3 avec radiateurs passifs pour des basses percutantes et certification étanchéité IPX6.",
    benefits: [
      { icon: "fa-droplet", text: "Étanchéité certifiée IPX6" },
      { icon: "fa-music", text: "12h de son continu & basses" },
    ],
    stockRemaining: 14,
    stockInitial: 30,
    image: "/images/volta-boom.jpg",
    badge: "-39% BLACK FRIDAY",
    urgencyText: "DERNIER ARRIVAGE : Plus que 14 unités !",
    viewersCount: 9,
  },
  {
    id: "volta-powerbank",
    name: "Batterie VOLTA 20 000 mAh",
    category: "Énergie nomade",
    oldPrice: 25000,
    price: 14900,
    discountPercent: 40,
    tagline: "Ne tombe plus à 0 % pendant les coupures SBEE.",
    description: "Powerbank en aluminium brossé ultra-résistant avec affichage LED précis du pourcentage réel. Rechargement bidirectionnel rapide.",
    benefits: [
      { icon: "fa-bolt", text: "4 à 5 recharges complètes" },
      { icon: "fa-gauge-high", text: "Affichage numérique précis" },
    ],
    stockRemaining: 7,
    stockInitial: 25,
    image: "/images/volta-powerbank.jpg",
    badge: "-40% DERNIÈRES UNITÉS",
    isHeroFeatured: true,
    urgencyText: "ALERTE STOCK CRITIQUE : Plus que 7 pièces restantes !",
    viewersCount: 23,
  },
  {
    id: "volta-pulse",
    name: "Montre VOLTA Pulse",
    category: "Santé & Connectivité",
    oldPrice: 40000,
    price: 24900,
    discountPercent: 38,
    tagline: "Une montre qui tient la semaine sans chargeur.",
    description: "Cadran AMOLED haute luminosité visible en plein soleil de midi, suivi cardio optique et notifications d'appels directes.",
    benefits: [
      { icon: "fa-clock", text: "7 jours d'autonomie réelle" },
      { icon: "fa-heart-pulse", text: "Suivi cardio & santé 24/7" },
    ],
    stockRemaining: 11,
    stockInitial: 30,
    image: "/images/volta-pulse.jpg",
    badge: "-38% BLACK FRIDAY",
    urgencyText: "FORTE DEMANDE : Plus que 11 exemplaires alloués",
    viewersCount: 8,
  },
  {
    id: "volta-studio",
    name: "Casque VOLTA Studio",
    category: "Casque Pro",
    oldPrice: 55000,
    price: 32900,
    discountPercent: 40,
    tagline: "L'isolation totale pour bosser sans entendre les groupes électrogènes.",
    description: "Arceau en aluminium usiné, coussinets isolants en mousse à mémoire de forme et haut-parleurs 40mm haute définition.",
    benefits: [
      { icon: "fa-headphones", text: "40h d'autonomie continue" },
      { icon: "fa-feather", text: "Confort zéro pression" },
    ],
    stockRemaining: 8,
    stockInitial: 25,
    image: "/images/volta-studio.jpg",
    badge: "-40% BLACK FRIDAY",
    urgencyText: "STOCK LIMITÉ : Plus que 8 casques disponibles",
    viewersCount: 16,
  },
  {
    id: "volta-charger",
    name: "Chargeur GaN 65W VOLTA Fast",
    category: "Recharge ultra-rapide",
    oldPrice: 18000,
    price: 9900,
    discountPercent: 45,
    tagline: "Votre téléphone à 50 % en 25 minutes chrono.",
    description: "Technologie nitrure de gallium (GaN) de pointe : ultra-compact, ne chauffe pas, recharge simultanément PC portable et smartphone.",
    benefits: [
      { icon: "fa-bolt-lightning", text: "0 à 50% en 25 minutes" },
      { icon: "fa-temperature-arrow-down", text: "Puces GaN sans surchauffe" },
    ],
    stockRemaining: 21,
    stockInitial: 40,
    image: "/images/volta-charger.jpg",
    badge: "-45% MAXIMUM",
    isHeroFeatured: true,
    urgencyText: "VENTE FLASH : 21 chargeurs restants sur 50",
    viewersCount: 29,
  },
];

export interface BundlePackData {
  id: string;
  name: string;
  subtitle: string;
  oldPriceTotal: number; // 24800
  normalValue: number; // 49000
  price: number; // 19900
  savings: number; // 4900
  items: {
    title: string;
    value: string;
    details: string;
  }[];
  guaranteeText: string;
  image: string;
  stockRemaining: number;
}

export const FEATURED_BUNDLE: BundlePackData = {
  id: "volta-kit-autonomie",
  name: "LE PACK VEDETTE : KIT AUTONOMIE",
  subtitle: "L'arsenal ultime contre les coupures d'électricité à Cotonou et partout au Bénin.",
  normalValue: 49000,
  oldPriceTotal: 24800,
  price: 19900,
  savings: 4900,
  items: [
    {
      title: "Batterie externe VOLTA 20 000 mAh",
      value: "25 000 FCFA",
      details: "Cellules haute densité, 4 à 5 recharges smartphone, écran LED.",
    },
    {
      title: "Chargeur secteur GaN 65W Ultra-rapide",
      value: "18 000 FCFA",
      details: "Recharge un téléphone à 50% en 25 min, compatible PC USB-C.",
    },
    {
      title: "Câble tressé renforcé 100W anti-rupture (1.5m)",
      value: "6 000 FCFA",
      details: "Gaine nylon tressé indestructible, supporte les tensions élevées.",
    },
    {
      title: "Garantie Remplacement Express Prioritaire 12 Mois",
      value: "OFFERTE",
      details: "En cas de défaillance, un coursier vous apporte une unité neuve sous 24h.",
    },
  ],
  guaranteeText: "Garantie 12 mois échange à neuf direct à Cotonou + 7 jours d'essai satisfait ou remboursé.",
  image: "/images/volta-pack.jpg",
  stockRemaining: 12,
};

export const REVIEWS = [
  {
    id: 1,
    name: "Boris A.",
    location: "Cotonou, Cadjehoun",
    profession: "Consultant IT",
    rating: 5,
    date: "Il y a 3 jours",
    product: "Batterie 20 000 mAh & Chargeur GaN",
    comment:
      "La batterie 20 000 mAh m'a littéralement sauvé pendant 2 jours de travaux SBEE consécutifs. Elle a rechargé mon iPhone 14 Pro 4 fois complètes et le chargeur 65W ne chauffe absolument pas. Du très solide.",
    verified: true,
  },
  {
    id: 2,
    name: "Amina K.",
    location: "Abomey-Calavi, Arconville",
    profession: "Architecte d'intérieur",
    rating: 5,
    date: "Il y a 5 jours",
    product: "Kit Autonomie",
    comment:
      "Livrée à Calavi en moins de 5 heures par coursier. J'ai pu vérifier le colis avant de payer par Moov Money. Le câble tressé et le chargeur GaN sont de loin les plus qualitatifs que j'ai eus au Bénin.",
    verified: true,
  },
  {
    id: 3,
    name: "Renaud T.",
    location: "Cotonou, Akpakpa",
    profession: "Graphiste Freelance",
    rating: 5,
    date: "Il y a 6 jours",
    product: "Casque VOLTA Studio",
    comment:
      "L'isolation phonique est impressionnante. Je bosse chez moi avec le groupe électrogène du voisin à 10 mètres, je n'entends rien. 40h d'autonomie bien réelles, pas de bobard marketing.",
    verified: true,
  },
  {
    id: 4,
    name: "Fabrice D.",
    location: "Porto-Novo, Ouando",
    profession: "Ingénieur Télécoms",
    rating: 5,
    date: "Il y a 2 jours",
    product: "Enceinte VOLTA Boom",
    comment:
      "Testée en plein air au bord de la lagune sous une averse tropicale inattendue : l'enceinte n'a pas bronché. Les basses sont rondes et percutantes, sans saturation à fort volume.",
    verified: true,
  },
  {
    id: 5,
    name: "Grâce M.",
    location: "Cotonou, Haie Vive",
    profession: "Responsable Marketing",
    rating: 5,
    date: "Il y a 4 jours",
    product: "Écouteurs VOLTA Pods",
    comment:
      "J'avais peur d'avoir mal aux oreilles après 2h, mais le confort est exemplaire. La réduction de bruit filtre tout le vacarme des zems et de la circulation quand je suis en réunion.",
    verified: true,
  },
  {
    id: 6,
    name: "Yannick S.",
    location: "Parakou, Albarika",
    profession: "Développeur Web",
    rating: 5,
    date: "Il y a 1 jour",
    product: "Chargeur GaN 65W",
    comment:
      "Reçu à Parakou via la compagnie de bus en 24h chrono. Il charge mon PC portable Dell en USB-C et mon smartphone simultanément. Fini de transporter trois chargeurs lourds.",
    verified: true,
  },
];

export const FAQ_ITEMS = [
  {
    question: "S'agit-il de vrais produits originaux et durables ?",
    answer:
      "Absolument. VOLTA conçoit ses appareils avec des puces certifiées GaN, des cellules lithium testées pour résister aux climats chauds et humides, et des fiches renforcées. Chaque produit comporte un numéro de série unique vérifiable et est couvert par une garantie officielle d'échange direct de 12 mois.",
  },
  {
    question: "Comment se déroule la livraison à Cotonou et aux environs ?",
    answer:
      "Nos coursiers dédiés livrent sous 24h ouvrées (souvent dans la demi-journée) à Cotonou, Calavi, Porto-Novo et environs. Vous êtes prévenu par appel ou WhatsApp avant l'arrivée du livreur et pouvez inspecter l'emballage scellé avant paiement.",
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer:
      "Nous privilégions le paiement à la livraison pour votre sérénité : espèces directes au coursier après inspection, ou virement instantané via MTN Mobile Money ou Moov Money. Aucun prépaiement n'est exigé.",
  },
  {
    question: "Comment fonctionne la garantie de 12 mois ?",
    answer:
      "Si votre appareil présente le moindre défaut technique de fabrication dans les 12 mois, nous ne réparons pas : nous procédons à un échange standard à neuf immédiat sous 24h à Cotonou. Notre SAV est basé localement, joignable directement par WhatsApp.",
  },
  {
    question: "Pourquoi ces prix sont-ils aussi bas pendant le Black Friday ?",
    answer:
      "Cette opération de 4 jours correspond à un déstockage officiel des séries 2026 avant les réassorts 2027, combiné à notre modèle d'importation directe usine sans intermédiaires. Les prix reviendront strictement à la normale le 30 novembre à 23h59.",
  },
  {
    question: "Comment passer commande via WhatsApp ?",
    answer:
      "En validant votre sélection dans le panier, cliquez sur 'Commander sur WhatsApp'. Votre panier et vos remises sont automatiquement mis en forme dans un message prêt à l'envoi. Un conseiller client prend en charge votre adresse et coordonne votre coursier en quelques minutes.",
  },
];
