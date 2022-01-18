import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueHead from 'vue-head';
import VueGtag from 'vue-gtag';

Vue.use(VueHead, {
  separator: '◉',
  complement: 'Guia do Aventureiro'
});

Vue.use(VueGtag, {
  config: { id: 'G-CYMNH9VBLG' }
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
