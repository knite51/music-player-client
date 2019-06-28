<template>
  <v-container>
    <v-layout class="loginBox">
      <v-flex xs5>
        <div>
          <my-awesome-panel title="Add New Song">
            <form name="songs-form" autocomplete="off">
              <v-text-field
                label="Title"
                required
                :rules="[required(song.title, 'Title')]"
                v-model="song.title"
              ></v-text-field>
              <v-text-field
                label="Artist"
                :rules="[required(song.artist, 'Artist')]"
                v-model="song.artist"
              ></v-text-field>
              <v-text-field
                label="Album"
                :rules="[required(song.album, 'Album')]"
                v-model="song.album"
              ></v-text-field>
              <v-text-field label="Genre" v-model="song.genre"></v-text-field>
              <v-text-field label="Song Image Url" v-model="song.songImageURL"></v-text-field>
              <v-text-field label="Youtube ID" v-model="song.youtubeID"></v-text-field>
            </form>
          </my-awesome-panel>
        </div>
      </v-flex>
      <v-flex xs7 class="ml-5">
        <div>
          <my-awesome-panel title="Add Lyrics">
            <form name="songsLyric-form" autocomplete="off">
              <v-textarea label="Lyrics" multi-line v-model="song.lyrics"></v-textarea>
            </form>
            <v-btn class="cyan" dark @click="update">Update Song</v-btn>
          </my-awesome-panel>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";
import MyAwesomePanel from "@/components/Common/Panel";
import { songServices } from "@/services";

const { getSong, editSong } = songServices;

export default {
  components: {
    MyAwesomePanel
  },
  data() {
    return {
      song: {
        title: "",
        artist: "",
        album: "",
        genre: "",
        lyrics: "",
        songImageURL: "",
        youtubeID: ""
      },
      songID: this.$router.history.current.params.songID,
      required: (value, ruleName) => !!value || `${ruleName} is required`
    };
  },
  methods: {
    async update() {
      const requiredFields =
        !!this.song.title && !!this.song.artist && !!this.song.album;
      if (!requiredFields) {
        Swal.fire({
          title: `Please Fill all required Fields`,
          type: "error",
          position: "top-end",
          toast: true,
          showConfirmButton: false,
          timer: 3000
        });
      } else {
        try {
          await editSong(this.song);
          Swal.fire({
            type: "success",
            position: "top-end",
            title: "Song Created Successful",
            toast: true,
            showConfirmButton: false,
            timer: 3000
          });
          this.$router.push({
            name: "songs",
            params: {
              songID: this.songID
            }
          });
        } catch (error) {
          Swal.fire({
            title: `${error.message}`,
            type: "error",
            position: "top-end",
            toast: true,
            showConfirmButton: false,
            timer: 3000
          });
        }
      }
    }
  },
  async mounted() {
    const response = await getSong(this.songID);
    this.song = response.song;
  }
};
</script>
<style scoped>
</style>
 