import { useParams } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import {
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  Send,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BRAND, COMMUNES } from "@/content/site";
import { safeLang, t, type Lang } from "@/lib/i18n";

const schema = z.object({
  fullName: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(6).max(30),
  whatsapp: z.string().trim().max(30).optional().or(z.literal("")),
  email: z.string().trim().email().max(255).optional().or(z.literal("")),
  customerType: z.string().min(1),
  service: z.string().min(1),
  city: z.string().trim().min(2).max(80),
  commune: z.string().trim().max(80).optional().or(z.literal("")),
  address: z.string().trim().max(200).optional().or(z.literal("")),
  date: z.string().max(40).optional().or(z.literal("")),
  urgency: z.string().min(1),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  preferred: z.string().min(1),
});

type BookingData = z.infer<typeof schema>;

function buildWhatsAppMessage(data: BookingData, lang: Lang) {
  if (lang === "fr") {
    return [
      "Bonjour Pestivo Services,",
      "",
      "Je souhaite demander une inspection gratuite / un devis.",
      "",
      `Nom: ${data.fullName}`,
      `Téléphone: ${data.phone}`,
      `WhatsApp: ${data.whatsapp || data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      `Type de client: ${data.customerType}`,
      `Service souhaité: ${data.service}`,
      `Ville: ${data.city}`,
      data.commune ? `Commune / quartier: ${data.commune}` : null,
      data.address ? `Adresse: ${data.address}` : null,
      data.date ? `Date souhaitée: ${data.date}` : null,
      `Urgence: ${data.urgency}`,
      `Contact préféré: ${data.preferred}`,
      data.message ? `Message: ${data.message}` : null,
      "",
      "Merci de me confirmer le prix ou la prochaine disponibilité.",
    ]
      .filter(Boolean)
      .join("\n");
  }

  return [
    "Hello Pestivo Services,",
    "",
    "I would like to request a free inspection / quote.",
    "",
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `WhatsApp: ${data.whatsapp || data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    `Customer type: ${data.customerType}`,
    `Service needed: ${data.service}`,
    `City: ${data.city}`,
    data.commune ? `Commune / area: ${data.commune}` : null,
    data.address ? `Address: ${data.address}` : null,
    data.date ? `Preferred date: ${data.date}` : null,
    `Urgency: ${data.urgency}`,
    `Preferred contact: ${data.preferred}`,
    data.message ? `Message: ${data.message}` : null,
    "",
    "Please confirm the price or next available appointment.",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildWhatsAppUrl(data: BookingData, lang: Lang) {
  const message = buildWhatsAppMessage(data, lang);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function BookingForm() {
  const { lang: raw } = useParams({ strict: false }) as { lang?: string };
  const lang = safeLang(raw);
  const tt = t(lang);
  const f = tt.form;

  const [done, setDone] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const errs: Record<string, string> = {};

      parsed.error.issues.forEach((issue) => {
        errs[issue.path[0] as string] = issue.message;
      });

      setErrors(errs);
      return;
    }

    setErrors({});

    const url = buildWhatsAppUrl(parsed.data, lang);
    setWhatsAppUrl(url);
    setDone(true);

    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-primary/20 bg-card p-6 shadow-sm sm:p-8">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-8" />
        </div>

        <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-foreground">
          {lang === "fr" ? "Demande prête sur WhatsApp" : "Request ready on WhatsApp"}
        </h3>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {lang === "fr"
            ? "Nous avons préparé votre demande. Si WhatsApp ne s'est pas ouvert automatiquement, cliquez sur le bouton ci-dessous."
            : "We prepared your request. If WhatsApp did not open automatically, click the button below."}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Button asChild size="lg" className="rounded-xl font-bold">
            <a href={whatsAppUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 size-5" />
              {tt.cta.whatsapp}
            </a>
          </Button>

          <Button
            type="button"
            size="lg"
            variant="outline"
            className="rounded-xl font-bold"
            onClick={() => setDone(false)}
          >
            {lang === "fr" ? "Modifier la demande" : "Edit request"}
          </Button>
        </div>

        <p className="mt-5 rounded-2xl bg-secondary/60 p-4 text-xs leading-5 text-muted-foreground">
          {f.thanks}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-8"
    >
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <ShieldCheck className="size-6" />
        </div>

        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
            {f.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {f.sub}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field
          label={f.fullName}
          name="fullName"
          required
          err={errors.fullName}
        />

        <Field label={f.phone} name="phone" required err={errors.phone} />

        <Field
          label={f.whatsapp}
          name="whatsapp"
          err={errors.whatsapp}
          placeholder={lang === "fr" ? "Si différent du téléphone" : "If different from phone"}
        />

        <Field
          label={f.email}
          name="email"
          type="email"
          err={errors.email}
        />

        <SelectField
          label={f.customerType}
          name="customerType"
          options={f.customerOptions}
          required
          err={errors.customerType}
        />

        <SelectField
          label={f.service}
          name="service"
          options={f.serviceOptions}
          required
          err={errors.service}
        />

        <Field
          label={f.city}
          name="city"
          required
          err={errors.city}
          defaultValue={BRAND.city}
        />

        <SelectField
          label={f.commune}
          name="commune"
          options={COMMUNES}
          err={errors.commune}
        />

        <Field
          label={f.address}
          name="address"
          err={errors.address}
          className="sm:col-span-2"
        />

        <Field
          label={f.date}
          name="date"
          type="date"
          err={errors.date}
        />

        <SelectField
          label={f.urgency}
          name="urgency"
          options={f.urgencyOptions}
          required
          err={errors.urgency}
        />

        <SelectField
          label={f.preferredContact}
          name="preferred"
          options={f.contactOptions}
          required
          err={errors.preferred}
          defaultValue={f.contactOptions[0]}
        />

        <div className="grid gap-1.5 sm:col-span-2">
          <Label htmlFor="message">{f.message}</Label>
          <Textarea
            id="message"
            name="message"
            maxLength={1000}
            placeholder={
              lang === "fr"
                ? "Décrivez le problème: cafards, rats, moustiques, punaises, termites, zone touchée..."
                : "Describe the issue: cockroaches, rats, mosquitoes, bed bugs, termites, affected area..."
            }
            className="min-h-28"
          />
          {errors.message && (
            <p className="text-xs text-destructive">{errors.message}</p>
          )}
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto_auto]">
        <Button type="submit" size="lg" className="rounded-xl font-bold">
          <Send className="mr-2 size-5" />
          {f.submit}
        </Button>

        <Button asChild size="lg" variant="outline" className="rounded-xl font-bold">
          <a href={`https://wa.me/${BRAND.whatsappNumber}`} target="_blank" rel="noreferrer">
            <MessageCircle className="mr-2 size-5" />
            WhatsApp
          </a>
        </Button>

        <Button asChild size="lg" variant="outline" className="rounded-xl font-bold">
          <a href={`tel:${BRAND.phoneNumber}`}>
            <PhoneCall className="mr-2 size-5" />
            {lang === "fr" ? "Appel" : "Call"}
          </a>
        </Button>
      </div>

      <p className="mt-5 text-xs leading-5 text-muted-foreground">
        {lang === "fr"
          ? "Aucun paiement en ligne. Le prix est confirmé avant toute intervention."
          : "No online payment. Pricing is confirmed before any treatment."}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  err,
  defaultValue,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  err?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={`grid gap-1.5 ${className}`}>
      <Label htmlFor={name}>
        {label}
        {required && <span className="text-destructive"> *</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        maxLength={255}
      />
      {err && <p className="text-xs text-destructive">{err}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  err,
  defaultValue,
}: {
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
  err?: string;
  defaultValue?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={name}>
        {label}
        {required && <span className="text-destructive"> *</span>}
      </Label>

      <Select name={name} required={required} defaultValue={defaultValue}>
        <SelectTrigger id={name}>
          <SelectValue placeholder="—" />
        </SelectTrigger>
        <SelectContent>
          {options.map((o) => (
            <SelectItem key={o} value={o}>
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {err && <p className="text-xs text-destructive">{err}</p>}
    </div>
  );
}