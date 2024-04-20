<script>
  import { DarkMode } from "flowbite-svelte"
  import { Button } from "flowbite-svelte"
  import { GithubSolid } from "flowbite-svelte-icons"
  import { Card } from "flowbite-svelte"

  import MemberCount from "../MemberCount.svelte"

  let StarspaceLogoBackground = "/ai starspace logo transparent bg.png"
  let SiteTitle = "*Space"
  let SiteDescription =
    "*Space (StarSpace) is an inclusive digital coworking space (currently on Discord) where everyone is welcome to work and meet with others who are interested in getting things done."
  let GithubURL = "https://github.com/StarspaceGroup/"
  let DiscordInviteURL = "https://discord.gg/xsQC6URzyQ"
</script>

<main
  class="min-h-svh text-center dark:bg-zinc-950 dark:text-zinc-200 bg-zinc-300 relative overflow-hidden flex h-screen"
>
  <div class="z-20 relative m-auto">
    <nav
      class="p-5 text-right fixed w-full top-0 left-0 flex items-center justify-end space-x-6"
    >
      <DarkMode
        class="text-primary-500 dark:text-primary-600 border dark:border-gray-800 bg-zinc-950 dark:bg-zinc-200 text-xl"
      />
      <a href={GithubURL} target="_blank" class="">
        <GithubSolid size="xl" />
      </a>
    </nav>
    <div class="p-8 text-2xl space-y-4 max-w-4xl mx-auto grid">
      <h1
        class="text-7xl md:text-9xl font-bold mb-12 text-zinc-100 hover:text-zinc-800 dark:text-zinc-800 dark:hover:text-zinc-100 duration-1000"
      >
        {SiteTitle}
      </h1>
      <p>
        <Button
          href={DiscordInviteURL}
          color="dark"
          class="text-2xl duration-1000 bg-[#7289DA] dark:bg-[#7289DA]"
          target="_blank">Join on Discord</Button
        >
      </p>
      <p>
        {SiteDescription}
      </p>
      <p>
        Current Member Count: <MemberCount />
      </p>
    </div>
  </div>
  <img
    src={StarspaceLogoBackground}
    alt=""
    class="absolute -left-1/3 -top-1/3 z-10 blur-[9rem]"
  />
</main>
