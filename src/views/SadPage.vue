<template>
  <div @click="nextPage('triste')">
    <bender-face />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Triste',
    methods: {
      ...mapActions({
        nextPage: 'changeCurrentPage',
      }),
    },
  }
</script>
