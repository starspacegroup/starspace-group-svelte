<script lang="ts">
  import "../../../app.pcss"
  import { count } from "./stores.js"
  let countValue: number = 0
  count.subscribe((n) => (countValue = n))

  const startNum = 12 * 140
  const starter = Array.from(Array(startNum).keys())
  let isPopped: Array<boolean> = []
  let elements = [{ index: 0, element: {} }]
  for (let i = 0; i < starter.length; i++) {
    elements[i] = { index: i, element: {} }
    isPopped[i] = false
  }

  let m = { x: 0, y: 0 }
  let relM = [{ x: 0, y: 0 }]

  function pop(i: number) {
    // console.log(JSON.stringify(event.target))
    // elements.pop(i)
    if (!isPopped[i]) {
      isPopped[i] = true
      count.update((n) => n + 1)
    }
  }

  function handleMousemove(event: MouseEvent, id: number) {
    m.x = event.clientX
    m.y = event.clientY
    // const rectM = event.target?.getBoundingClientRect()
    // relM[id] = {
    //   x: event.clientX - rectM.x,
    //   y: event.clientY - rectM.y,
    // }
  }

  function reset() {
    isPopped = elements.map((i) => (isPopped[i.index] = false))
    count.set(0)
  }
</script>

<main class="h-lvh select-none p-0 text-white">
  <div class="text-2xl text-center p-3">
    Counter: {countValue}
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
