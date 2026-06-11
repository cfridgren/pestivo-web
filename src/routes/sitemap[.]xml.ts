import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BLOG_POSTS, COMMUNES, CUSTOMERS, LANGS, SECTION_SLUGS, SERVICES } from "@/content/site";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths: string[] = ["/"];
        for (const lang of LANGS) {
          paths.push(`/${lang}`);
          for (const key of Object.keys(SECTION_SLUGS[lang]) as (keyof typeof SECTION_SLUGS["fr"])[]) {
            paths.push(`/${lang}/${SECTION_SLUGS[lang][key]}`);
          }
          for (const s of SERVICES) paths.push(`/${lang}/${SECTION_SLUGS[lang].services}/${s.slug[lang]}`);
          for (const c of CUSTOMERS) paths.push(`/${lang}/${SECTION_SLUGS[lang].customers}/${c.slug[lang]}`);
          for (const c of COMMUNES) {
            const slug = c.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            paths.push(`/${lang}/${SECTION_SLUGS[lang].locations}/${slug}`);
          }
          for (const p of BLOG_POSTS) paths.push(`/${lang}/${SECTION_SLUGS[lang].blog}/${p.slug[lang]}`);
        }
        const urls = paths
          .map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
