import { shallowMount } from '@vue/test-utils';
import { tcViewport } from '@scripts/base/components/viewport/viewport'
import vueView from './vue';

describe('Vue View', () => {
  function mount(){
    return shallowMount(vueView);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcViewport)).toHaveLength(1);
  });
});
