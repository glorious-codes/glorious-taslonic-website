import { tCol, tRow, tButton } from '@glorious/taslonic/vue';
import { tcCode } from '@scripts/base/components/code/code';
import { tcContainer } from '@scripts/base/components/container/container';
import { tcViewport } from '@scripts/base/components/viewport/viewport';
import seoService from '@scripts/base/services/seo/seo';
import template from './vue.html';

const head = seoService.buildHead({
  title: 'Vue',
  description: 'You can easily plug Taslonic into your Vue project. Taslonic integrates smoothly with projects manually configured or generated with Vue CLI.',
  keywords: 'taslonic, ui, usage, vue, vue-cli'
});

const vueView = {
  name: 'tc-vue-view',
  components: {
    tButton,
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
