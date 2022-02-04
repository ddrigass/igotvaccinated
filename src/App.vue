<template>
  <div id="app">
    <v-app id="inspire">
      <Header/>

      <v-main>
        <v-container fluid fill-height>
          <router-view/>
        </v-container>
      </v-main>

      <Footer/>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Footer,
    Header,
  },
  data: () => ({
    links: [
      {
        title: 'Home',
        link: '#'
      },
      {
        title: 'About Us',
        link: '#'
      },
      {
        title: 'Team',
        link: '#'
      },
      {
        title: 'Services',
        link: '#'
      },
      {
        title: 'Blog',
        link: '#'
      },
      {
        title: 'Contact Us',
        link: '#'
      },
    ],
  }),
}
</script>
