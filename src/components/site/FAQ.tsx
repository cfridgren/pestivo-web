import { useParams } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/content/site";
import { safeLang } from "@/lib/i18n";

export function FAQ({ limit }: { limit?: number }) {
  const { lang: raw } = useParams({ strict: false }) as { lang?: string };
  const lang = safeLang(raw);
  const items = limit ? FAQS[lang].slice(0, limit) : FAQS[lang];

  return (
    <Accordion type="single" collapsible className="w-full divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((f, i) => (
        <AccordionItem key={i} value={`f${i}`} className="border-0 px-5">
          <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
