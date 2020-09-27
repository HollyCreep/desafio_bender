<template>
  <div @click="nextPage('alegre')">
    <bender-face />
    <joke-dialog />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Alegre',
    components: {
      JokeDialog: () => import('@/components/core/JokeDialog'),
    },
    mounted () {
      window.addEventListener('unload', this.teste)
      this.addJoke()
    },
    methods: {
      ...mapActions({
        addJoke: 'setCurrentJoke',
        nextPage: 'changeCurrentPage',
      }),
      teste () {
        alert('vc esta dando reload fdp')
      },

    },
  }
</script>
