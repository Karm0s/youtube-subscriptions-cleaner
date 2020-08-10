<template>
  <v-app id="inspire">
    <SideDrawer
      v-bind:drawer="showDrawer"
      @update-drawer-state="updateDrawerState"
    />

    <v-app-bar app color="red" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Youtube Subs Cleaner</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container v-if="!isInitialized">
        <v-row align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-row>
      </v-container>
      <v-container v-else>
        <!-- <GoogleAuth v-if="!isAuthorized" />
        <CleaningArea v-if="isAuthorized" /> -->
        <component :is="getCurrentComponent"></component>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import SideDrawer from "./components/layout/SideDrawer";
import CleaningArea from "./components/layout/CleaningArea";
import GoogleAuth from "./components/GoogleAuth";

export default {
  name: "App",
  props: {
    source: String
  },
  components: {
    SideDrawer,
    GoogleAuth,
    CleaningArea
  },
  data: () => ({
    drawer: null,
  }),
  created: function() {
    this.loadGapi(this);
  },
  methods: {
    ...mapActions(["loadGapi"]),
    updateDrawerState: function(newValue) {
      this.drawer = newValue;
    }
  },
  computed: {
    ...mapGetters([
      "isInitialized", 
      "isAuthorized",

      "getCurrentComponent"
    ]),
    showDrawer: function() {
      return this.drawer;
    }
  }
};
</script>

<style scoped>
.my-button span.text {
  color: red;
}
</style>
