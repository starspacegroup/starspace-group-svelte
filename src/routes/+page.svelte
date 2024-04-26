<script>
  import { DarkMode } from "flowbite-svelte"
  import { Button } from "flowbite-svelte"
  import { GithubSolid } from "flowbite-svelte-icons"
  import { ArrowRightOutline } from "flowbite-svelte-icons"
  import { DiscordSolid } from "flowbite-svelte-icons"
  import { Card } from "flowbite-svelte"

  import MemberCount from "../MemberCount.svelte"

  const StarspaceLogoImage = "/ai starspace logo transparent bg.png"
  const StarsOnSpaceImage = "/stars_on_black_background.jpeg"
  const SiteTitle = "*Space"
  const SiteDescription =
    "*Space (StarSpace) is an inclusive digital coworking space (currently on Discord) where everyone is welcome. Work around rock star makers, creators, artists, visionaries, innovators, and trailblazers who are creativity and productivity driven! 🤘 🚀"
  let SiteSubtitle = "Work, Create, and Collaborate with Chaos and Fun!"
  let GithubURL = "https://github.com/StarspaceGroup/"
  let DiscordInviteURL = "https://discord.gg/xsQC6URzyQ"
</script>

<main
  class="min-h-screen text-center dark:bg-zinc-950 dark:text-zinc-200 bg-zinc-300 relative overflow-hidden flex select-none"
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
      <div class="md:flex gap-9 place-content-center">
        <img
          src={StarspaceLogoImage}
          alt="*Space Logo"
          class="h-32 mx-auto md:mx-0 hover:animate-bounce-and-spin-y-5 hover:skew-y-12"
        />
        <h1
          class="text-7xl md:text-9xl font-bold mb-12 duration-1000 bg-clip-text text-transparent bg-[url('/stars_on_black_background.jpeg')] dark:text-white bg-cover pb-5 text-center items-center"
        >
          {SiteTitle}
        </h1>
      </div>
      <div class="md:flex space-x-5">
        <Card
          class="text-left place-self-center !bg-opacity-20 !bg-white dark:!bg-black dark:!bg-opacity-20"
        >
          <h5
            class="mb-4 mt-2 text-2xl font-bold tracking-tight text-gray-950 dark:text-white"
          >
            {SiteSubtitle}
          </h5>
          <p
            class="mb-3 font-normal text-gray-950 dark:text-gray-400 leading-tight"
          >
            {SiteDescription}
          </p>
          <Button
            href={DiscordInviteURL}
            class="w-fit place-self-end text-xl mt-3 bg-[#454FBF] dark:bg-[#454FBF] hover:bg-[#5865F2] dark:hover:bg-[#5865F2] text-white"
          >
            Join on <DiscordSolid class="mx-2" /> Discord <ArrowRightOutline
              class="w-6 h-6 ms-2 text-white"
            />
          </Button>
        </Card>
        <div class="p-5 place-content-center">
          <div class="text-3xl font-light">Current Member Count:</div>
          <div class="text-8xl font-light py-9">
            <MemberCount />
          </div>
        </div>
      </div>
    </div>
  </div>
  <img
    src={StarspaceLogoImage}
    alt=""
    class="absolute -left-1/3 -top-1/3 z-10 blur-[9rem]"
  />
</main>
