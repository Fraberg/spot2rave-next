<template>
  <div class="me">
    <h1 class="title">{{ getStoreUser.display_name }}</h1>
    <!-- <p>props.accesstoken {{ accesstoken.substr(0, 10) }}</p> -->
    <!-- <p>store.state.accesstoken {{ getStoreToken.substr(0, 10) }}</p> -->
    <span v-if="isLoading">Loading</span>
    <div v-else class="results">
        <div
        v-for="(track, index) in getStoreTopTracks"
        :key="track.index"
        class="track "
        :item="track"
        :index="index"
        >
        <!-- <p>{{ track.id }}</p> -->
        <p class=" index">{{ index + 1 }}</p>
        <img class=" image" :src="track.image" />
        <div class="name-artists-pop">
          <p class="artists">{{ track.artists.join(', ') }}</p>
          <p class="name">{{ track.name }}</p>
          <p class=" popularity">Popularité sur Spotify: {{ track.popularity }}/100</p>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import SpotifyService from '@/service/SpotifyService'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  props: ['accesstoken'],
  setup(props) {
    const isLoading = ref(true)
    const topTracks = ref([])
    const store = useStore()

    /* ------- vue hooks */
    onBeforeMount(async () => {
      // console.log('onBeforeMount')
      if (props.accesstoken && !store.state.accesToken.exists) {
        setTokenInStore(props.accesstoken)
        // Top Tracks
        topTracks.value = await fetchTopTracks(props.accesstoken)
        setTopTracksInStore(topTracks.value)
        // User
        const user = await fetchUser(props.accesstoken)
        setUserInStore(user)
      } else {
        console.log('nothing to update')
      }
      isLoading.value = false
    })
    
    /* ------- computed */
    const getStoreToken = computed(function() {
      return store.state.accesToken
    })
    const getStoreTopTracks = computed(function() {
      return store.state.topTracks
    })
    const getStoreUser = computed(function() {
      return store.state.user
    })

    /* ------- functions */
    // fetch
    async function fetchTopTracks(token) {
      // console.log('fetchTopTracks | token:', token)
      // const data = await SpotifyService.getTopTrack(token)
      const data = await SpotifyService.getMockTopTrack()
      // console.log('data:', JSON.stringify(data))
      return data
    }
    async function fetchUser(token) {
      // console.log('fetchTopTracks | token:', token)
      // const data = await SpotifyService.getUser(token)
      const data = await SpotifyService.getMockUser()
      // console.log('data:', JSON.stringify(data))
      return data
    }
    // setters
    function setTokenInStore(token) {
      store.dispatch('setAccessToken', token)
    }
    function setUserInStore(user) {
      store.dispatch('setUserInStore', user)
    }
    function setTopTracksInStore(topTracks) {
      store.dispatch('setTopTrackInStore', topTracks)
    }
    return {
      isLoading,
      topTracks,
      store,

      getStoreToken,
      getStoreTopTracks,
      getStoreUser,

      fetchTopTracks,
      fetchUser,

      setTokenInStore,
      setUserInStore,
      setTopTracksInStore,
    }
  },
}
</script>

<style lang="scss" scoped>
.me {
  margin: 0;
  min-width: 350px;
  width: auto;
  max-width: 600px;
  height: 100%;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

/* --------------- */

.title {
  width: 100%;
  height: auto;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 5rem;
  color: #35495e;
  letter-spacing: 1px;
  margin: 0px 0px 20px 0px;
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

  .track {
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
      width: 0 0 auto;
      min-width: 30px;
    }
    .image {
      width: 0 0 auto;
      min-width: 100px;
      margin-right: 10px;
      border-radius: 4px;
    }
    .name-artists-pop {
      width: 0 0 1;
      height: 100%;
      text-align: left;
      // display: flex;
      // flex-direction: column;
      // justify-content: space-between;
      // align-items: baseline;

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
  }
}

</style>
