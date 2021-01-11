import { createStore } from 'vuex'

export default createStore({
  state: {
    // storedAccesToken: JSON.parse(window.localStorage.getItem(ACCESS_TOKEN) || 'default'),
    accesToken: 'accesToken default',
    userName: 'userName default'
  },
  mutations: {
    editAccessToken(state, accesToken) {
      state.accesToken = accesToken
    },
  },
  actions: {
    setAccessToken ({ commit }, accesToken) {
      commit('editAccessToken', accesToken)
    },
  },
  modules: {
  }
})
