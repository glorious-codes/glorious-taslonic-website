import homeView from '@scripts/home/views/home';
import installationView from '@scripts/installation/views/installation';
import reactView from '@scripts/usage/views/react/react';
import vueView from '@scripts/usage/views/vue/vue';
import fundamentalsView from '@scripts/fundamentals/views/fundamentals';
import principlesView from '@scripts/principles/views/principles';

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/installation',
    name: 'installation',
    component: installationView
  },
  {
    path: '/react',
    name: 'react-usage',
    component: reactView
  },
  {
    path: '/vue',
    name: 'vue-usage',
    component: vueView
  },
  {
    path: '/fundamentals',
    name: 'fundamentals',
    component: fundamentalsView
  },
  {
    path: '/principles',
    name: 'principles',
    component: principlesView
  }
];

export default routes;
