<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>Explore your favorite artists concerts<br></p>
    <a
      :href="loginUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="button--green"
    >
      Connect with Spotify
    </a>
    <!-- <p>
      <router-link to="/about">check out who we are</router-link>
    </p> -->
  </div>
</template>

<script>
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
    // console.log('loginUrl:', loginUrl)
    return { loginUrl }
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
