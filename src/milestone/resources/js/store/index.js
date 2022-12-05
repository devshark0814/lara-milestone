import Vue from "vue";
import Vuex from "vuex";

import { datas } from './modules';

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    datas
  },
  plugins: [createPersistedState({
    key: '@milestone',
    storage: window.localStorage,
  })]
});