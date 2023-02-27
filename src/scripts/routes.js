module.exports = [
  {
    path: '/',
    name: 'home',
    component: () => import('./home/views/home')
  },
  {
    path: '/installation',
    name: 'installation',
    component: () => import('./installation/views/installation'),
    shouldShowInMenu: true
  },
  {
    path: '/vue',
    name: 'vue',
    component: () => import('./usage/views/vue/vue'),
    shouldShowInMenu: true
  },
  {
    path: '/react',
    name: 'react',
    component: () => import('./usage/views/react/react'),
    shouldShowInMenu: true
  },
  {
    path: '/fundamentals',
    name: 'fundamentals',
    component: () => import('./fundamentals/views/fundamentals'),
    shouldShowInMenu: true
  },
  {
    path: '/principles',
    name: 'principles',
    component: () => import('./principles/views/principles')
  }
];
