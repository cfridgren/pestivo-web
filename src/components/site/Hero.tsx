import { Link, useParams } from "@tanstack/react-router";
import { CalendarCheck, MessageCircle, DollarSign, ShieldCheck, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SECTION_SLUGS, WHATSAPP_URL } from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

export function Hero() {
  const { lang: raw } = useParams({ strict: false }) as { lang?: string };
  const lang = safeLang(raw);
  const tt = t(lang);

  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-24 lg:pt-20">
        <div className="text-navy-foreground">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-navy-foreground/90 backdrop-blur">
            <Sparkles className="size-3.5 text-accent" />
            {tt.hero.eyebrow}
          </div>
          <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {tt.hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base text-navy-foreground/80 sm:text-lg">
            {tt.hero.sub}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground shadow-lg hover:bg-primary/90">
              <Link to={`/${lang}/${SECTION_SLUGS[lang].contact}`}>
                <CalendarCheck className="size-4" />
                {tt.cta.bookFreeInspection}
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-whatsapp text-primary-foreground hover:bg-whatsapp/90">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                {tt.cta.whatsapp}
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-navy-foreground hover:bg-white/10 hover:text-navy-foreground">
              <Link to={`/${lang}/${SECTION_SLUGS[lang].pricing}`}>
                <DollarSign className="size-4" />
                {tt.cta.viewPricing}
              </Link>
            </Button>
          </div>

          <ul className="mt-8 grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-2">
            {tt.hero.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-navy-foreground/85">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual: stacked illustrative cards (no scary visuals) */}
        <div className="relative">
          <div className="relative mx-auto aspect-[5/6] w-full max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-white/10 to-accent/30 blur-2xl" aria-hidden />
            <div className="relative grid h-full grid-rows-[1.3fr_1fr] gap-4">
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/95 p-6 text-foreground shadow-2xl">
                <div className="absolute right-0 top-0 -mr-10 -mt-10 size-44 rounded-full bg-primary/15" aria-hidden />
                <div className="absolute bottom-0 left-0 -mb-12 -ml-12 size-40 rounded-full bg-accent/20" aria-hidden />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    <ShieldCheck className="size-3.5" /> {lang === "fr" ? "Rapport d'inspection" : "Inspection report"}
                  </div>
                  <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{lang === "fr" ? "Site" : "Site"}</div>
                  <div className="font-display text-lg font-bold">Restaurant · Gombe</div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {[
                      { k: lang === "fr" ? "Cafards" : "Cockroaches", v: lang === "fr" ? "Modéré" : "Moderate", c: "bg-warning/30 text-foreground" },
                      { k: lang === "fr" ? "Rongeurs" : "Rodents", v: lang === "fr" ? "Faible" : "Low", c: "bg-primary/15 text-primary" },
                      { k: lang === "fr" ? "Moustiques" : "Mosquitoes", v: lang === "fr" ? "Élevé" : "High", c: "bg-accent/30 text-foreground" },
                      { k: lang === "fr" ? "Hygiène" : "Hygiene", v: "OK", c: "bg-primary/15 text-primary" },
                    ].map((row) => (
                      <div key={row.k} className="rounded-xl border border-border bg-card p-3">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{row.k}</div>
                        <div className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${row.c}`}>{row.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl bg-secondary p-3 text-xs text-secondary-foreground/80">
                    {lang === "fr" ? "Plan recommandé : contrat mensuel · 2 visites." : "Recommended plan: monthly contract · 2 visits."}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl border border-white/20 bg-white/95 p-4 text-foreground shadow-xl">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {lang === "fr" ? "Inspection" : "Inspection"}
                  </div>
                  <div className="mt-1 font-display text-2xl font-extrabold text-primary">
                    {lang === "fr" ? "Gratuite" : "Free"}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {lang === "fr" ? "À Kinshasa" : "In Kinshasa"}
                  </div>
                </div>
                <div className="rounded-3xl border border-white/20 bg-navy p-4 text-navy-foreground shadow-xl">
                  <div className="text-[10px] uppercase tracking-wider text-navy-foreground/60">
                    {lang === "fr" ? "Réponse" : "Reply"}
                  </div>
                  <div className="mt-1 font-display text-2xl font-extrabold text-accent">
                    &lt; 30 min
                  </div>
                  <div className="mt-1 text-xs text-navy-foreground/70">
                    {lang === "fr" ? "Via WhatsApp" : "Via WhatsApp"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
