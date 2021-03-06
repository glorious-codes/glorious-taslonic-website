import '@styles/sidebar.styl';
import rasket from '@glorious/rasket';
import { tButton } from '@glorious/taslonic/vue';
import { MENU_BUTTON_CLICKED } from '@scripts/base/constants/events';
import { tcIcon } from '@scripts/base/components/icon/icon';
import { tcMenu } from '@scripts/base/components/menu/menu';
import template from './sidebar.html';

export const tcSidebar = {
  name: 'tc-sidebar',
  components: {
    tButton,
    tcIcon,
    tcMenu
  },
  data(){
    return {
      isVisible: false,
      subscriptionId: null
    };
  },
  created(){
    this.setSubscriptionId(rasket.subscribe(MENU_BUTTON_CLICKED, this.onMenuButtonClick))
  },
  beforeDestroy(){
    rasket.unsubscribe(this.subscriptionId);
  },
  methods: {
    onMenuButtonClick(){
      this.setVisibility(true);
    },
    setVisibility(isVisible){
      this.isVisible = isVisible;
    },
    setSubscriptionId(subscriptionId){
      this.subscriptionId = subscriptionId;
    }
  },
  computed: {
    classes(){
      return this.isVisible ? '' : 'tc-sidebar-hidden';
    }
  },
  template
}
