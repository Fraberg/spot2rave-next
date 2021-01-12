<template>
  <div id="store">
    <p><b>Vuex store</b><br></p>
    <p class="state">
      - token: {{ displayStoreToken() }} <br>
      - user: {{ displayStoreUser() }} <br>
      - topTracks: {{ displayStoreTopTracks() }} <br>
      - eventSuggestions: {{ displayStoreEventSuggestions() }} <br>
    </p>
  </div>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> 
    <span> | </span>
    <router-link :to="{ name: 'About' }">About</router-link> 
    <span v-if="getStoreToken.exists"> | </span>
    <router-link v-if="getStoreToken.exists" :to="{ name: 'Me', params: { accesstoken: getStoreToken.value } }">Me</router-link>
    <span v-if="getStoreEventSuggestions.exists"> | </span>
    <router-link v-if="getStoreEventSuggestions.exists" :to="{ name: 'Events' }">Events</router-link>
  </div>
  <router-view />
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup(props) {
    const store = useStore()

    // computed
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
    
    // function 
    function displayStoreToken() {
      if (getStoreToken.value.exists) {
        return `${getStoreToken.value.value.substr(0, 30)} [...]`
      } else {
        return 'connect w/ spotify'
      }
    }
    function displayStoreUser() {
      if (getStoreUser.value.exists) {
        return `${JSON.stringify(getStoreUser.value).substr(0, 30)} [...]`
      } else {
        return 'connect w/ spotify'
      }
    }
    function displayStoreTopTracks() {
      if (getStoreTopTracks.value.exists) {
        return `${JSON.stringify(getStoreTopTracks.value.map(t => t.name)).substr(0, 30)} [...]`
      } else {
        return 'connect w/ spotify'
      }
    }
    function displayStoreEventSuggestions() {
      if (getStoreEventSuggestions.value.exists) {
        return getStoreEventSuggestions.value
      } else {
        return 'connect w/ spotify'
      }
    }
    return {
      store,

      getStoreToken,
      getStoreUser,
      getStoreTopTracks,
      getStoreEventSuggestions,

      displayStoreToken,
      displayStoreUser,
      displayStoreTopTracks,
      displayStoreEventSuggestions,
    }
  }
}
</script>

<style lang="scss">
html {
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
}

body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
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

#app {
  margin: 0px;
  padding: 0px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;
  
  direction:ltr;
  scrollbar-color: #333333 white;
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

#store {
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: white;
  padding: 10px 0px;
  // border-top: 1px solid #f6f6f6;
  box-shadow: 20px 0 20px 0 rgba(0, 0, 0, 0.25);

  .state {
    text-align: left;
    margin-left: 50px;
  }
}
</style>
