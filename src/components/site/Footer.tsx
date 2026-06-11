import { Link, useParams } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import { BRAND, COMMUNES, CUSTOMERS, PHONE_URL, SECTION_SLUGS, SERVICES, WHATSAPP_URL } from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

export function Footer() {
  const { lang: raw } = useParams({ strict: false }) as { lang?: string };
  const lang = safeLang(raw);
  const tt = t(lang);

  return (
    <footer className="mt-24 border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="text-xl font-display font-bold">{BRAND.name}</div>
          <p className="mt-2 max-w-sm text-sm text-navy-foreground/70">{tt.footer.tagline}</p>
          <p className="mt-4 max-w-sm text-sm text-navy-foreground/60">{tt.responsibility}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-3 py-1.5 text-xs font-medium text-primary-foreground"
            >
              <MessageCircle className="size-3.5" /> WhatsApp
            </a>
            <a
              href={PHONE_URL}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium"
            >
              <Phone className="size-3.5" /> {BRAND.phoneNumber}
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium"
            >
              <Mail className="size-3.5" /> {BRAND.email}
            </a>
          </div>
          <div className="mt-6 flex gap-3 text-navy-foreground/70">
            <a aria-label="Facebook" href="#" className="hover:text-navy-foreground"><Facebook className="size-5" /></a>
            <a aria-label="Instagram" href="#" className="hover:text-navy-foreground"><Instagram className="size-5" /></a>
            <a aria-label="LinkedIn" href="#" className="hover:text-navy-foreground"><Linkedin className="size-5" /></a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold">{tt.footer.services}</div>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/70">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/${lang}/${SECTION_SLUGS[lang].services}/${s.slug[lang]}`}
                  className="hover:text-navy-foreground"
                >
                  {s.title[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">{tt.footer.customers}</div>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/70">
            {CUSTOMERS.map((c) => (
              <li key={c.id}>
                <Link
                  to={`/${lang}/${SECTION_SLUGS[lang].customers}/${c.slug[lang]}`}
                  className="hover:text-navy-foreground"
                >
                  {c.title[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">{tt.footer.locations}</div>
          <ul className="mt-3 grid grid-cols-2 gap-x-2 gap-y-2 text-sm text-navy-foreground/70">
            {COMMUNES.slice(0, 10).map((c) => (
              <li key={c}>
                <Link
                  to={`/${lang}/${SECTION_SLUGS[lang].locations}/${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="hover:text-navy-foreground"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-sm font-semibold">{tt.footer.legal}</div>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/70">
            <li><a href="#" className="hover:text-navy-foreground">{tt.footer.privacy}</a></li>
            <li><a href="#" className="hover:text-navy-foreground">{tt.footer.terms}</a></li>
            <li><a href="#" className="hover:text-navy-foreground">{tt.footer.safety}</a></li>
            <li><a href="#" className="hover:text-navy-foreground">{tt.footer.cookies}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:px-6">
          <div>© {new Date().getFullYear()} {BRAND.name}. {tt.footer.rights}</div>
          <div className="text-navy-foreground/50">Kinshasa · DR Congo</div>
        </div>
      </div>
    </footer>
  );
}
