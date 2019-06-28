<template>
  <v-container>
    <v-layout class="songsBox">
      <v-flex xs12 sm8 offset-sm2>
        <my-awesome-panel title="Songs">
          <router-link :to="{name: 'createSong'}" slot="action">
            <v-btn fab absolute right>
              <v-icon>add</v-icon>
            </v-btn>
          </router-link>

          <div class="song" v-for="song in songs" :key="song.id">
            <v-layout>
              <v-flex xs6>
                <div class="song-title">{{song.title}}</div>
                <div class="song-artist">{{song.artist}}</div>
                <div class="song-album">{{song.album}}</div>
                <div class="song-genre">{{song.genre}}</div>
                <v-btn
                  dark
                  class="cyan"
                  @click="navigateTo({name: 'songView', params: {songID: song.id}})"
                >View</v-btn>
              </v-flex>
              <v-flex xs6>
                <img class="album-image" v-bind:src="song.songImageURL" alt>
              </v-flex>
            </v-layout>
          </div>
        </my-awesome-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MyAwesomePanel from "@/components/Common/Panel";
import { songServices } from "@/services";

const { getAllSongs } = songServices;

export default {
  components: {
    MyAwesomePanel
  },
  data() {
    return {
      songs: null
    };
  },
  methods: {
    navigateTo(routeName) {
      this.$router.push(routeName);
    }
  },
  async mounted() {
    const response = await getAllSongs();
    this.songs = response.songs;
  }
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
