<template>
  <div class="playlist">
    <router-link :to="{ name: 'Google' }">Go back</router-link>

    <span v-if="isLoading">Loading</span>
    <div v-else class="results">
        
        <h1>{{ playlist.title }}</h1>
        <img class="image" :src="playlist.image_default" />
        <div class="name-artists-pop">
          <p class="artists">{{ playlist.itemCount }} items</p>
        </div>

        <div 
          v-for="(item, index) in getStorePlaylistItems.value[refId]"
          :key="item.id"
          class="card"
          :item="item"
          :index="index"
        >
            <p class="index">{{ item.position + 1 }}</p>
            <img class="image" :src="item.image_default" />
            <div class="name-artists-pop">
              <p class="name">{{ item.title.substr(0, 40) }}</p>
              <p class="artists">Description: {{ item.description.substr(0, 40) }} [...]</p>
              <!-- <p class="popularity">Date: {{ item.publishedAt }}</p> -->
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
        const playlistId = props.id
        store.dispatch('google/setYoutubePlaylistItems', { playlistId, items })
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
    
    // fetch
    async function fetchPlaylistItems(token, playlistId) {
      const data = process.env.NODE_ENV === 'development'
      ? await GoogleService.getPlaylistItems(token, playlistId)
      : await GoogleService.getPlaylistItems(token, playlistId)
      // ? await GoogleService.getMockPlaylistItems(token, playlistId)
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
</style>
