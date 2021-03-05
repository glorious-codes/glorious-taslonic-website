import { shallowMount } from '@vue/test-utils';
import { tcViewport } from '@scripts/base/components/viewport/viewport'
import installationView from './installation';

describe('Install View', () => {
  function mount(){
    return shallowMount(installationView);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcViewport)).toHaveLength(1);
  });
});
