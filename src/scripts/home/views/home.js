import { tcContainer } from '@scripts/base/components/container/container';
import { tcFeatureCardList } from '@scripts/base/components/feature-card-list/feature-card-list';
import { tcFooter } from '@scripts/base/components/footer/footer';
import { tcTopbar } from '@scripts/base/components/topbar/topbar';
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
    tcContainer,
    tcFeatureCardList,
    tcFooter,
    tcTopbar,
    tcHomeHero
  },
  head,
  template
};

export default homeView;
