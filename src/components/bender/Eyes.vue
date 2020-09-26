<template>
  <div class="Bender__eyes">
    <div class="Bender__socket">
      <div
        class="Bender__eye"
        :class="`eye_state${humor}`"
      >
        <div
          class="Bender__pupil"
          :class="`pupils_state_${humor}`"
        />
      </div>
      <div
        class="Bender__eye"
        :class="`eye_state${humor}`"
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
  import { mapState } from 'vuex'
  import traceMouseMoviment from '@/plugins/trace-mouse-move'
  document.querySelector('body').addEventListener('mousemove', traceMouseMoviment)
  export default {
    name: 'BenderEyes',
    components: {
    },
    computed: {
      ...mapState(['bender.humor']),
      humor: {
        get () {
          return this.$store.state.bender.humor
        },
        set (val) {
          this.$store.commit('SET_SPEAKING', val)
        },
      },
    },
  }
</script>
