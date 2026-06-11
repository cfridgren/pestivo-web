import { Link, useParams } from "@tanstack/react-router";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SECTION_SLUGS, WHATSAPP_URL } from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

export function CTASection() {
  const { lang: raw } = useParams({ strict: false }) as { lang?: string };
  const lang = safeLang(raw);
  const tt = t(lang);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-navy p-8 text-navy-foreground sm:p-12">
      <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-accent/30 blur-3xl" aria-hidden />
      <div className="relative grid items-center gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {tt.sections.finalCtaTitle}
          </h2>
          <p className="mt-3 max-w-xl text-navy-foreground/75">{tt.sections.finalCtaBody}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to={`/${lang}/${SECTION_SLUGS[lang].contact}`}>
              <CalendarCheck className="size-4" />
              {tt.cta.bookFreeInspection}
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-whatsapp text-primary-foreground hover:bg-whatsapp/90">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              {tt.cta.whatsapp}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
