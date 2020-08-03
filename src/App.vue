<template>
  <v-app id="inspire">
    
    <SideDrawer v-bind:drawer="showDrawer" @update-drawer-state="updateDrawerState" @google-signin-button-click="signIn"/>

    <v-app-bar app color="red" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Youtube Subs Cleaner</v-toolbar-title>
    </v-app-bar>

    <v-main>
        <v-container v-if="!isInitialized">
          <v-row align="center" justify="center">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </v-row>
        </v-container>
        <v-container v-else>
          <GoogleAuth v-if="!isAuthorized" @google-signin-button-click="signIn"/>
          <CleaningArea v-if="isAuthorized"/>
        </v-container>
    </v-main>

  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import SideDrawer from './components/layout/SideDrawer';
import CleaningArea from './components/layout/CleaningArea';
import GoogleAuth from './components/GoogleAuth';

export default {
  name: 'App',
  props: {
    source: String,
  },
  components: {
    SideDrawer,
    GoogleAuth,
    CleaningArea
  },
  data: () => ({
    drawer: null,
    // gapi: null,
    // googleAuth: null,
    // isAuthorized: false, //TO BE CHANGED TO FALSE 
  }),
  created: function () {
    // this.$gapi.getGapiClient().then(gapi => {
    //   this.gapi = gapi;
    //   this.googleAuth = this.gapi.auth2.getAuthInstance();

    // });
    console.log(this.isInitialized);
    this.loadGapi(this);
  },
  methods: {
    ...mapActions([
      "loadGapi",
      "googleSignIn"
    ]),
    signIn: function() {
      // //Login logic
      // this.googleAuth.signIn()
      // .then(() => {
      //   this.isAuthorized = true;
      //   console.log("Login Done");
      // })
      // .catch(err => {
      //   if (err.error === "popup_closed_by_user"){
      //     // Error dialog should be implemented here
      //     console.log('Why did you close that shit ? Wanna use this app or no?');
      //   }
      // });
      this.googleSignIn();
    },
    updateDrawerState: function(newValue) {
      this.drawer = newValue;
    }
  },
  computed: {
    ...mapGetters([
      "isInitialized",
      "isAuthorized"
    ]),
    showDrawer: function () {
      return this.drawer;
    },
  }
};
</script>

<style scoped>

.my-button span.text {
  color: red;
}
</style>
