import '@styles/logo.styl';
import logoImagePath from '@images/logo.svg';
import template from './logo.html';

export const tcLogo = {
  name: 'tc-logo',
  data(){
    return {
      src: logoImagePath
    };
  },
  template
};
