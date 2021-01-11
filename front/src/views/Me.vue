<template>
  <div class="me">
    <div>
        <h1 class="title">spot2rave</h1>
        <p>{{ accesstoken.substr(0, 10) }}</p>
        <span v-if="isLoading"></span>
        <div v-else class="results">
            <div
            v-for="(top, index) in topTracks"
            :key="top.index"
            class="top flexRowCenter"
            :item="top"
            :index="index"
            >
            <!-- <p>{{ top.id }}</p> -->
            <p class="flexRowCenter index">{{ index + 1 }}</p>
            <img class="flexRowCenter image" :src="top.image" />
            <div class="flexColumnCenter name-artists">
            <p class="artists">{{ top.artists.join(', ') }}</p>
            <p class="name">{{ top.name }}</p>
            </div>
            <p class="flexRowCenter popularity">{{ top.popularity }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount, watch, computed, getCurrentInstance } from 'vue'
import SpotifyService from '@/service/SpotifyService'
import { useRoute, useRouter } from 'vue-router'

export default {
  props: ['accesstoken'],
  setup(props) {
    const isLoading = ref(true)
    const topTracks = ref([])
    // const route = useRoute()
    // console.log(route)
    // console.log('route.params', route.params)
    // console.log('typeof route.params', typeof route.params)
    onBeforeMount(async () => {
      console.log('onBeforeMount')
      if (props.accesstoken) {
        topTracks.value = await fetchTopTracks(props.accesstoken)
      }
      isLoading.value = false
    })
    async function fetchTopTracks(token) {
      // console.log('fetchTopTracks | token:', token)
      // const data = await SpotifyService.getTopTrack(token)
      const data = await SpotifyService.getMock()
      // console.log('data:', JSON.stringify(data))
      return data
    }
    return {
      isLoading,
      topTracks,
      // route,
      fetchTopTracks,
    }
  },
}
</script>

<style lang="scss" scoped>
.me {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 5rem;
  color: #35495e;
  letter-spacing: 1px;
  margin: 0px 0px 20px 0px;
}

.results {
  padding-top: 15px;
  width: 100vw;
}

/* --------------- */
p {
  margin: 0px;
  font-size: 0.7rem;
  font-weight: lighter;
}
.flexRowCenter {
  display: flex;
  justify-content: space-around;
  align-items: center;
  vertical-align: middle;
}
.flexColumnCenter {
  justify-content: left;
}
.top {
  margin: 10px 0px;
  padding: 10px;
  .index {
    width: 20px;
  }
  .image {
    width: 50px;
    margin-right: 5px;
  }
  .name-artists {
    width: 200px;
    text-align: left;
    .artists {
      font-weight: normal;
    }
    .name {
      font-weight: bold;
    }
  }
  .popularity {
    width: 50px;
  }
}
</style>
