<template>
  <div class="playlist">
    <span v-if="isLoading">Loading</span>
    <div v-else class="results">
        <h1>{{ playlist.title }}</h1>
        <img class="image" :src="playlist.image_default" />
        <div class="name-artists-pop">
          <p class="artists">{{ playlist.itemCount }}</p>
          <p class="name">{{ playlist.channelTitle }}</p>
        </div>
    </div>
    <router-link :to="{ name: 'Google' }">Go back</router-link>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'

import useStoreHelper from '@/use/useStoreHelper'
import GoogleService from '@/service/GoogleService'

export default {
  props: ['id'],
  setup(props) {
    const isLoading = ref(true)
    const playlist = ref({})
    const router = useRouter()

    const { 
      store,
      //
      getStoreYoutubePlaylists,
    } = useStoreHelper()

    /* ------- vue hooks */
    onBeforeMount(async () => {
      console.log('Playlist | onBeforeMount')
      console.log('props:', props)
      console.log('props.id:', props.id)
      if (getStoreYoutubePlaylists.value.exists) {
        playlist.value = getPlaylist(props.id)
        isLoading.value = false
      } else {
        console.log('store has been reset, back to /')
        router.push('/')
      }
    })
    
    /* ------- functions */
    function getPlaylist(id) {
      console.log('getPlaylist id:', id)
      return getStoreYoutubePlaylists.value.value.find(p => p.id === id)
    }
    
    // router
    function goBack() {
      router.go(-1)
    }

    return {
      isLoading,
      playlist,
      router,
      
      store,
      getStoreYoutubePlaylists,
      getPlaylist,

      goBack,
    }
  },
}
</script>

<style lang="scss" scoped>
.playlist {
  min-width: 300px;
  width: auto;
  max-width: 600px;
  height: 100%;

  margin: auto;
  padding: 10px;
}
</style>
