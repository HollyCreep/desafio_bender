<template>
  <div @click="nextPage('alegre')">
    <bender-face />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Alegre',
    mounted () {
      this.addJoke()
    },
    methods: {
      ...mapActions({
        addJoke: 'setCurrentJoke',
        nextPage: 'changeCurrentPage',
      }),

    },
  }
</script>
