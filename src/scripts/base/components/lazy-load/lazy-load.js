import fyzer from '@glorious/fyzer';
import template from './lazy-load.html';

export const tcLazyLoad = {
  name: 'tc-lazy-load',
  data(){
    return {
      isAbovePageFold: false,
      subscriptionId: null
    };
  },
  mounted(){
    this.subscriptionId = fyzer.subscribe(this.$el, this.onBecomeVisible);
  },
  destroyed(){
    this.subscriptionId && fyzer.unsubscribe(this.subscriptionId);
  },
  methods: {
    onBecomeVisible(){
      fyzer.unsubscribe(this.subscriptionId);
      this.isAbovePageFold = true;
    }
  },
  template
};
