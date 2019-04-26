import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Songs from '@/components/Songs';
import SongsForm from '@/components/SongsForm';
import SongView from '@/components/ViewSong/Index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songsForm',
      component: SongsForm
    },
    {
      path: '/song/:songID',
      name: 'songView',
      component: SongView
    }
  ]
});
