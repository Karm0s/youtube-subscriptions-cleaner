<template>
  <v-container elevation="2">
    <v-row align="center" justify="center">
      <v-col sm="3">
        <v-select :items="itemsPerPageOptions" v-model="itemsPerPage" @change="changeChannelsPerPage" label="Channels Per Page">
        </v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Filters",
  data: function() {
    return {
      itemsPerPage: 5,
      channelsOrder: "unread",

      itemsPerPageOptions: [5, 10, 20, 40],
      orderOptions: ["alphabetical", "relevance", "unread"]
    };
  },
  created: function() {
    // for (let i = 5; i <= 50; i += 5) {
    //   this.itemsPerPageOptions.push(i);
    // }

    this.updateChannelsPerPage(this.itemsPerPage);
    this.updateChannelsOrder(this.channelsOrder);
  },
  methods: {
    ...mapActions(["updateChannelsPerPage", "updateChannelsOrder"]),

    changeChannelsPerPage: function (choice) {
      this.updateChannelsPerPage(choice);
    },
    changeChannelsOrder: function (choice) {
      this.updateChannelsOrder(choice);
    }
  }
};
</script>

<style></style>
