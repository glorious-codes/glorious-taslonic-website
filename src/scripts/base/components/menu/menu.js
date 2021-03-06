import '@styles/menu.styl';
import routes from '@scripts/routes';
import { tcLink } from '@scripts/base/components/link/link';
import template from './menu.html';

export const tcMenu = {
  name: 'tc-menu',
  components: {
    tcLink
  },
  data(){
    return {
      routes: routes.filter(route => route.shouldShowInMenu)
    };
  },
  template
};
