import { Link, useParams } from "@tanstack/react-router";
import { Briefcase, Bed, Home, School, Utensils, Warehouse, type LucideIcon, ArrowRight } from "lucide-react";
import { CUSTOMERS, SECTION_SLUGS } from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

const ICONS: Record<string, LucideIcon> = {
  home: Home,
  utensils: Utensils,
  bed: Bed,
  briefcase: Briefcase,
  warehouse: Warehouse,
  school: School,
};

export function CustomersGrid() {
  const { lang: raw } = useParams({ strict: false }) as { lang?: string };
  const lang = safeLang(raw);
  const tt = t(lang);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {CUSTOMERS.map((c) => {
        const Icon = ICONS[c.icon] ?? Home;
        const href = `/${lang}/${SECTION_SLUGS[lang].customers}/${c.slug[lang]}`;
        return (
          <Link
            key={c.id}
            to={href}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-lg"
          >
            <div className="grid size-11 place-items-center rounded-xl bg-accent/20 text-foreground">
              <Icon className="size-5" aria-hidden />
            </div>
            <h3 className="mt-4 font-display text-base font-bold">{c.title[lang]}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.short[lang]}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              {lang === "fr" ? "Voir la solution" : "See the solution"}
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
