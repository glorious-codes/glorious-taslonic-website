import { shallowMount } from '@vue/test-utils';
import { tcFeatureCard } from '@scripts/base/components/feature-card/feature-card';
import { tcFeatureCardList } from './feature-card-list';

describe('Feature Card List', () => {
  function mount(){
    return shallowMount(tcFeatureCardList);
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.find('ul').classes()).toContain('tc-feature-card-list');
  });

  it('should render three feature cards', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcFeatureCard)).toHaveLength(3);
  });
});
