<template>
  <v-app id="inspire">
    
    <SideDrawer v-bind:drawer="showDrawer" @update-drawer-state="updateDrawerState" @drawer-signin-link-clicked="signIn"/>

    <v-app-bar app color="red" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Youtube Subs Cleaner</v-toolbar-title>
    </v-app-bar>

    <v-main>
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
      </v-main>
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
      console.log("sign in clicked");
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
