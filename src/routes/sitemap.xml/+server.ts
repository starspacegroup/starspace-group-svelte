import { ROUTES, SITE_URL } from "$lib/seo/site"

// Built from the same ROUTES list the rest of the site uses, so a new page is
// one edit in src/lib/seo/site.ts rather than a static file that drifts.
export const GET = async () => {
  const urls = ROUTES.map(
    (path) => `  <url><loc>${SITE_URL}${path === "/" ? "/" : path}</loc></url>`
  ).join("\n")
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
  return new Response(body, {
    headers: {
      "content-type": "application/xml",
      "cache-control": "public, max-age=3600",
    },
  })
}
