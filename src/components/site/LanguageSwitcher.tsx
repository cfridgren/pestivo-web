import { Link, useParams, useRouterState } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { LANGS, sectionFromSlug, SECTION_SLUGS, type Lang } from "@/content/site";
import { safeLang } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang } = useParams({ strict: false }) as { lang?: string };
  const current = safeLang(lang);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  function buildHref(target: Lang) {
    // Strip leading /lang
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return `/${target}`;
    const [, ...rest] = parts; // drop current lang
    // Translate section slug if first segment is a section
    if (rest.length > 0) {
      const sectionKey = sectionFromSlug(current, rest[0]);
      if (sectionKey) {
        rest[0] = SECTION_SLUGS[target][sectionKey];
        // Detail slugs differ per language too — drop them on switch to avoid 404
        if (rest.length > 1) rest.length = 1;
      }
    }
    return `/${target}${rest.length ? "/" + rest.join("/") : ""}`;
  }

  return (
    <div className={`inline-flex items-center gap-1 rounded-full border border-border bg-card px-1 py-1 text-xs font-medium ${className}`}>
      <Globe className="ml-1 size-3.5 text-muted-foreground" aria-hidden />
      {LANGS.map((l) => {
        const active = l === current;
        return (
          <Link
            key={l}
            to={buildHref(l)}
            aria-label={`Switch language to ${l.toUpperCase()}`}
            className={`rounded-full px-2 py-0.5 uppercase tracking-wide transition ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
