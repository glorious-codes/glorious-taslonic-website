import '@styles/topbar.styl';
import rasket from '@glorious/rasket';
import { tButton } from '@glorious/taslonic-vue';
import { MENU_BUTTON_CLICKED } from '@scripts/base/constants/events';
import { tcIcon } from '@scripts/base/components/icon/icon';
import { tcLink } from '@scripts/base/components/link/link';
import { tcLogo } from '@scripts/base/components/logo/logo';
import { tcMenu } from '@scripts/base/components/menu/menu';
import windowService from '@scripts/base/services/window/window';
import template from './topbar.html';

export const tcTopbar = {
  name: 'tc-topbar',
  components: {
    tButton,
    tcIcon,
    tcLink,
    tcLogo,
    tcMenu
  },
  props: ['logoWidth', 'logoHeight'],
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
    onMenuButtonClick(){
      rasket.publish(MENU_BUTTON_CLICKED);
    }
  },
  computed: {
    isMobileScreen(){
      return this.windowWidth < 768;
    }
  },
  template
};
