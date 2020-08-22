import { shallowMount } from '@vue/test-utils';
import homeView from './home';

describe('Home View', () => {
  function mount(){
    return shallowMount(homeView);
  }

  it('should contain a headline', () => {
    const wrapper = mount();
    expect(wrapper.find('h1').text()).toEqual('Hello!');
  });
});
