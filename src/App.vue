<template>
  <v-app>
    <router-view />
    <joke-dialog />
    <notification />
    <loading />
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
      Notification: () => import('@/components/core/Notification'),
      Loading: () => import('@/components/core/Loading'),
      JokeDialog: () => import('@/components/core/JokeDialog'),
    },
  }
</script>
