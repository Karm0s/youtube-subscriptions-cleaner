<template>
  <div class="tw-h-56 tw-flex tw-container tw-justify-center tw-items-center tw-flex-col tw-mx-auto">
    <div>
      <p class="tw-text-1xl tw-text-center tw-text-gray-700">
        To start cleaning your Youtube subscription list, please login using
        this button below
      </p>
    </div>
    <div>
      <GoogleSignInBtn label="Sign In" @click="$emit('google-signin-button-click')" />
    </div>
  </div>
</template>

<script>
import GoogleSignInBtn from './GoogleSigninButton';

export default {
  name: 'GoogleAuth',
  components: {
    GoogleSignInBtn,
  }

};
</script>

<style scoped></style>
