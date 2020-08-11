<template>
  <v-container>
    <DeleteConfirmation :dialog="showDeleteConfirmDialog" @dialog-confirm="handleDialogResponse"/>
    <v-alert type="info" border="left" class="mb-0" colored-border elevation="2">
      Please select all the channels you want to unsubscribe from and then hit the 'Done' button at the bottom right of the page
    </v-alert>
    <Filters />
    <Channels />
    <v-btn fixed bottom right color="red" elevation="15" width="100" @click="doneClick">Done</v-btn>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Filters from './Filters';
import Channels from './Channels';
import DeleteConfirmation from './DeleteConfirmation';

export default {
  name: "CleaningArea",
  data: function () {
    return {
      showDeleteConfirmDialog: false,
    }
  },
  components: {
    Filters,
    Channels,
    DeleteConfirmation
  },
  methods: {
    ...mapActions([
      'extractSubscriptionsToDelete',
      'deleteSubscriptions',
      'removeDeletedChannels',

      'updateCurrentComponent',
    ]),
    doneClick: function () {
      this.extractSubscriptionsToDelete();
      this.showDeleteConfirmDialog = true;
    },
    handleDialogResponse: function (confirmed) {
      this.showDeleteConfirmDialog = false;
      if (!confirmed){
        return;
      }
      this.deleteSubscriptions();
      this.removeDeletedChannels();
      
      this.updateCurrentComponent('InfosAndLinks');
    }
  }
}
</script>

<style>

</style>