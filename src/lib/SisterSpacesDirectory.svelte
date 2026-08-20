<script lang="ts">
  import { Button, Card } from "flowbite-svelte"
  import {
    ArrowUpRightFromSquareOutline,
    MapPinAltOutline,
    GlobeOutline,
  } from "flowbite-svelte-icons"
  import { Badge } from "flowbite-svelte"
  import type { Tag } from "$lib/types"
  import type { Picture } from "vite-imagetools"
  // Same reason as the projects grid: through enhanced-img this is built as
  // AVIF/WebP at several widths instead of shipping the 88 KB JPEG as-is.
  import areteImage from "$lib/images/arete-study-image.jpg?enhanced"

  type SisterSpace = {
    name: string
    description: string
    url: string
    physical?: boolean
    image?: Picture
    map_url: string
    address: string
    tags?: Tag[]
  }

  const sister_spaces: SisterSpace[] = [
    {
      name: "Arete.study",
      description:
        "This makerspace is a cutting-edge facility equipped with a wide range of tools for creators of all skill levels. It features high-precision lathe, milling, CNC, and laser machines, along with 3D printing capabilities and a dedicated woodworking section with power tools. Additionally, the space supports advanced electronics work with embedded systems, BGA/SMD soldering stations, and offers carbon and fiberglass framing resources for complex projects.",
      url: "https://arete.study/",
      physical: true,
      image: areteImage,
      map_url: "https://maps.app.goo.gl/1wRdfFEU3gHJMoZAA",
      address: "Shevchenka St, 51, Tal'ne, Cherkasy Oblast, Ukraine, 20401",
      tags: [
        { title: "Make", color: "yellow" },
        { title: "Hack", color: "red" },
        { title: "Learn", color: "green" },
      ],
    },
  ]
</script>

<div class="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6">
  {#each sister_spaces as sister_space}
    <article
      class="flex w-full flex-col-reverse overflow-hidden rounded-xl border border-zinc-400/40 bg-white/40 text-left backdrop-blur-sm dark:border-zinc-700/60 dark:bg-black/30 md:flex-row-reverse"
    >
      {#if sister_space.image}
        <enhanced:img
          src={sister_space.image}
          alt=""
          sizes="(min-width: 768px) 16rem, 100vw"
          loading="lazy"
          decoding="async"
          class="h-56 w-full object-cover sm:h-72 md:h-auto md:w-64"
        />
      {/if}
      <div class="w-full p-5 sm:p-7">
        <h2 class="mb-5 text-3xl font-bold tracking-tight sm:text-4xl">
          <a
            href={sister_space.url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-500"
            >{sister_space.name}</a
          >
        </h2>

        <p class="flex items-center gap-3 py-1 text-lg">
          <GlobeOutline class="shrink-0" />
          <a
            href={sister_space.url}
            target="_blank"
            rel="noopener noreferrer"
            class="break-all hover:underline">{sister_space.url}</a
          >
        </p>
        <p class="flex items-center gap-3 py-1 text-lg">
          <MapPinAltOutline class="shrink-0" />
          <a
            href={sister_space.map_url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-700 hover:underline dark:text-blue-400"
            >{sister_space.address}</a
          >
        </p>

        <p class="my-5 font-light leading-relaxed text-gray-700 dark:text-gray-300">
          {sister_space.description}
        </p>

        {#if sister_space.tags}
          <div class="flex flex-wrap gap-2">
            {#each sister_space.tags as tag}
              <Badge color={tag.color}>{tag.title}</Badge>
            {/each}
          </div>
        {/if}
      </div>
    </article>
  {/each}
</div>
