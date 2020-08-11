<template>
  <v-container>
  
    <v-row justify="center" align="center">
      <v-col class="text-center text-h6">
        <p>
          To start cleaning your Youtube subscriptions, please login using
          this button below
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col class="text-center">
        <GoogleSignInBtn label="Sign In" @click="signIn"/>
      </v-col>
    </v-row>

  </v-container>


</template>

<script>
import { mapActions } from 'vuex';
import GoogleSignInBtn from './GoogleSigninButton';

export default {
  name: 'GoogleAuth',
  components: {
    GoogleSignInBtn,
  },
  methods: {
    ...mapActions([
      'googleSignIn',
      'updateCurrentComponent'
    ]),
    signIn: async function () {
      await this.googleSignIn();
      this.updateCurrentComponent('CleaningArea');
    }
  },

};
</script>

<style scoped></style>
