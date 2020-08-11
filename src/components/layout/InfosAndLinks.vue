<template> 
  <v-container>
    <v-row>
      <v-col class="text-center">
        <span class="text-h4 ">Thanks for using Subs Cleaner</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="text-center">
        <span class="text-h6 ">You can use these buttons below (or on the side drawer) to check the code 
          You can also donate if you want to support the developer.
        </span>
      </v-col>

    </v-row>

    <v-row justify="center" align="center">
      <v-col class="text-center" cols="3">
        <v-btn href="https://github.com/Karm0s/youtube-subscriptions-cleaner" target="_blank" height="51px">
          <v-img src="../../assets/github_logo.png"></v-img>
          <span>Code Repository</span>
        </v-btn>
      </v-col>
      <v-col class="text-center" cols="3">
        <BuyMeACoffeeButton />
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
import BuyMeACoffeeButton from '../BuyMeACoffeeButton';

export default {
  name: 'InfosAndLinks',
  components: {
    BuyMeACoffeeButton,
  }
};
</script>

<style scoped>
</style>
