const state = {
  token: { exists: false, value: 'connect w/ youtube music' },
  username: { exists: false, value: 'connect w/ youtube music' },
  playlists: { exists: false, value: {} },
}

// getters
const getters = {
}

// mutations
const mutations = {
  editGoogleToken(state, token) {
    if (state.token.exists) {
      return
    }
    state.token = token
    state.token.exists = true
    console.log('Store | editGoogleToken')
  },
  editYoutubePlaylists(state, playlists) {
    if (state.playlists.exists) {
      return
    }
    state.playlists = playlists
    state.playlists.exists = true
    console.log('Store | editYoutubePlaylists')
  },
}

// actions
const actions = {
  setGoogleToken ({ commit }, token) {
    commit('editGoogleToken', token)
  },
  setYoutubePlaylists ({ commit }, playlists) {
    commit('editYoutubePlaylists', playlists)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
