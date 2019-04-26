<template>
  <v-container>
    <v-layout class="songsBox" v-if="!!song">
      <v-flex xs6>
        <song-metadata :song="song"></song-metadata>
      </v-flex>

      <v-flex xs6 class="ml-5">
        <youtube-view :youtubeID="song.youtubeID"></youtube-view>
      </v-flex>

      <!-- <v-flex xs6 class="ml-5">
        <my-awesome-panel title="Lyrics">
          <div>
            <v-layout v-if="!!song">
              <textarea readonly v-model="song.lyrics"></textarea>
            </v-layout>
          </div>
        </my-awesome-panel>
      </v-flex>-->
    </v-layout>
  </v-container>
</template>

<script>
import MyAwesomePanel from "@/components/Panel";
import SongMetadata from "@/components/ViewSong/SongMetadata";
import YoutubeView from "@/components/ViewSong/YoutubeView";
import { songServices } from "@/services";

const { getSong } = songServices;

export default {
  components: {
    MyAwesomePanel,
    SongMetadata,
    YoutubeView
  },
  data() {
    return {
      song: null
    };
  },
  methods: {},
  async mounted() {
    const songID = this.$router.history.current.params.songID;

    const response = await getSong(songID);
    this.song = response.song;
  }
};
</script>
<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  padding: 20px;
  height: 330px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
}
</style>
