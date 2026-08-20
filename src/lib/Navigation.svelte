<script>
  import { DarkMode } from "flowbite-svelte"
  import { page } from "$app/stores"
  import SocialIcons from "./SocialIcons.svelte"

  const links = [
    { href: "/projects", label: "Projects" },
    { href: "/sister-spaces", label: "Sister Spaces" },
  ]
</script>

<nav
  class="p-5 text-right sticky w-full top-0 left-0 flex items-center justify-end space-x-6"
>
  {#each links as link}
    <a
      href={link.href}
      aria-current={$page.url.pathname === link.href ? "page" : undefined}
      class="rounded dark:border-cyan-100 border-cyan-950 border-2 p-3 border-opacity-10 dark:border-opacity-10"
      class:border-opacity-50={$page.url.pathname === link.href}
      class:dark:border-opacity-50={$page.url.pathname === link.href}
      >{link.label}</a
    >
  {/each}
  <DarkMode
    class="text-primary-500 dark:text-primary-600 border dark:border-gray-800 bg-zinc-950 dark:bg-zinc-200 text-xl"
  />
  <div class="hidden md:flex space-x-4">
    <SocialIcons />
  </div>
</nav>
