import '@styles/viewport.styl';
import { tcFooter } from '@scripts/base/components/footer/footer'
import { tcSidebar } from '@scripts/base/components/sidebar/sidebar';
import { tcTopbar } from '@scripts/base/components/topbar/topbar'
import windowService from '@scripts/base/services/window/window';
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
  data(){
    return {
      windowWidth: windowService.getInnerWidth()
    };
  },
  created(){
    windowService.listen('resize', this.handleWindowResize);
  },
  beforeDestroy(){
    windowService.unlisten('resize', this.handleWindowResize);
  },
  methods: {
    handleWindowResize(){
      this.setWindowWidth(windowService.getInnerWidth())
    },
    setWindowWidth(width){
      this.windowWidth = width;
    },
  },
  computed: {
    classes(){
      return this.hideTopbar ? 'tc-viewport-topbar-hidden' : '';
    },
    isMobileScreen(){
      return this.windowWidth < 768;
    }
  },
  template
};
