import { shallowMount } from '@vue/test-utils';
import { tcLogo } from '@scripts/base/components/logo/logo';
import { tcTopbar } from './topbar';

describe('Topbar', () => {
  function mount(){
    return shallowMount(tcTopbar);
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-topbar');
  });

  it('should cotain a logo', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcLogo)).toHaveLength(1);
  });
});
