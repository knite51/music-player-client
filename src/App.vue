<template>
  <div id="app">
    <page-header/>
  </div>
</template>

<script>
import PageHeader from "./components/Header.vue";

export default {
  name: "app",
  components: { PageHeader }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-content__wrap {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Kravica_Waterfalls%2CBosnia_%26_Herzegovina.jpg/1600px-Kravica_Waterfalls%2CBosnia_%26_Herzegovina.jpg);
}
</style>
