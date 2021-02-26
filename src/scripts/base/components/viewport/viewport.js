import '@styles/viewport.styl';
import { tcFooter } from '@scripts/base/components/footer/footer'
import { tcTopbar } from '@scripts/base/components/topbar/topbar'
import template from './viewport.html';

export const tcViewport = {
  name: 'tc-viewport',
  components: {
    tcTopbar,
    tcFooter
  },
  template
};
