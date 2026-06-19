import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  CalendarCheck,
  CheckCircle2,
  MessageCircle,
  Share2,
} from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";
import { BRAND, SECTION_SLUGS } from "@/content/site";
import { CASES, getCaseBySlug } from "@/content/cases";
import { safeLang, t } from "@/lib/i18n";

export const Route = createFileRoute("/$lang/cas/$slug")({
  beforeLoad: ({ params }) => {
    const lang = safeLang(params.lang);
    const item = getCaseBySlug(lang, params.slug);

    if (!item) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const lang = safeLang(params.lang);
    const item = getCaseBySlug(lang, params.slug);

    if (!item) {
      return {};
    }

    const title = `${item.title[lang]} — ${BRAND.name}`;
    const description = item.excerpt[lang];

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: item.image },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        {
          rel: "canonical",
          href: `/${lang}/cas/${item.slug[lang]}`,
        },
      ],
    };
  },
  component: CasePage,
});

function CasePage() {
  const { lang: rawLang, slug } = Route.useParams();
  const lang = safeLang(rawLang);
  const tt = t(lang);
  const item = getCaseBySlug(lang, slug)!;

  const otherCases = CASES.filter((caseItem) => caseItem.id !== item.id).slice(
    0,
    3,
  );

  const whatsAppMessage =
    lang === "fr"
      ? `Bonjour Pestivo Services, je souhaite demander une inspection gratuite pour: ${item.title.fr}.`
      : `Hello Pestivo Services, I would like to request a free inspection for: ${item.title.en}.`;

  const whatsAppUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    whatsAppMessage,
  )}`;

  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,140,82,0.35),transparent_34%),radial-gradient(circle_at_80%_15%,rgba(255,188,65,0.16),transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/80 to-slate-950" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <Link
              to={`/${lang}`}
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              <ArrowLeft className="size-4" />
              {lang === "fr" ? "Retour à l'accueil" : "Back to home"}
            </Link>

            <p className="w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/90">
              {item.eyebrow[lang]}
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {item.title[lang]}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              {item.excerpt[lang]}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/90"
              >
                <a href={whatsAppUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 size-5" />
                  {tt.cta.whatsapp}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-white/25 bg-white/10 px-6 font-bold text-white hover:bg-white/15 hover:text-white"
              >
                <Link to={`/${lang}/${SECTION_SLUGS[lang].contact}`}>
                  <CalendarCheck className="mr-2 size-5" />
                  {tt.cta.bookFreeInspection}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <img
                src={item.image}
                alt={item.imageAlt[lang]}
                className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <aside className="h-fit rounded-3xl border border-border bg-card p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            {lang === "fr" ? "Résumé" : "Summary"}
          </p>

          <div className="mt-6 grid gap-5">
            <SummaryItem
              label={lang === "fr" ? "Public cible" : "Target audience"}
              value={item.audience[lang]}
            />
            <SummaryItem
              label={lang === "fr" ? "Service" : "Service"}
              value={item.service[lang]}
            />
            <SummaryItem
              label={lang === "fr" ? "Ville" : "City"}
              value="Kinshasa"
            />
          </div>

          <Button asChild className="mt-8 w-full rounded-xl font-bold">
            <a href={whatsAppUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 size-5" />
              WhatsApp
            </a>
          </Button>
        </aside>

        <div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {lang === "fr" ? "Le problème" : "The problem"}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
              {lang === "fr"
                ? "Pourquoi ce traitement est important"
                : "Why this treatment matters"}
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {item.problem[lang]}
            </p>
          </div>

          <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {lang === "fr" ? "Notre approche" : "Our approach"}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
              {lang === "fr"
                ? "Traiter, nettoyer et prévenir"
                : "Treat, clean and prevent"}
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {item.solution[lang]}
            </p>
          </div>

          <div className="mt-6 rounded-3xl border border-border bg-secondary/50 p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {lang === "fr" ? "Prévention" : "Prevention"}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
              {lang === "fr"
                ? "Conseils simples à publier et partager"
                : "Simple tips to publish and share"}
            </h2>

            <div className="mt-6 grid gap-3">
              {item.prevention[lang].map((tip) => (
                <div
                  key={tip}
                  className="flex gap-3 rounded-2xl border border-border bg-background p-4"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-muted-foreground">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Share2 className="size-5" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Social media
                </p>
                <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
                  {lang === "fr"
                    ? "Idées de contenu à publier"
                    : "Content ideas to publish"}
                </h2>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {item.socialAngles[lang].map((angle) => (
                <div
                  key={angle}
                  className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm font-semibold text-foreground"
                >
                  {angle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            {lang === "fr" ? "Autres pages" : "More pages"}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
            {lang === "fr"
              ? "Autres services Pestivo"
              : "More Pestivo services"}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {otherCases.map((caseItem) => (
            <Link
              key={caseItem.id}
              to={`/${lang}/cas/${caseItem.slug[lang]}`}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={caseItem.image}
                alt={caseItem.imageAlt[lang]}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {caseItem.eyebrow[lang]}
                </p>
                <h3 className="mt-2 text-lg font-extrabold tracking-tight text-foreground group-hover:text-primary">
                  {caseItem.title[lang]}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {caseItem.excerpt[lang]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-base font-extrabold text-foreground">{value}</p>
    </div>
  );
}