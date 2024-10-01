<script lang="ts">
  export let giveClasses
  import SocialIcons from "./SocialIcons.svelte"

  const year = new Date().getFullYear()
</script>

<div class="p-5 {giveClasses}">
  <div class="flex-none sm:flex space-x-7 align-middle justify-center">
    <div
      class="flex space-x-5 flex-1 justify-center sm:justify-start pb-9 sm:pb-0"
    >
      <SocialIcons />
    </div>
    <div class="flex-0">
      &copy; *Space {year}
    </div>
    <div class="flex-1"></div>
  </div>
</div>
