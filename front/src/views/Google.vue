<template>
    <p class="nice">Nice to meet you,</p>
  <h1 class="name">[insert username],</h1>

  <p class="info">⬇️ Here is a list of your playlists on youtube ️⬇️</p>
  
  <div class="google">
    <!-- <span v-if="isLoading">Loading</span> -->
    <iframe v-if="isLoading" src="https://giphy.com/embed/l3nWhI38IWDofyDrW" width="350" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    
    <div v-else class="results">
        <div
        v-for="(playlist, index) in getStoreYoutubePlaylists"
        :key="playlist.id"
        class="card"
        :item="playlist"
        :index="index"
        @click="goToTrack(playlist.id)"
        >
        <p class="index">{{ index + 1 }}</p>
        <img class="image" :src="playlist.image_default" />
        <div class="name-artists-pop">
          <p class="name">{{ playlist.title }}</p>
          <p class="artists">{{ playlist.itemCount }} Item(s)</p>
          <p class="popularity">id: {{ playlist.id }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
const queryString = require('query-string')

import { ref, onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'

import useStoreHelper from '@/use/useStoreHelper'
import GoogleService from '@/service/GoogleService'

export default {
  setup(_) {
    const isLoading = ref(true)

    const { 
      store,
      //
      getStoreGoogleToken,
      getStoreYoutubePlaylists,
      //
      setStoreGoogleToken,
    } = useStoreHelper()

    /* ------- vue hooks */
    onBeforeMount(async () => {
      console.log('Google | onBeforeMount')
      // hash.value = queryString.parse(window.location.hash)
      if (!store.state.google.token.exists) {
        const hash = queryString.parse(window.location.hash)
        const token = hash['access_token']
        if (token && !store.state.google.token.exists) {
          store.dispatch('google/setGoogleToken', hash)
          store.dispatch('google/setYoutubePlaylists', await fetchUserPlaylist(token))
        } else {
          console.log('nothing to update')
        }
      }
      isLoading.value = false
    })

    // fetch
    async function fetchUserPlaylist(token) {
      // console.log('fetchPlaylist | token:', token)
      const data = process.env.NODE_ENV === 'development'
      ? await GoogleService.getMockUserPlaylists(token)
      : await GoogleService.getUserPlaylists(token)
      return data
    }

    return {
      isLoading,

      store,
      getStoreGoogleToken,
      getStoreYoutubePlaylists,
      //
      setStoreGoogleToken,
    }
  },
}
</script>

<style lang="scss" scoped>

.google {
  min-width: 300px;
  width: auto;
  max-width: 600px;
  height: 100%;

  margin: auto;
  padding: 10px;
}

/* --------------- */

.nice, .info {
  margin: 0px;
  font-weight: lighter;
  font-size: 0.7rem;
}
.name {
  margin: 0px;
}

.results {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    margin: 0px;
  }

  .card {
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    vertical-align: middle;
    margin: 10px 0px;
    padding: 15px 0px;
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);

    .index {
      flex: 0 0 40px;
      min-width: 30px;
    }
    .image {
      flex: 0 0 auto;
      width: 100px;
      margin-right: 15px;
      border-radius: 4px;
    }
    .name-artists-pop {
      flex: 1;
      height: 100px;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: baseline;

      .artists {
        font-size: 1rem;
        font-weight: normal;
      }
      .name {
        font-size: 1rem;
        font-weight: bold;
      }
      .popularity {
        font-size: 0.7rem;
        font-weight: lighter;
      }
    }
    .trackvue {
      padding: 10px;
      flex: 0 0 60px;
    }
    transition-delay: 10ms;
    transition: background-color 150ms linear;
  }
  .card:hover {
    background-color: #c20000;
    color: white;
  }
}

.toggleTop {
  width: 270px;
  position: sticky;
  bottom: 30px;
  font-size: 1rem;
}

</style>
