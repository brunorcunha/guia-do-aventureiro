import Vue from 'vue';
import Vuex from 'vuex';
import pathify from 'vuex-pathify';
import createPersistedState from 'vuex-persistedstate';

import bottomNav from '@/store/modules/bottom-nav';
import persistent from '@/store/modules/persistent';
import app from '@/store/modules/app';

Vue.use(Vuex);

const persistedState = createPersistedState({
  key: 'wakfu',
  paths: ['persistent']
});

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [persistedState, pathify.plugin],
  modules: { app, bottomNav, persistent }
});

export default store;
