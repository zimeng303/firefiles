<template>
  <div id="app">
    <div class="container">
      <div class="logo">
        <img src="@/assets/imgs/theme.png" />
      </div>
      <div class="mian-containter">
        <Nav />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
