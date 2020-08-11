<template>
<v-navigation-drawer v-model="showDrawer" app>

  <About v-bind:dialog="aboutDialog" @update-dialog="updateAboutDialog"/>

  <v-list dense>
    <v-list-item link @click="aboutDialog = !aboutDialog">
      <v-list-item-action>
      <v-icon>info</v-icon>
      </v-list-item-action>
      <v-list-item-content>
      <v-list-item-title>About</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item link href="mailto:bouchenna.yanis@protonmail.com">
      <v-list-item-action>
      <v-icon>mdi-email</v-icon>
      </v-list-item-action>
      <v-list-item-content>
      <v-list-item-title>Contact Me</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item link href="https://github.com/Karm0s/youtube-subscriptions-cleaner" target="_blank">
      <v-list-item-action>
      <v-icon>mdi-code-tags</v-icon>
      </v-list-item-action>
      <v-list-item-content>
      <v-list-item-title>Code Repository</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item link href="https://www.buymeacoffee.com/SQJcdoxCG" target="_blank">
      <v-list-item-action>
      <v-icon>mdi-currency-usd</v-icon>
      </v-list-item-action>
      <v-list-item-content>
      <v-list-item-title>Make A Donation</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

  </v-list>
</v-navigation-drawer>

</template>

<script>
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
    updateAboutDialog: function (newValue) {
      this.aboutDialog = newValue;
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