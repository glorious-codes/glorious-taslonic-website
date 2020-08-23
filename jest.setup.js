import { createLocalVue } from '@vue/test-utils';
import Taslonic from '@glorious/taslonic/dist/vue';

const Vue = createLocalVue();
Vue.use(Taslonic);

window.globalVueInstance = Vue;
