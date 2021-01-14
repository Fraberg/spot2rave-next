import { ref, onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'

export default function useStoreHelpers() {
  const store = useStore()

  /* ------- store getters */
  const getStoreToken = computed(function() {
    return store.state.accesToken
  })
  const getStoreUser = computed(function() {
    return store.state.user
  })
  const getStoreTopTracks = computed(function() {
    return store.state.topTracks
  })
  const getStoreTopArtists = computed(function() {
    return store.state.topArtists
  })
  const getStoreTopTracksArtistsByTM = computed(function() {
    return store.state.topTracksArtistsByTM
  })
  const getStoreEvents = computed(function() {
    return store.state.events
  })

  /* ------- store setters */
  function setTokenInStore(token) {
    store.dispatch('setAccessToken', token)
  }
  function setUserInStore(user) {
    store.dispatch('setUserInStore', user)
  }
  function setTopTracksInStore(topTracks) {
    store.dispatch('setTopTracksInStore', topTracks)
  }
  function setTopArtistsInStore(topArtists) {
    store.dispatch('setTopArtistsInStore', topArtists)
  }
  function setTopTracksArtistsByTM(topTracksArtistsByTM) {
    store.dispatch('setTopTracksArtistsByTM', topTracksArtistsByTM)
  }
  function setEventsInStore(events) {
    store.dispatch('setEventsInStore', events)
  }
  return {
    store,
    
    getStoreToken,
    getStoreUser,
    getStoreTopTracks,
    getStoreTopArtists,
    setTopArtistsInStore,
    getStoreTopTracksArtistsByTM,
    getStoreEvents,

    setTokenInStore,
    setUserInStore,
    setTopTracksInStore,
    setTopTracksArtistsByTM,
    setEventsInStore,
  }
}
