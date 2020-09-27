<template>
  <div
    class="Bender"
    :class="`face_state_${humor}`"
  >
    <happiness-meter />
    <bender-eyes />
    <bender-mouth />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Bender',
    components: {
      HappinessMeter: () => import('@/components/core/HappinessMeter'),
    },
    data () {
      return {
        expand: false,
      }
    },
    computed: {
      ...mapGetters({ humor: 'getBenderHumor', speaking: 'getBenderIsSpeaking', loading: 'isLoading' }),
    },
  }
</script>
