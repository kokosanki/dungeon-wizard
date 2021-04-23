import { createStore } from 'vuex'

const store = createStore({
  state: {
    characterClass: ''
  },
  getters: {
    characterClass: (state) => {
      return state.characterClass
    }
  },
  mutations: {
    chooseClass (state, chosenClass) {
      state.characterClass = chosenClass
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
