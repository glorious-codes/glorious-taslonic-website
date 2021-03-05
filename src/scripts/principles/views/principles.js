import { tCol, tRow, tButton } from '@glorious/taslonic/vue';
import { tcCode } from '@scripts/base/components/code/code';
import { tcContainer } from '@scripts/base/components/container/container';
import { tcSection } from '@scripts/base/components/section/section';
import { tcViewport } from '@scripts/base/components/viewport/viewport';
import seoService from '@scripts/base/services/seo/seo';
import template from './principles.html';

const head = seoService.buildHead({
  title: 'Principles',
  description: 'The Component-Based architecture was one of the best things that happened to front-end development in the last years. But little by little, those early and simple components have started to give place to truly complex ones. Unfortunately, the initial happiness is getting lost as we realize those components are no longer fun as they used to be. Taslonic aims to change this.',
  keywords: 'taslonic, principles, html, productivity'
});

const principlesView = {
  name: 'tc-principles-view',
  components: {
    tButton,
    tCol,
    tRow,
    tcCode,
    tcContainer,
    tcSection,
    tcViewport
  },
  head,
  template
};

export default principlesView;
