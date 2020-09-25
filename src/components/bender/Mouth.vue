<template>
  <v-expand-transition>
    <div
      v-show="!speaking"
      class="Bender__mouth"
    >
      <template
        v-for="n in 7"
      >
        <div
          :key="n"
          class="Bender__tooth"
        />
      </template>

      <div class="Bender__lip" />
      <div class="Bender__lip" />
    </div>
  </v-expand-transition>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'BenderMouth',
    computed: {
      ...mapState(['bender.is_speaking']),
      speaking: {
        get () {
          return this.$store.state.bender.is_speaking
        },
        set (val) {
          this.$store.commit('SET_SPEAKING', val)
        },
      },
    },
  }
</script>
