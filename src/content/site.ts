// Centralized bilingual content. Add new locales by extending the `Lang` union
// and providing the same shape. Slugs are language-specific.

export type Lang = "fr" | "en";
export const LANGS: Lang[] = ["fr", "en"];

export const BRAND = {
  name: "Anti Nuisibles Kin",
  whatsappNumber: "243000000000", // placeholder
  phoneNumber: "+243000000000",
  email: "contact@antinuisibleskin.cd",
  city: "Kinshasa",
  country: "CD",
};

export const WHATSAPP_URL = `https://wa.me/${BRAND.whatsappNumber}`;
export const PHONE_URL = `tel:${BRAND.phoneNumber}`;

// --- Slug maps (per language) ---
export const SECTION_SLUGS = {
  fr: {
    services: "services",
    pricing: "prix",
    customers: "clients",
    locations: "kinshasa",
    contact: "contact",
    blog: "blog",
  },
  en: {
    services: "services",
    pricing: "pricing",
    customers: "customers",
    locations: "kinshasa",
    contact: "contact",
    blog: "blog",
  },
} as const;

// Reverse: given lang + url segment -> section key
export function sectionFromSlug(lang: Lang, slug: string) {
  const map = SECTION_SLUGS[lang];
  for (const k of Object.keys(map) as (keyof typeof map)[]) {
    if (map[k] === slug) return k;
  }
  return null;
}

export function sectionPath(lang: Lang, key: keyof typeof SECTION_SLUGS["fr"]) {
  return `/${lang}/${SECTION_SLUGS[lang][key]}`;
}

// --- Services ---
export const SERVICES = [
  {
    id: "rodent",
    icon: "rat",
    slug: { fr: "deratisation", en: "rodent-control" },
    title: { fr: "Dératisation", en: "Rodent control" },
    short: {
      fr: "Rats, souris, pièges, postes d'appâtage et contrôle pour restaurants, dépôts et maisons.",
      en: "Rats, mice, traps, bait stations and control for restaurants, warehouses and homes.",
    },
    audience: {
      fr: "Maisons, restaurants, dépôts",
      en: "Homes, restaurants, warehouses",
    },
  },
  {
    id: "insect",
    icon: "bug",
    slug: { fr: "desinsectisation", en: "insect-control" },
    title: { fr: "Désinsectisation", en: "Insect control" },
    short: {
      fr: "Cafards, fourmis, moustiques, mouches et insectes rampants ou volants.",
      en: "Cockroaches, ants, mosquitoes, flies and crawling or flying insects.",
    },
    audience: {
      fr: "Maisons, bureaux, restaurants",
      en: "Homes, offices, restaurants",
    },
  },
  {
    id: "bedbugs",
    icon: "bed",
    slug: { fr: "punaises-de-lit", en: "bed-bugs" },
    title: { fr: "Punaises de lit", en: "Bed bug treatment" },
    short: {
      fr: "Inspection, traitement ciblé, conseils de préparation et suivi après intervention.",
      en: "Inspection, targeted treatment, preparation guidance and follow-up.",
    },
    audience: { fr: "Maisons, hôtels, guest houses", en: "Homes, hotels, guest houses" },
  },
  {
    id: "termites",
    icon: "tree",
    slug: { fr: "termites", en: "termites" },
    title: { fr: "Traitement anti-termites", en: "Termite treatment" },
    short: {
      fr: "Inspection, devis personnalisé, traitement préventif ou curatif des bois et structures.",
      en: "Inspection, custom quote, preventive or curative treatment for wood and structures.",
    },
    audience: { fr: "Maisons, dépôts", en: "Homes, warehouses" },
  },
  {
    id: "disinfection",
    icon: "spray",
    slug: { fr: "desinfection", en: "disinfection" },
    title: { fr: "Désinfection", en: "Disinfection" },
    short: {
      fr: "Désinfection de locaux, bureaux, restaurants, sanitaires et zones communes.",
      en: "Disinfection of premises, offices, restaurants, restrooms and common areas.",
    },
    audience: { fr: "Bureaux, restaurants, écoles", en: "Offices, restaurants, schools" },
  },
  {
    id: "monthly",
    icon: "shield",
    slug: { fr: "contrats-mensuels", en: "monthly-contracts" },
    title: { fr: "Contrats mensuels anti-nuisibles", en: "Monthly pest control contracts" },
    short: {
      fr: "Pour restaurants, hôtels, bureaux, écoles, commerces et dépôts. Visites planifiées, suivi et rapport.",
      en: "For restaurants, hotels, offices, schools, shops and warehouses. Scheduled visits, follow-up and reports.",
    },
    audience: { fr: "Entreprises", en: "Businesses" },
  },
] as const;

// --- Customer types ---
export const CUSTOMERS = [
  {
    id: "homes",
    icon: "home",
    slug: { fr: "particuliers", en: "homes" },
    title: { fr: "Particuliers", en: "Homes" },
    short: {
      fr: "Appartements, maisons, parcelles, villas. Traitement discret et conseils de prévention.",
      en: "Apartments, houses, compounds, villas. Discreet treatment and prevention advice.",
    },
  },
  {
    id: "restaurants",
    icon: "utensils",
    slug: { fr: "restaurants", en: "restaurants" },
    title: { fr: "Restaurants & bars", en: "Restaurants & bars" },
    short: {
      fr: "Prévention cafards et rongeurs, hygiène, protection de la réputation, contrat mensuel.",
      en: "Cockroach and rodent prevention, hygiene, reputation protection, monthly contract.",
    },
  },
  {
    id: "hotels",
    icon: "bed",
    slug: { fr: "hotels", en: "hotels" },
    title: { fr: "Hôtels & guest houses", en: "Hotels & guest houses" },
    short: {
      fr: "Punaises de lit, moustiques, cafards. Service discret et suivi régulier.",
      en: "Bed bugs, mosquitoes, cockroaches. Discreet service and regular follow-up.",
    },
  },
  {
    id: "offices",
    icon: "briefcase",
    slug: { fr: "bureaux", en: "offices" },
    title: { fr: "Bureaux & commerces", en: "Offices & shops" },
    short: {
      fr: "Inspection régulière, prévention, confort du personnel et des clients.",
      en: "Regular inspection, prevention, comfort for staff and customers.",
    },
  },
  {
    id: "warehouses",
    icon: "warehouse",
    slug: { fr: "depots", en: "warehouses" },
    title: { fr: "Dépôts & magasins", en: "Warehouses & stores" },
    short: {
      fr: "Contrôle des rongeurs et insectes, protection des stocks et des marchandises.",
      en: "Rodent and insect control, stock and goods protection.",
    },
  },
  {
    id: "institutions",
    icon: "school",
    slug: { fr: "ecoles-cliniques", en: "schools-clinics" },
    title: { fr: "Écoles, cliniques & institutions", en: "Schools, clinics & institutions" },
    short: {
      fr: "Plan préventif, visites programmées, documentation et rapports.",
      en: "Preventive plan, scheduled visits, documentation and reports.",
    },
  },
] as const;

// --- Pricing ---
export const PRICING = {
  homes: {
    fr: {
      heading: "Particuliers",
      tiers: [
        { name: "Petit traitement", price: "dès 25$", desc: "Studio, petite maison, cafards ou insectes simples.", highlight: false },
        { name: "Maison Standard", price: "dès 45$", desc: "Maison/parcelle, cafards, fourmis, moustiques.", highlight: true },
        { name: "Maison Plus", price: "dès 75$", desc: "Grande maison, extérieur, plusieurs pièces, problème avancé.", highlight: false },
        { name: "Punaises de lit / termites", price: "Devis", desc: "Devis après inspection.", highlight: false },
      ],
    },
    en: {
      heading: "Homes",
      tiers: [
        { name: "Small treatment", price: "from $25", desc: "Studio, small home, basic cockroach or insect issue.", highlight: false },
        { name: "Standard home", price: "from $45", desc: "Home/compound, cockroaches, ants, mosquitoes.", highlight: true },
        { name: "Large home", price: "from $75", desc: "Large home, exterior, multiple rooms, advanced issue.", highlight: false },
        { name: "Bed bugs / termites", price: "Quote", desc: "Quote after inspection.", highlight: false },
      ],
    },
  },
  business: {
    fr: {
      heading: "Entreprises",
      tiers: [
        { name: "Restaurant Start", price: "dès 60$", desc: "Inspection + traitement + recommandations.", highlight: false },
        { name: "Business Protect Mensuel", price: "dès 50$/mois", desc: "Visite mensuelle, suivi, prévention, rapport.", highlight: true },
        { name: "Hôtel / dépôt / école", price: "Sur devis", desc: "Plan adapté selon taille et fréquence.", highlight: false },
        { name: "Premium Mensuel", price: "dès 150$/mois", desc: "2 à 4 visites/mois, suivi prioritaire, rapport, plan de prévention.", highlight: false },
      ],
    },
    en: {
      heading: "Businesses",
      tiers: [
        { name: "Restaurant Start", price: "from $60", desc: "Inspection + treatment + recommendations.", highlight: false },
        { name: "Monthly Business Protect", price: "from $50/mo", desc: "Monthly visit, follow-up, prevention, report.", highlight: true },
        { name: "Hotel / warehouse / school", price: "Custom quote", desc: "Plan adapted to size and frequency.", highlight: false },
        { name: "Premium Monthly", price: "from $150/mo", desc: "2–4 visits/month, priority follow-up, report, prevention plan.", highlight: false },
      ],
    },
  },
} as const;

// --- Locations: Kinshasa communes ---
export const COMMUNES = [
  "Gombe", "Ngaliema", "Limete", "Bandalungwa", "Kintambo", "Lemba",
  "Matete", "Kalamu", "Barumbu", "Kinshasa Centre", "Mont Ngafula",
  "Masina", "N'Djili", "Kimbanseke",
];

export const FUTURE_CITIES = [
  "Lubumbashi", "Goma", "Kisangani", "Matadi", "Mbuji-Mayi", "Kolwezi",
  "Brazzaville", "Abidjan", "Dakar", "Douala", "Yaoundé", "Nairobi",
  "Accra", "Lagos",
];

// --- Process steps ---
export const STEPS = [
  {
    fr: { title: "Contactez-nous", desc: "Envoyez un message WhatsApp, appelez ou remplissez le formulaire." },
    en: { title: "Contact us", desc: "Send a WhatsApp message, call or fill the form." },
  },
  {
    fr: { title: "Inspection ou analyse rapide", desc: "Nous évaluons le type de nuisible, la taille du lieu et le niveau d'infestation." },
    en: { title: "Inspection or quick analysis", desc: "We assess the pest type, the size of the place and the level of infestation." },
  },
  {
    fr: { title: "Prix clair avant intervention", desc: "Vous recevez un prix ou un devis avant le début du traitement." },
    en: { title: "Clear pricing before treatment", desc: "You receive a price or quote before any treatment begins." },
  },
  {
    fr: { title: "Intervention professionnelle", desc: "Traitement adapté, conseils de prévention et travail propre." },
    en: { title: "Professional treatment", desc: "Adapted treatment, prevention advice and clean work." },
  },
  {
    fr: { title: "Suivi après traitement", desc: "Suivi inclus selon le type d'intervention. Contrat mensuel possible." },
    en: { title: "Post-treatment follow-up", desc: "Follow-up included depending on the service. Monthly contracts available." },
  },
];

// --- FAQ ---
export const FAQS: { fr: { q: string; a: string }[]; en: { q: string; a: string }[] } = {
  fr: [
    { q: "Combien coûte une intervention anti-nuisibles à Kinshasa ?", a: "Les prix démarrent à 25$ pour un petit traitement et varient selon la taille du lieu, le type de nuisible et le niveau d'infestation. Le prix final est confirmé après inspection ou photos sur WhatsApp." },
    { q: "Est-ce que l'inspection est gratuite ?", a: "Oui, l'inspection initiale est gratuite à Kinshasa pour évaluer le problème et vous donner un prix clair." },
    { q: "Intervenez-vous pour les restaurants et hôtels ?", a: "Oui. Nous travaillons régulièrement avec des restaurants, bars, hôtels et guest houses, avec un service discret et des contrats mensuels disponibles." },
    { q: "Proposez-vous des contrats mensuels ?", a: "Oui, à partir de 50$/mois pour les entreprises, avec visites planifiées, suivi et rapport." },
    { q: "Est-ce que le traitement est dangereux pour les enfants ou animaux ?", a: "Les produits sont appliqués avec méthode et précaution. Nous indiquons toujours le temps d'attente avant de réoccuper la zone et les précautions à prendre." },
    { q: "Combien de temps dure une intervention ?", a: "Une intervention standard dure entre 45 minutes et 2 heures selon la surface et le type de nuisible." },
    { q: "Que faire avant l'arrivée du technicien ?", a: "Nous envoyons les consignes de préparation par WhatsApp (ranger la nourriture, dégager les zones à traiter, etc.) selon le type de traitement." },
    { q: "Est-ce que vous traitez les punaises de lit ?", a: "Oui, avec inspection, traitement ciblé, conseils de préparation et suivi pour s'assurer de l'élimination." },
    { q: "Est-ce que vous faites la dératisation des dépôts ?", a: "Oui, nous installons des plans de dératisation pour dépôts, magasins et entrepôts, avec postes d'appâtage et contrôle régulier." },
    { q: "Dans quelles communes de Kinshasa intervenez-vous ?", a: "Nous couvrons toutes les communes de Kinshasa : Gombe, Ngaliema, Limete, Bandalungwa, Kintambo, Lemba, Matete, Kalamu, Barumbu, Mont Ngafula, Masina, N'Djili, Kimbanseke et plus." },
  ],
  en: [
    { q: "How much does pest control cost in Kinshasa?", a: "Prices start at $25 for a small treatment and vary by location size, pest type and infestation level. Final pricing is confirmed after inspection or photos on WhatsApp." },
    { q: "Is the inspection free?", a: "Yes, initial inspection is free in Kinshasa to assess the issue and give you clear pricing." },
    { q: "Do you serve restaurants and hotels?", a: "Yes. We regularly work with restaurants, bars, hotels and guest houses, with discreet service and monthly contracts available." },
    { q: "Do you offer monthly contracts?", a: "Yes, starting from $50/month for businesses with scheduled visits, follow-up and reports." },
    { q: "Is the treatment safe for children or pets?", a: "Products are applied with method and care. We always indicate the wait time before reoccupying the area and precautions to take." },
    { q: "How long does a treatment take?", a: "A standard treatment takes between 45 minutes and 2 hours depending on the surface and pest type." },
    { q: "What should I do before the technician arrives?", a: "We send preparation instructions by WhatsApp (store food, clear the areas to be treated, etc.) based on the treatment type." },
    { q: "Do you treat bed bugs?", a: "Yes, with inspection, targeted treatment, preparation advice and follow-up to ensure elimination." },
    { q: "Do you provide rodent control for warehouses?", a: "Yes, we set up rodent control plans for warehouses, stores and depots with bait stations and regular control." },
    { q: "Which areas of Kinshasa do you cover?", a: "We cover every commune of Kinshasa: Gombe, Ngaliema, Limete, Bandalungwa, Kintambo, Lemba, Matete, Kalamu, Barumbu, Mont Ngafula, Masina, N'Djili, Kimbanseke and more." },
  ],
};

// --- UI Strings ---
export const T = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      customers: "Clients",
      pricing: "Prix",
      locations: "Zones",
      blog: "Conseils",
      contact: "Contact",
    },
    cta: {
      freeInspection: "Inspection gratuite",
      bookFreeInspection: "Réserver une inspection gratuite",
      whatsapp: "Écrire sur WhatsApp",
      call: "Appeler maintenant",
      viewPricing: "Voir les prix",
      requestQuote: "Demander un devis",
      monthlyContract: "Contrat mensuel pour entreprises",
      book: "Réserver",
    },
    hero: {
      eyebrow: "Service anti-nuisibles professionnel · Kinshasa",
      headline: "Protégez votre maison ou votre entreprise contre les nuisibles à Kinshasa",
      sub: "Traitement professionnel contre cafards, rats, moustiques, fourmis, punaises et termites. Inspection gratuite, prix clair avant intervention et suivi après traitement.",
      bullets: [
        "Intervention rapide à Kinshasa",
        "Maisons, restaurants, hôtels, bureaux et dépôts",
        "Rapport après intervention",
        "Contrats mensuels disponibles",
      ],
    },
    sections: {
      problemTitle: "Un problème de nuisibles peut vite devenir un risque pour votre santé, votre image et votre activité",
      problemBody:
        "Rats, cafards, moustiques, fourmis, termites et punaises de lit affectent les maisons, restaurants, hôtels, magasins, dépôts et bureaux à Kinshasa. Anti Nuisibles Kin vous accompagne avec une méthode professionnelle, préventive et discrète.",
      servicesTitle: "Nos services",
      servicesSub: "Traitements ciblés pour particuliers et entreprises à Kinshasa.",
      customersTitle: "Pour qui nous travaillons",
      customersSub: "Des solutions adaptées à chaque type de lieu.",
      pricingTitle: "Prix indicatifs",
      pricingSub: "Le prix final est confirmé après inspection ou analyse des photos/vidéos envoyées sur WhatsApp.",
      howTitle: "Comment ça se passe",
      monthlyTitle: "Contrats mensuels pour entreprises",
      monthlyBody:
        "Restaurants, hôtels, bureaux, écoles, dépôts et commerces : un plan préventif avec visites planifiées, suivi et rapport. Idéal pour protéger votre hygiène et votre réputation.",
      locationsTitle: "Nous intervenons à Kinshasa",
      locationsSub: "Toutes les communes couvertes. Service rapide selon la zone.",
      faqTitle: "Questions fréquentes",
      blogTitle: "Conseils & guides",
      blogSub: "Comprendre, prévenir et traiter les nuisibles à Kinshasa.",
      finalCtaTitle: "Prêt à régler le problème ?",
      finalCtaBody: "Recevez une inspection gratuite et un prix clair avant toute intervention.",
      trustTitle: "Pourquoi nous choisir",
    },
    trust: [
      "Inspection gratuite",
      "Prix clair avant intervention",
      "Suivi après traitement",
      "Rapport WhatsApp",
      "Service discret pour hôtels et restaurants",
      "Contrats mensuels pour entreprises",
      "Méthode professionnelle et travail propre",
    ],
    safety:
      "Les traitements doivent être réalisés avec méthode, précaution et produits adaptés. Le prix et la méthode sont confirmés après inspection.",
    responsibility:
      "Nous aidons à réduire les nuisibles et à améliorer l'hygiène des lieux grâce à une méthode professionnelle et préventive.",
    form: {
      title: "Demandez votre inspection gratuite",
      sub: "Réponse rapide par WhatsApp ou téléphone.",
      fullName: "Nom complet",
      phone: "Téléphone",
      whatsapp: "Numéro WhatsApp",
      email: "Email (optionnel)",
      customerType: "Type de client",
      service: "Service souhaité",
      city: "Ville",
      commune: "Commune / quartier",
      address: "Adresse (optionnel)",
      date: "Date souhaitée",
      urgency: "Urgence",
      message: "Message",
      preferredContact: "Mode de contact préféré",
      submit: "Envoyer la demande",
      thanks: "Merci. Votre demande a été reçue. Nous vous contacterons rapidement pour confirmer l'inspection ou le devis.",
      customerOptions: ["Maison", "Restaurant", "Hôtel", "Bureau", "Magasin", "Dépôt", "École / Clinique", "Autre"],
      serviceOptions: ["Rats", "Cafards", "Moustiques", "Fourmis", "Punaises de lit", "Termites", "Désinfection", "Contrat mensuel", "Je ne sais pas"],
      urgencyOptions: ["Aujourd'hui", "Cette semaine", "Flexible"],
      contactOptions: ["WhatsApp", "Appel", "Email"],
    },
    footer: {
      tagline: "Dératisation • Désinsectisation • Désinfection à Kinshasa",
      services: "Services",
      customers: "Clients",
      locations: "Zones",
      company: "Entreprise",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      terms: "Conditions",
      cookies: "Cookies",
      safety: "Sécurité",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      customers: "Customers",
      pricing: "Pricing",
      locations: "Locations",
      blog: "Advice",
      contact: "Contact",
    },
    cta: {
      freeInspection: "Free inspection",
      bookFreeInspection: "Book a free inspection",
      whatsapp: "Message us on WhatsApp",
      call: "Call now",
      viewPricing: "View pricing",
      requestQuote: "Request a quote",
      monthlyContract: "Monthly contract for businesses",
      book: "Book",
    },
    hero: {
      eyebrow: "Professional pest control · Kinshasa",
      headline: "Protect your home or business from pests in Kinshasa",
      sub: "Professional treatment for cockroaches, rats, mosquitoes, ants, bed bugs and termites. Free inspection, clear pricing before treatment and follow-up after service.",
      bullets: [
        "Fast service across Kinshasa",
        "Homes, restaurants, hotels, offices and warehouses",
        "Report after treatment",
        "Monthly contracts available",
      ],
    },
    sections: {
      problemTitle: "A pest problem can quickly threaten your health, your image and your business",
      problemBody:
        "Rats, cockroaches, mosquitoes, ants, termites and bed bugs affect homes, restaurants, hotels, shops, warehouses and offices in Kinshasa. Anti Nuisibles Kin supports you with a professional, preventive and discreet method.",
      servicesTitle: "Our services",
      servicesSub: "Targeted treatments for homes and businesses in Kinshasa.",
      customersTitle: "Who we work for",
      customersSub: "Solutions adapted to every type of place.",
      pricingTitle: "Indicative pricing",
      pricingSub: "Final pricing is confirmed after inspection or after reviewing photos/videos sent on WhatsApp.",
      howTitle: "How it works",
      monthlyTitle: "Monthly contracts for businesses",
      monthlyBody:
        "Restaurants, hotels, offices, schools, warehouses and shops: a preventive plan with scheduled visits, follow-up and report. Ideal to protect hygiene and reputation.",
      locationsTitle: "We operate across Kinshasa",
      locationsSub: "Every commune covered. Fast service based on your area.",
      faqTitle: "Frequently asked questions",
      blogTitle: "Advice & guides",
      blogSub: "Understand, prevent and treat pests in Kinshasa.",
      finalCtaTitle: "Ready to solve the problem?",
      finalCtaBody: "Get a free inspection and clear pricing before any treatment.",
      trustTitle: "Why choose us",
    },
    trust: [
      "Free inspection",
      "Clear pricing before treatment",
      "Post-treatment follow-up",
      "WhatsApp report",
      "Discreet service for hotels and restaurants",
      "Monthly contracts for businesses",
      "Professional method and clean work",
    ],
    safety:
      "Treatments must be performed with proper method, care and suitable products. Pricing and treatment approach are confirmed after inspection.",
    responsibility:
      "We help reduce pest problems and improve hygiene through a professional and preventive approach.",
    form: {
      title: "Get your free inspection",
      sub: "Quick reply by WhatsApp or phone.",
      fullName: "Full name",
      phone: "Phone",
      whatsapp: "WhatsApp number",
      email: "Email (optional)",
      customerType: "Customer type",
      service: "Service needed",
      city: "City",
      commune: "Commune / area",
      address: "Address (optional)",
      date: "Preferred date",
      urgency: "Urgency",
      message: "Message",
      preferredContact: "Preferred contact method",
      submit: "Send request",
      thanks: "Thank you. Your request has been received. We will contact you shortly to confirm your inspection or quote.",
      customerOptions: ["Home", "Restaurant", "Hotel", "Office", "Shop", "Warehouse", "School / Clinic", "Other"],
      serviceOptions: ["Rats", "Cockroaches", "Mosquitoes", "Ants", "Bed bugs", "Termites", "Disinfection", "Monthly contract", "Not sure"],
      urgencyOptions: ["Today", "This week", "Flexible"],
      contactOptions: ["WhatsApp", "Call", "Email"],
    },
    footer: {
      tagline: "Pest control for homes, restaurants, hotels and businesses",
      services: "Services",
      customers: "Customers",
      locations: "Locations",
      company: "Company",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms",
      cookies: "Cookies",
      safety: "Safety notice",
      rights: "All rights reserved.",
    },
  },
} as const;

// --- Blog ---
export const BLOG_POSTS = [
  {
    slug: { fr: "signes-cafards-maison", en: "signs-of-cockroaches-at-home" },
    title: {
      fr: "Comment savoir si vous avez des cafards à la maison ?",
      en: "How to know if you have cockroaches at home",
    },
    excerpt: {
      fr: "Les signes visibles, les zones à surveiller et quand appeler un professionnel à Kinshasa.",
      en: "Visible signs, areas to watch, and when to call a professional in Kinshasa.",
    },
  },
  {
    slug: { fr: "signes-rats-restaurant", en: "signs-of-rats-restaurant" },
    title: {
      fr: "5 signes de présence de rats dans un restaurant",
      en: "Signs of rats in a restaurant",
    },
    excerpt: {
      fr: "Indices à surveiller pour protéger votre cuisine, votre stock et votre réputation.",
      en: "Indicators to watch to protect your kitchen, stock and reputation.",
    },
  },
  {
    slug: { fr: "moustiques-kinshasa", en: "reduce-mosquitoes-kinshasa" },
    title: {
      fr: "Comment réduire les moustiques autour de votre maison à Kinshasa",
      en: "How to reduce mosquitoes around your home in Kinshasa",
    },
    excerpt: {
      fr: "Eaux stagnantes, plantes, traitement extérieur : les bons réflexes saison après saison.",
      en: "Stagnant water, plants, outdoor treatment: the right reflexes season after season.",
    },
  },
  {
    slug: { fr: "preparer-desinsectisation", en: "prepare-pest-treatment" },
    title: {
      fr: "Comment préparer votre maison avant une désinsectisation",
      en: "How to prepare your home before pest treatment",
    },
    excerpt: {
      fr: "Checklist simple pour un traitement efficace et durable.",
      en: "Simple checklist for an effective, long-lasting treatment.",
    },
  },
  {
    slug: { fr: "contrat-mensuel-restaurant", en: "monthly-restaurant-contract" },
    title: {
      fr: "Dératisation pour restaurants: pourquoi un contrat mensuel est utile",
      en: "Why restaurants need monthly pest control",
    },
    excerpt: {
      fr: "Continuité, traçabilité, protection de la réputation : les avantages concrets.",
      en: "Continuity, traceability, reputation: concrete benefits.",
    },
  },
  {
    slug: { fr: "punaises-de-lit-preparation", en: "bed-bugs-before-treatment" },
    title: {
      fr: "Punaises de lit : que faire avant l'intervention ?",
      en: "Bed bugs: what to do before treatment",
    },
    excerpt: {
      fr: "Linge, mobilier, isolement : préparez votre logement pour un résultat optimal.",
      en: "Linen, furniture, isolation: prepare your home for optimal results.",
    },
  },
];
