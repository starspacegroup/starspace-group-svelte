<script>
  import SisterSpacesDirectory from "$lib/SisterSpacesDirectory.svelte"
  import Seo from "$lib/Seo.svelte"
</script>

<Seo
  title="Sister Spaces"
  description="Physical and digital partners of *Space — the places and communities we work alongside."
  image="/og/sister-spaces.png"
  imageAlt="*Space — our sister spaces"
/>

<div>
  <p class="mx-auto max-w-5xl px-4 text-xl sm:px-6 sm:text-2xl">
    Physical locations that have partnered with us:
  </p>
  <SisterSpacesDirectory />
</div>
