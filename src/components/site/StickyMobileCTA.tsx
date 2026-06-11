import { Link, useParams } from "@tanstack/react-router";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { BRAND, PHONE_URL, SECTION_SLUGS, WHATSAPP_URL } from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

export function StickyMobileCTA() {
  const { lang: raw } = useParams({ strict: false }) as { lang?: string };
  const lang = safeLang(raw);
  const tt = t(lang);
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-1 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 rounded-lg bg-whatsapp px-2 py-2 text-xs font-semibold text-primary-foreground"
        >
          <MessageCircle className="size-5" aria-hidden />
          WhatsApp
        </a>
        <a
          href={PHONE_URL}
          aria-label={`${tt.cta.call} ${BRAND.phoneNumber}`}
          className="flex flex-col items-center justify-center gap-0.5 rounded-lg bg-navy px-2 py-2 text-xs font-semibold text-navy-foreground"
        >
          <Phone className="size-5" aria-hidden />
          {lang === "fr" ? "Appeler" : "Call"}
        </a>
        <Link
          to={`/${lang}/${SECTION_SLUGS[lang].contact}`}
          className="flex flex-col items-center justify-center gap-0.5 rounded-lg bg-primary px-2 py-2 text-xs font-semibold text-primary-foreground"
        >
          <CalendarCheck className="size-5" aria-hidden />
          {lang === "fr" ? "Inspection" : "Book"}
        </Link>
      </div>
    </div>
  );
}
