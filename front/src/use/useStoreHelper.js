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
  function setStoreToken(token) {
    store.dispatch('setAccessToken', token)
  }
  function setStoreUser(user) {
    store.dispatch('setStoreUser', user)
  }
  function setStoreTopTracks(topTracks) {
    store.dispatch('setStoreTopTracks', topTracks)
  }
  function setStoreTopArtists(topArtists) {
    store.dispatch('setStoreTopArtists', topArtists)
  }
  function setStoreTopTracksArtistsByTM(topTracksArtistsByTM) {
    store.dispatch('setStoreTopTracksArtistsByTM', topTracksArtistsByTM)
  }
  function setStoreEvents(events) {
    store.dispatch('setStoreEvents', events)
  }
  return {
    store,
    
    getStoreToken,
    getStoreUser,
    getStoreTopTracks,
    getStoreTopArtists,
    setStoreTopArtists,
    getStoreTopTracksArtistsByTM,
    getStoreEvents,

    setStoreToken,
    setStoreUser,
    setStoreTopTracks,
    setStoreTopTracksArtistsByTM,
    setStoreEvents,
  }
}
