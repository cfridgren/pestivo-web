import { Outlet, createFileRoute, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyMobileCTA } from "@/components/site/StickyMobileCTA";
import { isLang } from "@/lib/i18n";
import { BRAND } from "@/content/site";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
  },
  head: ({ params }) => {
    const lang = params.lang;
    const title =
      lang === "fr"
        ? `${BRAND.name} — Dératisation, désinsectisation et désinfection à Kinshasa`
        : `${BRAND.name} — Pest control in Kinshasa for homes and businesses`;
    return {
      meta: [
        { property: "og:site_name", content: BRAND.name },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "theme-color", content: "#0f1a2e" },
        { property: "og:locale", content: lang === "fr" ? "fr_CD" : "en_US" },
        { httpEquiv: "content-language", content: lang },
        { title },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: BRAND.name,
            image: undefined,
            url: `/${lang}`,
            telephone: BRAND.phoneNumber,
            email: BRAND.email,
            areaServed: "Kinshasa",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kinshasa",
              addressCountry: "CD",
            },
            sameAs: [],
          }),
        },
      ],
    };
  },
  component: LangLayout,
});

function LangLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background pb-sticky">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
