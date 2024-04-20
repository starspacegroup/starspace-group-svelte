<script>
  import { DarkMode } from "flowbite-svelte"
  import { Button } from "flowbite-svelte"
  let StarspaceLogoBackground = "/ai starspace logo transparent bg.png"
</script>

<main
  class="min-h-svh text-center dark:bg-zinc-950 dark:text-zinc-200 bg-zinc-300 relative overflow-hidden flex h-screen"
>
  <div class="z-20 relative m-auto">
    <nav class="p-5 text-right fixed w-full top-0 left-0">
      <DarkMode
        class="text-primary-500 dark:text-primary-600 border dark:border-gray-800 bg-zinc-950 dark:bg-zinc-200"
      />
    </nav>
    <div class="p-8 text-2xl space-y-4 max-w-4xl mx-auto grid">
      <h1 class="text-5xl mb-12">Welcome to *Space</h1>
      <p>
        <Button
          href="https://discord.gg/xsQC6URzyQ"
          color="dark"
          class="text-2xl duration-1000 bg-[#7289DA] dark:bg-[#7289DA]"
          target="_blank">Join on Discord</Button
        >
      </p>
      <p>
        *Space is an inclusive digital coworking space (currently on Discord)
        where everyone is welcome to work and meet with others who are
        interested in getting things done.
      </p>
    </div>
  </div>
  <img
    src={StarspaceLogoBackground}
    alt=""
    class="absolute -left-1/3 -top-1/3 z-10 blur-[9rem]"
  />
</main>
