<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-row justify="end">
          <v-btn @click="$emit('previous-page')">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-row>
      </v-col>

      <v-col align-self="center" cols="2">
        <v-row justify="center">
          <h1 align-center>{{ currentPage }} / {{ numberOfPages }}</h1>
        </v-row>
      </v-col>
      <v-col>
        <v-row justify="start">
          <v-btn @click="$emit('next-page')">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Pagination",
  props: ['currentPage', 'numberOfPages']
};
</script>

<style scoped>
.v-btn{
  width: 36px;
  min-width: 36px !important;
}
</style>
