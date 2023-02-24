import VueRouter from 'vue-router';
import routesMock from '@scripts/base/mocks/routes';
import analyticsService from '@scripts/base/services/analytics/analytics';
import routeService from './route';

describe('Route Service', () => {
  let router;

  function mockRouterInstance(){
    router = new VueRouter({
      routes: routesMock
    });
  }

  function stubRouterPush(){
    router.push = jest.fn();
  }

  beforeEach(() => {
    mockRouterInstance();
    window.scrollTo = jest.fn();
    analyticsService.trackPageView = jest.fn();
    routeService.setRouter(router);
  });

  it('should track route navigation', done => {
    router.afterHooks[0]();
    setTimeout(() => {
      expect(window.scrollTo).toHaveBeenCalledWith(0,0);
      expect(analyticsService.trackPageView).toHaveBeenCalled();
      done();
    });
  });
});
