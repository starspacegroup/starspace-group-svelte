<script>
  import { Button } from "flowbite-svelte"
  import { ArrowRightOutline } from "flowbite-svelte-icons"
  import { DiscordSolid } from "flowbite-svelte-icons"
  import { Card } from "flowbite-svelte"

  import MemberCount from "$lib/MemberCount.svelte"
  const SiteDescription =
    "*Space (StarSpace) is an inclusive digital coworking space (currently on Discord) where everyone is welcome. Work around rock star makers, creators, artists, visionaries, innovators, and trailblazers who are creativity and productivity driven! 🤘 🚀"
  let SiteSubtitle = "Work, Create, and Collaborate with Chaos and Fun!"
  let DiscordInviteURL = "https://discord.gg/xsQC6URzyQ"
</script>

<div class="p-8 text-2xl md:space-y-4 max-w-4xl mx-auto grid">
  <div class="md:grid grid-cols-2 md:space-x-5">
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
