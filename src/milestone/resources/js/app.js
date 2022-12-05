require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import store from "@/store/index.js";
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors'
import router from './router';

// window.Vue = require('vue');
window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#77c4bb",
        secondary: "#addbd5",
        tertiary: "#d1ebe7",
        accent: "#dbadb4",
        error: "#c47882",
      },
    },
  },
}

Vue.component('navi-component', require('./components/NaviComponent.vue').default);

const app = new Vue({
  el: '#app',
  router,
  store: store,
  vuetify: new Vuetify(opts),
});
