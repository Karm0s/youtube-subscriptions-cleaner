<template>
  <v-app id="inspire">
    
    <SideDrawer v-bind:drawer="showDrawer"/>

    <v-app-bar app color="red" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Subs Cleaner</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <v-btn width="185" height="40" @click="signIn">
              <v-img
              src="./assets/btn_google_signin_light_normal_web.png"></v-img>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="red" app>
      <span class="white--text">Yanis Bouchenna &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import SideDrawer from './components/layout/SideDrawer';

export default {
  name: 'App',
  props: {
    source: String
  },
  components: {
    SideDrawer,
  },
  data: () => ({
    drawer: true
  }),

  methods: {
    signIn: function() {
      //sign in stuff here
    }
  },
  computed: {
    showDrawer: function () {
      return this.drawer;
    },
  }
};
</script>
