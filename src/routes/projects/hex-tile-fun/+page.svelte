<script lang="ts">
  import "../../../app.pcss"
  import Seo from "$lib/Seo.svelte"
  import { count } from "./stores.js"

  const startNum = 12 * 140
  const starter = Array.from(Array(startNum).keys())
  let isPopped: Array<boolean> = []
  let elements = [{ index: 0, element: {} }]
  for (let i = 0; i < starter.length; i++) {
    elements[i] = { index: i, element: {} }
    isPopped[i] = false
  }

  function pop(i: number) {
    // console.log(JSON.stringify(event.target))
    // elements.pop(i)
    if (!isPopped[i]) {
      isPopped[i] = true
      count.update((n) => n + 1)
    }
  }

  function reset() {
    isPopped = elements.map((i) => (isPopped[i.index] = false))
    count.set(0)
  }
</script>

<!-- Draft, not linked from /projects yet: noindex keeps it out of search,
     but a pasted link still unfurls with the house card. -->
<Seo title="Hex Tile Fun" description="A bubble-wrap toy in hexagons — a *Space side project." noindex />

<main class="h-lvh select-none p-0 text-white">
  <div class="text-2xl text-center p-3">
    Counter: {$count}
    <button on:click={reset} class="rounded-xl bg-red-800 p-3">Reset</button>
  </div>
  <div class="main">
    <div class="hextainer select-none">
      {#each elements as i}
        <button
          class="box !bg-[rgb(134,90,48)] !text-center !text-xl flex !items-center !align-center text-white cursor-pointer"
          class:!bg-opacity-0={isPopped[i.index]}
          on:click={() => pop(i.index)}
        >
          <p class="!my-auto">
            {JSON.stringify(i.index)}
          </p>
        </button>
      {/each}
    </div>
  </div>
</main>

<style lang="postcss">
  :global(body) {
    @apply !bg-black;
  }
  .main {
    display: flex;
    --s: 50px; /* size  */
    --m: 1px; /* margin */
    --f: calc(1.732 * var(--s) + 4 * var(--m) - 1px);
  }

  .hextainer {
    font-size: 0; /*disable white space between inline block element */
  }

  .hextainer button {
    display: block;
    width: var(--s);
    margin: var(--m);
    height: calc(var(--s) * 1.1547);
    display: inline-block;
    font-size: initial;
    background: green;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    margin-bottom: calc(var(--m) - var(--s) * 0.2885);
  }
  .hextainer::before {
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
