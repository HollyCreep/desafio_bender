import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@/sass/main.scss'

Vue.use(Vuetify)

const theme = {
  primary: '#323469',
  secondary: '#ff9b23',
  input: '#7a7b9e',
  info: '#00CAE3',
  confirm: '#00C853',
  validate: '#1565c0',
  danger: '#dc3545',
}

export default new Vuetify({
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
})
