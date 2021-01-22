<template>
  
  <div id="store" @click="appStateDisplay = !appStateDisplay">
    <p><b>toggle vuex store, for ppl who 👨‍💻</b></p>
    <span v-if="appStateDisplay">
      <br>
      <p class="state">
        - sp token: 🔑 <span class="value">{{ store.state.spotify.accesToken.value.substr(0, 25) }}</span> <br>
        - sp user: <span class="value">{{ displayStoreUser() }}</span> <br>
        - sp topTracks: <span class="value">{{ displayStoreTopTracks() }}</span> <br>
        - sp topArtists: <span class="value">{{ displayStoreTopArtists() }}</span> <br>
        - ym token: 🔑 <span class="value">{{ displayStoreGoogleToken() }}</span> <br>
        - tm events: <span class="value">{{ displayStoreEventSuggestions() }}</span> <br>
        <br>
      </p>
      <a class="state" href="https://vuex.vuejs.org/api/">WTF is vuex?</a>
      <!-- <br> -->
      <a class="state" href="https://www.linkedin.com/in/francis-berger-a2404094/">any feedback? plzz tell me</a>
      </span>
  </div>

  <div id="nav">
    <router-link :to="{ name: 'Home' }"> 🏠 Home </router-link> 
    <span v-if="getStoreToken.exists">
      <router-link :to="{ name: 'Me', params: { accesstoken: getStoreToken.value } }"> | 😎 Me </router-link>
      <router-link  :to="{ name: 'Events' }"> | 📅 Events </router-link>
      <router-link :to="{ name: 'More' }"> | 🍑 More </router-link>      
    </span>
    <span v-if="getStoreGoogleToken.exists">
      <router-link :to="{ name: 'Google' }"> | 😎 Gg </router-link>
      <router-link  :to="{ name: 'Events' }"> | 📅 Events </router-link>
      <router-link :to="{ name: 'More' }"> | 🍑 More </router-link>      
    </span>
  </div>
  
  <router-view />

</template>

<script>
import { ref, computed } from 'vue'

import useStoreHelper from '@/use/useStoreHelper'

export default {
  setup() {
    const appStateDisplay = ref(false)
    const { 
      store,
      getStoreToken,
      getStoreUser,
      getStoreTopTracks,
      getStoreTopArtists,
      getStoreGoogleToken,
      getStoreEvents,
    } = useStoreHelper()
    
    // function 
    function displayStoreUser() {
      if (getStoreUser.value.exists) {
        return `${JSON.stringify(getStoreUser.value).substr(0, 25)} [...]`
      }
      return 'connect w/ spotify'
    }
    function displayStoreTopTracks() {
      if (getStoreTopTracks.value.exists) {
        return `${JSON.stringify(getStoreTopTracks.value.map(t => t.name)).substr(0, 25)} [...]`
      }
      return 'connect w/ spotify'
    }
    function displayStoreTopArtists() {
      if (getStoreTopArtists.value.exists) {
        return `${JSON.stringify(getStoreTopArtists.value.map(a => a.name)).substr(0, 25)} [...]`
      }
      return 'connect w/ spotify'
    }
    //
    function displayStoreGoogleToken() {
      if (getStoreGoogleToken.exists) {
        return `${JSON.stringify(getStoreGoogleToken.value).substr(0, 25)} [...]`
      }
      return 'connect w/ youtube music'
    }
    //
    function displayStoreEventSuggestions() {
      if (getStoreEvents.value.exists) {
        return `${JSON.stringify(getStoreEvents.value).substr(0, 25)} [...]`
      }
      return 'feature not implemented'
    }
    return {
      appStateDisplay,

      store,
      getStoreToken,
      getStoreUser,
      getStoreTopTracks,
      getStoreTopArtists,
      getStoreGoogleToken,
      getStoreEvents,

      // displayStoreToken,
      displayStoreUser,
      displayStoreTopTracks,
      //
      displayStoreGoogleToken,
      //
      displayStoreTopArtists,
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

.allButFooter {
    height: calc(100vh - 400px);
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #57616b;
    &.router-link-exact-active {
      color: #42b983;
    }
    text-decoration: none;
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
  font-weight: bold;
  background: white;
  display: inline-block;
  border-radius: 40px;
  border: 3px solid #42b983;
  color: #fff;
  background-color: #42b983;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #42b983;
  background-color: #fff;
}

.button--red {
  font-weight: bold;
  background: white;
  display: inline-block;
  border-radius: 40px;
  border: 3px solid #c20000;
  color: #fff;
  background-color: #c20000;
  text-decoration: none;
  padding: 10px 30px;
}

.button--red:hover {
  color: #c20000;
  background-color: #fff;
}

button:focus {
  outline:0;
}

#store {
  position: sticky;
  bottom: 0;
  width: 100%;
  padding: 10px 0px;
  // border-top: 1px solid #f6f6f6;
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);

  p {
    font-weight: bold;
    margin: 0px;
  }
  .state {
    text-align: left;
    margin-left: 20px;
    font-size: 0.8rem;
    color: #42b983;
  }
  .value {
    font-weight: lighter;
    font-style: italic;
    color: #2c3e50;
  }
}

.green {
  color: #42b983;
}
.bold {
  font-weight: bold;
}
</style>
