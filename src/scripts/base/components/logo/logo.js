import logoImagePath from '@images/logo.svg';
import template from './logo.html';

export const tcLogo = {
  name: 'tc-logo',
  props: {
    width: {
      type: String,
      default: '150'
    },
    height: {
      type: String,
      default: '25'
    }
  },
  data(){
    return {
      src: logoImagePath
    };
  },
  template
};
