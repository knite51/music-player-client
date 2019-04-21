<template>
  <v-container>
    <v-layout class="songsBox">
      <v-flex xs12 sm8 offset-sm2>
        <my-awesome-panel title="Songs"></my-awesome-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MyAwesomePanel from "@/components/Panel";

export default {
  components: {
    MyAwesomePanel
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
</style>
