<template>
  <div class="text-center">
    <v-bottom-sheet
      v-model="joke"
      persistent
      hide-overlay
    >
      <v-sheet
        class="d-flex justify-center align-center pa-2"
        height="10vh"
        color="secondary"
      >
        <v-expand-transition>
          <v-img
            v-show="nelson"
            class="nelson__container"
            contain
            src="@/assets/imagens/nelson.png"
          />
        </v-expand-transition>
        <div class="pa-3 flex-grow-1 text-center text-sm-h5 text-subtitle-2">
          {{ joke }}
        </div>
        <v-btn
          icon
          dark
          x-large
          :disabled="speaking"
          @click="nextPage('alegre')"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({ joke: 'getCurrentJoke', speaking: 'getBenderIsSpeaking', nelson: 'isNelsonShowing' }),
    },
    methods: {
      ...mapActions({ nextPage: 'changeCurrentPage' }),
    },
  }
</script>
