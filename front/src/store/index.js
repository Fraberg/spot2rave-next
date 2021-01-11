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
      if (!state.accesToken.exists) {
        state.accesToken.exists = true
        state.accesToken.value = accesToken
        console.log('store | editAccessToken')
      }
    },
    editUser(state, user) {
        state.user.exists = true
        state.user = {
          ...user
        }
        console.log('store | editUser')
    },
    editTopTracks(state, topTracks) {
      state.topTracks.exists = true
      state.topTracks = {
        ...topTracks
      }
      console.log('store | editUser')
    },
    editEventSuggestions(state, eventSuggestions) {
      state.eventSuggestions.exists = true
      state.eventSuggestions = {
        ...eventSuggestions,
      }
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
