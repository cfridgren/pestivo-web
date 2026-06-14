import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

import { BookingForm } from "@/components/site/BookingForm";
import { CTASection } from "@/components/site/CTASection";
import { CustomersGrid } from "@/components/site/CustomersGrid";
import { FAQ } from "@/components/site/FAQ";
import { PricingBlock } from "@/components/site/PricingBlock";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import {
  BLOG_POSTS,
  BRAND,
  COMMUNES,
  FUTURE_CITIES,
  SECTION_SLUGS,
  sectionFromSlug,
} from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

export const Route = createFileRoute("/$lang/$section")({
  beforeLoad: ({ params }) => {
    const lang = safeLang(params.lang);
    const key = sectionFromSlug(lang, params.section);

    if (!key) {
      throw notFound();
    }
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
    services: {
      title:
        lang === "fr"
          ? "Services anti-nuisibles à Kinshasa"
          : "Pest control services in Kinshasa",
      description:
        lang === "fr"
          ? "Dératisation, désinsectisation, désinfection, traitement cafards, rats, moustiques, punaises et termites à Kinshasa."
          : "Rodent control, insect control, disinfection, cockroach, rat, mosquito, bed bug and termite treatment in Kinshasa.",
    },
    customers: {
      title:
        lang === "fr"
          ? "Solutions anti-nuisibles pour particuliers et entreprises"
          : "Pest control solutions for homes and businesses",
      description:
        lang === "fr"
          ? "Pestivo Services accompagne maisons, restaurants, hôtels, bureaux, dépôts, commerces, écoles et institutions à Kinshasa."
          : "Pestivo Services supports homes, restaurants, hotels, offices, warehouses, shops, schools and institutions in Kinshasa.",
    },
    pricing: {
      title:
        lang === "fr"
          ? "Prix dératisation et désinsectisation à Kinshasa"
          : "Pest control pricing in Kinshasa",
      description:
        lang === "fr"
          ? "Prix indicatifs pour particuliers et entreprises. Inspection gratuite, devis clair avant intervention et suivi après traitement."
          : "Indicative pricing for homes and businesses. Free inspection, clear quote before treatment and follow-up after service.",
    },
    locations: {
      title: tt.sections.locationsTitle,
      description:
        lang === "fr"
          ? "Pestivo Services intervient dans les communes de Kinshasa : Gombe, Ngaliema, Limete, Lemba, Kintambo, Matete, Masina, N'Djili et plus."
          : "Pestivo Services operates across Kinshasa: Gombe, Ngaliema, Limete, Lemba, Kintambo, Matete, Masina, N'Djili and more.",
    },
    contact: {
      title:
        lang === "fr"
          ? "Contact & inspection gratuite"
          : "Contact & free inspection",
      description:
        lang === "fr"
          ? "Contactez Pestivo Services pour une inspection gratuite à Kinshasa. Devis rapide pour cafards, rats, moustiques, punaises, termites et désinfection."
          : "Contact Pestivo Services for a free inspection in Kinshasa. Fast quote for cockroaches, rats, mosquitoes, bed bugs, termites and disinfection.",
    },
    blog: {
      title: tt.sections.blogTitle,
      description:
        lang === "fr"
          ? "Conseils pratiques pour prévenir et traiter les cafards, rats, moustiques, punaises et termites à Kinshasa."
          : "Practical advice to prevent and treat cockroaches, rats, mosquitoes, bed bugs and termites in Kinshasa.",
    },
  } as const;
}

function SectionPage() {
  const { lang: raw, section } = Route.useParams();
  const lang = safeLang(raw);
  const tt = t(lang);
  const key = sectionFromSlug(lang, section)!;

  return (
    <main className="bg-background">
      {key === "services" && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={lang === "fr" ? "Services" : "Services"}
            title={tt.sections.servicesTitle}
            sub={tt.sections.servicesSub}
          />
          <div className="mt-10">
            <ServicesGrid />
          </div>
        </section>
      )}

      {key === "customers" && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={lang === "fr" ? "Clients" : "Customers"}
            title={tt.sections.customersTitle}
            sub={tt.sections.customersSub}
          />
          <div className="mt-10">
            <CustomersGrid />
          </div>
        </section>
      )}

      {key === "pricing" && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={lang === "fr" ? "Prix" : "Pricing"}
            title={tt.sections.pricingTitle}
            sub={tt.sections.pricingSub}
          />
          <div className="mt-10">
            <PricingBlock />
          </div>
          <p className="mt-8 rounded-2xl border border-border bg-secondary/50 p-5 text-sm leading-6 text-muted-foreground">
            {tt.safety}
          </p>
        </section>
      )}

      {key === "locations" && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Kinshasa"
            title={tt.sections.locationsTitle}
            sub={tt.sections.locationsSub}
          />

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {COMMUNES.map((c) => (
              <Link
                key={c}
                to={`/${lang}/${SECTION_SLUGS[lang].locations}/${encodeURIComponent(
                  c.toLowerCase().replaceAll(" ", "-"),
                )}`}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-4" />
                </span>
                <span className="font-semibold text-foreground group-hover:text-primary">
                  {c}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-secondary/40 p-6">
            <h2 className="text-xl font-extrabold tracking-tight text-foreground">
              {lang === "fr" ? "Bientôt disponibles" : "Coming soon"}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {lang === "fr"
                ? "Nous prévoyons d'étendre nos services à d'autres villes :"
                : "We plan to expand to more cities:"}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {FUTURE_CITIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-sm font-semibold text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {key === "contact" && (
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionTitle
              eyebrow={lang === "fr" ? "Contact" : "Contact"}
              title={
                lang === "fr"
                  ? "Inspection gratuite à Kinshasa"
                  : "Free inspection in Kinshasa"
              }
              sub={
                lang === "fr"
                  ? "Envoyez votre demande à Pestivo Services. Nous vous répondons rapidement pour confirmer l'inspection ou le devis."
                  : "Send your request to Pestivo Services. We reply quickly to confirm your inspection or quote."
              }
            />

            <div className="mt-8 grid gap-4">
              <a
                href={`https://wa.me/${BRAND.whatsappNumber}`}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-primary/40"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  WhatsApp
                </p>
                <p className="mt-2 text-xl font-extrabold text-foreground">
                  +{BRAND.whatsappNumber}
                </p>
              </a>

              <a
                href={`tel:${BRAND.phoneNumber}`}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-primary/40"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {lang === "fr" ? "Téléphone" : "Phone"}
                </p>
                <p className="mt-2 text-xl font-extrabold text-foreground">
                  {BRAND.phoneNumber}
                </p>
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-primary/40"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </p>
                <p className="mt-2 text-xl font-extrabold text-foreground">
                  {BRAND.email}
                </p>
              </a>
            </div>

            <p className="mt-8 rounded-2xl border border-border bg-secondary/50 p-5 text-sm leading-6 text-muted-foreground">
              {tt.safety}
            </p>
          </div>

          <BookingForm />
        </section>
      )}

      {key === "blog" && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={lang === "fr" ? "Conseils" : "Advice"}
            title={tt.sections.blogTitle}
            sub={tt.sections.blogSub}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((p) => (
              <article
                key={p.slug[lang]}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h2 className="text-xl font-extrabold tracking-tight text-foreground">
                  {p.title[lang]}
                </h2>
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
        </section>
      )}

      {(key === "services" || key === "pricing") && (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <FAQ limit={5} />
        </section>
      )}

      <CTASection />
    </main>
  );
}