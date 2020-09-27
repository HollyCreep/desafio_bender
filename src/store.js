import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    notification: {},
    currentJoke: ' ',
    allJokes: [],
    bender: {
      is_speaking: false,
      humor: 'normal',
    },
    systemInfo: {
      currentPage: '',
    },
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    SET_NOTIFICATION (state, payload) {
      payload.snackbar = true
      if (!payload.timeout) {
        payload.timeout = 2000
      }
      if (!payload.color) {
        payload.color = 'success'
      }
      state.notification = payload
    },
    SET_SPEAKING (state, payload) {
      state.bender.is_speaking = payload
    },
    SET_BENDER_HUMOR (state, payload) {
      state.bender.humor = payload
    },
    SET_CURRENT_PAGE (state, payload) {
      state.systemInfo.currentPage = payload
    },
    SET_NEXT_PAGE (state, payload) {
      state.systemInfo.currentPage = payload
      router.push({ name: payload })
    },
    SET_CURRENT_JOKE (state, payload) {
      state.currentJoke = payload
      state.allJokes.push(payload)
      var speaker = new SpeechSynthesisUtterance()
      speaker.addEventListener('end', function (event) {
        state.bender.is_speaking = false
      })
      speaker.lang = 'en-US'
      speaker.text = payload
      state.bender.is_speaking = true
      window.speechSynthesis.speak(speaker)
    },
  },
  actions: {
      changeCurrentPage (state, payload) {
        if (!state.state.bender.is_speaking) {
          const states = {
             home: 'triste',
             triste: 'alegre',
             alegre: 'normal',
           }
             const destino = states[payload]
             state.commit('SET_BENDER_HUMOR', destino)
             if (destino !== state.state.systemInfo.currentPage) {
                state.commit('SET_NEXT_PAGE', destino)
             }
        }
      },
      async setCurrentJoke (state, payload) {
        const joke = await fetch('https://geek-jokes.sameerkumar.website/api?format=json', { Accept: 'application/json' })
        const j = await joke.json()
        state.commit('SET_CURRENT_JOKE', j.joke)
      },
  },
  getters: {
    getBenderHumor: state => state.bender.humor,
    getBenderIsSpeaking: state => state.bender.is_speaking,
    getCurrentJoke: state => state.currentJoke,
    getCurrentPage: state => state.systemInfo.currentPage,
    isLoading: state => state.loading,
  },

})
