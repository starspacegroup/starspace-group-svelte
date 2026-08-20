<script lang="ts">
  import { Button, Card } from "flowbite-svelte"
  import { ArrowRightOutline, DiscordSolid } from "flowbite-svelte-icons"

  import MemberCount from "$lib/MemberCount.svelte"
  import { DISCORD_INVITE } from "$lib/seo/site"

  const SiteDescription =
    "*Space (StarSpace) is an inclusive digital coworking space (currently on Discord) where everyone is welcome. Work around rock star makers, creators, artists, visionaries, innovators, and trailblazers who are creativity and productivity driven! 🤘 🚀"
  const SiteSubtitle = "Work, Create, and Collaborate with Chaos and Fun!"
</script>

<!--
  The whole block used to sit at text-2xl with a 128px hero above it, so on a
  390px phone the Discord button — the only thing this page is asking anyone to
  do — landed below the fold behind five lines of body copy. Body text is now
  sized for the viewport and the count sits above the description on small
  screens, where it is the short, striking part.
-->
<section class="mx-auto grid max-w-5xl gap-6 px-4 py-6 sm:px-6 md:grid-cols-2 md:items-center md:gap-8">
  <div class="order-2 md:order-1">
    <Card
      class="!max-w-none place-self-center text-left !bg-white !bg-opacity-20 dark:!bg-black dark:!bg-opacity-20"
    >
      <div class="flex flex-col gap-4">
        <h2
          class="mt-1 text-2xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-3xl"
        >
          {SiteSubtitle}
        </h2>
        <div class="sm:order-last">
          <Button
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            class="w-fit gap-2 bg-[#454FBF] text-lg text-white hover:bg-[#5865F2] dark:bg-[#454FBF] dark:hover:bg-[#5865F2]"
          >
            Join on <DiscordSolid class="mx-1" /> Discord
            <ArrowRightOutline class="ms-1 h-5 w-5 text-white" />
          </Button>
        </div>
        <p class="font-normal leading-relaxed text-gray-800 dark:text-gray-300">
          {SiteDescription}
        </p>
      </div>
    </Card>
  </div>

  <div class="order-1 place-content-center py-2 md:order-2 md:py-5">
    <MemberCount />
  </div>
</section>
