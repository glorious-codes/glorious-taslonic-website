import { shallowMount } from '@vue/test-utils';
import { tcFeatureCardList } from '@scripts/base/components/feature-card-list/feature-card-list';
import { tcViewport } from '@scripts/base/components/viewport/viewport';
import { tcHomeHero } from '@scripts/home/components/home-hero/home-hero';
import homeView from './home';

describe('Home View', () => {
  function mount(){
    return shallowMount(homeView);
  }

  it('should contain a home hero', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcHomeHero)).toHaveLength(1);
  });

  it('should contain a manifesto', () => {
    const wrapper = mount();
    expect(wrapper.find('h2').text()).toEqual('Your time is precious. Use it wisely.');
  });

  it('should contain a feature list', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcFeatureCardList)).toHaveLength(1);
  });

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcViewport)).toHaveLength(1);
  });
});
