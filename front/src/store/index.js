import { createStore } from 'vuex'

export default createStore({
  state: {
    // storedAccesToken: JSON.parse(window.localStorage.getItem(ACCESS_TOKEN) || 'default'),
    accesToken: { exists: false },
    user: { exists: false },
    topTracks: { exists: false },
    topArtists: { exists: false },
    topTracksArtistsByTM: { exists: false },
    events: { exists: false }
  },
  mutations: {
    editAccessToken(state, accesToken) {
      if (state.accesToken.exists) {
        return
      }
      state.accesToken.value = accesToken
      state.accesToken.exists = true
      console.log('store | editAccessToken')
    },
    editUser(state, user) {
      if (state.user.exists) {
        return
      }
      state.user = user
      state.user.exists = true
      console.log('store | editUser')
    },
    editTopTracks(state, topTracks) {
      if (state.topTracks.exists) {
        return
      }
      state.topTracks = topTracks
      state.topTracks.exists = true
      console.log('store | topTracks')
    },
    editTopArtists(state, topArtists) {
      if (state.topArtists.exists) {
        return
      }
      state.topArtists = topArtists
      state.topArtists.exists = true
      console.log('store | topArtists')
    },
    editTopTracksArtistsByTM(state, topTracksArtistsByTM) {
      if (state.topTracksArtistsByTM.exists) {
        return
      }
      state.topTracksArtistsByTM = topTracksArtistsByTM
      state.topTracksArtistsByTM.exists = true
      console.log('store | editTopTracksArtistsByTM')
    },
    editEvents(state, events) {
      if (state.events.exists) {
        return
      }
      state.events = events
      state.events.exists = true
      console.log('store | editEvents')
    },
  },
  actions: {
    setAccessToken ({ commit }, accesToken) {
      commit('editAccessToken', accesToken)
    },
    setStoreUser ({ commit }, user) {
      commit('editUser', user)
    },
    setStoreTopTracks ({ commit }, topTracks) {
      commit('editTopTracks', topTracks)
    },
    setStoreTopArtists ({ commit }, topArtists) {
      commit('editTopArtists', topArtists)
    },
    setStoreTopTracksArtistsByTM ({ commit }, events) {
      commit('editTopTracksArtistsByTM', events)
    },
    setStoreEvents ({ commit }, events) {
      commit('editEvents', events)
    },
  },
  modules: {
  }
})
