import Vue from 'vue';
import VueHead from 'vue-head';
import VueRouter from 'vue-router';
import { router } from '@scripts/router';
import analyticsService from '@scripts/base/services/analytics/analytics';
import routeService from '@scripts/base/services/route/route';
import template from '@scripts/app.html';

import(/* webpackChunkName: 'native-css' */ '@styles/_native.styl');
import(/* webpackChunkName: 'hightlight' */ './vendor/hightlight').then(({ init }) => init(Vue));
import(/* webpackChunkName: 'taslonic-css' */ './vendor/taslonic');

Vue.use(VueHead, { separator: '', complement: '' });
Vue.use(VueRouter);
routeService.setRouter(router);
analyticsService.init();

new Vue({
  el: '[data-app]',
  render: h => h({ name: 'app', template }),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  },
  router
});
