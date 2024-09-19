<script>
  import { DarkMode } from "flowbite-svelte"
  import { GithubSolid, InstagramSolid, XSolid } from "flowbite-svelte-icons"
  const GithubURL = "https://github.com/StarspaceGroup/"
  const InstagramURL = "https://www.instagram.com/starspace.group/"
  const XURL = "https://x.com/starspacegroup/"
</script>

<nav
  class="p-5 text-right sticky w-full top-0 left-0 flex items-center justify-end space-x-6"
>
  <a
    href="/projects"
    class="rounded dark:border-cyan-100 border-cyan-950 border-2 p-3 border-opacity-10 dark:border-opacity-10"
    >Projects</a
  >
  <a
    href="/sister-spaces"
    class="rounded dark:border-cyan-100 border-cyan-950 border-2 p-3 border-opacity-10 dark:border-opacity-10"
    >Sister Spaces</a
  >
  <DarkMode
    class="text-primary-500 dark:text-primary-600 border dark:border-gray-800 bg-zinc-950 dark:bg-zinc-200 text-xl"
  />
  <a href={GithubURL} target="_blank" class="">
    <GithubSolid size="xl" />
  </a>
  <a href={InstagramURL} target="_blank" class="">
    <InstagramSolid size="xl" />
  </a>
  <a href={XURL} target="_blank" class="">
    <XSolid size="xl" />
  </a>
</nav>
