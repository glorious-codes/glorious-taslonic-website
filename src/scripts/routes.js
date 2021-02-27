import homeView from '@scripts/home/views/home';
import installView from '@scripts/install/views/install';
import reactView from '@scripts/usage/views/react/react';
import vueView from '@scripts/usage/views/vue/vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/get-started',
    name: 'install',
    component: installView
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
  }
];

export default routes;
