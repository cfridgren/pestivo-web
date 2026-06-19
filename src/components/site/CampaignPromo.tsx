import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { BRAND } from "@/content/site";
import { safeLang } from "@/lib/i18n";

export function CampaignPromo() {
  const { lang: rawLang } = useParams({ strict: false }) as { lang?: string };
  const lang = safeLang(rawLang);

  const campaignPath =
    lang === "en"
      ? "/en/campaigns/monthly-pest-control"
      : "/fr/campaigns/abonnement-anti-nuisibles";

  const whatsAppMessage =
    lang === "en"
      ? "Hello Pestivo Services, I would like a free inspection for a monthly pest control contract."
      : "Bonjour Pestivo Services, je souhaite une inspection gratuite pour un contrat mensuel anti-nuisibles.";

  const whatsAppUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    whatsAppMessage,
  )}`;

  const benefits =
    lang === "en"
      ? [
          "Free initial inspection",
          "1 to 4 visits per month",
          "Restaurants, hotels, offices and warehouses",
          "WhatsApp follow-up after service",
        ]
      : [
          "Inspection gratuite au départ",
          "1 à 4 visites par mois",
          "Restaurants, hôtels, bureaux et dépôts",
          "Suivi WhatsApp après intervention",
        ];

  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border bg-slate-950 shadow-xl">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative p-6 text-white sm:p-8 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,140,82,0.45),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(255,188,65,0.18),transparent_30%)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-white/90">
                <Building2 className="size-4" />
                {lang === "en" ? "Business offer" : "Offre entreprises"}
              </div>

              <h2 className="mt-6 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                {lang === "en"
                  ? "Monthly pest control contract for businesses in Kinshasa"
                  : "Contrat mensuel anti-nuisibles pour entreprises à Kinshasa"}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                {lang === "en"
                  ? "A campaign-ready offer for restaurants, hotels, offices, shops and warehouses that want regular protection, discreet service and clear WhatsApp follow-up."
                  : "Une offre prête pour vos campagnes Facebook : restaurants, hôtels, bureaux, commerces et dépôts peuvent demander un suivi régulier, discret et clair."}
              </p>

              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-primary/35 bg-primary/15 px-5 py-4">
                <ShieldCheck className="size-6 text-primary" />
                <span className="text-2xl font-extrabold text-white">
                  {lang === "en" ? "From $50/month" : "À partir de 50$/mois"}
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/90"
                >
                  <Link to={campaignPath}>
                    <CalendarCheck className="mr-2 size-5" />
                    {lang === "en"
                      ? "View monthly offer"
                      : "Voir l'offre mensuelle"}
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-white/25 bg-white/10 px-6 font-bold text-white hover:bg-white/15 hover:text-white"
                >
                  <a href={whatsAppUrl} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 size-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              {lang === "en" ? "Included" : "Inclus"}
            </p>

            <div className="mt-6 grid gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/50 p-4"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  <span className="text-sm font-bold text-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to={campaignPath}
              className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-primary"
            >
              {lang === "en"
                ? "Open campaign landing page"
                : "Ouvrir la landing page campagne"}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}