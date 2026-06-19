export const SEO = {
  siteUrl: "https://pestivo.cd",
  siteName: "Pestivo Services",
  defaultLocale: "fr",
  locales: ["fr", "en", "ln"],
  defaultTitle:
    "Pestivo Services — Dératisation, désinsectisation et désinfection à Kinshasa",
  defaultDescription:
    "Pestivo Services propose un service professionnel anti-nuisibles à Kinshasa : cafards, rats, moustiques, fourmis, punaises et termites. Inspection gratuite, prix clair et suivi WhatsApp.",
  socialImage: "/images/services/industrial-treatment.webp",
};

export function absoluteUrl(path: string) {
  if (!path.startsWith("/")) {
    return `${SEO.siteUrl}/${path}`;
  }

  return `${SEO.siteUrl}${path}`;
}