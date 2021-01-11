<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> 
    <span> | </span>
    <router-link :to="{ name: 'About' }">About</router-link> 
    <span v-if="getStoreToken.exists"> | </span>
    <router-link v-if="getStoreToken.exists" :to="{ name: 'Me', params: { accesstoken: getStoreToken.value } }">Me</router-link>
    <span v-if="getStoreEventSuggestions.exists"> | </span>
    <router-link v-if="getStoreEventSuggestions.exists" :to="{ name: 'Events' }">Events</router-link>
  </div>
  <p style="text-align:left;">
    store<br>
    token:                   {{ getStoreToken.exists }} | {{ JSON.stringify(getStoreToken).substr(0, 100) }} ...<br>
    user.exists:             {{ getStoreUser.exists }} | {{ JSON.stringify(getStoreUser).substr(0, 100) }} ...<br>
    topTracks.exists:        {{ getStoreTopTracks.exists }} | {{ JSON.stringify(getStoreTopTracks).substr(0, 100) }} ...<br>
    eventSuggestions.exists: {{ getStoreEventSuggestions.exists }} | {{ JSON.stringify(getStoreEventSuggestions).substr(0, 100) }} ...<br>
  </p>
  <router-view />
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup(props) {
    const store = useStore()
    const getStoreToken = computed(function() {
      return store.state.accesToken
    })
    const getStoreUser = computed(function() {
      return store.state.user
    })
    const getStoreTopTracks = computed(function() {
      return store.state.topTracks
    })
    const getStoreEventSuggestions = computed(function() {
      return store.state.eventSuggestions
    })
    return {
      store,
      getStoreToken,
      getStoreUser,
      getStoreTopTracks,
      getStoreEventSuggestions,
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
