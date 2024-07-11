<script>
  const commands = [
    {
      name: "affirmation",
      description:
        "Gives the User mentioned (or the commanding User) one of a random set of affirmations.",
      usage: "/affirmation [User?]",
    },
    {
      name: "insult",
      description:
        "Gives the User mentioned (or the commanding User) one of a random set of insults.",
      usage: "/insult [User?]",
    },
  ]
  import { DarkMode } from "flowbite-svelte"
  import "../../app.pcss"
  import { GithubSolid } from "flowbite-svelte-icons"
  const GithubURL = "https://github.com/StarspaceGroup/starspace-bot"
</script>

<div class="p-14 dark:bg-zinc-950 dark:text-zinc-200 bg-zinc-300 min-h-svh">
  <DarkMode
    class="text-primary-500 dark:text-primary-600 border dark:border-gray-800 bg-zinc-950 dark:bg-zinc-200 text-xl absolute top-12 right-12"
  />
  <a href={GithubURL} target="_blank" class="absolute bottom-12 right-12">
    <GithubSolid size="xl" />
  </a>

  <h1 class="text-4xl md:text-9xl">*Space Discord Bot</h1>
  <p class="m-9 text-3xl">
    A bot to enforce rules, provide tools, and make fun happen in *Space
  </p>
  <h2 class="font-bold text-3xl mt-12 mb-6">Commands:</h2>
  {#each commands as command}
    <div class="mb-24">
      <h4 class="font-thin text-4xl pl-4">
        {command.name}
      </h4>
      <pre class="text-xl my-2">{command.usage}</pre>
      <p>
        {command.description}
      </p>
    </div>
  {/each}
</div>
