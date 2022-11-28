require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import router from './router';

// window.Vue = require('vue');
window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('navi-component', require('./components/NaviComponent.vue').default);

const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(),
});
