<script lang="ts">
  import { Button, Card, DescriptionList } from "flowbite-svelte"
  import { ArrowUpRightFromSquareOutline } from "flowbite-svelte-icons"

  const projects = [
    {
      name: "Physics and Audio",
      description:
        "An experiment in using the Web Audio API to play sounds in response to 2d physics objects interactions.",
      url: "/projects/physics-and-audio",
    },
    {
      name: "Reddisco.win",
      description:
        "A web utility to make sharing Discord invite links on Reddit faster. Takes an invite link as input, fetches the description of the server from Discord as the post title, then offers edits to the title using AI. The provided link and title are auto filled by clicking the button(s) for a handful of subreddit(s).",
      url: "https://reddisco.win",
      external: true,
    },
    {
      name: "Spacetime Clock",
      description:
        "A date and time clock where the current day and the current time are represented as a degree of a circle (0-359) with the start date being the last summer solstice and the start time being solar noon.",
      url: "https://spacetime-clock.pages.dev/",
      external: true,
    },
  ]
</script>

<div class="p-8 text-2xl md:space-y-4 max-w-4xl mx-auto grid">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each projects as project}
      <Card class="!bg-opacity-50 relative">
        <h5
          class="mb-7 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <a href={project.url} target="_blank">{project.name}</a>
        </h5>
        <p
          class="mb-12 font-light text-gray-700 dark:text-gray-300 leading-tight text-left"
        >
          {project.description}
        </p>
        <div class="text-right absolute bottom-3">
          <Button
            href={project.url}
            target={project.external ? "_blank" : ""}
            class="gap-2"
            >Check it Out! {#if project.external}
              <ArrowUpRightFromSquareOutline />
            {/if}
          </Button>
        </div>
      </Card>
    {/each}
  </div>
</div>
