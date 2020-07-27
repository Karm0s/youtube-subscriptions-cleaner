<template>
  <v-app id="inspire">
    
    <SideDrawer v-bind:drawer="showDrawer" @update-drawer-state="updateDrawerState" @google-signin-button-click="signIn"/>

    <v-app-bar app color="red" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Youtube Subs Cleaner</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <GoogleAuth v-show="!isAuthorized" @google-signin-button-click="signIn"/>
    </v-main>
  </v-app>
</template>

<script>
import SideDrawer from './components/layout/SideDrawer';
import GoogleAuth from './components/GoogleAuth';

export default {
  name: 'App',
  props: {
    source: String,
  },
  components: {
    SideDrawer,
    GoogleAuth
  },
  data: () => ({
    drawer: null,
    gapi: null,
    googleAuth: null,
    isAuthorized: false,
  }),
  created: function () {
    this.$gapi.getGapiClient().then(gapi => {
      this.gapi = gapi;
      this.googleAuth = this.gapi.auth2.getAuthInstance();

    });
  },
  methods: {
    signIn: function() {
      //Login logic
      this.googleAuth.signIn()
      .then(() => {
        this.isAuthorized = true;
        console.log("Login Done");
      })
      .catch(err => {
        if (err.error === "popup_closed_by_user"){
          // Error dialog should be implemented here
          console.log('Why did you close that shit ? Wanna use this app or no?');
        }
      });
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

<style scoped>

.my-button span.text {
  color: red;
}
</style>
