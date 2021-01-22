import { createStore } from 'vuex'
import spotify from '@/store/modules/spotify'
import google from '@/store/modules/google'

export default createStore({
  state: {
    topTracksArtistsByTM: { exists: false, value: {} },
    events: { exists: false, value: {} },
  },
  mutations: {
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
    // ---
    setStoreTopTracksArtistsByTM ({ commit }, events) {
      commit('editTopTracksArtistsByTM', events)
    },
    setStoreEvents ({ commit }, events) {
      commit('editEvents', events)
    },
  },
  modules: {
    spotify,
    google,
  }
})
