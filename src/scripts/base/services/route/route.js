import analyticsService from '@scripts/base/services/analytics/analytics';

const _public = {};

let router;

_public.setRouter = routerInstance => {
  router = routerInstance;
  startTrackingRouteNavigation();
};

function startTrackingRouteNavigation(){
  router.afterEach(() => {
    window.scrollTo(0,0);
    setTimeout(() => analyticsService.trackPageView())
  });
}

export default _public;
