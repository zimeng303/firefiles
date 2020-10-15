<template>
  <div id="header">
    <div class="logo">
      <a href="/">
        <img src="@/assets/imgs/icon.png" />
      </a>
    </div>
    <nav class="navbar navbar-expand-md navbar-dark">
      <div class="menulists">
        <div class="toggler-icon">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <!-- 方框里面三条线 -->
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li
              class="nav-item"
              v-for="(item, index) in menuLists"
              :key="index"
            >
              <router-link class="nav-link" :to="item.path"
                >{{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="handles">
        <!--右边的登录、注册-->
        <div class="search">
          <input type="text" placeholder="回车搜索内容" />
          <span class="glyphicon glyphicon-search" id="icon_search"></span>
        </div>
        <div class="sign">
          <a href="/login">Sign in</a>
          <a href="/join" class="join">Sign up</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

const menuLists = [
  {
    name: "炫酷首页",
    path: "/home",
  },
  {
    name: "案例展示",
    path: "/caseshow",
  },
  {
    name: "影集赏析",
    path: "/",
  },
  {
    name: "教程集锦",
    path: "/",
  },
  {
    name: "问题集锦",
    path: "/",
  },
  {
    name: "联系小主",
    path: "/",
  },
];

@Component
export default class Header extends Vue {
  menuLists = menuLists;
}
</script>

<style lang="scss" scoped>
</style>