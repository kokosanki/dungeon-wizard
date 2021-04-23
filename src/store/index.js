import { createStore } from 'vuex'

const store = createStore({
  state: {
    characterClass: '',
    characterRace: '',
    characterAlignment: ''
  },
  getters: {
    characterClass: (state) => {
      return state.characterClass
    },
    characterRace: (state) => {
      return state.characterRace
    },
    characterAlignment: (state) => {
      return state.characterAlignment
    }
  },
  mutations: {
    chooseClass (state, chosenClass) {
      state.characterClass = chosenClass
    },
    chooseRace (state, chosenRace) {
      state.characterRace = chosenRace
    },
    chooseAlignment (state, chosenAlignment) {
      state.characterAlignment = chosenAlignment
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
