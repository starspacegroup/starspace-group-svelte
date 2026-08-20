<script lang="ts">
  import { Badge, Button } from "flowbite-svelte"
  import { ArrowUpRightFromSquareOutline } from "flowbite-svelte-icons"
  import type { Tag } from "$lib/types"
  import type { Picture } from "vite-imagetools"

  // The card art used to sit in static/ and ship untouched: 2.9 MB over 13
  // eager requests, two of them ~950 KB PNGs of screenshots. Globbing it
  // through enhanced-img builds AVIF and WebP at several widths during the
  // build and lets the browser take the one it needs.
  const art = import.meta.glob("./images/projects/*.{png,jpg,jpeg,webp}", {
    eager: true,
    query: { enhanced: true },
  }) as Record<string, { default: Picture }>

  const pic = (file?: string) =>
    file ? art[`./images/projects/${file}`]?.default : undefined

  type Project = {
    name: string
    description: string
    url: string
    external?: boolean
    logo?: string
    screenshot?: string
    tags?: Tag[]
  }

  const projects: Project[] = [
    // {
    //   name: "Physics and Audio",
    //   description:
    //     "An experiment in using the Web Audio API to play sounds in response to 2d physics objects interactions.",
    //   url: "/projects/physics-and-audio",
    // },
    {
      name: "AgapeVerse.app",
      description:
        `An AI love poem generator, create and share your affection free! Advanced features include adding a "hidden" message that is spelled out in the first letters of each line of the poem.`,
      url: "https://agapeverse.app/",
      external: true,
      logo: "agapeverse-logo.png",
      screenshot: "agapeverse-screenshot.jpg",
      tags: [
        { title: "Made at *Space", color: "red" },
        { title: "Deno Fresh", color: "green" },
        { title: "Deno Deploy", color: "green" },
        { title: "Cloudflare AI Gateway", color: "green" },
        { title: "Open AI", color: "green" },
      ],
    },
    {
      name: "Reddisco.win",
      description:
        "A web utility to make sharing Discord invite links on Reddit faster. Takes an invite link as input, fetches the description of the server from Discord as the post title, then offers edits to the title using AI. The provided link and title are auto filled by clicking the subreddit buttons.",
      url: "https://reddisco.win",
      screenshot: 'reddisco-screenshot.jpg',
      external: true,
      tags: [
        { title: "Made at *Space", color: "red" },
        { title: "Sveltekit", color: "green" },
        { title: "Cloudflare Pages", color: "green" },
        { title: "Cloudflare Workers", color: "green" },
        { title: "Google Gemini", color: "green" },
      ],
    },
    {
      name: "Spacetime Clock",
      description:
        "A web date and time clock where the current day and the current time are represented as a degree of a circle (0-359) with the start date being the last summer solstice and the start time being solar noon.",
      url: "https://spacetime-clock.pages.dev/",
      screenshot: 'spacetime-clock-screenshot.jpg',
      external: true,
      tags: [
        { title: "Solar Hackathon 2024", color: "yellow"},
        { title: "Made at *Space", color: "red" },
        { title: "Sveltekit", color: "green" },
        { title: "Cloudflare Pages", color: "green" },
      ],
    },
    {
      name: "MetaDock",
      description:
        "A split screen browser with app support for multitasking. Available on Windows and soon Mac OS.",
      url: "https://www.metadock.net/",
      external: true,
      logo: "metadock-logo.webp",
      screenshot: "metadock-screenshot.webp",
      tags: [
        { title: "C++", color: "green" },
        { title: "QT", color: "green" },
      ],
    },
    {
      name: "Game",
      description: "A multiplayer arcade puzzle game where you navigate a seamless sphere world, convert hostile ships into allied satellites, solve node alignment puzzles, and collect power-ups like shields and speed boosts—alone or together in real-time.",
      url: "https://game.starspace.group/",
      external: true,
      screenshot: "game-screenshot.png",
      tags: [
        { title: "Made at *Space", color: "red" },
      ],
    },
    {
      name: "Athena",
      description: "An open-source governance interface for any DAO using the *Space model. Create and vote on proposals, view token holder stats, and manage on-chain governance—all through a clean, deployable UI.",
      url: "https://athena.starspace.group/",
      external: true,
      screenshot: "athena-screenshot.png",
      tags: [
        { title: "Made at *Space", color: "red" },
      ],
    },
    {
      name: "NebulaKit",
      description: "A production-ready SvelteKit + Cloudflare Workers starter template. Includes authentication, command palette, adaptive theming, D1 database, AI voice/text chat, TDD setup with Vitest and Playwright, and GitHub Copilot instructions.",
      url: "https://nebulakit.starspace.group/",
      external: true,
      screenshot: "nebulakit-screenshot.png",
      tags: [
        { title: "Made at *Space", color: "red" },
        { title: "Sveltekit", color: "green" },
        { title: "Cloudflare Workers", color: "green" },
      ],
    },
    {
      name: "Hermes",
      description: "An eCommerce platform to create your own online store in minutes. Features AI-powered store builder, beautiful responsive designs, secure checkout with credit card and crypto, and a zero-monthly-fee revenue share pricing model.",
      url: "https://hermes.starspace.group/",
      external: true,
      screenshot: "hermes-screenshot.png",
      tags: [
        { title: "Made at *Space", color: "red" },
        { title: "Sveltekit", color: "green" },
        { title: "Cloudflare Workers", color: "green" },
      ],
    },
    {
      name: "Trill Symbiont",
      description: "A shared generative ambient music experience featuring a drum sequencer, physics-based visualization synced to tempo, Circle of Fifths key synchronization, and an interactive music grid with oscillator controls and evolutionary patterns.",
      url: "https://trill-symbiont.starspace.group/",
      external: true,
      screenshot: "trill-symbiont-screenshot.png",
      tags: [
        { title: "Made at *Space", color: "red" },
        { title: "Web Audio API", color: "green" },
      ],
    },
  ]
</script>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6">
  <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
    {#each projects as project, i}
      {@const shot = pic(project.screenshot)}
      {@const logo = pic(project.logo)}
      <article
        class="group flex flex-col overflow-hidden rounded-xl border border-zinc-400/40 bg-white/40 text-left backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-primary-500/60 hover:shadow-xl dark:border-zinc-700/60 dark:bg-black/30"
      >
        {#if shot}
          <!-- The screenshot is the biggest target on the card, so it links
               where the title links. Out of the tab order and the
               accessibility tree, because the title says the same thing. -->
          <a
            href={project.url}
            target={project.external ? "_blank" : undefined}
            rel={project.external ? "noopener noreferrer" : undefined}
            tabindex="-1"
            aria-hidden="true"
            class="block aspect-video overflow-hidden bg-zinc-300 dark:bg-zinc-900"
          >
            <enhanced:img
              src={shot}
              alt=""
              sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 92vw"
              loading={i < 2 ? "eager" : "lazy"}
              decoding="async"
              class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            />
          </a>
        {/if}

        <div class="flex flex-1 flex-col gap-3 p-5">
          <h3 class="flex items-center gap-2.5 text-2xl font-bold tracking-tight">
            {#if logo}
              <enhanced:img
                src={logo}
                alt=""
                loading="lazy"
                decoding="async"
                class="h-8 w-8 shrink-0 rounded object-contain"
              />
            {/if}
            <a
              href={project.url}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
              class="text-gray-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-500"
              >{project.name}</a
            >
          </h3>

          <!-- flex-1 pushes the tags and the button to the bottom, so buttons
               line up across a row whatever the description length. That used
               to be a pb-24 on the tags plus an absolutely positioned button. -->
          <p class="flex-1 font-light leading-relaxed text-gray-700 dark:text-gray-300">
            {project.description}
          </p>

          {#if project.tags}
            <div class="flex flex-wrap gap-1.5">
              {#each project.tags as tag}
                <Badge color={tag.color}>{tag.title}</Badge>
              {/each}
            </div>
          {/if}

          <div class="pt-1">
            <Button
              href={project.url}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
              class="w-fit gap-2"
            >
              Check it Out!
              {#if project.external}
                <ArrowUpRightFromSquareOutline class="h-4 w-4" />
              {/if}
            </Button>
          </div>
        </div>
      </article>
    {/each}
  </div>
</div>
