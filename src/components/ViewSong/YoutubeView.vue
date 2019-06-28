<template>
  <my-awesome-panel title="Youtube Video">
    <youtube :video-id="youtubeID" :player-width="500" :player-height="320"></youtube>
  </my-awesome-panel>
</template>

<script>
import MyAwesomePanel from "@/components/Common/Panel";

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
