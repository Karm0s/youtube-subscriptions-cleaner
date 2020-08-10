<template>
<v-navigation-drawer v-model="showDrawer" app>

  <About v-bind:dialog="aboutDialog" @update-dialog="updateAboutDialog"/>

  <v-list dense>
    <v-list-item link @click="signIn">
      <v-list-item-action>
      <v-icon>mdi-login</v-icon>
      </v-list-item-action>
      <v-list-item-content>
      <v-list-item-title>Sign In With Google</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    
    <v-list-item link @click="aboutDialog = !aboutDialog">
      <v-list-item-action>
      <v-icon>info</v-icon>
      </v-list-item-action>
      <v-list-item-content>
      <v-list-item-title>About</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item link>
      <v-list-item-action>
      <v-icon>mdi-email</v-icon>
      </v-list-item-action>
      <v-list-item-content>
      <v-list-item-title>Contact</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item link>
      <v-list-item-action>
      <v-icon>mdi-code-tags</v-icon>
      </v-list-item-action>
      <v-list-item-content>
      <v-list-item-title>Code</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item link>
      <v-list-item-action>
      <v-icon>mdi-logout</v-icon>
      </v-list-item-action>
      <v-list-item-content>
      <v-list-item-title>Sign Out</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-navigation-drawer>

</template>

<script>
import { mapActions } from 'vuex';
import About from './About';

export default {
  name: 'SideDrawer',
  components: {
    About,
  },
  props: ['drawer'],
  data: () => ({
    aboutDialog: false,
  }),
  methods: {
    ...mapActions([
      'googleSignIn',
      'updateCurrentComponent'
    ]),
    updateAboutDialog: function (newValue) {
      this.aboutDialog = newValue;
    },
    signIn: async function () {
      await this.googleSignIn();
      this.updateCurrentComponent('CleaningArea');
    }
  },
  computed: {
    showDrawer: {
      get: function() {
        return this.drawer;
      },
      set: function(newValue) {
        this.$emit('update-drawer-state', newValue);
      }
    }, 
    showAboutDialog: function() {
      return this.aboutDialog;
    },
  }
}
</script>

<style>

</style>