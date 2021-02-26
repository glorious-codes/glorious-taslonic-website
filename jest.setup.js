import { createLocalVue } from '@vue/test-utils';
import VueHighlightJS from 'vue-highlight.js';

const Vue = createLocalVue();
Vue.use(VueHighlightJS);

window.globalVueInstance = Vue;
