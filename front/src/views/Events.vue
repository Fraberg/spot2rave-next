<template>
  <p class="nice">Just for you,</p>
  <h1 class="name">{{ getStoreUser.display_name }},</h1>
  <p class="info">⬇️ Here are some upcoming events related to your spotify tracks ⬇️</p>
  <div class="events">
    <span v-if="isLoading">Loading</span>
    <p v-else>
      {{ getStoreTopTracksArtistsByTM.name }}
      <br>
      <br>
      {{ getStoreEvents[0].description }}
      <br>
      <br>
      {{ getStoreEvents[1].description }}
    </p>
    <!-- <div v-else class="results">
        <div
        v-for="(event, index) in getStoreEvents"
        :key="event.id"
        class="event"
        :item="event"
        :index="index"
        @click="goToEvent(event.id)"
      >
        <p class=" index">index + 1</p>
        <img class="image" src="https://static.ticketmaster.fr/static/images/vignettes/a_484471.gif" />
        <div class="name-artists-pop">
          <p class="artists">event.artists.join(', ')</p>
          <p class="name">event.name</p>
          <p class=" popularity">Popularité</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import TicketMasterService from '@/service/TicketMasterService'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup(props) {
    const isLoading = ref(true)
    const topTracksArtistsByTM = ref([])
    const events = ref([])
    const store = useStore()
    const router = useRouter()

    /* ------- vue hooks */
    onBeforeMount(async () => {
      // console.log('onBeforeMount')
      if (!store.state.events.exists) {
        topTracksArtistsByTM.value = await fetchArtistsByTM()
        setTopTracksArtistsByTM(topTracksArtistsByTM.value)
        
        events.value = await fetchEventsByTM(topTracksArtistsByTM.value.id)
        setEventsInStore(events.value)
      } else {
        console.log('nothing to update')
      }
      isLoading.value = false
    })
    
    /* ------- computed */
    const getStoreToken = computed(function() {
      return store.state.accesToken
    })
      const getStoreUser = computed(function() {
        return store.state.user
    })
    const getStoreTopTracksArtistsByTM = computed(function() {
      return store.state.topTracksArtistsByTM
    })
    const getStoreEvents = computed(function() {
      return store.state.events
    })

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

    // setters
    function setTopTracksArtistsByTM(topTracksArtistsByTM) {
      store.dispatch('setTopTracksArtistsByTM', topTracksArtistsByTM)
    }
    function setEventsInStore(events) {
      store.dispatch('setEventsInStore', events)
    }
    // router
    function goToEvent(id) {
      router.push(`/me/event/${id}`)
    }
    return {
      isLoading,
      events,
      store,

      getStoreToken,
      getStoreUser,
      getStoreTopTracksArtistsByTM,
      getStoreEvents,

      fetchArtistsByTM,
      fetchEventsByTM,

      setEventsInStore,

      goToEvent,
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

  .event {
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
  .event:hover {
    background-color: #42b983;
    color: white;
  }
}

</style>
