<template>
  <my-awesome-panel title="View Song">
    <div class="song">
      <v-layout>
        <v-flex xs6>
          <div class="song-title">{{song.title}}</div>
          <div class="song-artist">{{song.artist}}</div>
          <div class="song-album">{{song.album}}</div>
          <div class="song-genre">{{song.genre}}</div>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" v-bind:src="song.songImageURL" alt>
          <br>
          <div class="song-album">{{song.album}}</div>
        </v-flex>
      </v-layout>
    </div>
  </my-awesome-panel>
</template>

<script>
import MyAwesomePanel from "@/components/Panel";

export default {
  name: "SongMetadata",
  components: {
    MyAwesomePanel
  },
  props: ["song"]
};
</script>
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
