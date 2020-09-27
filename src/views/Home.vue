<template>
  <div @click="nextPage('home')">
    <bender-face />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Normal',
    methods: {
      ...mapActions({ nextPage: 'changeCurrentPage' }),

    },
  }
</script>
