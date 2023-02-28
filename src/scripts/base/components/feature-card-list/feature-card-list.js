import '@styles/feature-card-list.styl';
import { tcFeatureCard } from '@scripts/base/components/feature-card/feature-card';
import { tcLazyLoad } from '@scripts/base/components/lazy-load/lazy-load';
import template from './feature-card-list.html';

export const tcFeatureCardList = {
  name: 'tc-feature-card-list',
  components: {
    tcFeatureCard,
    tcLazyLoad
  },
  template
};
