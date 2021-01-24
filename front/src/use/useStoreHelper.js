import { ref, onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'

export default function useStoreHelpers() {
  const store = useStore()

  /* ------- store getters */
  const getStoreToken = computed(() => store.state.spotify.accesToken)
  const getStoreUser = computed(() => store.state.spotify.user)
  const getStoreTopTracks = computed(() => store.state.spotify.topTracks)
  const getStoreTopArtists = computed(() => store.state.spotify.topArtists)
  //
  const getStoreGoogleToken = computed(() => store.state.google.token)
  const getStoreGoogleUsername = computed(() => store.state.google.username)
  const getStoreYoutubePlaylists = computed(() => store.state.google.playlists)
  const getStorePlaylistItems = computed(() => store.state.google.playlistItems)
  //
  const getStoreConnectedUsers = computed(() => store.state.users.connectedUsers)
  //
  const getStoreTopTracksArtistsByTM = computed(() => store.state.topTracksArtistsByTM)
  const getStoreEvents = computed(() => store.state.events)

  /* ------- store setters */
  const setStoreToken = (token) => store.dispatch('spotify/setAccessToken', token)
  const setStoreUser = (user) => store.dispatch('spotify/setStoreUser', user)
  const setStoreTopTracks = (topTracks) => store.dispatch('spotify/setStoreTopTracks', topTracks)
  const setStoreTopArtists = (topArtists) => store.dispatch('spotify/setStoreTopArtists', topArtists)
  //
  const setStoreGoogleToken = (token) => store.dispatch('google/setGoogleToken', token)
  const setStoreYoutubePlaylists = (playlists) => store.dispatch('google/setYoutubePlaylists', playlists)
  const setStoreYoutubeUsername = (name) => store.dispatch('google/setUsername', name)
  //
  const setStoreConnectedUsers = (users) => store.dispatch('users/setStoreConnectedUsers', users)
  //
  const setStoreTopTracksArtistsByTM = (topTracksArtistsByTM) => store.dispatch('setStoreTopTracksArtistsByTM', topTracksArtistsByTM)
  const setStoreEvents = (events) => store.dispatch('setStoreEvents', events)

  return {
    store,
    // --------------------------
    getStoreToken,
    getStoreUser,
    getStoreTopTracks,
    getStoreTopArtists,
    setStoreTopArtists,
    // ---
    getStoreGoogleToken,
    getStoreGoogleUsername,
    getStoreYoutubePlaylists,
    getStorePlaylistItems,
    // ---
    getStoreConnectedUsers,
    // ---
    getStoreTopTracksArtistsByTM,
    getStoreEvents,
    // --------------------------
    setStoreToken,
    setStoreUser,
    setStoreTopTracks,
    // ---
    setStoreGoogleToken,
    // ---
    setStoreConnectedUsers,
    // ---
    setStoreTopTracksArtistsByTM,
    setStoreEvents,
  }
}
