import { tButton, tCol, tRow } from '@glorious/taslonic-vue';
import { tcCode } from '@scripts/base/components/code/code';
import { tcContainer } from '@scripts/base/components/container/container';
import { tcLink } from '@scripts/base/components/link/link';
import { tcSection } from '@scripts/base/components/section/section';
import { tcViewport } from '@scripts/base/components/viewport/viewport';
import seoService from '@scripts/base/services/seo/seo';
import template from './fundamentals.html';

const head = seoService.buildHead({
  title: 'Fundamentals',
  description: 'Taslonic components help you to get rid of the trivial work present in your daily routine. It makes you think less about the means and turns your energy and care to what matters, the end.',
  keywords: 'taslonic, ui, components, vue, react, fundamentals, principles'
});

const fundamentalsView = {
  name: 'tc-fundamentals-view',
  components: {
    tButton,
    tCol,
    tRow,
    tcCode,
    tcContainer,
    tcLink,
    tcSection,
    tcViewport
  },
  head,
  template
};

export default fundamentalsView;
