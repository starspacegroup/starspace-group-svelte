<script lang="ts">
  import { Button, Card } from "flowbite-svelte"
  import {
    ArrowUpRightFromSquareOutline,
    MapPinAltOutline,
    GlobeOutline,
  } from "flowbite-svelte-icons"
  import { Badge } from "flowbite-svelte"

  const sister_spaces = [
    {
      name: "Arete.study",
      description:
        "A safe maker space in Ukraine with a wide range of equipment and tools for fabrication using wood, metal, and more. Lathe/milling/CNClaser, 3d printing, power-tools, woodworking, embedded systems BGA/SMD soldering, carbon\fiber glass framing",
      url: "https://arete.study/",
      physical: true,
      image_url: "/arete-study-image.jpg",
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

<div class="p-8 text-2xl md:space-y-4 max-w-5xl mx-auto">
  <div class="space-y-9">
    {#each sister_spaces as sister_space}
      <div
        class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 shadow-md flex w-full flex-col-reverse md:flex-row-reverse !bg-opacity-50 mx-auto max-w-8xl"
      >
        <img
          class="rounded-b-lg object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none md:rounded-e-lg"
          src={sister_space.image_url}
          alt=""
        />
        <div class="p-4 sm:p-6 w-full">
          <h2
            class="mb-9 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-left"
          >
            <a href={sister_space.url} target="_blank">{sister_space.name}</a>
          </h2>
          <p class="flex gap-4 items-center text-2xl p-2">
            <GlobeOutline />
            <a href={sister_space.url} target="_blank">{sister_space.url}</a>
          </p>
          <p class="flex gap-4 items-center text-2xl p-2">
            <MapPinAltOutline />
            <a
              href={sister_space.map_url}
              target="_blank"
              class="dark:text-blue-400 text-blue-700 text-left"
              >{sister_space.address}</a
            >
          </p>

          <p
            class="my-5 font-light text-gray-700 dark:text-gray-300 leading-tight text-left"
          >
            {sister_space.description}
          </p>
          {#if sister_space.tags}
            <div class="flex flex-wrap gap-2">
              {#each sister_space.tags as tag}
                <Badge color={tag.color} class="mr-2 text-lg">{tag.title}</Badge
                >
              {/each}
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
