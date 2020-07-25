<template>
  <v-app id="inspire">
    
    <SideDrawer v-bind:drawer="showDrawer" @update-drawer-state="updateDrawerState"/>

    <v-app-bar app color="red" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Youtube Subs Cleaner</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!-- <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <span class="display-1">
            Start cleaning your Youtube subscriptions now
          </span>
        </v-row>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <v-btn width="185" height="40" @click="signIn">
              <v-img
              src="./assets/btn_google_signin_light_normal_web.png"></v-img>
            </v-btn>
          </v-col>
        </v-row>
      </v-container> -->
      <div class="tw-h-56 tw-flex tw-container tw-justify-center tw-items-center tw-flex-col tw-mx-auto">
        <div>
            <p class="tw-text-1xl tw-text-center tw-text-gray-700">To start cleaning your Youtube subscription list, please login using this button below</p>
        </div>
        <div>
          <v-btn width="185" height="40" @click="signIn">
            <v-img
            src="./assets/btn_google_signin_light_normal_web.png"></v-img>
          </v-btn>
        </div>
      </div>
      <!-- <v-container>
        <v-layout row>
          <v-flex xs12 col>
            <p class="text-center">Start cleaning your Youtube subscription list now.</p>
          </v-flex>
          <v-flex col align="center" class="text-center" justify="center">
            <v-btn width="185" height="40" @click="signIn">
              <v-img
              src="./assets/btn_google_signin_light_normal_web.png"></v-img>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container> -->
    </v-main>
    <!-- <v-footer color="red" app>
      <span class="white--text">Yanis Bouchenna &copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
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
    drawer: null
  }),
  methods: {
    signIn: function() {
      //sign in stuff here
    },

    updateDrawerState: function(newValue) {
      this.drawer = newValue;
    }
  },
  computed: {
    showDrawer: function () {
      return this.drawer;
    },
  }
};
</script>
