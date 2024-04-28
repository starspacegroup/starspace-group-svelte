<script>
  import { onMount } from "svelte"
  import { Spinner } from "flowbite-svelte"
  import { dev } from "$app/environment"

  let memberCount = {}
  let loading = true
  let errorMessage = ""

  async function fetchMemberCount() {
    try {
      if (dev) {
        memberCount = 69420
        loading = false
      } else {
        const response = await fetch(
          "https://discord.com/api/invites/xsQC6URzyQ?with_counts=true"
        )
        const data = await response.json()
        memberCount = data.approximate_member_count // Change 'approximate_member_count' based on your guild structure
        loading = false
      }
    } catch (error) {
      console.error("Error fetching member count:", error)
      errorMessage = "Failed to fetch member count"
      loading = false
    }
  }

  onMount(() => {
    fetchMemberCount()

    // Clean up on component destruction
    return () => {
      // Any cleanup code here
    }
  })
</script>

{#if loading}
  <Spinner size="lg" />
{:else if errorMessage}
  ?
{:else}
  {memberCount}
{/if}
