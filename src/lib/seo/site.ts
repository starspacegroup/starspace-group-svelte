// Everything the share cards, the <Seo> component and the sitemap need to agree
// on. One file so a rename or a new social account is a single edit.

export const SITE_URL = "https://starspace.group"
export const SITE_NAME = "*Space"

// Titles read "*Space - Projects", matching what the pages already used.
export const titleFor = (page?: string) =>
  page ? `${SITE_NAME} - ${page}` : `${SITE_NAME} - Coworking on Discord`

export const DEFAULT_DESCRIPTION =
  "*Space is an inclusive digital coworking space on Discord. Work around rock star makers, creators, artists, and innovators who are creativity and productivity driven."

// primary-500 from tailwind.config.cjs. Discord paints an embed's left edge
// with this, so it is the accent people see before the image even loads.
export const THEME_COLOR = "#FE795D"

// The share card. 1.91:1 is what every platform crops toward; the width/height
// tags let Facebook and LinkedIn reserve the space before the fetch lands.
export const DEFAULT_OG_IMAGE = "/og/default.png"
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630
export const OG_IMAGE_TYPE = "image/png"
export const DEFAULT_OG_IMAGE_ALT = `${SITE_NAME} — coworking on Discord`

export const DISCORD_INVITE = "https://discord.gg/xsQC6URzyQ"

// The accounts SocialIcons.svelte actually links. X is deliberately left out:
// that link is commented out there too. To have X credit posts to the account,
// set TWITTER_HANDLE below — the card itself works on X without it.
export const SOCIAL_PROFILES = [
  "https://github.com/StarspaceGroup/",
  "https://www.instagram.com/starspace.group/",
  "https://bsky.app/profile/starspace.group",
]
export const TWITTER_HANDLE: string | null = null

// Absolute URL for a site-relative path. og:image and twitter:image are
// ignored by most scrapers unless they are absolute, and canonical must be.
export const absolute = (path: string) => new URL(path, SITE_URL).href

// Public routes, for sitemap.xml. Drafts under /projects/* stay out on purpose.
export const ROUTES = ["/", "/projects", "/sister-spaces"]
