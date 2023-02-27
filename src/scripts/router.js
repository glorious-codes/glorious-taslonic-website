import VueRouter from 'vue-router';
import routes from '@scripts/routes';

function buildRouter(){
  return new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior () {
      return { x: 0, y: 0 };
    }
  });
}

export const router = buildRouter();
