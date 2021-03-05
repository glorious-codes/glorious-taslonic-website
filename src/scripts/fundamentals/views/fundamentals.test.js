import { shallowMount } from '@vue/test-utils';
import { tcViewport } from '@scripts/base/components/viewport/viewport'
import fundamentalsView from './fundamentals';

describe('Components View', () => {
  function mount(){
    return shallowMount(fundamentalsView);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcViewport)).toHaveLength(1);
  });
});
