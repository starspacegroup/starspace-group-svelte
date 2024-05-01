<script lang="ts">
  import type { EventHandler } from "svelte/elements"
  import "../../../app.pcss"

  let elements = Array.from(Array(12 * 12).keys())
  let count = 0

  let isPopped: Array<boolean> = []

  function pop(i: number) {
    // console.log(JSON.stringify(event.target))
    // elements.pop(i)
    if (!isPopped[i]) {
      isPopped[i] = true
      count++
    }
  }
</script>

<main
  class="min-h-svh dark:bg-zinc-950 dark:text-zinc-200 bg-zinc-300 select-none"
>
  <div class="text-2xl text-center p-3">
    Counter: {count}
    <button on:click={() => (isPopped = [])} class="rounded-xl bg-red-800 p-3"
      >Reset</button
    >
  </div>
  <div class="main">
    <div class="container select-none">
      {#each elements as i}
        <div
          class="box !bg-amber-700 !text-center !text-2xl flex !items-center !align-center text-white cursor-pointer"
          class:!bg-opacity-0={isPopped[i]}
          on:click={() => pop(i)}
        >
          <p class="!my-auto !mt-10">{i}</p>
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  .main {
    display: flex;
    --s: 100px; /* size  */
    --m: 4px; /* margin */
    --f: calc(1.732 * var(--s) + 4 * var(--m) - 1px);
  }

  .container {
    font-size: 0; /*disable white space between inline block element */
  }

  .container div {
    width: var(--s);
    margin: var(--m);
    height: calc(var(--s) * 1.1547);
    display: inline-block;
    font-size: initial;
    background: green;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    margin-bottom: calc(var(--m) - var(--s) * 0.2885);
  }
  .container::before {
    content: "";
    width: calc(var(--s) / 2 + var(--m));
    float: left;
    height: 120%;
    shape-outside: repeating-linear-gradient(
      #0000 0 calc(var(--f) - 3px),
      #000 0 var(--f)
    );
  }
</style>
