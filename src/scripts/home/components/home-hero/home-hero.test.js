import { shallowMount } from '@vue/test-utils';
import { tcTopbar } from '@scripts/base/components/topbar/topbar';
import { tcHomeHero } from './home-hero';

describe('Home Hero', () => {
  function mount(){
    return shallowMount(tcHomeHero, { localVue: globalVueInstance });
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-home-hero');
  });

  it('should contain a topbar', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcTopbar)).toHaveLength(1);
  });
});
