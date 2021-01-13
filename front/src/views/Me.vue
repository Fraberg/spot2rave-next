<template>
  <p class="nice">Nice to meet you,</p>
  <h1 class="name">{{ getStoreUser.display_name }},</h1>
  <p class="info">⬇️ Here are you top spotify tracks ⬇️</p>
  <div class="me">
    <!-- <p>props.accesstoken {{ accesstoken.substr(0, 10) }}</p> -->
    <!-- <p>store.state.accesstoken {{ getStoreToken.substr(0, 10) }}</p> -->
    <span v-if="isLoading">Loading</span>
    <div v-else class="results">
        <div
        v-for="(track, index) in getStoreTopTracks"
        :key="track.id"
        class="track "
        :item="track"
        :index="index"
        @click="goToTrack(track.id)"
        >
        <p class=" index">{{ index + 1 }}</p>
        <img class="image" :src="track.image_low" />
        <div class="name-artists-pop">
          <p class="artists">{{ track.artists.join(', ') }}</p>
          <p class="name">{{ track.name }}</p>
          <p class=" popularity">Popularité sur Spotify: {{ track.popularity }}/100</p>
        </div>
        <!-- <router-link
          class="trackvue"
          :to="{ name: 'Track', params: { id: track.id } }"
        >
          1 event
        </router-link> -->
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
    const router = useRouter()

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
    // router
    function goToTrack(id) {
      router.push(`/me/track/${id}`)
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

      goToTrack,
    }
  },
}
</script>

<style lang="scss" scoped>
.me {
  min-width: 300px;
  width: auto;
  max-width: 600px;
  height: 100%;

  margin: auto;
  padding: 10px;
}

/* --------------- */

// .intro {
  .nice, .info {
    margin: 0px;
    font-weight: lighter;
    font-size: 0.7rem;
  }
  .name {
    margin: 0px;
  }
// }

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
      flex: 0 0 40px;
      min-width: 30px;
    }
    .image {
      flex: 0 0 auto;
      min-width: 100px;
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
    transition: background-color 200ms linear;
  }
  .track:hover {
    background-color: #42b983;
    color: white;
  }
}

</style>
