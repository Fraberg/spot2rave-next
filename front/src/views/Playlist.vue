<template>
  <div class="playlist">
    <router-link :to="{ name: 'Google' }">Go back</router-link>

    <span v-if="isLoading">Loading</span>
    <div v-else class="results">
        
        <h1>{{ playlist.title }}</h1>
        <img class="image" :src="playlist.image_default" />
        <div class="name-artists-pop">
          <p class="artists">{{ playlist.itemCount }}</p>
          <p class="name">{{ playlist.publishedAt }}</p>
        </div>

        <!-- {{ getStorePlaylistItems }} -->
        <div 
          v-for="(item, index) in getStorePlaylistItems.value"
          :key="item.id"
          class="card"
          :item="item"
          :index="index"
        >
            <p class="index">{{ item.position + 1 }}</p>
            <img class="image" :src="item.image_default" />
            <div class="name-artists-pop">
              <p class="name">{{ item.title }}</p>
              <p class="artists">{{ item.description }} Item(s)</p>
              <p class="popularity">User: {{ item.publishedAt }}</p>
            </div>
        </div>

    </div>
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
    const refId = ref(props.id)
    const playlist = ref({})
    const router = useRouter()
    const { 
      store,
      getStoreGoogleToken,
      getStoreYoutubePlaylists,
      getStorePlaylistItems,
    } = useStoreHelper()

    /* ------- vue hooks */
    onBeforeMount(async () => {
      console.log('Playlist | onBeforeMount')
      console.log('props', props)
      if (getStoreYoutubePlaylists.value.exists) {
        playlist.value = getPlaylist(props.id)
        console.log('playlist.value', playlist.value)
        const token = getStoreGoogleToken.value.value.access_token
        const items = await fetchPlaylistItems(token, props.id)
        console.log('items', items)
        store.dispatch('google/setYoutubePlaylistItems', items)
        isLoading.value = false
      } else {
        console.log('store has been reset, back to /')
        router.push('/')
      }
    })
    
    /* ------- functions */
    function getPlaylist(id) {
      console.log('getPlaylist id:', id)

      console.log('store.state.google.playlists:', store.state.google.playlists.value)

      console.log('getStoreYoutubePlaylists.value.value:', getStoreYoutubePlaylists.value.value)
      
      return getStoreYoutubePlaylists.value.value.find(p => p.id === id)
    }
    
    // fetch
    async function fetchPlaylistItems(token, playlistId) {
      const data = process.env.NODE_ENV === 'development'
      ? await GoogleService.getMockPlaylistItems(token, playlistId)
      : await GoogleService.getPlaylistItems(token, playlistId)
      return data
    }

    // router
    function goBack() {
      router.go(-1)
    }

    return {
      isLoading,
      refId,
      playlist,
      router,
      
      store,
      getStoreGoogleToken,
      getStoreYoutubePlaylists,
      getStorePlaylistItems,

      getPlaylist,
      fetchPlaylistItems,

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
