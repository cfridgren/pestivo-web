import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  ClipboardList,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { CampaignPromo } from "@/components/site/CampaignPromo";
import { CasesGrid } from "@/components/site/CasesGrid";
import { CTASection } from "@/components/site/CTASection";
import { CustomersGrid } from "@/components/site/CustomersGrid";
import { FAQ } from "@/components/site/FAQ";
import { Hero } from "@/components/site/Hero";
import { PricingBlock } from "@/components/site/PricingBlock";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { Button } from "@/components/ui/button";
import {
  BLOG_POSTS,
  BRAND,
  COMMUNES,
  FAQS,
  SECTION_SLUGS,
  STEPS,
  WHATSAPP_URL,
} from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const lang = safeLang(params.lang);

    const title =
      lang === "fr"
        ? `Dératisation & désinsectisation à Kinshasa — ${BRAND.name}`
        : `Pest control and disinfection in Kinshasa — ${BRAND.name}`;

    const description =
      lang === "fr"
        ? "Pestivo Services intervient contre cafards, rats, moustiques, punaises, termites et fourmis à Kinshasa. Inspection gratuite, prix clair et suivi après traitement."
        : "Pestivo Services treats cockroaches, rats, mosquitoes, bed bugs, termites and ants in Kinshasa. Free inspection, clear pricing and post-treatment follow-up.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/${lang}` },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: BRAND.name },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/${lang}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: BRAND.name,
            description,
            areaServed: "Kinshasa",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kinshasa",
              addressCountry: "CD",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: BRAND.phoneNumber,
              contactType: "customer service",
              availableLanguage: ["fr", "en"],
            },
            serviceType:
              lang === "fr"
                ? [
                    "Dératisation",
                    "Désinsectisation",
                    "Désinfection",
                    "Traitement cafards",
                    "Traitement rats",
                    "Traitement moustiques",
                    "Traitement punaises de lit",
                    "Traitement termites",
                  ]
                : [
                    "Pest control",
                    "Rodent control",
                    "Insect control",
                    "Disinfection",
                    "Cockroach control",
                    "Rat control",
                    "Mosquito control",
                    "Bed bug treatment",
                    "Termite treatment",
                  ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS[lang].slice(0, 6).map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        },
      ],
    };
  },
  component: HomePage,
});

function HomePage() {
  const { lang: raw } = Route.useParams();
  const lang = safeLang(raw);
  const tt = t(lang);

  const benefitCards = [
    {
      k: lang === "fr" ? "Hygiène" : "Hygiene",
      v: lang === "fr" ? "Protégée" : "Protected",
    },
    {
      k: lang === "fr" ? "Réputation" : "Reputation",
      v: lang === "fr" ? "Préservée" : "Preserved",
    },
    {
      k: lang === "fr" ? "Stock" : "Stock",
      v: lang === "fr" ? "Sécurisé" : "Secured",
    },
    {
      k: lang === "fr" ? "Confort" : "Comfort",
      v: lang === "fr" ? "Restauré" : "Restored",
    },
  ];

  const monthlyStats = [
    {
      k: lang === "fr" ? "Visites/mois" : "Visits/mo",
      v: "1–4",
    },
    {
      k: lang === "fr" ? "Rapport" : "Report",
      v: "WhatsApp",
    },
    {
      k: lang === "fr" ? "Discrétion" : "Discretion",
      v: lang === "fr" ? "Totale" : "Full",
    },
    {
      k: lang === "fr" ? "Prix" : "Price",
      v: lang === "fr" ? "dès 50$/mois" : "from $50/mo",
    },
  ];

  return (
    <>
      <Hero />

      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {tt.trust.slice(0, 4).map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-secondary/60 px-4 py-3"
            >
              <ShieldCheck className="size-5 shrink-0 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-amber-950">
              <AlertTriangle className="size-4" />
              {lang === "fr" ? "Pourquoi agir vite" : "Why act fast"}
            </div>

            <h2 className="mt-6 max-w-3xl text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {tt.sections.problemTitle}
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
              {tt.sections.problemBody}
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
              {tt.responsibility}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefitCards.map((c) => (
              <div
                key={c.k}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {c.k}
                </p>
                <p className="mt-3 text-2xl font-extrabold text-primary">
                  {c.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/45 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={lang === "fr" ? "Nos interventions" : "Our services"}
            title={tt.sections.servicesTitle}
            sub={tt.sections.servicesSub}
          />

          <div className="mt-10">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <CasesGrid />

      <CampaignPromo />

      <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={lang === "fr" ? "Clients" : "Customers"}
            title={tt.sections.customersTitle}
            sub={tt.sections.customersSub}
          />

          <div className="mt-10">
            <CustomersGrid />
          </div>
        </div>
      </section>

      <section className="bg-secondary/45 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={lang === "fr" ? "Prix" : "Pricing"}
            title={tt.sections.pricingTitle}
            sub={tt.sections.pricingSub}
          />

          <div className="mt-10">
            <PricingBlock />
          </div>

          <p className="mt-8 rounded-2xl border border-border bg-background p-5 text-sm leading-6 text-muted-foreground">
            {tt.safety}
          </p>
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={lang === "fr" ? "Méthode" : "Method"}
            title={tt.sections.howTitle}
            sub={
              lang === "fr"
                ? "Une intervention simple, claire et adaptée à votre situation."
                : "A simple, clear process adapted to your situation."
            }
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <div
                key={s[lang].title}
                className="rounded-3xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground">
                  {i + 1}
                </div>

                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-foreground">
                  {s[lang].title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {s[lang].desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-white/90">
              <ClipboardList className="size-4" />
              {lang === "fr" ? "Entreprises" : "Businesses"}
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {tt.sections.monthlyTitle}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
              {tt.sections.monthlyBody}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl font-bold">
                <Link
                  to={
                    lang === "en"
                      ? "/en/campaigns/monthly-pest-control"
                      : "/fr/campaigns/abonnement-anti-nuisibles"
                  }
                >
                  {lang === "en"
                    ? "View monthly contract"
                    : "Voir le contrat mensuel"}
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-white/20 bg-white/10 font-bold text-white hover:bg-white/15 hover:text-white"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 size-5" />
                  {tt.cta.whatsapp}
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {monthlyStats.map((c) => (
              <div
                key={c.k}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  {c.k}
                </p>
                <p className="mt-3 text-3xl font-extrabold text-white">
                  {c.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Kinshasa"
            title={tt.sections.locationsTitle}
            sub={tt.sections.locationsSub}
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {COMMUNES.map((c) => (
              <Link
                key={c}
                to={`/${lang}/${SECTION_SLUGS[lang].locations}/${encodeURIComponent(
                  c.toLowerCase().replaceAll(" ", "-"),
                )}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/45 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FAQ />
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={lang === "fr" ? "Conseils" : "Advice"}
            title={tt.sections.blogTitle}
            sub={tt.sections.blogSub}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((p) => (
              <article
                key={p.slug[lang]}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {lang === "fr" ? "Conseil" : "Guide"}
                </p>

                <h3 className="mt-3 text-xl font-extrabold tracking-tight text-foreground">
                  {p.title[lang]}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {p.excerpt[lang]}
                </p>

                <Link
                  to={`/${lang}/${SECTION_SLUGS[lang].blog}/${p.slug[lang]}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  {lang === "fr" ? "Lire" : "Read"}
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-white/90">
              <Sparkles className="size-4" />
              {BRAND.name}
            </div>

            <h2 className="mt-6 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {tt.sections.finalCtaTitle}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              {tt.sections.finalCtaBody}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="rounded-xl font-bold">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 size-5" />
                {tt.cta.whatsapp}
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-white/20 bg-white/10 font-bold text-white hover:bg-white/15 hover:text-white"
            >
              <a href={`tel:${BRAND.phoneNumber}`}>
                <Phone className="mr-2 size-5" />
                {BRAND.phoneNumber}
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-white/20 bg-white/10 font-bold text-white hover:bg-white/15 hover:text-white"
            >
              <Link to={`/${lang}/${SECTION_SLUGS[lang].pricing}`}>
                <Calendar className="mr-2 size-5" />
                {tt.cta.viewPricing}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}