<script lang="ts">
  import { count } from "./stores.js"
  let position = { x: 0, y: 0 }
  let relM = { x: 0, y: 0 }
  let isPopped: boolean = false

  function pop() {
    // console.log(JSON.stringify(event.target))
    // elements.pop(i)
    if (!isPopped) {
      isPopped = true
      count.update((n) => n + 1)
    }
  }
</script>

<div
  class="box !bg-amber-700 !text-center !text-2xl flex !items-center !align-center text-white cursor-pointer"
  class:!bg-opacity-0={isPopped}
  on:click={pop}
>
  <p class="!my-auto !mt-10">
    {JSON.stringify(isPopped)}
  </p>
</div>
