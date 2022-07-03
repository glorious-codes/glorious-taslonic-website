import { tCol, tRow, tButton, tBanner } from '@glorious/taslonic/vue';
import { tcCode } from '@scripts/base/components/code/code';
import { tcContainer } from '@scripts/base/components/container/container';
import { tcViewport } from '@scripts/base/components/viewport/viewport';
import seoService from '@scripts/base/services/seo/seo';
import template from './react.html';

const head = seoService.buildHead({
  title: 'React',
  description: 'You can easily plug Taslonic into your React project. Taslonic integrates smoothly with projects manually configured or generated with Create React App.',
  keywords: 'taslonic, ui, usage, react'
});

const reactView = {
  name: 'tc-react-view',
  components: {
    tBanner,
    tButton,
    tCol,
    tRow,
    tcCode,
    tcContainer,
    tcViewport
  },
  head,
  template
};

export default reactView;
