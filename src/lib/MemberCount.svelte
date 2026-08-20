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
  // The same response already carries how many of them are online right now,
  // so showing it costs no extra request.
  let onlineCount: number | null = null
  let loading = true
  let failed = false

  async function fetchMemberCount() {
    if (dev) {
      memberCount = DEV_PLACEHOLDER
      onlineCount = 420
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
      const data = (await response.json()) as {
        approximate_member_count?: unknown
        approximate_presence_count?: unknown
      }
      if (typeof data.approximate_member_count !== "number")
        throw new Error("no member count in response")
      memberCount = data.approximate_member_count
      // Presence is a bonus, not a reason to fail the whole tile.
      if (typeof data.approximate_presence_count === "number")
        onlineCount = data.approximate_presence_count
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

<div class="text-center">
  <p class="text-2xl font-light sm:text-3xl">Current Member Count:</p>
  <p class="py-2 text-6xl font-light tabular-nums sm:py-3 sm:text-7xl md:py-6 md:text-8xl">
    {#if loading}
      <Spinner size="lg" />
    {:else if failed || memberCount === null}
      <span title="Discord did not answer">?</span>
    {:else}
      {memberCount.toLocaleString("en-US")}
    {/if}
  </p>
  {#if onlineCount !== null}
    <p class="flex items-center justify-center gap-2 text-lg font-light text-gray-700 dark:text-gray-400">
      <span class="inline-block h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden="true"></span>
      {onlineCount.toLocaleString("en-US")} online now
    </p>
  {/if}
</div>
