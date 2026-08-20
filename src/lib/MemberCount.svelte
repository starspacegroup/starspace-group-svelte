<script lang="ts">
  import { onMount } from "svelte"
  import { Spinner } from "flowbite-svelte"
  import { dev } from "$app/environment"
  import { DISCORD_INVITE_API } from "$lib/seo/site"

  // Dev short-circuit: the endpoint is rate limited per IP and a hot-reloading
  // dev server would hammer it. Deliberately not a plausible number, so nobody
  // mistakes what they see locally for the live count.
  const DEV_PLACEHOLDER = 69420

  let memberCount: number | null = null
  let loading = true
  let failed = false

  async function fetchMemberCount() {
    if (dev) {
      memberCount = DEV_PLACEHOLDER
      loading = false
      return
    }
    try {
      const response = await fetch(DISCORD_INVITE_API)
      // Both checks matter. A rate-limited or revoked invite still answers with
      // JSON, just without a count — and reading it straight through left
      // `undefined` on the page, which renders as blank space under the
      // heading. That reads as a slow load, so the failure was never noticed.
      if (!response.ok) throw new Error(`Discord answered ${response.status}`)
      const data = (await response.json()) as { approximate_member_count?: unknown }
      const count = data.approximate_member_count
      if (typeof count !== "number") throw new Error("no member count in response")
      memberCount = count
    } catch (error) {
      console.error("Member count unavailable:", error)
      failed = true
    } finally {
      loading = false
    }
  }

  onMount(() => {
    void fetchMemberCount()
  })
</script>

{#if loading}
  <Spinner size="lg" />
{:else if failed || memberCount === null}
  <span title="Discord did not answer">?</span>
{:else}
  {memberCount.toLocaleString("en-US")}
{/if}
