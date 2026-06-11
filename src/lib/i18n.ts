import { LANGS, T, type Lang } from "@/content/site";

export function isLang(v: string | undefined): v is Lang {
  return !!v && (LANGS as string[]).includes(v);
}

export function safeLang(v: string | undefined): Lang {
  return isLang(v) ? v : "fr";
}

export function t(lang: Lang) {
  return T[lang];
}
