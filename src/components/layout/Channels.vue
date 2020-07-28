<template>
  <v-list elevation="10" class="tw-mb-20">
    <template v-for="index in 15">
      <v-list-item :key="index">
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/store.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Pewdiepie</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-checkbox></v-checkbox>
        </v-list-item-action>
      </v-list-item>
      
      <v-divider :key="index"></v-divider>
    </template>

    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://cdn.vuetifyjs.com/images/cards/store.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Pewdiepie</v-list-item-title>
      </v-list-item-content>

      <v-list-item-action>
        <v-checkbox></v-checkbox>
      </v-list-item-action>
    </v-list-item>

    <v-divider></v-divider>
  </v-list>
</template>

<script>
export default {
  name: "Channels"
};
</script>

<style scoped>
</style>
