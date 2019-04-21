gadr<template>
  <v-app color="grey lighten-4" flat>
    <v-toolbar color="grey darken-1" dark fixed app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-btn flat dark class="ml-2" @click="navigateTo({name: 'root'})">Music Player</v-btn>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat dark class="ml-2" @click="navigateTo({name: 'songs'})">Browse</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
        <v-btn flat dark class="ml-2" @click="navigateTo({name: 'login'})">Login</v-btn>

        <v-btn flat dark class="ml-2" @click="navigateTo({name: 'register'})">Register</v-btn>
      </v-toolbar-items>

      <v-toolbar-items v-if="$store.state.isUserLoggedIn">
        <v-btn flat dark class="ml-2" @click="logout">Logout</v-btn>
      </v-toolbar-items>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer dark clipped fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer :inset="footer.inset" app color="blue-grey" dark>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      left: false,
      footer: {
        inset: false
      }
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("handleSetToken", null);
      this.$store.dispatch("handleSetUser", null);
    }
  }
};
</script>

<style scoped>
</style>

