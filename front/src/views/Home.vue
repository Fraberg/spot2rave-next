<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ConnectWithSpotify msg="Welcome to Spot2Rave"/>
    <p>{{ getStoreToken }}</p>
  </div>
</template>

<script>
import ConnectWithSpotify from '@/components/ConnectWithSpotify.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  components: {
    ConnectWithSpotify
  },
  setup(props) {
    const store = useStore()
    const getStoreToken = computed(function() {
      return store.state.accesToken
    })
    function setTokenInStore(token) {
      store.dispatch('setAccessToken', token)
    }
    return {
      store,
      getStoreToken,
      setTokenInStore,
    }
  },
}

</script>
