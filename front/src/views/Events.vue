<template>
  <p class="nice">Just for you,</p>
  <h1 class="name">{{ getStoreUser.display_name }},</h1>
  <p class="info">⬇️ Here are some upcoming events related to your favorite artists ⬇️</p>
  <div class="events">
    <span v-if="isLoading">Work in progress</span>
    <div v-else class="results">
        <div
        v-for="(event, index) in getStoreEvents"
        :key="event.id"
        class="event"
        :item="event"
        :index="index"
        @click="goToArtist(event.id)"
      >
        <p class="index">{{ index + 1 }}</p>
        <img class="image" :src="event.image_low" />
        <div class="name-events-pop">
          <p class="name">{{ event.name }}</p>
          <!-- <p class="events">{{ event.events.join(', ') }}</p> -->
          <p class="popularity">Popularité actuelle sur Spotify: {{ event.popularity }}/100</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import useStoreHelper from '@/use/useStoreHelper'
import TicketMasterService from '@/service/TicketMasterService'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup(props) {
    const isLoading = ref(true)
    const topTracksArtistsByTM = ref([])
    const events = ref([])
    const router = useRouter()
    
    const { 
      store,
      
      getStoreToken,
      getStoreUser,
      getStoreTopTracks,
      getStoreTopArtists,
      getStoreTopTracksArtistsByTM,
      getStoreEvents,

      setStoreToken,
      setStoreUser,
      setStoreTopTracks,
      setStoreTopArtists,
      setStoreTopTracksArtistsByTM,
      setStoreEvents,
    } = useStoreHelper()

    /* ------- vue hooks */
    onBeforeMount(async () => {
      // console.log('onBeforeMount')
      if (!store.state.events.exists) {
        // topTracksArtistsByTM.value = await fetchArtistsByTM()
        // setStoreTopTracksArtistsByTM(topTracksArtistsByTM.value)
        
        // events.value = await fetchEventsByTM(topTracksArtistsByTM.value.id)
        // setStoreEvents(events.value)
      } else {
        console.log('nothing to update')
      }
      // isLoading.value = false
    })
    
    /* ------- computed */
    // see useStoreHelpers.js

    /* ------- functions */
    // fetch
    async function fetchArtistsByTM() {
      console.log('fetchArtistsByTM')
      // const data = await TicketMasterService.getArtists()
      const data = await TicketMasterService.getMockArtists()
      // console.log('data:', JSON.stringify(data))
      return data
    }
    async function fetchEventsByTM(artistId) {
      console.log('fetchEventsByTM')
      // const data = await TicketMasterService.getEvents(artistId)
      const data = await TicketMasterService.getMockEvents(artistId)
      // console.log('data:', JSON.stringify(data))
      return data
    }

    /* ------- store setters */
    // see useStoreHelpers.js

     /* ------- router */
    function goToArtist(id) {
      router.push(`/me/artist/${id}`)
    }

    return {
      isLoading,
      events,
      store,

      getStoreToken,
      getStoreUser,
      getStoreTopTracks,
      getStoreTopArtists,
      getStoreTopTracksArtistsByTM,
      getStoreEvents,

      fetchArtistsByTM,
      fetchEventsByTM,

      setStoreToken,
      setStoreUser,
      setStoreTopTracks,
      setStoreTopArtists,
      setStoreTopTracksArtistsByTM,
      setStoreEvents,

      goToArtist,
    }
  },
}
</script>

<style lang="scss" scoped>
.events {
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

  .artist {
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
    transition: background-color 200ms linear;
  }
  .event:hover {
    background-color: #42b983;
    color: white;
  }
}

</style>
