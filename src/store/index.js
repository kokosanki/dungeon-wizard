import { createStore } from 'vuex'

const store = createStore({
  state: {
    characterClass: '',
    characterRace: '',
    characterAlignment: '',
    characterBackground: '',
    characterName: ''
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
    },
    characterBackground: (state) => {
      return state.characterBackground
    },
    characterName: (state) => {
      return state.characterName
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
    },
    chooseBackground (state, chosenBackground) {
      state.characterBackground = chosenBackground
    },
    chooseName (state, chosenName) {
      state.characterName = chosenName
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
