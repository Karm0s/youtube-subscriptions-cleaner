<template>
  <div>
    <Pagination
    :currentPage="currentPage"
    :numberOfPages="numberOfPages"

    @previous-page="loadPreviousPage" 
    @next-page="loadNextPage"
    />

    <v-list elevation="10" class="tw-mb-5">
      <div v-for="channelInfo in channelsList" :key="channelInfo.id">
        <Channel v-bind:channelInfo="channelInfo" />

        <v-divider></v-divider>
      </div>
    </v-list>


    <Pagination
    :currentPage="currentPage"
    :numberOfPages="numberOfPages"

    @previous-page="loadPreviousPage" 
    @next-page="loadNextPage"
    />

  </div>
</template>

<script>
import Channel from "./Channel";
import Pagination from "../Pagination";

export default {
  name: "Channels",
  components: {
    Channel,
    Pagination,
  },
  props: ["filters"],
  data: function() {
    return {
      gapi: null,
      requestNumberOfItems: 0,
      nextPageToken: String,
      previousPageToken: String,
      channelsList: [],
      currentPage: 1,
    };
  },
  computed: {
    numberOfPages: function() {
      return parseInt(this.numberOfItems / this.itemsPerPage);
    },
    itemsPerPage: function() {
      if (this.filters) {
        return this.filters.itemsPerPage;
      }
      return 10;
    },
    numberOfItems: function() {
      return this.requestNumberOfItems;
    }
  },
  created: async function() {
    this.gapi = await this.$gapi.getGapiClient();
    let request = {
      part: "id, contentDetails, snippet",
      mine: true,
      maxResults: this.itemsPerPage
    };

    let response = this.gapi.client.youtube.subscriptions.list(request);
    response.execute(response => {
      this.nextPageToken = response.nextPageToken;
      this.requestNumberOfItems = response.pageInfo.totalResults;
      // Populating channelsList
      for (let i = 0; i < response.items.length; i++) {
        let item = response.items[i];
        this.channelsList.push({
          id: item.id,
          channelName: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url,
          checked: false
        });
      }
    });
  },
  methods: {
    loadNextPage: function() {
      if (this.currentPage+1 === this.numberOfPages){
        return;
      }
      this.currentPage += 1;
      this.loadPage(this.nextPageToken);
    },
    loadPreviousPage: function() {
      if(this.currentPage === 1){
        return;
      }
      this.currentPage -= 1;
      this.loadPage(this.previousPageToken);
    },
    loadPage: function (pageToken) {
      let request = {
        part: "id, contentDetails, snippet",
        mine: true,
        maxResults: this.itemsPerPage,
        pageToken: pageToken
      };

      let response = this.gapi.client.youtube.subscriptions.list(request);
      this.channelsList = [];
      response.execute(response => {
        this.nextPageToken = response.nextPageToken;
        this.previousPageToken = response.prevPageToken;
        // Populating channelsList
        for (let i = 0; i < response.items.length; i++) {
          let item = response.items[i];
          this.channelsList.push({
            id: item.id,
            channelName: item.snippet.title,
            thumbnail: item.snippet.thumbnails.default.url,
            checked: false
          });
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
