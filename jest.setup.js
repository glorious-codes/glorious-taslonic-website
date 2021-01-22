import { createLocalVue } from '@vue/test-utils';
import taslonic from '@glorious/taslonic/vue-plugin';

const Vue = createLocalVue();
Vue.use(taslonic);

window.globalVueInstance = Vue;
