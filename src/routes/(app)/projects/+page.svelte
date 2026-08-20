<script>
  import ProjectsDirectory from "$lib/ProjectsDirectory.svelte"
  import Seo from "$lib/Seo.svelte"
</script>

<Seo
  title="Projects"
  description="Cool things made by the rock stars working in *Space — apps, games, tools and experiments built by our members."
  image="/og/projects.png"
  imageAlt="*Space — projects made by our members"
/>

<div>
  <h2 class="mx-auto max-w-7xl px-4 text-xl sm:px-6 sm:text-2xl">
    Some of the cool things made by the rock stars working in *Space:
  </h2>
  <ProjectsDirectory />
</div>
