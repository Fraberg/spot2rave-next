const state = {
    connectedUsers: { exists: false, value: {} },
  }
  
  // getterss
  const getters = {}
  
  // mutations
  const mutations = {
    editConnectedUsers(state, connectedUsers) {
      if (state.connectedUsers.exists) {
        return
      }
      state.connectedUsers.value = connectedUsers
      state.connectedUsers.exists = true
      console.log('Store | editConnectedUsers')
    },
  }
  
  // actions
  const actions = {
    setStoreConnectedUsers ({ commit }, connectedUsers) {
      commit('editConnectedUsers', connectedUsers)
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  