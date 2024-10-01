<script>
  import { DarkMode } from "flowbite-svelte"
  import SocialIcons from "./SocialIcons.svelte"
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
  <div class="hidden md:flex space-x-4">
    <SocialIcons />
  </div>
</nav>
