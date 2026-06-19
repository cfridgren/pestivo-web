export type CampaignLang = "fr" | "en" | "ln";

export type CampaignPage = {
  id: string;
  slug: Record<CampaignLang, string>;
  title: Record<CampaignLang, string>;
  metaTitle: Record<CampaignLang, string>;
  metaDescription: Record<CampaignLang, string>;
  eyebrow: Record<CampaignLang, string>;
  headline: Record<CampaignLang, string>;
  sub: Record<CampaignLang, string>;
  price: Record<CampaignLang, string>;
  primaryCta: Record<CampaignLang, string>;
  secondaryCta: Record<CampaignLang, string>;
  image: string;
  imageAlt: Record<CampaignLang, string>;
  includesTitle: Record<CampaignLang, string>;
  includes: Record<CampaignLang, string[]>;
  targetTitle: Record<CampaignLang, string>;
  targets: Record<CampaignLang, string[]>;
  problemTitle: Record<CampaignLang, string>;
  problemText: Record<CampaignLang, string>;
  offerTitle: Record<CampaignLang, string>;
  offerText: Record<CampaignLang, string>;
  stepsTitle: Record<CampaignLang, string>;
  steps: Record<CampaignLang, { title: string; text: string }[]>;
  faqTitle: Record<CampaignLang, string>;
  faq: Record<CampaignLang, { q: string; a: string }[]>;
  finalTitle: Record<CampaignLang, string>;
  finalText: Record<CampaignLang, string>;
};

export const CAMPAIGNS: CampaignPage[] = [
  {
    id: "monthly-pest-control",
    slug: {
      fr: "abonnement-anti-nuisibles",
      en: "monthly-pest-control",
      ln: "abonnement-anti-nuisibles",
    },
    title: {
      fr: "Contrat mensuel anti-nuisibles",
      en: "Monthly pest control contract",
      ln: "Abonnement ya koboma banyama mabe",
    },
    metaTitle: {
      fr: "Contrat mensuel anti-nuisibles à Kinshasa — Pestivo Services",
      en: "Monthly pest control contract in Kinshasa — Pestivo Services",
      ln: "Abonnement ya koboma banyama mabe na Kinshasa — Pestivo Services",
    },
    metaDescription: {
      fr: "Contrat mensuel anti-nuisibles à Kinshasa pour restaurants, hôtels, bureaux, dépôts, magasins, écoles et cliniques. Inspection gratuite, visites régulières et suivi WhatsApp.",
      en: "Monthly pest control in Kinshasa for restaurants, hotels, offices, warehouses, shops, schools and clinics. Free inspection, regular visits and WhatsApp follow-up.",
      ln: "Abonnement ya Pestivo Services na Kinshasa mpo na restaurants, hôtels, bureaux, magasins mpe dépôts. Inspection ya ofele, visites ya sanza na sanza mpe suivi na WhatsApp.",
    },
    eyebrow: {
      fr: "Offre entreprises · Kinshasa",
      en: "Business offer · Kinshasa",
      ln: "Offre mpo na ba entreprises · Kinshasa",
    },
    headline: {
      fr: "Protégez votre restaurant, hôtel, bureau ou dépôt avec un contrat mensuel anti-nuisibles",
      en: "Protect your restaurant, hotel, office or warehouse with a monthly pest control contract",
      ln: "Batela restaurant, hôtel, bureau to dépôt na yo na abonnement ya sanza na sanza",
    },
    sub: {
      fr: "Pestivo Services vous aide à réduire les risques de cafards, rats, moustiques, fourmis et autres nuisibles avec des visites régulières, un suivi clair et une intervention discrète.",
      en: "Pestivo Services helps reduce the risk of cockroaches, rats, mosquitoes, ants and other pests with regular visits, clear follow-up and discreet service.",
      ln: "Pestivo Services esalisaka mpo na kokitisa problème ya cafards, ba mpuku, ba moustiques mpe banyama mabe mosusu na visites ya mbala na mbala.",
    },
    price: {
      fr: "À partir de 50$/mois",
      en: "From $50/month",
      ln: "Kobanda na 50$/sanza",
    },
    primaryCta: {
      fr: "Demander une inspection gratuite",
      en: "Request a free inspection",
      ln: "Senga inspection ya ofele",
    },
    secondaryCta: {
      fr: "Écrire sur WhatsApp",
      en: "Message us on WhatsApp",
      ln: "Tinda message na WhatsApp",
    },
    image: "/images/services/industrial-treatment.webp",
    imageAlt: {
      fr: "Technicien Pestivo Services en intervention anti-nuisibles pour entreprise",
      en: "Pestivo Services technician performing pest control treatment for a business",
      ln: "Technicien ya Pestivo Services azali kosala traitement anti-nuisibles",
    },
    includesTitle: {
      fr: "Ce qui est inclus",
      en: "What is included",
      ln: "Makambo ezali na kati",
    },
    includes: {
      fr: [
        "Inspection gratuite au départ",
        "1 à 4 visites par mois selon le risque",
        "Traitement rats, cafards, moustiques, fourmis et insectes",
        "Conseils de prévention pour votre équipe",
        "Suivi simple par WhatsApp après intervention",
        "Service discret pour protéger votre image",
      ],
      en: [
        "Free initial inspection",
        "1 to 4 visits per month depending on risk",
        "Treatment for rats, cockroaches, mosquitoes, ants and insects",
        "Prevention advice for your team",
        "Simple WhatsApp follow-up after service",
        "Discreet service to protect your image",
      ],
      ln: [
        "Inspection ya liboso ya ofele",
        "1 kino 4 visites na sanza selon problème",
        "Traitement mpo na ba mpuku, cafards, moustiques mpe fourmis",
        "Toli ya prévention mpo na équipe na yo",
        "Suivi na WhatsApp sima ya intervention",
        "Service ya kimia mpo na kobatela image ya entreprise",
      ],
    },
    targetTitle: {
      fr: "Pour qui ?",
      en: "Who is it for?",
      ln: "Mpo na nani?",
    },
    targets: {
      fr: [
        "Restaurants & bars",
        "Hôtels & guest houses",
        "Bureaux & commerces",
        "Dépôts & magasins",
        "Écoles & cliniques",
        "Cuisines professionnelles",
      ],
      en: [
        "Restaurants & bars",
        "Hotels & guest houses",
        "Offices & shops",
        "Warehouses & stores",
        "Schools & clinics",
        "Professional kitchens",
      ],
      ln: [
        "Restaurants & bars",
        "Hôtels & guest houses",
        "Bureaux & magasins",
        "Dépôts",
        "Écoles & cliniques",
        "Cuisines ya ba entreprises",
      ],
    },
    problemTitle: {
      fr: "Pourquoi un contrat mensuel est plus rentable qu'une urgence",
      en: "Why a monthly contract is more profitable than an emergency",
      ln: "Mpo na nini abonnement ezali malamu koleka kozela problème ekoma makasi",
    },
    problemText: {
      fr: "Dans un restaurant, un hôtel, un dépôt ou un bureau, un problème de nuisibles peut toucher l'hygiène, les stocks, les clients et la réputation. Une intervention unique peut aider, mais sans suivi, les nuisibles peuvent revenir par les caniveaux, déchets, ouvertures, livraisons ou zones humides.",
      en: "In a restaurant, hotel, warehouse or office, a pest problem can affect hygiene, stock, customers and reputation. A one-time treatment can help, but without follow-up, pests can return through drains, waste areas, openings, deliveries or humid zones.",
      ln: "Na restaurant, hôtel, dépôt to bureau, problème ya banyama mabe ekoki kobebisa hygiène, stock, ba clients mpe lokumu ya entreprise. Traitement moko ekoki kosalisa, kasi soki suivi ezali te, problème ekoki kozonga.",
    },
    offerTitle: {
      fr: "Une solution simple pour rester protégé toute l'année",
      en: "A simple solution to stay protected all year",
      ln: "Solution ya pete mpo na kobatela esika na yo mikolo nyonso",
    },
    offerText: {
      fr: "Avec un contrat mensuel Pestivo Services, vous avez un suivi régulier, des visites planifiées et une réponse plus rapide si un problème apparaît. C'est une solution idéale pour les entreprises qui veulent éviter les urgences, rassurer leurs clients et garder des locaux propres.",
      en: "With a Pestivo Services monthly contract, you get regular follow-up, scheduled visits and faster response if a problem appears. It is ideal for businesses that want to avoid emergencies, reassure customers and keep premises clean.",
      ln: "Na abonnement ya Pestivo Services, okozala na suivi ya mbala na mbala, visites oyo ebongisami liboso, mpe réponse ya noki soki problème ebimi. Ezali malamu mpo na ba entreprises oyo balingi kobatela esika ya mosala propre.",
    },
    stepsTitle: {
      fr: "Comment ça marche",
      en: "How it works",
      ln: "Ndenge esalaka",
    },
    steps: {
      fr: [
        {
          title: "1. Inspection gratuite",
          text: "Nous analysons le lieu, les zones à risque et le type de nuisibles.",
        },
        {
          title: "2. Plan mensuel",
          text: "Nous proposons une fréquence de visite adaptée à votre activité.",
        },
        {
          title: "3. Intervention discrète",
          text: "Le traitement est réalisé proprement, avec conseils de prévention.",
        },
        {
          title: "4. Suivi WhatsApp",
          text: "Vous recevez un suivi simple et pouvez nous contacter rapidement.",
        },
      ],
      en: [
        {
          title: "1. Free inspection",
          text: "We review the premises, risk areas and pest type.",
        },
        {
          title: "2. Monthly plan",
          text: "We recommend a visit frequency adapted to your business.",
        },
        {
          title: "3. Discreet service",
          text: "Treatment is done cleanly, with prevention advice.",
        },
        {
          title: "4. WhatsApp follow-up",
          text: "You receive simple follow-up and can contact us quickly.",
        },
      ],
      ln: [
        {
          title: "1. Inspection ya ofele",
          text: "Totali esika, zones ya risque mpe type ya banyama mabe.",
        },
        {
          title: "2. Plan ya sanza na sanza",
          text: "Topesi programme ya visites oyo ebongi na activité na yo.",
        },
        {
          title: "3. Intervention ya kimia",
          text: "Traitement esalemaka propre, na toli ya prévention.",
        },
        {
          title: "4. Suivi na WhatsApp",
          text: "Okozwa suivi ya pete mpe okoki kotinda message noki.",
        },
      ],
    },
    faqTitle: {
      fr: "Questions fréquentes",
      en: "Frequently asked questions",
      ln: "Mituna oyo bato batunaka mingi",
    },
    faq: {
      fr: [
        {
          q: "Combien coûte un contrat mensuel ?",
          a: "Les contrats mensuels commencent à partir de 50$/mois. Le prix dépend de la taille du lieu, du risque, du type d'activité et du nombre de visites.",
        },
        {
          q: "Est-ce adapté aux restaurants ?",
          a: "Oui. Les restaurants, bars et cuisines professionnelles sont parmi les lieux qui profitent le plus d'un suivi mensuel.",
        },
        {
          q: "Est-ce que l'inspection est gratuite ?",
          a: "Oui. Nous commençons par une inspection gratuite pour comprendre le besoin et proposer un plan adapté.",
        },
        {
          q: "Puis-je annuler plus tard ?",
          a: "Oui. Le contrat peut être adapté selon vos besoins. Les conditions sont confirmées avant le début.",
        },
      ],
      en: [
        {
          q: "How much does a monthly contract cost?",
          a: "Monthly contracts start from $50/month. The price depends on location size, risk level, activity type and number of visits.",
        },
        {
          q: "Is this suitable for restaurants?",
          a: "Yes. Restaurants, bars and professional kitchens benefit greatly from monthly follow-up.",
        },
        {
          q: "Is the inspection free?",
          a: "Yes. We start with a free inspection to understand the need and propose the right plan.",
        },
        {
          q: "Can I cancel later?",
          a: "Yes. The contract can be adapted to your needs. Terms are confirmed before starting.",
        },
      ],
      ln: [
        {
          q: "Abonnement efutaka boni?",
          a: "Ebandaka na 50$/sanza. Prix etalelaka bonene ya esika, risque, activité mpe nombre ya visites.",
        },
        {
          q: "Ezali malamu mpo na restaurant?",
          a: "Iyo. Restaurants, bars mpe cuisines ya ba entreprises bazwaka litomba mingi na suivi ya sanza na sanza.",
        },
        {
          q: "Inspection ezali ya ofele?",
          a: "Iyo. Tobandaka na inspection ya ofele mpo na koyeba problème mpe kopesa plan oyo ebongi.",
        },
        {
          q: "Nakoki kotika sima?",
          a: "Iyo. Conditions ekoyebisama liboso. Plan ekoki kobongisama selon besoin na yo.",
        },
      ],
    },
    finalTitle: {
      fr: "Prêt à protéger votre entreprise ?",
      en: "Ready to protect your business?",
      ln: "Olingi kobatela entreprise na yo?",
    },
    finalText: {
      fr: "Demandez une inspection gratuite aujourd'hui. Nous vous répondons sur WhatsApp avec un plan simple et un prix clair.",
      en: "Request a free inspection today. We reply on WhatsApp with a simple plan and clear pricing.",
      ln: "Senga inspection ya ofele lelo. Tokoyanola na WhatsApp na plan ya pete mpe prix ya polele.",
    },
  },
];

export function normalizeCampaignLang(value: string | undefined): CampaignLang {
  if (value === "en" || value === "ln") {
    return value;
  }

  return "fr";
}

export function getCampaignBySlug(lang: CampaignLang, slug: string) {
  return CAMPAIGNS.find((campaign) => campaign.slug[lang] === slug) ?? null;
}