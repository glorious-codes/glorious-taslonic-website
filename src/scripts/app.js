import '@glorious/taslonic/taslonic.css';
import 'highlight.js/styles/atom-one-light.css';
import '@styles/_native.styl';
import Vue from 'vue';
import VueHead from 'vue-head';
import VueRouter from 'vue-router';
import VueHighlightJS from 'vue-highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import { router } from '@scripts/router';
import analyticsService from '@scripts/base/services/analytics/analytics';
import template from '@scripts/app.html';

Vue.use(VueHead, { separator: '', complement: '' });
Vue.use(VueRouter);
Vue.use(VueHighlightJS, { languages: { javascript, xml } });

const app = { name: 'app', template };

analyticsService.init();

/* eslint-disable no-unused-vars */
const mountedApp = new Vue({
  el: '[data-app]',
  render: h => h(app),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  },
  router
});
