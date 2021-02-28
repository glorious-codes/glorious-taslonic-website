import { shallowMount } from '@vue/test-utils';
import { tcViewport } from '@scripts/base/components/viewport/viewport'
import principlesView from './principles';

describe('Principles View', () => {
  function mount(){
    return shallowMount(principlesView);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcViewport)).toHaveLength(1);
  });
});
