<script>
  import { GithubSolid, InstagramSolid, XSolid } from "flowbite-svelte-icons"
  import BlueskySolid from "./BlueskySolid.svelte";
  const GithubURL = "https://github.com/StarspaceGroup/"
  const InstagramURL = "https://www.instagram.com/starspace.group/"
  const XURL = "https://x.com/starspacegroup/"
  const BlueskyURL = "https://bsky.app/profile/starspace.group"
</script>

<a href={GithubURL} target="_blank">
  <GithubSolid size="xl" />
</a>
<a href={InstagramURL} target="_blank">
  <InstagramSolid size="xl" />
</a>
<a href={XURL} target="_blank">
  <XSolid size="xl" />
</a>
<a href={BlueskyURL} target="_blank">
  <BlueskySolid />
</a>
