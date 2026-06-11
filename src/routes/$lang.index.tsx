import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar, ClipboardList, MessageCircle, Phone, ShieldCheck, Sparkles, AlertTriangle } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CustomersGrid } from "@/components/site/CustomersGrid";
import { PricingBlock } from "@/components/site/PricingBlock";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";
import { BRAND, COMMUNES, BLOG_POSTS, SECTION_SLUGS, STEPS, WHATSAPP_URL, FAQS } from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const lang = safeLang(params.lang);
    const title =
      lang === "fr"
        ? `Dératisation, désinsectisation et désinfection à Kinshasa — ${BRAND.name}`
        : `Pest control in Kinshasa for homes and businesses — ${BRAND.name}`;
    const description =
      lang === "fr"
        ? "Traitement professionnel contre cafards, rats, moustiques, fourmis, punaises et termites à Kinshasa. Inspection gratuite, prix clair, suivi après intervention."
        : "Professional treatment for cockroaches, rats, mosquitoes, ants, bed bugs and termites in Kinshasa. Free inspection, clear pricing and post-treatment follow-up.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/${lang}` },
        { property: "og:type", content: "website" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/${lang}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS[lang].slice(0, 6).map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
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

  return (
    <>
      <Hero />

      {/* Trust strip */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-3 px-4 py-6 text-sm font-medium text-foreground sm:grid-cols-3 sm:px-6 lg:grid-cols-4">
          {tt.trust.slice(0, 4).map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="grid size-6 place-items-center rounded-full bg-primary/15 text-primary">
                <ShieldCheck className="size-3.5" />
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Problem / solution */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-warning/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              <AlertTriangle className="size-3.5" />
              {lang === "fr" ? "Pourquoi agir vite" : "Why act fast"}
            </div>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {tt.sections.problemTitle}
            </h2>
            <p className="mt-4 text-pretty text-base text-muted-foreground">{tt.sections.problemBody}</p>
            <p className="mt-3 text-sm text-muted-foreground">{tt.responsibility}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { k: lang === "fr" ? "Hygiène" : "Hygiene", v: lang === "fr" ? "Protégée" : "Protected" },
              { k: lang === "fr" ? "Réputation" : "Reputation", v: lang === "fr" ? "Préservée" : "Preserved" },
              { k: lang === "fr" ? "Stock" : "Stock", v: lang === "fr" ? "Sécurisé" : "Secured" },
              { k: lang === "fr" ? "Confort" : "Comfort", v: lang === "fr" ? "Restauré" : "Restored" },
            ].map((c) => (
              <div key={c.k} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.k}</div>
                <div className="mt-1 font-display text-xl font-bold text-primary">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionTitle
            eyebrow={lang === "fr" ? "Nos interventions" : "What we treat"}
            title={tt.sections.servicesTitle}
            sub={tt.sections.servicesSub}
          />
          <div className="mt-10">
            <ServicesGrid />
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionTitle
          eyebrow={lang === "fr" ? "Pour qui" : "Who we serve"}
          title={tt.sections.customersTitle}
          sub={tt.sections.customersSub}
        />
        <div className="mt-10">
          <CustomersGrid />
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionTitle
            eyebrow={lang === "fr" ? "Tarifs" : "Pricing"}
            title={tt.sections.pricingTitle}
            sub={tt.sections.pricingSub}
          />
          <div className="mt-10">
            <PricingBlock />
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">{tt.safety}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionTitle
          eyebrow={lang === "fr" ? "Processus" : "Process"}
          title={tt.sections.howTitle}
        />
        <ol className="mt-10 grid gap-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
          {STEPS.map((s, i) => (
            <li key={i} className="relative rounded-2xl border border-border bg-card p-5">
              <div className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground font-display text-sm font-bold">
                {i + 1}
              </div>
              <div className="mt-4 font-display text-base font-bold">{s[lang].title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s[lang].desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Monthly business */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <Calendar className="size-3.5" /> {lang === "fr" ? "Entreprises" : "Businesses"}
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                {tt.sections.monthlyTitle}
              </h2>
              <p className="mt-3 text-muted-foreground">{tt.sections.monthlyBody}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to={`/${lang}/${SECTION_SLUGS[lang].contact}`}>
                    <ClipboardList className="size-4" />
                    {tt.cta.monthlyContract}
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" /> {tt.cta.whatsapp}
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { k: lang === "fr" ? "Visites/mois" : "Visits/mo", v: "1–4" },
                { k: lang === "fr" ? "Rapport" : "Report", v: "WhatsApp" },
                { k: lang === "fr" ? "Discrétion" : "Discretion", v: lang === "fr" ? "Totale" : "Full" },
                { k: lang === "fr" ? "Prix" : "Price", v: lang === "fr" ? "dès 50$/mois" : "from $50/mo" },
              ].map((c) => (
                <div key={c.k} className="rounded-2xl border border-border bg-card p-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{c.k}</div>
                  <div className="mt-1 font-display text-lg font-bold">{c.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionTitle
            eyebrow="Kinshasa"
            title={tt.sections.locationsTitle}
            sub={tt.sections.locationsSub}
          />
          <div className="mt-10 flex flex-wrap gap-2">
            {COMMUNES.map((c) => (
              <Link
                key={c}
                to={`/${lang}/${SECTION_SLUGS[lang].locations}/${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40 hover:text-primary"
              >
                {c}
                <ArrowRight className="size-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionTitle
          eyebrow="FAQ"
          title={tt.sections.faqTitle}
          align="center"
        />
        <div className="mt-10 mx-auto max-w-3xl">
          <FAQ limit={6} />
        </div>
      </section>

      {/* Blog preview */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionTitle
            eyebrow={lang === "fr" ? "Conseils" : "Advice"}
            title={tt.sections.blogTitle}
            sub={tt.sections.blogSub}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((p) => (
              <Link
                key={p.slug[lang]}
                to={`/${lang}/${SECTION_SLUGS[lang].blog}/${p.slug[lang]}`}
                className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40"
              >
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Sparkles className="size-3.5" /> {lang === "fr" ? "Conseil" : "Guide"}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">{p.title[lang]}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt[lang]}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {lang === "fr" ? "Lire" : "Read"}
                  <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <CTASection />
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-sm font-medium hover:border-primary/40">
            <MessageCircle className="size-4 text-whatsapp" /> {tt.cta.whatsapp}
          </a>
          <a href={`tel:${BRAND.phoneNumber}`} className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-sm font-medium hover:border-primary/40">
            <Phone className="size-4 text-primary" /> {BRAND.phoneNumber}
          </a>
          <Link to={`/${lang}/${SECTION_SLUGS[lang].pricing}`} className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-sm font-medium hover:border-primary/40">
            <ClipboardList className="size-4 text-primary" /> {tt.cta.viewPricing}
          </Link>
        </div>
      </section>
    </>
  );
}
