import { Link, useParams } from "@tanstack/react-router";
import { ArrowRight, Bed, Bug, Rat, Shield, Spray, TreePine, type LucideIcon } from "lucide-react";
import { SERVICES, SECTION_SLUGS } from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

const ICONS: Record<string, LucideIcon> = {
  rat: Rat,
  bug: Bug,
  bed: Bed,
  tree: TreePine,
  spray: Spray,
  shield: Shield,
};

export function ServicesGrid({ limit }: { limit?: number }) {
  const { lang: raw } = useParams({ strict: false }) as { lang?: string };
  const lang = safeLang(raw);
  const tt = t(lang);
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => {
        const Icon = ICONS[s.icon] ?? Shield;
        const href = `/${lang}/${SECTION_SLUGS[lang].services}/${s.slug[lang]}`;
        return (
          <article
            key={s.id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-lg"
          >
            <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-6" aria-hidden />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold">{s.title[lang]}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.short[lang]}</p>
            <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
              {s.audience[lang]}
            </div>
            <Link
              to={href}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              {tt.cta.requestQuote} <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
