import '@styles/code.styl';
import template from './code.html';

export const tcCode = {
  name: 'tc-code',
  props: {
    lang: {
      type: String,
      default: 'javascript'
    }
  },
  template
};
