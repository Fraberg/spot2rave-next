import { createStore } from 'vuex'

export default createStore({
  state: {
    // storedAccesToken: JSON.parse(window.localStorage.getItem(ACCESS_TOKEN) || 'default'),
    accesToken: { exists: false },
    user: { exists: false },
    topTracks: { exists: false },
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
    editTopTracksArtistsByTM(state, topTracksArtistsByTM) {
      state.topTracksArtistsByTM = topTracksArtistsByTM
      state.topTracksArtistsByTM.exists = true
      console.log('store | editTopTracksArtistsByTM')
    },
    editEvents(state, events) {
      state.events = events
      state.events.exists = true
      console.log('store | editEvents')
    },
  },
  actions: {
    setAccessToken ({ commit }, accesToken) {
      commit('editAccessToken', accesToken)
    },
    setUserInStore ({ commit }, user) {
      commit('editUser', user)
    },
    setTopTrackInStore ({ commit }, topTracks) {
      commit('editTopTracks', topTracks)
    },
    setTopTracksArtistsByTM ({ commit }, events) {
      commit('editTopTracksArtistsByTM', events)
    },
    setEventsInStore ({ commit }, events) {
      commit('editEvents', events)
    },
  },
  modules: {
  }
})
