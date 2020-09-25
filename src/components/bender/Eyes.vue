<template>
  <div class="Bender__eyes">
    <div class="Bender__socket">
      <div
        class="Bender__eye"
        :class="humor"
      >
        <div class="Bender__pupil" />
      </div>
      <div
        class="Bender__eye"
        :class="humor"
      >
        <div class="Bender__pupil" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import traceMouseMoviment from '@/plugins/trace-mouse-move'
  // function traceMouseMoviment () {
  //   debugger
  //   var eye = document.querySelectorAll('.eye')
  //   eye.forEach((eye) => {
  //     const x = (eye.getBoundingClientRect().left + eye.clientWidth / 2)
  //     const y = (eye.getBoundingClientRect().top + eye.clientHeight / 2)
  //     const radian = Math.atan2(event.pageX - x, event.pageY - y)
  //     const rot = (radian * (180 / Math.PI) * -1) + 0
  //     eye.style.transform = `rotate(${rot}deg)`
  //   })
  // }
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
