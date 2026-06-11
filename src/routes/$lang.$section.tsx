import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CustomersGrid } from "@/components/site/CustomersGrid";
import { PricingBlock } from "@/components/site/PricingBlock";
import { FAQ } from "@/components/site/FAQ";
import { BookingForm } from "@/components/site/BookingForm";
import { CTASection } from "@/components/site/CTASection";
import { BLOG_POSTS, BRAND, COMMUNES, FUTURE_CITIES, SECTION_SLUGS, sectionFromSlug } from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

export const Route = createFileRoute("/$lang/$section")({
  beforeLoad: ({ params }) => {
    const lang = safeLang(params.lang);
    const key = sectionFromSlug(lang, params.section);
    if (!key) throw notFound();
  },
  head: ({ params }) => {
    const lang = safeLang(params.lang);
    const key = sectionFromSlug(lang, params.section);
    const map = headMap(lang)[key ?? "services"];
    return {
      meta: [
        { title: `${map.title} — ${BRAND.name}` },
        { name: "description", content: map.description },
        { property: "og:title", content: `${map.title} — ${BRAND.name}` },
        { property: "og:description", content: map.description },
        { property: "og:url", content: `/${lang}/${params.section}` },
      ],
      links: [{ rel: "canonical", href: `/${lang}/${params.section}` }],
    };
  },
  component: SectionPage,
});

function headMap(lang: "fr" | "en") {
  const tt = t(lang);
  return {
    services: { title: tt.sections.servicesTitle, description: tt.sections.servicesSub },
    customers: { title: tt.sections.customersTitle, description: tt.sections.customersSub },
    pricing: { title: tt.sections.pricingTitle, description: tt.sections.pricingSub },
    locations: { title: tt.sections.locationsTitle, description: tt.sections.locationsSub },
    contact: { title: lang === "fr" ? "Contact & inspection gratuite" : "Contact & free inspection", description: lang === "fr" ? "Contactez Anti Nuisibles Kin pour une inspection gratuite à Kinshasa." : "Contact Anti Nuisibles Kin for a free inspection in Kinshasa." },
    blog: { title: tt.sections.blogTitle, description: tt.sections.blogSub },
  } as const;
}

function SectionPage() {
  const { lang: raw, section } = Route.useParams();
  const lang = safeLang(raw);
  const tt = t(lang);
  const key = sectionFromSlug(lang, section)!;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      {key === "services" && (
        <>
          <SectionTitle eyebrow={lang === "fr" ? "Nos interventions" : "What we treat"} title={tt.sections.servicesTitle} sub={tt.sections.servicesSub} />
          <div className="mt-10"><ServicesGrid /></div>
        </>
      )}

      {key === "customers" && (
        <>
          <SectionTitle eyebrow={lang === "fr" ? "Pour qui" : "Who we serve"} title={tt.sections.customersTitle} sub={tt.sections.customersSub} />
          <div className="mt-10"><CustomersGrid /></div>
        </>
      )}

      {key === "pricing" && (
        <>
          <SectionTitle eyebrow={lang === "fr" ? "Tarifs" : "Pricing"} title={tt.sections.pricingTitle} sub={tt.sections.pricingSub} />
          <div className="mt-10"><PricingBlock /></div>
          <p className="mt-6 text-center text-xs text-muted-foreground">{tt.safety}</p>
        </>
      )}

      {key === "locations" && (
        <>
          <SectionTitle eyebrow="Kinshasa" title={tt.sections.locationsTitle} sub={tt.sections.locationsSub} />
          <div className="mt-10 flex flex-wrap gap-2">
            {COMMUNES.map((c) => (
              <Link
                key={c}
                to={`/${lang}/${SECTION_SLUGS[lang].locations}/${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40 hover:text-primary"
              >
                <MapPin className="size-3.5" /> {c}
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="font-display text-xl font-bold">{lang === "fr" ? "Bientôt disponibles" : "Coming soon"}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{lang === "fr" ? "Nous prévoyons d'étendre nos services à d'autres villes :" : "We plan to expand to more cities:"}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {FUTURE_CITIES.map((c) => (
                <span key={c} className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{c}</span>
              ))}
            </div>
          </div>
        </>
      )}

      {key === "contact" && (
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionTitle eyebrow={lang === "fr" ? "Contact" : "Contact"} title={tt.form.title} sub={tt.form.sub} />
            <div className="mt-8 grid gap-3 text-sm">
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="mt-1 font-display text-lg font-bold">+{BRAND.whatsappNumber}</div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{lang === "fr" ? "Téléphone" : "Phone"}</div>
                <div className="mt-1 font-display text-lg font-bold">{BRAND.phoneNumber}</div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="mt-1 font-display text-lg font-bold">{BRAND.email}</div>
              </div>
              <p className="text-xs text-muted-foreground">{tt.safety}</p>
            </div>
          </div>
          <BookingForm />
        </div>
      )}

      {key === "blog" && (
        <>
          <SectionTitle eyebrow={lang === "fr" ? "Conseils" : "Advice"} title={tt.sections.blogTitle} sub={tt.sections.blogSub} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((p) => (
              <Link
                key={p.slug[lang]}
                to={`/${lang}/${SECTION_SLUGS[lang].blog}/${p.slug[lang]}`}
                className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40"
              >
                <h3 className="font-display text-lg font-bold">{p.title[lang]}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt[lang]}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {lang === "fr" ? "Lire" : "Read"}
                  <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </>
      )}

      <div className="mt-16">
        <CTASection />
      </div>

      {(key === "services" || key === "pricing") && (
        <div className="mt-16">
          <SectionTitle title={tt.sections.faqTitle} align="center" />
          <div className="mx-auto mt-8 max-w-3xl"><FAQ /></div>
        </div>
      )}
    </div>
  );
}
