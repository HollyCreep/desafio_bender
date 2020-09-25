<template>
  <div class="Bender">
    <!-- <hit-box /> -->
    <bender-eyes />
    <bender-mouth />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
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
      ...mapState(['loading']),
      loading: {
        get () {
          return this.$store.state.loading
        },
        set (val) {
          this.$store.commit('SET_LOADING', val)
        },
      },
    },
  }
</script>
