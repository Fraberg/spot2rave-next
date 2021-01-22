<template>
  <div class="home">
    <h1>Welcome to Spotitops</h1>
    <p>
      1️⃣ Show me your favorite songs 😀<br>
      2️⃣ Then I will search for your next music concerts 🤩<br>
      <br>
      ⬇️
    </p>
    <ConnectWithSpotify/>
    <p>or</p>
    <ConnectWithGoogle/>
  </div>
</template>

<script>
import ConnectWithSpotify from '@/components/ConnectWithSpotify.vue'
import ConnectWithGoogle from '@/components/ConnectWithGoogle.vue'
import { ref, onBeforeMount, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'Home',
  components: {
    ConnectWithSpotify,
    ConnectWithGoogle,
  },
  setup() {
    const route = useRoute()
        /* ------- vue hooks */
    onBeforeMount(async () => {
      console.log('onBeforeMount')
      console.log('route.query', route.query)
      console.log('route.params', route.params)
    })
    return {
      route,
    }
  }
}
</script>
