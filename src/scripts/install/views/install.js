import { tCol, tRow } from '@glorious/taslonic/vue';
import { tcCode } from '@scripts/base/components/code/code';
import { tcContainer } from '@scripts/base/components/container/container';
import { tcViewport } from '@scripts/base/components/viewport/viewport';
import seoService from '@scripts/base/services/seo/seo';
import template from './install.html';

const head = seoService.buildHead({
  title: 'Get Started',
  description: 'Get started with Taslonic. A component library that makes form creation and data fetching really simple.',
  keywords: 'taslonic, ui, components, form creation, react, vue, data fetching'
});

const installView = {
  name: 'tc-install-view',
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

export default installView;
