import { shallowMount } from '@vue/test-utils';
import { tcLink } from '@scripts/base/components/link/link';
import { tcMenu } from './menu';

describe('Menu', () => {
  function mount(propsData = {}){
    return shallowMount(tcMenu, { propsData });
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-menu');
  });

  it('should contain four items', () => {
    const wrapper = mount();
    const links = wrapper.findAll('tc-link-stub');
    expect(links.at(0).props('routeName')).toEqual('vue');
    expect(links.at(1).props('routeName')).toEqual('react');
    expect(links.at(2).props('routeName')).toEqual('fundamentals');
  });
});
