import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { BRAND } from "@/content/site";
import {
  CAMPAIGNS,
  getCampaignBySlug,
  normalizeCampaignLang,
} from "@/content/campaigns";

export const Route = createFileRoute("/$lang/campaigns/$slug")({
  beforeLoad: ({ params }) => {
    const lang = normalizeCampaignLang(params.lang);
    const campaign = getCampaignBySlug(lang, params.slug);

    if (!campaign) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const lang = normalizeCampaignLang(params.lang);
    const campaign = getCampaignBySlug(lang, params.slug);

    if (!campaign) {
      return {};
    }

    const url = `/${lang}/campaigns/${campaign.slug[lang]}`;

    return {
      meta: [
        { title: campaign.metaTitle[lang] },
        { name: "description", content: campaign.metaDescription[lang] },
        { property: "og:title", content: campaign.metaTitle[lang] },
        {
          property: "og:description",
          content: campaign.metaDescription[lang],
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: campaign.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: campaign.metaTitle[lang] },
        {
          name: "twitter:description",
          content: campaign.metaDescription[lang],
        },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: campaign.title[lang],
            description: campaign.metaDescription[lang],
            provider: {
              "@type": "LocalBusiness",
              name: BRAND.name,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kinshasa",
                addressCountry: "CD",
              },
              telephone: BRAND.phoneNumber,
            },
            areaServed: {
              "@type": "City",
              name: "Kinshasa",
            },
            serviceType:
              lang === "en"
                ? "Monthly pest control"
                : "Contrat mensuel anti-nuisibles",
            offers: {
              "@type": "Offer",
              price: "50",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: campaign.faq[lang].map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        },
      ],
    };
  },
  component: CampaignPage,
});

function CampaignPage() {
  const { lang: rawLang, slug } = Route.useParams();
  const lang = normalizeCampaignLang(rawLang);
  const campaign = getCampaignBySlug(lang, slug)!;

  const whatsappMessage =
    lang === "en"
      ? `Hello Pestivo Services, I would like a free inspection for a monthly pest control contract.`
      : lang === "ln"
        ? `Mbote Pestivo Services, nalingi inspection ya ofele mpo na abonnement ya sanza na sanza.`
        : `Bonjour Pestivo Services, je souhaite une inspection gratuite pour un contrat mensuel anti-nuisibles.`;

  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const homePath = lang === "en" ? "/en" : lang === "ln" ? "/ln" : "/fr";

  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,140,82,0.42),transparent_34%),radial-gradient(circle_at_82%_15%,rgba(255,188,65,0.20),transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/85 to-slate-950" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <Link
              to={homePath}
              className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 backdrop-blur transition hover:bg-white/15"
            >
              Pestivo Services
            </Link>

            <p className="w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-white/90">
              {campaign.eyebrow[lang]}
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {campaign.headline[lang]}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              {campaign.sub[lang]}
            </p>

            <div className="mt-7 inline-flex w-fit items-center gap-3 rounded-2xl border border-primary/35 bg-primary/15 px-5 py-4">
              <Star className="size-6 text-primary" />
              <span className="text-2xl font-extrabold text-white">
                {campaign.price[lang]}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/90"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <CalendarCheck className="mr-2 size-5" />
                  {campaign.primaryCta[lang]}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-white/25 bg-white/10 px-6 font-bold text-white hover:bg-white/15 hover:text-white"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 size-5" />
                  {campaign.secondaryCta[lang]}
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <img
                src={campaign.image}
                alt={campaign.imageAlt[lang]}
                className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-5 right-5 rounded-3xl border border-white/15 bg-white/95 p-5 text-slate-950 shadow-2xl">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 size-6 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                    {lang === "en"
                      ? "Business protection"
                      : lang === "ln"
                        ? "Protection ya entreprise"
                        : "Protection entreprise"}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {lang === "en"
                      ? "Regular visits, prevention advice and WhatsApp follow-up."
                      : lang === "ln"
                        ? "Visites ya mbala na mbala, toli ya prévention mpe suivi na WhatsApp."
                        : "Visites régulières, conseils de prévention et suivi WhatsApp."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Building2 className="size-6" />
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground">
            {campaign.problemTitle[lang]}
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            {campaign.problemText[lang]}
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-secondary/50 p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            {campaign.targetTitle[lang]}
          </p>

          <div className="mt-6 grid gap-3">
            {campaign.targets[lang].map((target) => (
              <div
                key={target}
                className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4"
              >
                <CheckCircle2 className="size-5 shrink-0 text-primary" />
                <span className="text-sm font-bold text-foreground">
                  {target}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/45 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              {campaign.includesTitle[lang]}
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {campaign.offerTitle[lang]}
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {campaign.offerText[lang]}
            </p>

            <Button asChild size="lg" className="mt-7 rounded-xl font-bold">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 size-5" />
                {campaign.primaryCta[lang]}
              </a>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {campaign.includes[lang].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-border bg-card p-5 shadow-sm"
              >
                <CheckCircle2 className="size-6 text-primary" />
                <p className="mt-4 text-sm font-semibold leading-6 text-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            {campaign.stepsTitle[lang]}
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {campaign.steps[lang].map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <ClipboardCheck className="size-7 text-primary" />
                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/45 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground">
            {campaign.faqTitle[lang]}
          </h2>

          <div className="mt-8 grid gap-4">
            {campaign.faq[lang].map((item) => (
              <details
                key={item.q}
                className="group rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-foreground">
                  {item.q}
                  <ArrowRight className="size-5 shrink-0 text-primary transition group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Pestivo Services
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {campaign.finalTitle[lang]}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              {campaign.finalText[lang]}
            </p>
          </div>

          <Button asChild size="lg" className="rounded-xl font-bold">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 size-5" />
              {campaign.primaryCta[lang]}
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}