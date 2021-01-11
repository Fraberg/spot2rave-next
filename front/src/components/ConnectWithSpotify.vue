<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a
      :href="loginUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="button--green"
    >
      Connect with Spotify
    </a>
    <p>
      Find your favorite artists next concerts,<br>
      <router-link to="/about">check out who we are</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ConnectWithSpotify',
  props: {
    msg: String
  },
  setup() {
    console.log('process.env.BASE_URL', process.env.VUE_APP_API_BASE_URL)
    const loginUrl = `${process.env.VUE_APP_API_BASE_URL}api/spotify/login`
    // console.log('loginUrl:', loginUrl)
    return { loginUrl }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
</style>
