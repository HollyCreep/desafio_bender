<template>
  <div @click="nextPage('home')">
    <bender-face />
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'Normal',
    computed: {
      ...mapGetters({ joke: 'getCurrentJoke' }),
    },
    methods: {
      ...mapActions({
        addJoke: 'setCurrentJoke',
        nextPage: 'changeCurrentPage',
      }),

    },
  }
</script>
