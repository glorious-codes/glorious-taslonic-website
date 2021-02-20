import { shallowMount } from '@vue/test-utils';
import { tcFeatureIcon } from '@scripts/base/components/feature-icon/feature-icon';

describe('Feature Card List', () => {
  function mount(propsData = {}){
    return shallowMount(tcFeatureIcon, { propsData });
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-feature-icon');
  });

  it('should build css classes according passed name', () => {
    const wrapper = mount({ name: 'cogs' });
    expect(wrapper.classes()).toContain('tc-feature-icon-cogs');
  });
});
