import { tCol, tRow } from '@glorious/taslonic/vue';
import { tcCode } from '@scripts/base/components/code/code';
import { tcContainer } from '@scripts/base/components/container/container';
import { tcViewport } from '@scripts/base/components/viewport/viewport';
import seoService from '@scripts/base/services/seo/seo';
import template from './principles.html';

const head = seoService.buildHead({
  title: 'Principles',
  description: 'The component-based architecture was one of the awesome things that happen to the front-end development in the last years. But little by little, those early and simple components have started to give place to truly complex ones. Taslonic follows a couple of principles to radically change this.',
  keywords: 'taslonic, principles, html, productivity'
});

const principlesView = {
  name: 'tc-principles-view',
  components: {
    tCol,
    tRow,
    tcCode,
    tcContainer,
    tcViewport
  },
  head,
  template
};

export default principlesView;
