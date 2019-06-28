import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Songs from "@/components/Songs";
import CreateSong from "@/components/CreateSong";
import SongView from "@/components/ViewSong/Index";
import EditSong from "@/components/EditSong";
import SpeechView from "@/components/Speech/SpeechView";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: HelloWorld,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/songs",
      name: "songs",
      component: Songs,
    },
    {
      path: "/songs/create",
      name: "createSong",
      component: CreateSong,
    },
    {
      path: "/song/:songID",
      name: "songView",
      component: SongView,
    },
    {
      path: "/song/:songID/edit",
      name: "editSong",
      component: EditSong,
    },
    {
      path: "/speechService",
      name: "speechApi",
      component: SpeechView,
    },
  ],
});
