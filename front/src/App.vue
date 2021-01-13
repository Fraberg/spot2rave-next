<template>
  <div id="store">
    <button @click="appStateDisplay = !appStateDisplay"><b>Toggle vuex state</b><br></button>
    <span v-if="appStateDisplay" >
      <p class="state">
        - token: <span class="value">{{ displayStoreToken() }}</span> <br>
        - user: <span class="value">{{ displayStoreUser() }}</span> <br>
        - topTracks: <span class="value">{{ displayStoreTopTracks() }}</span> <br>
        - eventSuggestions: <span class="value">{{ displayStoreEventSuggestions() }}</span> <br>
        <br>
      </p>
      <a class="state" href="https://vuex.vuejs.org/api/">vuex doc</a>
      <!-- <br> -->
      <a class="state" href="https://www.linkedin.com/in/francis-berger-a2404094/">contact me</a>
      </span>
  </div>
  <div id="nav">
    <router-link
      :to="{ name: 'Home' }"
    >
      🏠      Home
    </router-link> 
    <!-- <span> | </span>
    <router-link :to="{ name: 'About' }">About</router-link>  -->
    <span v-if="getStoreToken.exists"> | </span>
    <router-link 
      v-if="getStoreToken.exists"
      :to="{ name: 'Me', params: { accesstoken: getStoreToken.value } }"
    >
      🕺 Me     
    </router-link>
    <span v-if="getStoreToken.exists"> | 🍇 </span>
    <router-link 
      v-if="getStoreToken.exists"
      :to="{ name: 'More' }"
    >
      More
    </router-link>
    <span v-if="getStoreEventSuggestions.exists"> | </span>
    <router-link v-if="getStoreEventSuggestions.exists" :to="{ name: 'Events' }">Events</router-link>
  </div>
  <router-view />
</template>

<script>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'

export default {
  setup(props) {
    const store = useStore()
    const appStateDisplay = ref(false)

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
        return `${getStoreToken.value.value.substr(0, 25)} [...]`
      } else {
        return 'connect w/ spotify'
      }
    }
    function displayStoreUser() {
      if (getStoreUser.value.exists) {
        return `${JSON.stringify(getStoreUser.value).substr(0, 25)} [...]`
      } else {
        return 'connect w/ spotify'
      }
    }
    function displayStoreTopTracks() {
      if (getStoreTopTracks.value.exists) {
        return `${JSON.stringify(getStoreTopTracks.value.map(t => t.name)).substr(0, 25)} [...]`
      } else {
        return 'connect w/ spotify'
      }
    }
    function displayStoreEventSuggestions() {
      if (getStoreEventSuggestions.value.exists) {
        return getStoreEventSuggestions.value
      } else {
        return 'feature not implemented'
      }
    }
    return {
      store,
      appStateDisplay,

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
  display: inline-block;
  border-radius: 40px;
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
  padding: 10px 0px;
  // border-top: 1px solid #f6f6f6;
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);

  button {
    // padding: 0.5rem 1.75rem 0.50rem 1.75rem;
    background: white;
    border: none;
    font-weight: bold;
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
</style>
