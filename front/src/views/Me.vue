<template>
  <p class="nice">Nice to meet you,</p>
  <h1 class="name">{{ getStoreUser.value.display_name }},</h1>

  <p class="info">Here is you <span class="green bold">top {{ showTracks ? getStoreTopTracks.value.length : getStoreTopArtists.value.length }} spotify</span> {{ showTracks ? 'tracks 🎵' : 'artists 👨‍🎤' }}</p>
  <p class="info">⬇️</p>
  
  <div v-if="showTracks" class="me">
    <span v-if="isLoading">Loading</span>
    <iframe v-if="isLoading" src="https://giphy.com/embed/l3nWhI38IWDofyDrW" width="350" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <!-- <iframe src="https://giphy.com/embed/bMdZu3fG2ZEBO" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/abcnetwork-angry-upset-bMdZu3fG2ZEBO">via GIPHY</a></p> -->
    <div v-else class="results">
        <div
        v-for="(track, index) in getStoreTopTracks.value"
        :key="track.id"
        class="card"
        :item="track"
        :index="index"
        @click="goToTrack(track.id)"
        >
        <p class="index">{{ index + 1 }}</p>
        <img class="image" :src="track.image_low" />
        <div class="name-artists-pop">
          <p class="artists">{{ track.artists.join(', ') }}</p>
          <p class="name">{{ track.name }}</p>
          <p class="popularity">Spotify popularity: {{ track.popularity }}/100</p>
        </div>
      </div>
    </div>
  </div>

  <div v-if="!showTracks" class="me">
    <span v-if="isLoading">Loading</span>
    <div v-else class="results">
        <div
        v-for="(artist, index) in getStoreTopArtists.value"
        :key="artist.id"
        class="card"
        :item="artist"
        :index="index"
        @click="goToArtist(artist.id)"
      >
        <p class="index">{{ index + 1 }}</p>
        <img class="image" :src="artist.image_low" />
        <div class="name-artists-pop">
          <p class="name">{{ artist.name }}</p>
          <p class="followers">{{ artist.followersNumeral }} followers</p>
          <p class="popularity">Spotify popularity: {{ artist.popularity }}/100</p>
        </div>
      </div>
    </div>
  </div>

  <br>
  <br>
  <button class="button--green toggleTop" @click="showTracks = !showTracks"><b>👉 See my top {{ showTracks ? 'artists' : 'tracks' }} 👈</b><br></button>

  
</template>

<script>
import numeral from 'numeral'

import { ref, onBeforeMount, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import useStoreHelper from '@/use/useStoreHelper'
import SpotifyService from '@/service/SpotifyService'

export default {
  props: ['accesstoken'],
  setup(props) {
    const isLoading = ref(true)
    const showTracks = ref(false)
    const topTracks = ref([])
    const topArtists = ref([])
    const route = useRoute()
    const router = useRouter()
    const { 
      store,
      
      getStoreToken,
      getStoreUser,
      getStoreTopTracks,
      getStoreTopArtists,

      setStoreToken,
      setStoreUser,
      setStoreTopTracks,
      setStoreTopArtists,
    } = useStoreHelper()

    /* ------- vue hooks */
    onBeforeMount(async () => {
      console.log('Me | onBeforeMount')
      // console.log('props', props)
      // console.log('route.query', route.query)
      // console.log('route.params', route.params)
      if (props.accesstoken && !store.state.spotify.accesToken.exists) {
        setStoreToken(props.accesstoken)
        // User
        const user = await fetchUser(props.accesstoken)
        setStoreUser(user)
        // Top Tracks
        topTracks.value = await fetchTopTracks(props.accesstoken)
        setStoreTopTracks(topTracks.value)
        // Top Artists
        topArtists.value = await fetchTopArtists(props.accesstoken)
        topArtists.value = topArtists.value.map(a => ({
          followersNumeral: numeral(a.followers.total).format('Oa'),
          ...a,
        }))
        setStoreTopArtists(topArtists.value)
      } else {
        console.log('nothing to update')
      }
      isLoading.value = false
    })
    
    /* ------- computed */
    // see useStoreHelpers.js

    /* ------- functions */
    // fetch
    async function fetchUser(token) {
      // console.log('fetchTopTracks | token:', token)
      const data = process.env.NODE_ENV === 'development'
      ? await SpotifyService.getMockUser()
      : await SpotifyService.getUser(token)
      return data
    }
    async function fetchTopTracks(token) {
      // console.log('fetchTopTracks | token:', token)
      const data = process.env.NODE_ENV === 'development'
      ? await SpotifyService.getMockTopTracks()
      : await SpotifyService.getTopTrack(token)
      return data
    }
    async function fetchTopArtists(token) {
      // console.log('fetchTopTracks | token:', token)
      const data = process.env.NODE_ENV === 'development'
      ? await SpotifyService.getMockTopArtists()
      : await SpotifyService.getTopArtists(token)
      return data
    }

    /* ------- store setters */
    // see useStoreHelpers.js

    // router
    function goToTrack(id) {
      router.push(`/me/track/${id}`)
    }
    function goToArtist(id) {
      router.push(`/me/artist/${id}`)
    }

    return {
      isLoading,
      showTracks,
      topTracks,
      route,
      router,

      store,

      getStoreToken,
      getStoreUser,
      getStoreTopTracks,
      getStoreTopArtists,

      fetchUser,
      fetchTopTracks,
      fetchTopArtists,

      setStoreToken,
      setStoreUser,
      setStoreTopTracks,
      setStoreTopArtists,

      goToTrack,
      goToArtist,
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
    background-color: #42b983;
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
