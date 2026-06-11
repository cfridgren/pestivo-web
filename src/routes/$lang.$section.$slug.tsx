import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/SectionTitle";
import { BookingForm } from "@/components/site/BookingForm";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import {
  BLOG_POSTS, BRAND, COMMUNES, CUSTOMERS, SECTION_SLUGS, SERVICES, sectionFromSlug, WHATSAPP_URL,
} from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

export const Route = createFileRoute("/$lang/$section/$slug")({
  beforeLoad: ({ params }) => {
    const lang = safeLang(params.lang);
    const key = sectionFromSlug(lang, params.section);
    if (!key) throw notFound();
    const resolved = resolve(lang, key, params.slug);
    if (!resolved) throw notFound();
  },
  head: ({ params }) => {
    const lang = safeLang(params.lang);
    const key = sectionFromSlug(lang, params.section)!;
    const r = resolve(lang, key, params.slug)!;
    return {
      meta: [
        { title: `${r.title} — ${BRAND.name}` },
        { name: "description", content: r.description },
        { property: "og:title", content: `${r.title} — ${BRAND.name}` },
        { property: "og:description", content: r.description },
        { property: "og:url", content: `/${lang}/${params.section}/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/${lang}/${params.section}/${params.slug}` }],
      scripts: r.jsonLd
        ? [{ type: "application/ld+json", children: JSON.stringify(r.jsonLd) }]
        : [],
    };
  },
  component: DetailPage,
});

type Resolved = {
  kind: "service" | "customer" | "commune" | "blog";
  title: string;
  description: string;
  body?: string;
  jsonLd?: unknown;
};

function resolve(lang: "fr" | "en", key: string, slug: string): Resolved | null {
  if (key === "services") {
    const s = SERVICES.find((x) => x.slug[lang] === slug);
    if (!s) return null;
    return {
      kind: "service",
      title: `${s.title[lang]} ${lang === "fr" ? "à Kinshasa" : "in Kinshasa"}`,
      description: s.short[lang],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: s.title[lang],
        provider: { "@type": "LocalBusiness", name: BRAND.name },
        areaServed: "Kinshasa",
        description: s.short[lang],
      },
    };
  }
  if (key === "customers") {
    const c = CUSTOMERS.find((x) => x.slug[lang] === slug);
    if (!c) return null;
    return {
      kind: "customer",
      title: `${c.title[lang]} — ${lang === "fr" ? "Solution anti-nuisibles" : "Pest control solution"}`,
      description: c.short[lang],
    };
  }
  if (key === "locations") {
    const c = COMMUNES.find((x) => x.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug);
    if (!c) return null;
    return {
      kind: "commune",
      title: `${lang === "fr" ? "Anti-nuisibles" : "Pest control"} ${c} — Kinshasa`,
      description:
        lang === "fr"
          ? `Dératisation, désinsectisation et désinfection à ${c}, Kinshasa. Inspection gratuite et prix clair.`
          : `Rodent, insect and disinfection treatments in ${c}, Kinshasa. Free inspection and clear pricing.`,
    };
  }
  if (key === "blog") {
    const p = BLOG_POSTS.find((x) => x.slug[lang] === slug);
    if (!p) return null;
    return {
      kind: "blog",
      title: p.title[lang],
      description: p.excerpt[lang],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: p.title[lang],
        description: p.excerpt[lang],
      },
    };
  }
  return null;
}

function DetailPage() {
  const { lang: raw, section, slug } = Route.useParams();
  const lang = safeLang(raw);
  const tt = t(lang);
  const key = sectionFromSlug(lang, section)!;
  const r = resolve(lang, key, slug)!;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
        <Link to={`/${lang}`} className="hover:text-foreground">{tt.nav.home}</Link>
        <span className="mx-2">/</span>
        <Link to={`/${lang}/${section}`} className="hover:text-foreground capitalize">{section}</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{slug}</span>
      </nav>

      {r.kind === "service" && <ServiceDetail lang={lang} slug={slug} />}
      {r.kind === "customer" && <CustomerDetail lang={lang} slug={slug} />}
      {r.kind === "commune" && <CommuneDetail lang={lang} slug={slug} />}
      {r.kind === "blog" && <BlogDetail lang={lang} slug={slug} />}

      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}

function ServiceDetail({ lang, slug }: { lang: "fr" | "en"; slug: string }) {
  const s = SERVICES.find((x) => x.slug[lang] === slug)!;
  const tt = t(lang);
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
      <article>
        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {lang === "fr" ? "Service" : "Service"}
        </div>
        <h1 className="mt-3 text-balance font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {s.title[lang]} {lang === "fr" ? "à Kinshasa" : "in Kinshasa"}
        </h1>
        <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">{s.short[lang]}</p>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-lg font-bold">{lang === "fr" ? "Ce que comprend l'intervention" : "What's included"}</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {(lang === "fr"
              ? [
                  "Inspection sur place ou via photos WhatsApp",
                  "Prix clair avant intervention",
                  "Traitement professionnel et propre",
                  "Conseils de prévention pour éviter le retour",
                  "Rapport et suivi après traitement",
                ]
              : [
                  "On-site inspection or via WhatsApp photos",
                  "Clear pricing before treatment",
                  "Professional and clean treatment",
                  "Prevention advice to avoid returns",
                  "Report and follow-up after treatment",
                ]
            ).map((line) => (
              <li key={line} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to={`/${lang}/${SECTION_SLUGS[lang].contact}`}>{tt.cta.bookFreeInspection}</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{tt.cta.whatsapp}</a>
          </Button>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-xl font-bold">{lang === "fr" ? "Autres services" : "Other services"}</h2>
          <div className="mt-4"><ServicesGrid limit={3} /></div>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-xl font-bold">{lang === "fr" ? "Questions fréquentes" : "Frequently asked questions"}</h2>
          <div className="mt-4"><FAQ limit={5} /></div>
        </div>
      </article>

      <aside className="lg:sticky lg:top-24 lg:self-start">
        <BookingForm />
      </aside>
    </div>
  );
}

function CustomerDetail({ lang, slug }: { lang: "fr" | "en"; slug: string }) {
  const c = CUSTOMERS.find((x) => x.slug[lang] === slug)!;
  const tt = t(lang);
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
      <article>
        <div className="inline-flex items-center rounded-full bg-accent/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          {lang === "fr" ? "Pour" : "For"}
        </div>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{c.title[lang]}</h1>
        <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">{c.short[lang]}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {(lang === "fr"
            ? ["Prévention sur mesure", "Service discret", "Rapport WhatsApp", "Contrat mensuel disponible"]
            : ["Tailored prevention", "Discreet service", "WhatsApp report", "Monthly contract available"]
          ).map((b) => (
            <div key={b} className="flex items-start gap-2 rounded-2xl border border-border bg-card p-4 text-sm">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" /> {b}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to={`/${lang}/${SECTION_SLUGS[lang].contact}`}>{tt.cta.bookFreeInspection}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to={`/${lang}/${SECTION_SLUGS[lang].services}`}>{tt.nav.services}</Link>
          </Button>
        </div>
      </article>
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <BookingForm />
      </aside>
    </div>
  );
}

function CommuneDetail({ lang, slug }: { lang: "fr" | "en"; slug: string }) {
  const c = COMMUNES.find((x) => x.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug)!;
  const tt = t(lang);
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
      <article>
        <div className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <MapPin className="size-3.5" /> Kinshasa
        </div>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {lang === "fr" ? `Anti-nuisibles ${c}` : `Pest control in ${c}`}
        </h1>
        <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
          {lang === "fr"
            ? `Dératisation, désinsectisation et désinfection à ${c}. Intervention rapide pour maisons, restaurants, bureaux et commerces.`
            : `Rodent control, insect control and disinfection in ${c}. Fast service for homes, restaurants, offices and shops.`}
        </p>
        <div className="mt-8"><ServicesGrid limit={3} /></div>
        <div className="mt-10">
          <h2 className="font-display text-xl font-bold">{lang === "fr" ? "Autres communes" : "Other areas"}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {COMMUNES.filter((x) => x !== c).slice(0, 12).map((x) => (
              <Link
                key={x}
                to={`/${lang}/${SECTION_SLUGS[lang].locations}/${x.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium hover:border-primary/40"
              >
                {x} <ArrowRight className="size-3" />
              </Link>
            ))}
          </div>
        </div>
      </article>
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <BookingForm />
      </aside>
    </div>
  );
}

function BlogDetail({ lang, slug }: { lang: "fr" | "en"; slug: string }) {
  const p = BLOG_POSTS.find((x) => x.slug[lang] === slug)!;
  const tt = t(lang);
  return (
    <article className="mx-auto max-w-3xl">
      <div className="text-xs font-semibold uppercase tracking-wider text-primary">{lang === "fr" ? "Conseil" : "Guide"}</div>
      <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{p.title[lang]}</h1>
      <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">{p.excerpt[lang]}</p>

      <div className="prose prose-neutral mt-8 max-w-none text-sm leading-relaxed text-foreground">
        <p>
          {lang === "fr"
            ? "Cet article vous donne les bons réflexes pour identifier, prévenir et traiter le problème efficacement. Pour un diagnostic précis, demandez une inspection gratuite — nous évaluons votre situation et proposons un prix clair avant toute intervention."
            : "This article gives you the right reflexes to identify, prevent and treat the problem effectively. For an accurate diagnosis, request a free inspection — we assess your situation and offer clear pricing before any treatment."}
        </p>
        <h2 className="mt-8 font-display text-2xl font-bold">{lang === "fr" ? "Étapes recommandées" : "Recommended steps"}</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5">
          <li>{lang === "fr" ? "Observer les signes : excréments, traces, bruits, présence visible." : "Look for signs: droppings, marks, sounds, visible presence."}</li>
          <li>{lang === "fr" ? "Photographier et envoyer sur WhatsApp pour une première évaluation." : "Photograph and send on WhatsApp for an initial evaluation."}</li>
          <li>{lang === "fr" ? "Planifier une inspection gratuite à votre adresse." : "Schedule a free inspection at your address."}</li>
          <li>{lang === "fr" ? "Suivre les conseils de préparation reçus avant l'intervention." : "Follow the preparation advice received before treatment."}</li>
          <li>{lang === "fr" ? "Mettre en place un plan de prévention ou contrat mensuel." : "Set up a prevention plan or monthly contract."}</li>
        </ol>
      </div>

      <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
        <h3 className="font-display text-lg font-bold">{tt.cta.bookFreeInspection}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{tt.sections.finalCtaBody}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to={`/${lang}/${SECTION_SLUGS[lang].contact}`}>{tt.cta.bookFreeInspection}</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{tt.cta.whatsapp}</a>
          </Button>
        </div>
      </div>
    </article>
  );
}
