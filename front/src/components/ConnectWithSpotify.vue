<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>
      1️⃣ Show me your favorite spotify tracks
      <br>
      2️⃣ Then I will show you more ... 🍑<br>
      <br>
      Connect<br>
      <br>
      ⬇️⬇️⬇️
    </p>
    <iframe
      v-if="getStoreToken.exists"
      src="https://giphy.com/embed/VIoXn1ZNsTidxeG9vX"
      width="350"
      height="350"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen>
    </iframe>
    <p v-if="getStoreToken.exists">Yay! you already are connected to Spotify</p>
    <a
      v-else
      :href="loginUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="button--green"
    >
      Connect with Spotify
    </a>
    <br>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'ConnectWithSpotify',
  props: {
    msg: String
  },
  setup() {
    const baseUrl = process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/'
      : 'https://spot2rave.herokuapp.com/' // process.env.VUE_APP_API_BASE_URL
    const loginUrl = `${baseUrl}api/spotify/login`
    console.log('loginUrl', loginUrl, '| process.env.NODE_ENV', process.env.NODE_ENV)
    const store = useStore()

    /* ------- computed */
    const getStoreToken = computed(function() {
      return store.state.accesToken
    })
    return { 
      loginUrl,
      store,
      getStoreToken
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
a {
  color: #42b983;
}
</style>
