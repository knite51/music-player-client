<template>
  <my-awesome-panel title="Youtube Video">{{youtubeID}}</my-awesome-panel>
</template>
<script>
import MyAwesomePanel from "@/components/Panel";

export default {
  name: "YoutubeView",
  components: {
    MyAwesomePanel
  },
  props: ["youtubeID"]
};
</script>
<style scoped>
</style>
