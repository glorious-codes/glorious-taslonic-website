import '@styles/container.styl';
import { tContainer } from '@glorious/taslonic-vue';
import template from './container.html';

export const tcContainer = {
  name: 'tc-container',
  components: {
    tContainer
  },
  props: {
    size: String,
    default: 'lg'
  },
  template
};
