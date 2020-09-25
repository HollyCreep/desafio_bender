<template>
  <v-container>
    <v-content>
      <span v-html="html" />
    </v-content>
  </v-container>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'TypeCode',
    components: {
    },
    data () {
      return {
        html: ' ',
        post: null,
        error: null,
      }
    },
    mounted: function () {},
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.error = this.post = null
        this.setStateLoading(true)
        this.$http
          .get('https://geek-jokes.sameerkumar.website/api?format=json')
          .then(
            response => {
              this.html = response.data
              this.setStateLoading(false)
              this.setNotification({
                snackbar: true, // toogle do snackbar de alerta
                color: 'success', // cor do snackbarr
                text: 'Dados carregados com sucesso', // mensagem do snackbar
                timeout: 2000,
              })
            },
            error => {
              this.setStateLoading(false)
              this.error = error
            },
          )
      },
      ...mapMutations({
        setStateLoading: 'SET_LOADING',
        setNotification: 'SET_NOTIFICATION',
      }),
    },
  }
</script>
