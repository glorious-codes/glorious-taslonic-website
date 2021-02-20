import '@styles/home-hero.styl';
import { tcLink } from '@scripts/base/components/link/link';
import { tcTopbar } from '@scripts/base/components/topbar/topbar';
import template from './home-hero.html';

export const tcHomeHero = {
  name: 'tc-home-hero',
  components: {
    tcLink,
    tcTopbar
  },
  template
};
