<script lang="ts">
  import { onMount } from "svelte"
  import * as CANNON from "cannon-es"
  import * as PE from "svelte-cannon"
  import * as THREE from "three"
  import * as SC from "svelte-cubed"

  let position = new CANNON.Vec3(0, 4, 0)

  let audioCtx: AudioContext

  onMount(() => {
    audioCtx = new window.AudioContext()
  })

  function playCNote() {
    const osc = audioCtx.createOscillator()
    osc.type = "sine"
    osc.frequency.value = 261.63 // C note
    osc.connect(audioCtx.destination)
    osc.start()
    setTimeout(() => {
      osc.stop()
    }, 100) // play for 100ms
  }
</script>

<a href="#" on:click={playCNote}>Play C Note</a>

<PE.World gravity={[0, -9.81, 0]}>
  <PE.Body mass={1} bind:position>
    <PE.Sphere radius={1} />
  </PE.Body>
</PE.World>

<SC.Canvas>
  <SC.PerspectiveCamera position={[0, 2, 10]} />
  <SC.Mesh
    position={[position.x, position.y, position.z]}
    geometry={new THREE.SphereGeometry(1)}
  />
</SC.Canvas>
