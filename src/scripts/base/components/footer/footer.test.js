import { shallowMount } from '@vue/test-utils';
import { tcFooter } from '@scripts/base/components/footer/footer';

describe('Footer', () => {
  function mount(){
    return shallowMount(tcFooter);
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-footer');
  });
});
