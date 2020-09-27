<template>
  <div class="text-center">
    <v-bottom-sheet
      v-model="speaking"
      persistent
    >
      <v-sheet
        class="d-flex justify-center align-center"
        height="10vh"
        color="secondary"
        dark
      >
        <h2 class="py-3">
          {{ joke }}
        </h2>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({ joke: 'getCurrentJoke', speaking: 'getBenderIsSpeaking' }),
    },
  }
</script>
