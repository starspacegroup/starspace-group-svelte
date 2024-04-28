<script>
  import { DarkMode } from "flowbite-svelte"
  import { GithubSolid } from "flowbite-svelte-icons"
  const GithubURL = "https://github.com/StarspaceGroup/"
</script>

<nav
  class="p-5 text-right fixed w-full top-0 left-0 flex items-center justify-end space-x-6"
>
  <a
    href="/"
    class="rounded dark:border-cyan-100 border-cyan-950 border-2 p-3 border-opacity-10 dark:border-opacity-10"
    >Server Info</a
  >
  <a
    href="/projects"
    class="rounded dark:border-cyan-100 border-cyan-950 border-2 p-3 border-opacity-10 dark:border-opacity-10"
    >Projects</a
  >
  <DarkMode
    class="text-primary-500 dark:text-primary-600 border dark:border-gray-800 bg-zinc-950 dark:bg-zinc-200 text-xl"
  />
  <a href={GithubURL} target="_blank" class="">
    <GithubSolid size="xl" />
  </a>
</nav>
