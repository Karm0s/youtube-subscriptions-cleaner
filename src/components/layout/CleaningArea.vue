<template>
  <v-container>
    <v-alert type="info" border="left" class="mb-0" colored-border elevation="2">
      Please select all the channels you want to unsubscribe from and then hit the 'Done' button at the bottom right of the page
    </v-alert>
    <FilterChannels/>
    <Channels />
    <v-btn fixed bottom right color="red" elevation="15" width="100">Done</v-btn>
  </v-container>
</template>

<script>
import FilterChannels from './FilterChannels';
import Channels from './Channels';

export default {
  name: "CleaningArea",
  components: {
    FilterChannels,
    Channels
  }
}
</script>

<style>

</style>