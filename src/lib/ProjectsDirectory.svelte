<script lang="ts">
  import { Button, Card } from "flowbite-svelte"
  import { ArrowUpRightFromSquareOutline } from "flowbite-svelte-icons"
  import { Badge } from "flowbite-svelte"
  import type { Tag } from "$lib/types"

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
      logo: "/agapeverse-logo.png",
      screenshot: "/agapeverse-screenshot.jpg",
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
      screenshot: '/reddisco-screenshot.jpg',
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
      screenshot: '/spacetime-clock-screenshot.jpg',
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
      logo: "/metadock-logo.webp",
      screenshot: "/metadock-screenshot.webp",
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
      screenshot: "/game-screenshot.png",
      tags: [
        { title: "Made at *Space", color: "red" },
      ],
    },
    {
      name: "Athena",
      description: "An open-source governance interface for any DAO using the *Space model. Create and vote on proposals, view token holder stats, and manage on-chain governance—all through a clean, deployable UI.",
      url: "https://athena.starspace.group/",
      external: true,
      screenshot: "/athena-screenshot.png",
      tags: [
        { title: "Made at *Space", color: "red" },
      ],
    },
    {
      name: "NebulaKit",
      description: "A production-ready SvelteKit + Cloudflare Workers starter template. Includes authentication, command palette, adaptive theming, D1 database, AI voice/text chat, TDD setup with Vitest and Playwright, and GitHub Copilot instructions.",
      url: "https://nebulakit.starspace.group/",
      external: true,
      screenshot: "/nebulakit-screenshot.png",
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
      screenshot: "/hermes-screenshot.png",
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
      screenshot: "/trill-symbiont-screenshot.png",
      tags: [
        { title: "Made at *Space", color: "red" },
        { title: "Web Audio API", color: "green" },
      ],
    },
  ]
</script>

<div class="p-8 text-2xl md:space-y-4 max-w-4xl mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each projects as project}
      <Card img={project.screenshot} class="!bg-opacity-50 relative mx-auto">
        <h5
          class="mb-7 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <a href={project.url} class="flex space-x-2" target="_blank" rel="noopener noreferrer">
            {#if project.logo}
              <img src={project.logo} class="w-10" alt="{project.name} logo" />
            {/if}
            <p>{project.name}</p></a
          >
        </h5>
        <p
          class="mb-5 font-light text-gray-700 dark:text-gray-300 leading-tight text-left"
        >
          {project.description}
        </p>
        {#if project.tags}
          <div class="flex flex-wrap gap-2 pb-24">
            {#each project.tags as tag}
              <Badge color={tag.color} class="mr-2 text-lg">{tag.title}</Badge>
            {/each}
          </div>
        {/if}
        <div class="text-right absolute bottom-3 right-3">
          <Button
            href={project.url}
            target={project.external ? "_blank" : ""}
            rel={project.external ? "noopener noreferrer" : undefined}
            class="gap-2 text-xl"
            >Check it Out! {#if project.external}
              <ArrowUpRightFromSquareOutline />
            {/if}
          </Button>
        </div>
      </Card>
    {/each}
  </div>
</div>
