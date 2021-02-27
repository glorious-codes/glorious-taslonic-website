import { tCol, tRow } from '@glorious/taslonic/vue';
import { tcCode } from '@scripts/base/components/code/code';
import { tcContainer } from '@scripts/base/components/container/container';
import { tcViewport } from '@scripts/base/components/viewport/viewport';
import seoService from '@scripts/base/services/seo/seo';
import template from './react.html';

const head = seoService.buildHead({
  title: 'React Usage',
  description: 'You can easily plug Taslonic in your React project. Taslonic integrates smoothly with projects manually configured or generated with Create React App.',
  keywords: 'taslonic, ui, usage, react'
});

const reactView = {
  name: 'tc-react-view',
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

export default reactView;
