<template>
  <div
    class="Bender__mouth"
    :class="`mouth_state_${humor}`"
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
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'BenderMouth',
    computed: {
      ...mapGetters({ humor: 'getBenderHumor', speaking: 'getBenderIsSpeaking' }),
    },
  }
</script>
