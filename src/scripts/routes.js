import homeView from '@scripts/home/views/home';
import installView from '@scripts/install/views/install';

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
  }
];

export default routes;
