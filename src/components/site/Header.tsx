import { Link, useParams } from "@tanstack/react-router";
import { Menu, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { BRAND, SECTION_SLUGS } from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

export function Header() {
  const { lang: rawLang } = useParams({ strict: false }) as { lang?: string };
  const lang = safeLang(rawLang);
  const tt = t(lang);
  const [open, setOpen] = useState(false);

  const nav = [
    { label: tt.nav.home, to: `/${lang}` },
    { label: tt.nav.services, to: `/${lang}/${SECTION_SLUGS[lang].services}` },
    { label: tt.nav.customers, to: `/${lang}/${SECTION_SLUGS[lang].customers}` },
    { label: tt.nav.pricing, to: `/${lang}/${SECTION_SLUGS[lang].pricing}` },
    { label: tt.nav.locations, to: `/${lang}/${SECTION_SLUGS[lang].locations}` },
    { label: tt.nav.blog, to: `/${lang}/${SECTION_SLUGS[lang].blog}` },
    { label: tt.nav.contact, to: `/${lang}/${SECTION_SLUGS[lang].contact}` },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <Link to={`/${lang}`} className="flex min-w-0 items-center gap-2">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <ShieldCheck className="size-5" aria-hidden />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-sm font-bold tracking-tight text-foreground">
              {BRAND.name}
            </span>
            <span className="hidden truncate text-[10px] uppercase tracking-wider text-muted-foreground sm:block">
              {lang === "fr" ? "Anti-nuisibles · Kinshasa" : "Pest control · Kinshasa"}
            </span>
          </span>
        </Link>

        <nav className="ml-6 hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-foreground bg-secondary" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              activeOptions={{ exact: n.to === `/${lang}` }}
              className="rounded-md px-3 py-2 text-sm font-medium hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <Button asChild size="sm" className="hidden bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex">
            <Link to={`/${lang}/${SECTION_SLUGS[lang].contact}`}>{tt.cta.freeInspection}</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88%] max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left">{BRAND.name}</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-1">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    activeProps={{ className: "bg-secondary text-foreground" }}
                    inactiveProps={{ className: "text-muted-foreground" }}
                    activeOptions={{ exact: n.to === `/${lang}` }}
                    className="rounded-md px-3 py-3 text-base font-medium hover:bg-secondary"
                  >
                    {n.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between gap-2">
                <LanguageSwitcher />
                <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to={`/${lang}/${SECTION_SLUGS[lang].contact}`} onClick={() => setOpen(false)}>
                    {tt.cta.freeInspection}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
