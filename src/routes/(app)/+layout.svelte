<script>
  import "../../app.pcss"
  import Navigation from "$lib/Navigation.svelte"
  import MainTitle from "$lib/MainTitle.svelte"
</script>

<main
  class="min-h-screen text-center dark:bg-zinc-950 dark:text-zinc-200 bg-zinc-300 relative overflow-hidden select-none"
>
  <div class="z-30 relative">
    <Navigation />
    <div class="">
      <a href="/">
        <MainTitle />
      </a>
    </div>
    <slot class="" />
  </div>
  <enhanced:img
    src="$lib/images/ai starspace logo transparent bg.png"
    alt=""
    class="fixed -left-1/3 -top-1/3 z-10 blur-[9rem]"
  />
  <enhanced:img
    src="$lib/images/stars_on_black_background.jpeg"
    alt=""
    class="fixed top-0 left-0 z-9 bg-cover w-screen h-screen dark:opacity-20 opacity-0 duration-1000"
  />
</main>
