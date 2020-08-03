<template>
  <div>
    <Pagination
      :currentPage="currentPage"
      :numberOfPages="getTotalChannelsNumber"
      @previous-page="loadPreviousPage"
      @next-page="loadNextPage"
    />

    <!-- <v-list elevation="10" class="tw-mb-5">
      <div v-for="channelInfo in channelsList" :key="channelInfo.id">
        <Channel v-bind:channelInfo="channelInfo" />

        <v-divider></v-divider>
      </div>
    </v-list> -->
    <v-list elevation="10" class="tw-mb-5">
      <div v-for="channelInfo in channelsToRender" :key="channelInfo.id">
        <Channel v-bind:channelInfo="channelInfo" />

        <v-divider></v-divider>
      </div>
    </v-list>

    <Pagination
      :currentPage="currentPage"
      :numberOfPages="getTotalChannelsNumber"
      @previous-page="loadPreviousPage"
      @next-page="loadNextPage"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Channel from "./Channel";
import Pagination from "../Pagination";

export default {
  name: "Channels",
  components: {
    Channel,
    Pagination
  },
  props: ["filters"],
  data: function() {
    return {
      index: 0,
      size: 10,
      currentPage: 1,
      channelsToRender: []
    };
  },
  computed: mapGetters([
    "getChannels",
    "channelsAvailible",
    "getItemPerPage",
    "getTotalChannelsNumber"
  ]),
  created: function() {
    this.loadGapi(this); // loading the Google API
    this.loadChannels().then(() => this.channelsToRender = this.getChannels.slice(0, this.size));
    // this.loadNextPage();
  },
  methods: {
    ...mapActions(["loadGapi", "loadChannels"]),
    loadNextPage: async function() {
      if (this.getChannels.length <= this.index + this.size) {
        await this.loadChannels();
      }
      this.index += this.size;

      this.channelsToRender = this.getChannels.slice(
        this.index,
        this.index + this.size
      );
      // console.log(this.getChannels.slice(this.index, this.index + this.size));

      this.currentPage += 1;
    },
    loadPreviousPage: function() {
      if (this.currentPage - 1 === 0) {
        return;
      }
      this.index -= this.size;
      if (this.index < 0) {
        this.index = 0;
      }
      this.channelsToRender = this.getChannels.slice(
        this.index,
        this.index + this.size - 1
      );
      this.currentPage -= 1;
    }
  }
};
</script>

<style scoped></style>
