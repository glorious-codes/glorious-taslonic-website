import '@styles/link.styl'
import template from './link.html';

export const tcLink = {
  name: 'tc-link',
  props: {
    href: {
      type: String
    },
    routeName: {
      type: String
    },
    ariaLabel: {
      type: String
    }
  },
  template
};
