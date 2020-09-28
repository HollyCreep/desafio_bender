<template>
  <div class="Bender__eyes">
    <div class="Bender__socket">
      <div
        class="Bender__eye"
        :class="`eye_state_${humor}`"
      >
        <div
          class="Bender__pupil"
          :class="`pupils_state_${humor}`"
        />
      </div>
      <div
        class="Bender__eye"
        :class="`eye_state_${humor}`"
      >
        <div
          class="Bender__pupil"
          :class="`pupils_state_${humor}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'BenderEyes',
    components: {
    },
    computed: {
      ...mapGetters({ humor: 'getBenderHumor' }),
    },
  }
</script>
