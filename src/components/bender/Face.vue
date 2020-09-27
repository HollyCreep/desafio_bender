<template>
  <div
    class="Bender"
    :class="`face_state_${humor}`"
  >
    <!-- <hit-box /> -->
    <bender-eyes />
    <bender-mouth />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Bender',
    components: {
      // HitBox: () => import('@/components/HitBox'),
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
