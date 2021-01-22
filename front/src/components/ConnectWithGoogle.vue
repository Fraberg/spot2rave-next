<template>
  <div class="home">
    <a
      :href="loginUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="button--red"
    >
      Connect with Youtube Music
    </a>
    <br>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
// import { useStore } from 'vuex'

export default {
  name: 'ConnectWithSpotify',
  setup() {
    const baseUrl = process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/'
      : 'https://spotitops.herokuapp.com/' // process.env.VUE_APP_API_BASE_URL
    const loginUrl = `${baseUrl}api/google/login`
    console.log('loginUrl', loginUrl, '| process.env.NODE_ENV', process.env.NODE_ENV)
    // const store = useStore()

    /* ------- computed */
    // const getStoreToken = computed(function() {
    //   return store.state.accesToken
    // })
    return { 
      loginUrl,
      // store,
      // getStoreToken
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  height: 100%;
}
h3 {
  margin: 40px 0 0;
}
</style>
