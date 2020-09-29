<template>
  <v-expand-transition>
    <div
      v-show="humor == 'normal'"
      class="balao text-center"
    >
      <span class="text-h4">42 ?! 42 ?????!</span>
    </div>
  </v-expand-transition>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({ humor: 'getBenderHumor' }),
    },
  }
</script>
