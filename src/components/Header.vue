<template>
  <v-app-bar
      absolute
      color="primary lighten-1"
      class="white--text"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
  >
    <!--        <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

    <v-toolbar-title class="text-uppercase">
      <router-link to="/" class="white--text text-decoration-none">
        I got vaccination
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon color="white">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon color="white">
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>