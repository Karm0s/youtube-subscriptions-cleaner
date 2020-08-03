<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img :src="channelInfo.thumbnail" :lazy-src="channelInfo.thumbnail">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="black lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-text="channelInfo.channelName"></v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      <v-checkbox v-model="channelInfo.checked"></v-checkbox>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: "Channel",
  props: ["channelInfo"]
};
</script>

<style scoped></style>
