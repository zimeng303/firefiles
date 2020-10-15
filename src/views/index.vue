<template>
  <div id="Home">
    <Header />
    <div class="container">
      <div class="logo">
        <img src="@/assets/imgs/theme.png" />
      </div>
      <div class="mian-containter">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import Header from "@/components/Header/index.vue";

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="sass" scoped>

</style>