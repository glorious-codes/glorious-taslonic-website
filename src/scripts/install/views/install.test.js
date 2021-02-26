import { shallowMount } from '@vue/test-utils';
import { tcViewport } from '@scripts/base/components/viewport/viewport'
import installView from './install';

describe('Install View', () => {
  function mount(){
    return shallowMount(installView);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcViewport)).toHaveLength(1);
  });
});
