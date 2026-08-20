<!--
  Every tag a link preview needs, in one place.

  Drop <Seo /> at the top of a page and that page unfurls correctly on Discord,
  Slack, X, Facebook, LinkedIn, Bluesky, Telegram, WhatsApp and iMessage. They
  all read Open Graph; X additionally wants its own twitter:* names, and both
  sets are emitted rather than relying on X's OG fallback, which silently drops
  the large card.

  Use it ONCE per page, never in the layout as well — <svelte:head> from a
  layout and a page both land in <head>, and a scraper takes the first og:title
  it sees, so a layout copy would win over whatever the page set.
-->
<script lang="ts">
  import { page } from "$app/stores"
  import {
    SITE_NAME,
    THEME_COLOR,
    DEFAULT_DESCRIPTION,
    DEFAULT_OG_IMAGE,
    DEFAULT_OG_IMAGE_ALT,
    OG_IMAGE_WIDTH,
    OG_IMAGE_HEIGHT,
    OG_IMAGE_TYPE,
    SOCIAL_PROFILES,
    TWITTER_HANDLE,
    SITE_URL,
    absolute,
    titleFor,
  } from "./seo/site"

  /** Page name, e.g. "Projects". Omit on the home page for the default title. */
  export let title: string | undefined = undefined
  export let description: string = DEFAULT_DESCRIPTION
  /** Site-relative path to this page's share card. */
  export let image: string = DEFAULT_OG_IMAGE
  export let imageAlt: string = DEFAULT_OG_IMAGE_ALT
  export let type: "website" | "article" = "website"
  /** Drafts and dead ends: keep them out of search, still preview correctly. */
  export let noindex: boolean = false

  $: fullTitle = titleFor(title)
  // Canonical off the pathname, not $page.url itself — that carries whatever
  // utm_* and fbclid a share added, and each variant would otherwise look like
  // its own page to a crawler.
  $: canonical = absolute($page.url.pathname)
  $: imageUrl = absolute(image)

  // Escaped so a future description with a "<" in it cannot close the tag.
  $: jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: "StarSpace",
        url: SITE_URL,
        logo: absolute("/icon-512.png"),
        description: DEFAULT_DESCRIPTION,
        sameAs: SOCIAL_PROFILES,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: fullTitle,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        primaryImageOfPage: imageUrl,
      },
    ],
  }).replace(/</g, "\\u003c")
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  {#if noindex}
    <meta name="robots" content="noindex, follow" />
  {/if}

  <!-- Open Graph: Discord, Slack, Facebook, LinkedIn, Bluesky, Telegram,
       WhatsApp, iMessage, Pinterest. -->
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:type" content={type} />
  <meta property="og:url" content={canonical} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:secure_url" content={imageUrl} />
  <meta property="og:image:type" content={OG_IMAGE_TYPE} />
  <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
  <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
  <meta property="og:image:alt" content={imageAlt} />
  <meta property="og:locale" content="en_US" />

  <!-- X / Twitter. summary_large_image is what turns the thumbnail into the
       full-width card; without it X falls back to a small square crop. -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageUrl} />
  <meta name="twitter:image:alt" content={imageAlt} />
  {#if TWITTER_HANDLE}
    <meta name="twitter:site" content={TWITTER_HANDLE} />
    <meta name="twitter:creator" content={TWITTER_HANDLE} />
  {/if}

  <!-- Discord tints the embed's left edge with this. -->
  <meta name="theme-color" content={THEME_COLOR} />

  {@html `<script type="application/ld+json">${jsonLd}<\/script>`}
</svelte:head>
