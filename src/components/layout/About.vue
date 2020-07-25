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
          <span class="headline">What is Subs Cleaner?</span>
        </v-card-title>
        <v-card-text>
            Subs Cleaner is web app made to help you clean your Youtube subscription.
            Because Youtube's way is really not optimized.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('update-dialog', false)">Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    data () {
      return {
      }
    },
    props: ['dialog'],
    computed: {
        showAboutDialog: {
            get: function() {
                return this.dialog;
            },
            set: function(newValue) {
                this.$emit('update-dialog', newValue);
            }
        } 
    }
}

</script>

<style scoped></style>
