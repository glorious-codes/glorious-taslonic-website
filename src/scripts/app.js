import '@glorious/taslonic/dist/taslonic.css';
import '@styles/_native.styl';
import Vue from '@vue';
import VueHead from 'vue-head';
import VueRouter from 'vue-router';
import Taslonic from '@glorious/taslonic/dist/vue';
import routes from '@scripts/routes';
import template from '@scripts/app.html';

Vue.use(VueHead, {
  separator: '',
  complement: ''
});
Vue.use(VueRouter);
Vue.use(Taslonic);

const router = new VueRouter({ routes, mode: 'history' });
const app = { name: 'app', template };

/* eslint-disable no-unused-vars */
const mountedApp = new Vue({
  el: '[data-app]',
  render: h => h(app),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  },
  router
});
