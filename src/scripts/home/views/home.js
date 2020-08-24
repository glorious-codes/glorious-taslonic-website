import { tcContainer } from '@scripts/base/components/container/container';
import { tcLogo } from '@scripts/base/components/logo/logo';
import seoService from '@scripts/base/services/seo/seo';
import template from './home.html';

const head = seoService.buildHead({
  title: 'Taslonic',
  description: 'Glorious components for Vue & React.',
  keywords: 'taslonic, ui, components, declarative, react, vue'
});

const homeView = {
  name: 'tc-home-view',
  components: {
    tcContainer,
    tcLogo
  },
  head,
  template
};

export default homeView;
