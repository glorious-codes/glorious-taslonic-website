import '@styles/home-hero.styl';
import { tButton } from '@glorious/taslonic-vue';
import { tcLink } from '@scripts/base/components/link/link';
import { tcTopbar } from '@scripts/base/components/topbar/topbar';
import template from './home-hero.html';

export const tcHomeHero = {
  name: 'tc-home-hero',
  components: {
    tButton,
    tcLink,
    tcTopbar
  },
  data(){
    return {
      shouldShowStarActionList: false
    };
  },
  mounted(){
    setTimeout(() => {
      this.shouldShowStarActionList = true
    }, 300);
  },
  template
};
