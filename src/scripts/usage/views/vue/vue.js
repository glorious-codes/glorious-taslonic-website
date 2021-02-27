import { tCol, tRow } from '@glorious/taslonic/vue';
import { tcCode } from '@scripts/base/components/code/code';
import { tcContainer } from '@scripts/base/components/container/container';
import { tcViewport } from '@scripts/base/components/viewport/viewport';
import seoService from '@scripts/base/services/seo/seo';
import template from './vue.html';

const head = seoService.buildHead({
  title: 'Vue Usage',
  description: 'You can easily plug Taslonic in your Vue project. Taslonic integrates smoothly with projects manually configured or generated with Vue CLI.',
  keywords: 'taslonic, ui, usage, vue, vue-cli'
});

const vueView = {
  name: 'tc-vue-view',
  components: {
    tCol,
    tRow,
    tcCode,
    tcContainer,
    tcViewport
  },
  head,
  template
};

export default vueView;
