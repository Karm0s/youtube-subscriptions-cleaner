<template>
  <v-row justify="center">
    <v-dialog v-model="showAboutDialog" width="600px">
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template> -->
      <v-card>
        <v-card-title>
          <span class="text-h4">About</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <p class="text-h6 black--text">What is Subs Cleaner?</p>
              <p>
                Subs Cleaner is web app made to unsubscribe from channels with one button click.
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <p class="text-h6 black--text">Why I made this web app</p>
              <p>
                I made this app to make my portfolio and Github profiles look more attractive, and also
                improve my Vue.js skills.
              </p>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="$emit('update-dialog', false)"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["dialog"],
  computed: {
    showAboutDialog: {
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
