<template>
  <h1>{{ artist.name }}</h1>
  <div class="artist-show">
    <span v-if="isLoading">Loading</span>
    <div v-else class="artist-card">
        <!-- <p>props.id {{ artist }}</p> -->
        <img class="image" :src="artist.image_med" />
        <div class="genres-pop">
          <p class="genres">{{ artist.genres ? artist.genres.join(', ') : '' }}</p>
          <p class="followers">Followers: {{ artist.followers.total }}</p>
          <p class="popularity">Popularité actuelle sur Spotify: {{ artist.popularity }}/100</p>
        </div>
    </div>
    <router-link :to="{ name: 'Me', params: { accesstoken: getStoreToken.value } }">Go back</router-link>
    <br>
    <br>
    <br>
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
    const artist = ref({})
    const router = useRouter()
    const store = useStore()

    /* ------- vue hooks */
    onBeforeMount(async () => {
      //   console.log('onBeforeMount')
      //   console.log('props:', props)
      if (getStoreArtists.value.exists) {
        artist.value = getArtist(props.id)
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
    const getStoreArtists = computed(function() {
      return store.state.topArtists
    })

    /* ------- functions */
    function getArtist(id) {
      return getStoreArtists.value.find(t => t.id === props.id)
    }
    
    // router
    function goBack() {
      router.go(-1)
    }

    return {
        isLoading,
        artist,
        router,
        store,

        getStoreToken,
        getStoreArtists,

        goBack,
    }
  },
}
</script>

<style lang="scss" scoped>
.artist-show {
  margin: auto;
  min-width: 300px;
  width: auto;
  max-width: 600px;
  height: 100%;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
p {
    margin: 0px;
}
.artist-card {
    width: 100%;
    // display: flex;
    // justify-content: left;
    // align-items: center;
    // vertical-align: middle;
    margin: 10px;
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
}
</style>
