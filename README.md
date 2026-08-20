# The SvelteKit project for https://starspace.group

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Developing

- Fork repo to your account
- Clone your fork of the repo
- Copy .env-example to .env
- Install dependencies with `yarn install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

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
