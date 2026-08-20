<script>
  import { GithubSolid, InstagramSolid, XSolid } from "flowbite-svelte-icons"
  import BlueskySolid from "./BlueskySolid.svelte";
  const GithubURL = "https://github.com/StarspaceGroup/"
  const InstagramURL = "https://www.instagram.com/starspace.group/"
  // const XURL = "https://x.com/starspacegroup/"
  const BlueskyURL = "https://bsky.app/profile/starspace.group"
</script>

<a
  href={GithubURL}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="*Space on GitHub"
>
  <GithubSolid size="xl" />
</a>
<a
  href={InstagramURL}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="*Space on Instagram"
>
  <InstagramSolid size="xl" />
</a>
<!-- <a href={XURL} target="_blank" rel="noopener noreferrer">
  <XSolid size="xl" />
</a> -->
<a
  href={BlueskyURL}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="*Space on Bluesky"
>
  <BlueskySolid />
</a>
