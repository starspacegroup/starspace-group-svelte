# The SvelteKit project for https://starspace.group

The *Space site: the front page with its live Discord member count,
`/projects`, and `/sister-spaces`. SvelteKit and Tailwind (via
flowbite-svelte), deployed to Cloudflare Pages through `adapter-cloudflare`.

## Developing

- Fork the repo to your account, and clone your fork
- `npm install`
- `npm run dev`, or `npm run dev -- --open` to open a browser with it

There is no `.env` step: the site reads no environment variables at all. The
only external call it makes is to Discord's public invite endpoint, from the
browser, for the member count on the front page.

## Scripts

- `npm run check` — svelte-check. It reports **0 errors and 0 warnings**; keep
  it that way, because a check with known noise in it is a check nobody reads.
- `npm run build` — production build into `.svelte-kit/cloudflare`
- `npm run preview` — build, then serve it through `wrangler pages dev`
- `npm run deploy` — build, then `wrangler pages deploy`

One inconsistency to know about: `package.json` declares
`"packageManager": "yarn@1.22.22"`, but the lockfile in git is
`package-lock.json` and there is no `yarn.lock`. Use npm, which matches the
lockfile. Whichever way that gets settled, it should be settled in one place —
Cloudflare Pages reads that field when it picks a package manager for the
build.

## Deploying

Submit the changes on your fork to the original repo as a pull request

## Share cards and page metadata

Pasting a *Space link into Discord, Slack, X, Facebook, LinkedIn, Bluesky,
Telegram, WhatsApp or iMessage unfurls into a card. Everything those platforms
read comes from two places:

- **`src/lib/seo/site.ts`** — the site URL, name, default description, accent
  colour, social profiles and the public route list. Change a fact once, here.
- **`src/lib/Seo.svelte`** — emits the title, description, canonical, the full
  Open Graph set, the `twitter:*` set and JSON-LD. Put it at the top of a page:

  ```svelte
  <Seo
    title="Projects"
    description="…"
    image="/og/projects.png"
    imageAlt="…"
  />
  ```

  All props are optional; a bare `<Seo />` gives the home-page defaults. Add
  `noindex` for drafts — they stay out of search but still preview properly.

Two rules keep this working:

- **One `<Seo />` per page, and never in a layout as well.** A layout's
  `<svelte:head>` and a page's both land in `<head>`, and a scraper keeps the
  first `og:title` it sees, so a layout copy would beat the page's own.
- **Nothing social goes in `src/app.html`.** Static tags there render *before*
  the per-page ones and would win the same way.

The card images live in `static/og/` and are built by `./scripts/build-og.sh`
from the site's own art — the wood star mark and the starfield out of
`src/lib/images/`, the coral accent from `tailwind.config.cjs`. The script also
produces the favicon and the app icons. It needs ImageMagick 7 and Noto Sans,
it is **not** part of `npm run build`, and its output is committed — run it only
when the wording or the artwork changes.

### Checking a change

`npm run dev`, then read the tags the server actually rendered:

```bash
curl -s http://localhost:5173/projects | grep -oE '<meta property="og:[^>]*>'
```

The image URLs must be absolute (`https://starspace.group/og/…`) — most
scrapers ignore a relative `og:image`. After deploying, re-scrape the page in
each platform's debugger; they all cache the old card for days otherwise:
[Facebook](https://developers.facebook.com/tools/debug/),
[X](https://cards-dev.twitter.com/validator),
[LinkedIn](https://www.linkedin.com/post-inspector/). Discord and Slack clear
themselves within about a day, or immediately if the URL gains a `?v=2`.
