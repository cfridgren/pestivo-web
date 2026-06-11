import { useParams } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { BRAND, COMMUNES } from "@/content/site";
import { safeLang, t } from "@/lib/i18n";

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

export function BookingForm() {
  const { lang: raw } = useParams({ strict: false }) as { lang?: string };
  const lang = safeLang(raw);
  const tt = t(lang);
  const f = tt.form;
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-primary" />
        <h3 className="mt-4 font-display text-2xl font-bold">{lang === "fr" ? "Demande reçue" : "Request received"}</h3>
        <p className="mt-2 text-muted-foreground">{f.thanks}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-3xl border border-border bg-card p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={f.fullName} name="fullName" required err={errors.fullName} />
        <Field label={f.phone} name="phone" type="tel" required err={errors.phone} />
        <Field label={f.whatsapp} name="whatsapp" type="tel" err={errors.whatsapp} />
        <Field label={f.email} name="email" type="email" err={errors.email} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField label={f.customerType} name="customerType" options={f.customerOptions} required err={errors.customerType} />
        <SelectField label={f.service} name="service" options={f.serviceOptions} required err={errors.service} />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Field label={f.city} name="city" defaultValue={BRAND.city} required err={errors.city} />
        <SelectField label={f.commune} name="commune" options={COMMUNES} err={errors.commune} />
        <Field label={f.address} name="address" err={errors.address} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={f.date} name="date" type="date" err={errors.date} />
        <SelectField label={f.urgency} name="urgency" options={f.urgencyOptions} required err={errors.urgency} />
      </div>

      <SelectField label={f.preferredContact} name="preferred" options={f.contactOptions} required err={errors.preferred} />

      <div className="grid gap-1.5">
        <Label htmlFor="message">{f.message}</Label>
        <Textarea id="message" name="message" rows={4} maxLength={1000} />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
        {f.submit}
      </Button>
    </form>
  );
}

function Field({
  label, name, type = "text", required, err, defaultValue,
}: { label: string; name: string; type?: string; required?: boolean; err?: string; defaultValue?: string }) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={name}>
        {label}{required && <span className="text-destructive"> *</span>}
      </Label>
      <Input id={name} name={name} type={type} required={required} defaultValue={defaultValue} maxLength={255} />
      {err && <p className="text-xs text-destructive">{err}</p>}
    </div>
  );
}

function SelectField({
  label, name, options, required, err,
}: { label: string; name: string; options: readonly string[]; required?: boolean; err?: string }) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={name}>
        {label}{required && <span className="text-destructive"> *</span>}
      </Label>
      <Select name={name} required={required}>
        <SelectTrigger id={name}>
          <SelectValue placeholder="—" />
        </SelectTrigger>
        <SelectContent>
          {options.map((o) => (
            <SelectItem key={o} value={o}>{o}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      {err && <p className="text-xs text-destructive">{err}</p>}
    </div>
  );
}
