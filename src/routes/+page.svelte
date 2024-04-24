<script>
  import { DarkMode } from "flowbite-svelte"
  import { Button } from "flowbite-svelte"
  import { GithubSolid } from "flowbite-svelte-icons"
  import { ArrowRightOutline } from "flowbite-svelte-icons"
  import { Card } from "flowbite-svelte"

  import MemberCount from "../MemberCount.svelte"

  let StarspaceLogoImage = "/ai starspace logo transparent bg.png"
  let SiteTitle = "*Space"
  let SiteDescription =
    "*Space (StarSpace) is an inclusive digital coworking space (currently on Discord) where everyone is welcome to work around and meet others who are creativity and productivity driven."
  let SiteSubtitle = "The Best Place to Work, Study, and Play!"
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
        class="text-7xl md:text-9xl font-bold mb-12 duration-1000 flex gap-9 place-content-center bg-clip-text bg-gradient-to-tr from-primary-500 to-secondary-500"
      >
        <img src={StarspaceLogoImage} alt="" class="h-32" />

        {SiteTitle}
      </h1>
      <div class="md:flex space-x-5">
        <Card class="text-left place-self-center">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {SiteSubtitle}
          </h5>
          <p
            class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
          >
            {SiteDescription}
          </p>
          <Button href={DiscordInviteURL} class="w-fit place-self-end">
            Join on Discord <ArrowRightOutline
              class="w-6 h-6 ms-2 text-white"
            />
          </Button>
        </Card>
        <p class="p-5">
          Current Member Count: <MemberCount />
        </p>
      </div>
    </div>
  </div>
  <img
    src={StarspaceLogoImage}
    alt=""
    class="absolute -left-1/3 -top-1/3 z-10 blur-[9rem]"
  />
</main>
