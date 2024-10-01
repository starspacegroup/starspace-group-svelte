<script>
  import { GithubSolid, InstagramSolid, XSolid } from "flowbite-svelte-icons"
  const GithubURL = "https://github.com/StarspaceGroup/"
  const InstagramURL = "https://www.instagram.com/starspace.group/"
  const XURL = "https://x.com/starspacegroup/"
</script>

<a href={GithubURL} target="_blank" class="">
  <GithubSolid size="xl" />
</a>
<a href={InstagramURL} target="_blank" class="">
  <InstagramSolid size="xl" />
</a>
<a href={XURL} target="_blank" class="">
  <XSolid size="xl" />
</a>
