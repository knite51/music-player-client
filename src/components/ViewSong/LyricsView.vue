<template>
  <my-awesome-panel title="Lyrics">
    <div>
      <v-layout v-if="!!lyrics">
        <textarea readonly v-model="lyrics"></textarea>
      </v-layout>
    </div>
  </my-awesome-panel>
</template>

 <script>
import MyAwesomePanel from "@/components/Common/Panel";

export default {
  name: "LyricsView",
  components: {
    MyAwesomePanel
  },
  props: ["lyrics"]
};
</script>
 
 <style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  padding: 20px;
  height: 130px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
}
</style>
 