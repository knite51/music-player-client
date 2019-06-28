<template>
  <v-container>
    <v-layout v-if="!!song">
      <v-flex xs6>
        <song-metadata :song="song"></song-metadata>
      </v-flex>

      <v-flex xs6 class="ml-5">
        <youtube-view :youtubeID="song.youtubeID"></youtube-view>
      </v-flex>
    </v-layout>

    <v-layout class="mt-2" v-if="!!song">
      <v-flex xs12>
        <lyrics-view :lyrics="song.lyrics"></lyrics-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MyAwesomePanel from "@/components/Common/Panel";
import SongMetadata from "@/components/ViewSong/SongMetadata";
import YoutubeView from "@/components/ViewSong/YoutubeView";
import LyricsView from "@/components/ViewSong/LyricsView";
import { songServices } from "@/services";

const { getSong } = songServices;

export default {
  components: {
    MyAwesomePanel,
    SongMetadata,
    YoutubeView,
    LyricsView
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
</style>
