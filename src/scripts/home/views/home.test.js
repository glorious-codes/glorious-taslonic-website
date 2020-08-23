import { shallowMount } from '@vue/test-utils';
import { tcLogo } from '@scripts/base/components/logo/logo';
import homeView from './home';

describe('Home View', () => {
  function mount(){
    return shallowMount(homeView, { localVue: globalVueInstance });
  }

  it('should contain a logo', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcLogo).length).toEqual(1);
  });

  it('should contain a headline', () => {
    const wrapper = mount();
    expect(wrapper.find('h1').text()).toEqual('Develop calmly.');
  });
});
