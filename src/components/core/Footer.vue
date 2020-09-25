<template>
  <v-footer
    color="primary lighten-1"
    padless
    absolute
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link.name"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.path"
      >
        {{ link.name }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        Copyright ©{{ new Date().getFullYear() }} Todos Direitos Reservados | <strong>Incuca</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      links: [
        {
          name: 'Home',
          path: '/home',
        },
        {
          name: 'Blog',
          path: '/blog',
        },
        {
          name: 'TypeCode',
          path: '/typecode',
        },
        // {
        //   name: 'About',
        //   path: '/about',
        // },
      ],
    }),
  }
</script>
