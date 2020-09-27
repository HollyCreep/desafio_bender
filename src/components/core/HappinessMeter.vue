<template>
  <div
    class="happiness_meter d-flex justify-center align-center text-sm-h4 text-subtitle-2 white--text"
    :class="`happiness_meter_state_${humor}`"
  >
    <span>Contador de Alegria</span>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({ humor: 'getBenderHumor' }),
    },
  }
</script>
