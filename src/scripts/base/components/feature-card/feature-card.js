import '@styles/feature-card.styl';
import { tcFeatureIcon } from '@scripts/base/components/feature-icon/feature-icon';
import { tcLink } from '@scripts/base/components/link/link';
import template from './feature-card.html';

export const tcFeatureCard = {
  name: 'tc-feature-card',
  components: {
    tcFeatureIcon,
    tcLink
  },
  props: ['title', 'actionHref', 'actionText', 'actionRouteName', 'iconName'],
  template
};
