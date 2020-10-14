<template>
  <div id="nav">
    <nav class="navbar navbar-expand-md navbar-dark">
      <div class="menulists">
        <div>
          <!-- 按钮边框 -->
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
        <div class="navbar-collapse collapse">
          <!--右边的登录、注册、搜索功能-->
          <div class="search">
            <input type="text" placeholder="回车搜索内容" />
            <span class="glyphicon glyphicon-search" id="icon_search"></span>
          </div>
          <div class="sign">
            <router-link to="/login">Sign in</router-link>
            <router-link to="/join" class="join">Sign up</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { createNav } from "@/utils/navconfig";

const menuLists = [
  {
    name: "炫酷首页",
    path: "/",
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

export default class Nav extends Vue {
  menuLists = menuLists;
}
</script>

<style lang="scss" scoped>
</style>