import 'highlight.js/styles/atom-one-light.css';
import VueHighlightJS from 'vue-highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';

export function init(Vue){
  Vue.use(VueHighlightJS, { languages: { javascript, xml } });
}
