module.exports = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: 'home' */ './home/views/home')
  },
  {
    path: '/installation',
    name: 'installation',
    component: () => import(/* webpackChunkName: 'installation' */ './installation/views/installation'),
  },
  {
    path: '/vue',
    name: 'vue',
    component: () => import(/* webpackChunkName: 'usage-vue' */ './usage/views/vue/vue'),
    shouldShowInMenu: true
  },
  {
    path: '/react',
    name: 'react',
    component: () => import(/* webpackChunkName: 'usage-react' */ './usage/views/react/react'),
    shouldShowInMenu: true
  },
  {
    path: '/fundamentals',
    name: 'fundamentals',
    component: () => import(/* webpackChunkName: 'fundamentals' */ './fundamentals/views/fundamentals'),
    shouldShowInMenu: true
  },
  {
    path: '/principles',
    name: 'principles',
    component: () => import(/* webpackChunkName: 'principles' */ './principles/views/principles')
  }
];
