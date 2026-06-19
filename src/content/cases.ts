import type { Lang } from "./site";

export type PestivoCase = {
  id: string;
  slug: Record<Lang, string>;
  title: Record<Lang, string>;
  eyebrow: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  image: string;
  imageAlt: Record<Lang, string>;
  audience: Record<Lang, string>;
  service: Record<Lang, string>;
  problem: Record<Lang, string>;
  solution: Record<Lang, string>;
  prevention: Record<Lang, string[]>;
  socialAngles: Record<Lang, string[]>;
};

export const CASES: PestivoCase[] = [
  {
    id: "home-treatment",
    slug: {
      fr: "traitement-maison",
      en: "home-treatment",
    },
    title: {
      fr: "Traitement anti-nuisibles à domicile",
      en: "Home pest control treatment",
    },
    eyebrow: {
      fr: "Maison & appartement",
      en: "Home & apartment",
    },
    excerpt: {
      fr: "Intervention ciblée contre cafards, fourmis, moustiques et autres nuisibles dans les maisons, appartements et parcelles.",
      en: "Targeted treatment against cockroaches, ants, mosquitoes and other pests in homes, apartments and compounds.",
    },
    image: "/images/services/home-treatment.webp",
    imageAlt: {
      fr: "Technicien en combinaison réalisant un traitement anti-nuisibles dans une maison",
      en: "Technician in protective suit performing pest control treatment inside a home",
    },
    audience: {
      fr: "Particuliers, familles, propriétaires et locataires",
      en: "Homeowners, tenants and families",
    },
    service: {
      fr: "Désinsectisation maison",
      en: "Home insect control",
    },
    problem: {
      fr: "Les cafards, fourmis et moustiques peuvent rapidement se développer dans les cuisines, salles d'eau, coins sombres, fissures et zones humides.",
      en: "Cockroaches, ants and mosquitoes can quickly spread in kitchens, bathrooms, dark corners, cracks and humid areas.",
    },
    solution: {
      fr: "Pestivo Services inspecte les zones à risque, applique un traitement adapté et donne des conseils simples pour limiter le retour des nuisibles.",
      en: "Pestivo Services inspects risk areas, applies an adapted treatment and gives simple prevention advice to reduce recurrence.",
    },
    prevention: {
      fr: [
        "Fermer les aliments et nettoyer les miettes chaque soir.",
        "Réduire l'humidité autour de la cuisine et des sanitaires.",
        "Boucher les fissures et ouvertures visibles.",
        "Éviter l'accumulation de déchets à proximité de la maison.",
      ],
      en: [
        "Keep food closed and clean crumbs every evening.",
        "Reduce moisture around kitchens and bathrooms.",
        "Seal visible cracks and openings.",
        "Avoid waste accumulation near the home.",
      ],
    },
    socialAngles: {
      fr: [
        "3 signes que les cafards sont déjà installés chez vous",
        "Pourquoi une maison propre peut quand même attirer les nuisibles",
        "Avant/après : comment préparer une maison avant désinsectisation",
      ],
      en: [
        "3 signs cockroaches are already inside your home",
        "Why a clean home can still attract pests",
        "Before/after: how to prepare your home before pest treatment",
      ],
    },
  },
  {
    id: "outdoor-treatment",
    slug: {
      fr: "traitement-exterieur",
      en: "outdoor-treatment",
    },
    title: {
      fr: "Traitement extérieur et zones à risque",
      en: "Outdoor treatment and risk areas",
    },
    eyebrow: {
      fr: "Extérieur & parcelle",
      en: "Outdoor & compound",
    },
    excerpt: {
      fr: "Traitement des zones extérieures, entrées, cours, caniveaux, façades et points où les nuisibles peuvent circuler.",
      en: "Treatment of outdoor areas, entrances, yards, drains, façades and places where pests can move.",
    },
    image: "/images/services/street-treatment.webp",
    imageAlt: {
      fr: "Technicien en combinaison traitant une zone extérieure devant un bâtiment",
      en: "Technician in protective suit treating an outdoor area outside a building",
    },
    audience: {
      fr: "Commerces, immeubles, restaurants, hôtels et parcelles",
      en: "Shops, buildings, restaurants, hotels and compounds",
    },
    service: {
      fr: "Traitement extérieur anti-nuisibles",
      en: "Outdoor pest treatment",
    },
    problem: {
      fr: "Les nuisibles arrivent souvent de l'extérieur : caniveaux, déchets, zones humides, trous dans les murs, arrière-cours ou points d'entrée mal protégés.",
      en: "Pests often come from outside: drains, waste, humid areas, wall openings, backyards or poorly protected entry points.",
    },
    solution: {
      fr: "Nous traitons les zones de passage, identifions les points d'entrée et recommandons des mesures de prévention pour réduire les risques.",
      en: "We treat movement areas, identify entry points and recommend prevention measures to reduce risks.",
    },
    prevention: {
      fr: [
        "Éviter les eaux stagnantes autour du bâtiment.",
        "Maintenir les poubelles fermées.",
        "Nettoyer les abords et les zones sombres.",
        "Contrôler régulièrement les fissures, trous et caniveaux.",
      ],
      en: [
        "Avoid stagnant water around the building.",
        "Keep trash bins closed.",
        "Clean surroundings and dark areas.",
        "Regularly check cracks, holes and drains.",
      ],
    },
    socialAngles: {
      fr: [
        "Les nuisibles entrent souvent par l'extérieur : voici où regarder",
        "Caniveaux, déchets, humidité : les zones qui attirent les rats et cafards",
        "Pourquoi traiter seulement l'intérieur ne suffit pas toujours",
      ],
      en: [
        "Pests often enter from outside: where to look first",
        "Drains, waste and moisture: areas that attract rats and cockroaches",
        "Why indoor treatment alone is not always enough",
      ],
    },
  },
  {
    id: "interior-hygiene",
    slug: {
      fr: "hygiene-interieure",
      en: "interior-hygiene",
    },
    title: {
      fr: "Hygiène intérieure et prévention",
      en: "Interior hygiene and prevention",
    },
    eyebrow: {
      fr: "Hygiène & prévention",
      en: "Hygiene & prevention",
    },
    excerpt: {
      fr: "Les surfaces mal entretenues, l'humidité et les déchets alimentaires créent souvent les conditions favorables aux nuisibles.",
      en: "Poorly maintained surfaces, moisture and food waste often create the right conditions for pests.",
    },
    image: "/images/services/hygiene-window.webp",
    imageAlt: {
      fr: "Personne nettoyant une fenêtre avec masque et gants",
      en: "Person cleaning a window with mask and gloves",
    },
    audience: {
      fr: "Maisons, bureaux, écoles, restaurants et hôtels",
      en: "Homes, offices, schools, restaurants and hotels",
    },
    service: {
      fr: "Hygiène préventive",
      en: "Preventive hygiene",
    },
    problem: {
      fr: "Un environnement propre ne garantit pas l'absence de nuisibles, mais les déchets, graisses, miettes, humidité et surfaces négligées augmentent fortement le risque.",
      en: "A clean environment does not guarantee zero pests, but waste, grease, crumbs, moisture and neglected surfaces greatly increase the risk.",
    },
    solution: {
      fr: "Pestivo Services aide à traiter les nuisibles et à identifier les habitudes d'hygiène qui favorisent leur retour.",
      en: "Pestivo Services helps treat pests and identify hygiene habits that can encourage their return.",
    },
    prevention: {
      fr: [
        "Nettoyer les surfaces alimentaires chaque jour.",
        "Sécher les zones humides après usage.",
        "Éviter les déchets ouverts pendant la nuit.",
        "Former le personnel aux gestes simples de prévention.",
      ],
      en: [
        "Clean food surfaces every day.",
        "Dry humid areas after use.",
        "Avoid open waste overnight.",
        "Train staff on simple prevention habits.",
      ],
    },
    socialAngles: {
      fr: [
        "Les nuisibles ne viennent pas par hasard",
        "Pourquoi l'hygiène est la première barrière contre les cafards",
        "4 habitudes simples pour réduire les risques de nuisibles",
      ],
      en: [
        "Pests do not appear by accident",
        "Why hygiene is the first barrier against cockroaches",
        "4 simple habits to reduce pest risks",
      ],
    },
  },
  {
    id: "industrial-treatment",
    slug: {
      fr: "traitement-industriel",
      en: "industrial-treatment",
    },
    title: {
      fr: "Traitement anti-nuisibles industriel",
      en: "Industrial pest control treatment",
    },
    eyebrow: {
      fr: "Industrie & dépôts",
      en: "Industry & warehouses",
    },
    excerpt: {
      fr: "Contrôle des nuisibles dans les dépôts, usines, cuisines professionnelles, zones de stockage et locaux techniques.",
      en: "Pest control in warehouses, factories, professional kitchens, storage areas and technical spaces.",
    },
    image: "/images/services/industrial-treatment.webp",
    imageAlt: {
      fr: "Technicien traitant une zone industrielle avec équipement de protection",
      en: "Technician treating an industrial area with protective equipment",
    },
    audience: {
      fr: "Dépôts, usines, restaurants, cuisines professionnelles et magasins",
      en: "Warehouses, factories, restaurants, professional kitchens and stores",
    },
    service: {
      fr: "Contrat entreprise anti-nuisibles",
      en: "Business pest control contract",
    },
    problem: {
      fr: "Les dépôts et sites industriels attirent les nuisibles à cause du stockage, des livraisons, des déchets, de la chaleur, des ouvertures et du passage fréquent.",
      en: "Warehouses and industrial sites attract pests because of storage, deliveries, waste, heat, openings and frequent movement.",
    },
    solution: {
      fr: "Nous proposons une inspection, un plan de traitement, un suivi et des contrats mensuels pour réduire les risques dans les zones sensibles.",
      en: "We provide inspection, treatment planning, follow-up and monthly contracts to reduce risks in sensitive areas.",
    },
    prevention: {
      fr: [
        "Contrôler les points d'entrée et les zones de livraison.",
        "Mettre en place un suivi régulier.",
        "Garder les stocks surélevés et organisés.",
        "Documenter les interventions pour les responsables.",
      ],
      en: [
        "Check entry points and delivery areas.",
        "Set up regular monitoring.",
        "Keep stock elevated and organized.",
        "Document interventions for managers.",
      ],
    },
    socialAngles: {
      fr: [
        "Pourquoi les dépôts attirent les rats et cafards",
        "Le coût caché d'un problème de nuisibles en entreprise",
        "Contrat mensuel : la meilleure option pour les restaurants et dépôts",
      ],
      en: [
        "Why warehouses attract rats and cockroaches",
        "The hidden cost of a pest problem in business",
        "Monthly contracts: the best option for restaurants and warehouses",
      ],
    },
  },
  {
    id: "bed-bugs",
    slug: {
      fr: "punaises-de-lit",
      en: "bed-bugs",
    },
    title: {
      fr: "Traitement des punaises de lit",
      en: "Bed bug treatment",
    },
    eyebrow: {
      fr: "Punaises de lit",
      en: "Bed bugs",
    },
    excerpt: {
      fr: "Intervention ciblée pour chambres, hôtels, guest houses et logements touchés par les punaises de lit.",
      en: "Targeted treatment for bedrooms, hotels, guest houses and homes affected by bed bugs.",
    },
    image: "/images/services/bed-bug-treatment.webp",
    imageAlt: {
      fr: "Technicien traitant un matelas contre les punaises de lit",
      en: "Technician treating a mattress against bed bugs",
    },
    audience: {
      fr: "Maisons, hôtels, guest houses et locations",
      en: "Homes, hotels, guest houses and rentals",
    },
    service: {
      fr: "Traitement punaises de lit",
      en: "Bed bug treatment",
    },
    problem: {
      fr: "Les punaises de lit se cachent dans les matelas, têtes de lit, fissures, meubles et bagages. Le problème peut vite se propager si rien n'est fait.",
      en: "Bed bugs hide in mattresses, headboards, cracks, furniture and luggage. The issue can spread quickly if not handled.",
    },
    solution: {
      fr: "Nous inspectons les zones sensibles, traitons les points critiques et donnons une checklist de préparation et de suivi.",
      en: "We inspect sensitive areas, treat critical points and provide a preparation and follow-up checklist.",
    },
    prevention: {
      fr: [
        "Laver le linge à haute température si possible.",
        "Isoler les objets touchés avant intervention.",
        "Éviter de déplacer les matelas sans protection.",
        "Contrôler les bagages après voyage.",
      ],
      en: [
        "Wash linen at high temperature when possible.",
        "Isolate affected items before treatment.",
        "Avoid moving mattresses without protection.",
        "Check luggage after travel.",
      ],
    },
    socialAngles: {
      fr: [
        "Punaises de lit : les signes à ne pas ignorer",
        "Pourquoi il ne faut pas déplacer le matelas tout de suite",
        "Checklist avant une intervention contre les punaises",
      ],
      en: [
        "Bed bugs: signs you should not ignore",
        "Why you should not move the mattress immediately",
        "Checklist before a bed bug treatment",
      ],
    },
  },
  {
    id: "office-disinfection",
    slug: {
      fr: "desinfection-bureaux",
      en: "office-disinfection",
    },
    title: {
      fr: "Désinfection de bureaux",
      en: "Office disinfection",
    },
    eyebrow: {
      fr: "Bureaux & lieux de travail",
      en: "Offices & workplaces",
    },
    excerpt: {
      fr: "Désinfection et hygiène de bureaux, surfaces de contact, postes de travail, salles d'attente et espaces communs.",
      en: "Disinfection and hygiene for offices, contact surfaces, workstations, waiting rooms and shared spaces.",
    },
    image: "/images/services/office-disinfection.webp",
    imageAlt: {
      fr: "Technicien désinfectant un bureau avec un pulvérisateur",
      en: "Technician disinfecting an office desk with a sprayer",
    },
    audience: {
      fr: "Bureaux, cliniques, écoles, commerces et institutions",
      en: "Offices, clinics, schools, shops and institutions",
    },
    service: {
      fr: "Désinfection professionnelle",
      en: "Professional disinfection",
    },
    problem: {
      fr: "Les bureaux et espaces partagés accumulent poussière, contacts fréquents et zones négligées. Cela peut nuire à l'hygiène et au confort du personnel.",
      en: "Offices and shared spaces accumulate dust, frequent contact and neglected areas. This can affect hygiene and staff comfort.",
    },
    solution: {
      fr: "Pestivo Services intervient sur les zones de contact, surfaces sensibles et espaces communs avec une méthode propre et organisée.",
      en: "Pestivo Services treats contact areas, sensitive surfaces and shared spaces with a clean and organized method.",
    },
    prevention: {
      fr: [
        "Nettoyer les surfaces de contact régulièrement.",
        "Aérer les espaces quand c'est possible.",
        "Éviter l'accumulation de déchets dans les bureaux.",
        "Mettre en place un planning d'hygiène.",
      ],
      en: [
        "Clean contact surfaces regularly.",
        "Ventilate spaces when possible.",
        "Avoid waste accumulation in offices.",
        "Set up a hygiene schedule.",
      ],
    },
    socialAngles: {
      fr: [
        "Les zones de bureau qu'on oublie souvent de désinfecter",
        "Pourquoi l'hygiène au bureau protège aussi l'image de l'entreprise",
        "Désinfection : quand faut-il planifier une intervention ?",
      ],
      en: [
        "Office areas people often forget to disinfect",
        "Why office hygiene also protects business image",
        "Disinfection: when should you schedule a treatment?",
      ],
    },
  },
  {
    id: "office-pest-control",
    slug: {
      fr: "anti-nuisibles-bureaux",
      en: "office-pest-control",
    },
    title: {
      fr: "Anti-nuisibles pour bureaux",
      en: "Office pest control",
    },
    eyebrow: {
      fr: "Bureaux & commerces",
      en: "Offices & shops",
    },
    excerpt: {
      fr: "Traitement et prévention des nuisibles dans les bureaux, commerces, salles d'attente et locaux professionnels.",
      en: "Treatment and prevention of pests in offices, shops, waiting rooms and professional premises.",
    },
    image: "/images/services/office-pest-control.webp",
    imageAlt: {
      fr: "Technicien réalisant un traitement anti-nuisibles près d'une fenêtre de bureau",
      en: "Technician performing pest control treatment near an office window",
    },
    audience: {
      fr: "Bureaux, commerces, cabinets, administrations et agences",
      en: "Offices, shops, practices, administrations and agencies",
    },
    service: {
      fr: "Prévention anti-nuisibles bureaux",
      en: "Office pest prevention",
    },
    problem: {
      fr: "Les bureaux peuvent attirer cafards, fourmis, mouches ou rongeurs à cause des restes alimentaires, poubelles, conduits, fissures et zones peu inspectées.",
      en: "Offices can attract cockroaches, ants, flies or rodents because of food waste, bins, ducts, cracks and rarely inspected areas.",
    },
    solution: {
      fr: "Nous inspectons les points sensibles, traitons les zones à risque et proposons un suivi adapté pour garder les locaux propres et rassurants.",
      en: "We inspect sensitive points, treat risk areas and offer adapted follow-up to keep premises clean and reassuring.",
    },
    prevention: {
      fr: [
        "Éviter les restes alimentaires dans les bureaux.",
        "Vider les poubelles régulièrement.",
        "Contrôler les coins sombres et zones techniques.",
        "Programmer un contrôle préventif régulier.",
      ],
      en: [
        "Avoid food leftovers in offices.",
        "Empty bins regularly.",
        "Check dark corners and technical areas.",
        "Schedule regular preventive inspection.",
      ],
    },
    socialAngles: {
      fr: [
        "Un bureau peut aussi avoir des nuisibles",
        "Les 5 zones à surveiller dans un local professionnel",
        "Pourquoi un contrôle préventif coûte moins cher qu'une urgence",
      ],
      en: [
        "An office can also have pests",
        "5 areas to monitor in a professional space",
        "Why preventive control costs less than an emergency",
      ],
    },
  },
];

export function getCaseBySlug(lang: Lang, slug: string) {
  return CASES.find((item) => item.slug[lang] === slug) ?? null;
}