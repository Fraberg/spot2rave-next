import { createStore } from 'vuex'

export default createStore({
  state: {
    // storedAccesToken: JSON.parse(window.localStorage.getItem(ACCESS_TOKEN) || 'default'),
    accesToken: { exists: false },
    user: { exists: false },
    topTracks: { exists: false },
    eventSuggestions: { exists: false }
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
    editEventSuggestions(state, eventSuggestions) {
      state.eventSuggestions = eventSuggestions
      state.eventSuggestions.exists = true
      console.log('store | editEventSuggestions')
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
  },
  modules: {
  }
})
