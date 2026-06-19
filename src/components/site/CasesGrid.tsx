import { Link, useParams } from "@tanstack/react-router";
import { ArrowRight, Camera, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CASES } from "@/content/cases";
import { BRAND, SECTION_SLUGS } from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

export function CasesGrid() {
  const { lang: rawLang } = useParams({ strict: false }) as { lang?: string };
  const lang = safeLang(rawLang);
  const tt = t(lang);

  const title =
    lang === "fr"
      ? "Nos interventions à Kinshasa"
      : "Our treatments in Kinshasa";

  const subtitle =
    lang === "fr"
      ? "Découvrez nos traitements pour maisons, bureaux, restaurants, dépôts, hôtels et zones extérieures. Chaque page peut aussi servir de base pour vos publications Facebook, Instagram et TikTok."
      : "Explore our treatments for homes, offices, restaurants, warehouses, hotels and outdoor areas. Each page can also become a base for Facebook, Instagram and TikTok content.";

  const whatsAppMessage =
    lang === "fr"
      ? "Bonjour Pestivo Services, je souhaite demander une inspection gratuite."
      : "Hello Pestivo Services, I would like to request a free inspection.";

  const whatsAppUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    whatsAppMessage,
  )}`;

  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              <Camera className="size-4" />
              {lang === "fr" ? "Interventions" : "Treatments"}
            </div>

            <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button asChild size="lg" className="rounded-xl font-bold">
              <a href={whatsAppUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 size-5" />
                {tt.cta.whatsapp}
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="rounded-xl font-bold">
              <Link to={`/${lang}/${SECTION_SLUGS[lang].contact}`}>
                {tt.cta.bookFreeInspection}
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CASES.map((item) => (
            <Link
              key={item.id}
              to={`/${lang}/cas/${item.slug[lang]}`}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt[lang]}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-sm backdrop-blur">
                  {item.eyebrow[lang]}
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {item.service[lang]}
                </p>

                <h3 className="mt-2 text-xl font-extrabold tracking-tight text-foreground group-hover:text-primary">
                  {item.title[lang]}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {item.excerpt[lang]}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  {lang === "fr" ? "Voir la page" : "View page"}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}