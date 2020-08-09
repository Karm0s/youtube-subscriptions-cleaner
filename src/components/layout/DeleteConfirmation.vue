<template>
  <v-row justify="center">
    <v-dialog v-model="showDialog" scrollable persistent max-width="300px">
      <v-card>
        <v-card-title>
          <span class="headline">All these subscriptions will be deleted:</span>
        </v-card-title>
        <v-card-text>
          <v-container v-for="channel in getChannelsToDelete" :key="channel.id" column>
            <p>{{ channel.channelName }}</p>
          </v-container>
        </v-card-text>
        <v-card-actions>

          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="$emit('dialog-confirm', false)"
          >
            Cancel
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="$emit('dialog-confirm', true)"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  props: ["dialog"],
  computed: {
    ...mapGetters(["getChannelsToDelete"]),
    showDialog: {
      get: function() {
        return this.dialog;
      },
      set: function(newValue) {
        this.$emit("update-dialog", newValue);
      }
    }
  }
};
</script>

<style scoped></style>
