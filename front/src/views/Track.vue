<template>
  <h1>{{ track.name }}</h1>
  <div class="track">
    <span v-if="isLoading">Loading</span>
    <div v-else class="results">
        <!-- <p>props.id {{ track }}</p> -->
        <img class="image" :src="track.image_med" />
        <div class="name-artists-pop">
          <p class="artists">{{ track.artists.join(', ') }}</p>
          <p class="name">{{ track.name }}</p>
          <p class=" popularity">Popularité sur Spotify: {{ track.popularity }}/100</p>
        </div>
    </div>
    <router-link
        :to="{ name: 'Me', params: { accesstoken: getStoreToken.value } }"
    >
        Go back
    </router-link>
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
// import SpotifyService from '@/service/SpotifyService'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  props: ['id'],
  setup(props) {
    const isLoading = ref(true)
    const track = ref({})
    const router = useRouter()
    const store = useStore()

    /* ------- vue hooks */
    onBeforeMount(async () => {
      //   console.log('onBeforeMount')
      //   console.log('props:', props)
      if (getStoreTracks.value.exists) {
        track.value = getTrack(props.id)
        isLoading.value = false
      } else {
        console.log('store has been reset, back to /')
        router.push('/')
      }
    })
    
    /* ------- computed */
  const getStoreToken = computed(function() {
      return store.state.accesToken
    })
    const getStoreTracks = computed(function() {
      return store.state.topTracks
    })

    /* ------- functions */
    function getTrack(id) {
      return getStoreTracks.value.find(t => t.id === props.id)
    }
    
    // router
    function goBack() {
      router.go(-1)
    }

    return {
        isLoading,
        track,
        router,
        store,

        getStoreToken,
        getStoreTracks,

        goBack,
    }
  },
}
</script>

<style lang="scss" scoped>
.track {
  margin: 0;
  min-width: 300px;
  width: auto;
  max-width: 600px;
  height: 100%;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
