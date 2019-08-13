import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: "",
    user: "",
    drawer: false,
    snackbar: false,
    member: "",
    token: ""
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setMember (state, member) {
      state.member = member
    },
    setToken (state, accessToken) {
      state.accessToken = accessToken
    },
    setDrawer (state, payload) {
      state.drawer = payload
    },
    setSnackbar (state) {
      state.snackbar = !state.snackbar
    }
  },
  actions: {
    getUser ({ commit }, user) {
      commit("setUser", user)
      if (!user) return
      user.getIdToken().then(accessToken => {
        commit("setToken", accessToken)
      })
    }
  },
  getters: {
    getDrawer (state) {
      return state.drawer
    },
    getSnackbar (state) {
      return state.snackbar
    }
  }
})
