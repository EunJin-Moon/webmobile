import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: "",
    user: "",
    // kimyong
    portfolio:{
      ptitle:"",
      pdate:"",
      peditor:"",
      pbody:"",
      pimgSrc:"",
      pidx:0,
      pid:""
    }
    // kimyong
  },
  mutations: {
    Portpolioidx: (state, payload) => {
      state.portfolio = payload
    }
  },
  actions: {

  }
})
