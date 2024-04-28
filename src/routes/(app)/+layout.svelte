<script>
  import "../../app.pcss"
  import Navigation from "$lib/Navigation.svelte"
  import MainTitle from "$lib/MainTitle.svelte"
  const StarspaceLogoImage = "/ai starspace logo transparent bg.png"
  const StarsOnSpaceImage = "/stars_on_black_background.jpeg"
</script>

<main
  class="min-h-screen text-center dark:bg-zinc-950 dark:text-zinc-200 bg-zinc-300 relative overflow-hidden select-none"
>
  <div class="z-30 relative">
    <Navigation />
    <div class="pt-24">
      <a href="/">
        <MainTitle />
      </a>
    </div>
    <slot class="" />
  </div>
  <img
    src={StarspaceLogoImage}
    alt=""
    class="fixed -left-1/3 -top-1/3 z-10 blur-[9rem]"
  />
  <img
    src={StarsOnSpaceImage}
    alt=""
    class="fixed top-0 left-0 z-9 bg-cover w-screen h-screen dark:opacity-20 opacity-0 duration-1000"
  />
</main>
