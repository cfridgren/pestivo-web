import { Link, useParams } from "@tanstack/react-router";
import { Globe, Menu } from "lucide-react";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { BRAND, SECTION_SLUGS } from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

function PestivoMark() {
  return (
    <div className="relative flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm ring-4 ring-primary/10">
      <svg
        viewBox="0 0 64 64"
        className="size-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse
          cx="32"
          cy="32"
          rx="8.5"
          ry="11.5"
          stroke="currentColor"
          strokeWidth="3.6"
        />
        <path
          d="M32 20V12"
          stroke="currentColor"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <path
          d="M26 25L18.5 18"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M38 25L45.5 18"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M23.5 31H12.5"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M51.5 31H40.5"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M26 39L16.5 48"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M38 39L47.5 48"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M10.5 53.5L53.5 10.5"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function LanguageSwitcher() {
  const { lang: rawLang } = useParams({ strict: false }) as { lang?: string };
  const lang = safeLang(rawLang);

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-background px-2 py-1 shadow-sm">
      <div className="flex size-8 items-center justify-center rounded-full text-muted-foreground">
        <Globe className="size-4" />
      </div>

      <Link
        to="/fr"
        search={true}
        className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
          lang === "fr"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        FR
      </Link>

      <Link
        to="/en"
        search={true}
        className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </Link>
    </div>
  );
}

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

  const brandSubtitle = lang === "fr" ? "ANTI-NUISIBLES" : "PEST CONTROL";

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={`/${lang}`} className="flex items-center gap-3">
          <PestivoMark />

          <div className="leading-none">
            <div className="text-xl font-extrabold tracking-tight text-foreground lg:text-2xl">
              {BRAND.name}
            </div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {brandSubtitle}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "bg-secondary text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              activeOptions={{ exact: n.to === `/${lang}` }}
              className="rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button asChild className="rounded-xl px-5 font-bold shadow-sm">
            <Link to={`/${lang}/${SECTION_SLUGS[lang].contact}`}>
              {tt.cta.freeInspection}
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-xl">
                <Menu className="size-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[86vw] max-w-sm">
              <SheetHeader className="text-left">
                <SheetTitle className="flex items-center gap-3">
                  <PestivoMark />
                  <span>
                    <span className="block text-lg font-extrabold">
                      {BRAND.name}
                    </span>
                    <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {brandSubtitle}
                    </span>
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-8 grid gap-2">
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
              </nav>

              <Button asChild className="mt-8 w-full rounded-xl font-bold">
                <Link
                  to={`/${lang}/${SECTION_SLUGS[lang].contact}`}
                  onClick={() => setOpen(false)}
                >
                  {tt.cta.freeInspection}
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}