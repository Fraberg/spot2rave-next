<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <ConnectWithSpotify msg="Welcome to Spot2Rave"/>
  </div>
</template>

<script>
import ConnectWithSpotify from '@/components/ConnectWithSpotify.vue'

export default {
  name: 'Home',
  components: {
    ConnectWithSpotify
  },
}
</script>
