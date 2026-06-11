import { Link, useParams } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING, SECTION_SLUGS } from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

export function PricingBlock() {
  const { lang: raw } = useParams({ strict: false }) as { lang?: string };
  const lang = safeLang(raw);
  const tt = t(lang);

  const groups = [PRICING.homes[lang], PRICING.business[lang]];

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {groups.map((g) => (
        <div key={g.heading} className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">{g.heading}</div>
          <div className="mt-5 grid gap-3">
            {g.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex items-start gap-4 rounded-2xl border p-4 transition ${
                  tier.highlight
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-background"
                }`}
              >
                <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Check className="size-4" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="font-display text-base font-bold">{tier.name}</div>
                    <div className="font-display text-base font-extrabold text-primary">{tier.price}</div>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{tier.desc}</p>
                  {tier.highlight && (
                    <span className="mt-2 inline-flex rounded-full bg-accent/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                      {lang === "fr" ? "Populaire" : "Popular"}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Button asChild className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to={`/${lang}/${SECTION_SLUGS[lang].contact}`}>{tt.cta.requestQuote}</Link>
          </Button>
        </div>
      ))}
    </div>
  );
}
