import '@styles/viewport.styl';
import { tcFooter } from '@scripts/base/components/footer/footer'
import { tcSidebar } from '@scripts/base/components/sidebar/sidebar';
import { tcTopbar } from '@scripts/base/components/topbar/topbar'
import template from './viewport.html';

export const tcViewport = {
  name: 'tc-viewport',
  components: {
    tcFooter,
    tcSidebar,
    tcTopbar
  },
  props: {
    hideTopbar: {
      type: Boolean
    }
  },
  computed: {
    classes(){
      return this.hideTopbar ? 'tc-viewport-topbar-hidden' : '';
    }
  },
  template
};
