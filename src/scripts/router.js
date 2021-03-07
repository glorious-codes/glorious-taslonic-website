import VueRouter from 'vue-router';
import routes from '@scripts/routes';
import home from '@scripts/home/views/home';
import installation from '@scripts/installation/views/installation';
import react from '@scripts/usage/views/react/react';
import vue from '@scripts/usage/views/vue/vue';
import fundamentals from '@scripts/fundamentals/views/fundamentals';
import principles from '@scripts/principles/views/principles';

function buildRouter(){
  const views = getViews();
  return new VueRouter({
    routes: routes.map(route => {
      route.component = views[route.name];
      return route;
    }),
    mode: 'history',
    scrollBehavior () {
      return { x: 0, y: 0 };
    }
  });
}

function getViews(){
  return {
    home,
    installation,
    vue,
    react,
    fundamentals,
    principles
  };
}

export const router = buildRouter();
