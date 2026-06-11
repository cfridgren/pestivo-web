export function SectionTitle({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</div>
      )}
      <h2 className="mt-2 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-3 text-pretty text-base text-muted-foreground">{sub}</p>}
    </div>
  );
}
