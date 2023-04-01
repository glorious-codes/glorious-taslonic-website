import { tCol, tRow } from '@glorious/taslonic-vue';
import { tcContainer } from '@scripts/base/components/container/container';
import { tcFeatureCardList } from '@scripts/base/components/feature-card-list/feature-card-list';
import { tcTopbar } from '@scripts/base/components/topbar/topbar';
import { tcViewport } from '@scripts/base/components/viewport/viewport';
import { tcHomeHero } from '@scripts/home/components/home-hero/home-hero';
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
    tCol,
    tRow,
    tcContainer,
    tcFeatureCardList,
    tcTopbar,
    tcViewport,
    tcHomeHero
  },
  head,
  template
};

export default homeView;
