<template>
  <v-container class="tw-h-35" elevation="2">
    <v-row align="center" justify="center">
      <v-col cols="2">
        <v-select :items="itemsPerPageOptions" label="Channels Per Page">

        </v-select>
      </v-col>
      <v-col cols="2">
        <v-select :items="orderOptions" label="Order">

        </v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Filter",
  data: function() {
    return {
      itemsPerPage: 0,
      order: '',

      itemsPerPageOptions: [],
      orderOptions: [
        'alphabetical',
        'relevance',
        'unread'
      ]
    }
  },
  created: function () {
    for (let i = 5; i <= 50; i+=5){
      this.itemsPerPageOptions.push(i);
    }
  }
}
</script>

<style>

</style>