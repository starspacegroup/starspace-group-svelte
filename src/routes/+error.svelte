<!--
  Error and 404 page.

  This sits at the route root on purpose: an unmatched URL never reaches the
  (app) group, so a +error.svelte inside that group would not catch a 404 and
  the visitor would get SvelteKit's default — black text on white, the status
  code, and no way back to the site. That is what was here before.

  Because it is outside the group it gets none of that layout, so it imports
  the stylesheet and draws its own ground.
-->
<script lang="ts">
  import "../app.pcss"
  import { page } from "$app/stores"
  import { Button } from "flowbite-svelte"
  import MainTitle from "$lib/MainTitle.svelte"
  import Footer from "$lib/Footer.svelte"

  $: notFound = $page.status === 404
  // A 404 is the one people actually hit, and a number is no use to them.
  // Anything else is ours, so say that rather than leaking an internal message.
  $: headline = notFound ? "That page isn't here." : "Something went wrong."
  $: detail = notFound
    ? "It may have moved, or it may never have existed. The rest of the site is fine."
    : "That one is on us, not you. Try again in a moment."
</script>

<svelte:head>
  <title>*Space - {notFound ? "Page not found" : "Something went wrong"}</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<main
  class="min-h-screen text-center dark:bg-zinc-950 dark:text-zinc-200 bg-zinc-300 relative overflow-hidden flex flex-col"
>
  <div class="z-30 relative flex-1 flex flex-col justify-center p-8">
    <a href="/" class="block">
      <MainTitle />
    </a>
    <p class="text-8xl font-light opacity-40 mb-4">{$page.status}</p>
    <h2 class="text-3xl md:text-4xl font-bold mb-4">{headline}</h2>
    <p class="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-9">{detail}</p>
    <div>
      <Button href="/" class="text-xl">Back to *Space</Button>
    </div>
  </div>
  <Footer giveClasses="z-30 relative" />
  <enhanced:img
    src="$lib/images/stars_on_black_background.jpeg"
    alt=""
    class="fixed top-0 left-0 z-10 bg-cover w-screen h-screen dark:opacity-20 opacity-0"
  />
</main>
