import { createStore } from 'vuex'

const store = createStore({
  state: {
    characterClass: '',
    characterRace: ''
  },
  getters: {
    characterClass: (state) => {
      return state.characterClass
    },
    characterRace: (state) => {
      return state.characterRace
    }
  },
  mutations: {
    chooseClass (state, chosenClass) {
      state.characterClass = chosenClass
    },
    chooseRace (state, chosenRace) {
      state.characterRace = chosenRace
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
