import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import $ from 'jquery'; // 引入jquery库
import 'bootstrap/dist/js/bootstrap.min.js'; // 引入bootstrap库

import 'bootstrap/dist/css/bootstrap.min.css';  // 引入bootstrap样式文件

import '@/assets/styles/index.scss'; // 引入静态样式文件


import './utils';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
