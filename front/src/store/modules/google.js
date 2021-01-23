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
  editPlaylistItems(state, items) {
    // if (state.playlistItems.exists) {
    //   return
    // }
    // items: { index: integer, track: {}}
    // if (Object.keys(state.playlistItems.value).some(id => id == playlistId)) {
    //   // state.playlistItems.value[playlistId].push(items)
    //   state.playlistItems.value[playlistId] = items
    // } else {
      // state.playlistItems.value[playlistId] = items
    // }
    // state.playlistItems.value = { playlistId: items }
    state.playlistItems.value = items
    state.playlistItems.exists = true
    console.log('Store | PlaylistItems')
    console.log('Store | state.playlistItems =', state.playlistItems)
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
  setYoutubePlaylistItems ({ commit }, items) {
    commit('editPlaylistItems', items)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
