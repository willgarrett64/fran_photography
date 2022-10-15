import { createStore } from 'vuex'
import text from '@/assets/text/languages.json'

const store = createStore({
  state: {
    selectedLanguage: 'pt',
    text: text
  },
  mutations: {
    setLanguage(state, newLanguage) {
      state.selectedLanguage = newLanguage
    }
  },
  getters: {
    lang: (state) => state.text[state.selectedLanguage]
  }
})

export default store
