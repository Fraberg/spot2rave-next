const state = {
  token: { exists: false, value: 'connect w/ youtube music' },
  username: { exists: false, value: 'connect w/ youtube music' },
  playlists: { exists: false },
  playlistItems: { exists: false },
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
    state.token.value = token
    state.token.exists = true
    console.log('Store | editGoogleToken')
  },
  editUsername(state, username) {
    if (state.username.exists) {
      return
    }
    state.username.value = username
    state.username.exists = true
    console.log('Store | editUsername')
  },
  editYoutubePlaylists(state, playlists) {
    if (state.playlists.exists) {
      return
    }
    state.playlists.value = playlists
    state.playlists.exists = true
    console.log('Store | editYoutubePlaylists')
  },
  editPlaylistItems(state, { playlistId, items }) {
    if (state.playlistItems.exists === false) {
      state.playlistItems.value = {}
    }
    if (!(Object.keys(state.playlistItems.value).includes(playlistId))) {
      state.playlistItems.value[playlistId] = {}
    }
    for (let [key, value] of Object.entries(items)) {
      // console.log(key, value)
      state.playlistItems.value[playlistId][key] = value
    }
    state.playlistItems.exists = true
    console.log('Store | state.playlistItems.value[playlistId].length', state.playlistItems.value[playlistId].length)
  },
}

// actions
const actions = {
  setGoogleToken ({ commit }, token) {
    commit('editGoogleToken', token)
  },
  setUsername ({ commit }, username) {
    commit('editUsername', username)
  },
  setYoutubePlaylists ({ commit }, playlists) {
    commit('editYoutubePlaylists', playlists)
  },
  setYoutubePlaylistItems ({ commit }, { playlistId, items }) {
    commit('editPlaylistItems', { playlistId, items })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
