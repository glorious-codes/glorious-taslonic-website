import { tCol, tRow, tButton } from '@glorious/taslonic-vue';
import { tcCode } from '@scripts/base/components/code/code';
import { tcContainer } from '@scripts/base/components/container/container';
import { tcViewport } from '@scripts/base/components/viewport/viewport';
import seoService from '@scripts/base/services/seo/seo';
import template from './installation.html';

const head = seoService.buildHead({
  title: 'Installation',
  description: 'You can install Taslonic in your project either using a Package Manager or getting it directly from a CDN.',
  keywords: 'taslonic, ui, components, installation, react, vue, npm, yarn'
});

const installView = {
  name: 'tc-install-view',
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

export default installView;
