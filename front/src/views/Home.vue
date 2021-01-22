<template>
  <div class="home">
    <h1>Welcome to Spotitops</h1>
    <p>
      Show me your favorite songs 😀<br>
      ⬇️<br>
      Then I will search for your next music concerts 🤓<br>
      ⬇️
      <br>
      <br>
    </p>
    <ConnectWithSpotify/>
    <br>
    <ConnectWithGoogle/>
  </div>
</template>

<script>
import ConnectWithSpotify from '@/components/ConnectWithSpotify.vue'
import ConnectWithGoogle from '@/components/ConnectWithGoogle.vue'
import { onBeforeMount } from 'vue'

export default {
  name: 'Home',
  components: {
    ConnectWithSpotify,
    ConnectWithGoogle,
  },
  setup() {
    /* ------- vue hooks */
    onBeforeMount(async () => {
      console.log('Home | onBeforeMount')
    })
    return {}
  }
}
</script>
