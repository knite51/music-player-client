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
                :rules="[required(title, 'Title')]"
                v-model="title"
              ></v-text-field>
              <v-text-field label="Artist" :rules="[required(artist, 'Artist')]" v-model="artist"></v-text-field>
              <v-text-field label="Album" :rules="[required(album, 'Album')]" v-model="album"></v-text-field>
              <v-text-field label="Genre" v-model="genre"></v-text-field>
              <v-text-field label="Song Image Url" v-model="songImageURL"></v-text-field>
              <v-text-field label="Youtube ID" v-model="youtubeID"></v-text-field>
            </form>
          </my-awesome-panel>
        </div>
      </v-flex>
      <v-flex xs7 class="ml-5">
        <div>
          <my-awesome-panel title="Add Lyrics">
            <form name="songsLyric-form" autocomplete="off">
              <v-textarea label="Lyrics" multi-line v-model="lyrics"></v-textarea>
            </form>
            <v-btn class="cyan" dark @click="create">Create Song</v-btn>
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

const { createSong } = songServices;

export default {
  components: {
    MyAwesomePanel
  },
  data() {
    return {
      title: "",
      artist: "",
      album: "",
      genre: "",
      lyrics: "",
      songImageURL: "",
      youtubeID: "",
      required: (value, ruleName) => !!value || `${ruleName} is required`
    };
  },
  methods: {
    async create() {
      const requiredFields = !!this.title && !!this.artist && !!this.album;
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
          await createSong({
            title: this.title,
            artist: this.artist,
            album: this.album,
            genre: this.genre,
            lyrics: this.lyrics,
            songImageURL: this.songImageURL,
            youtubeID: this.youtubeID
          });
          Swal.fire({
            type: "success",
            position: "top-end",
            title: "Song Created Successful",
            toast: true,
            showConfirmButton: false,
            timer: 3000
          });
          this.$router.push({ name: "songs" });
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
  }
};
</script>
<style scoped>
</style>
