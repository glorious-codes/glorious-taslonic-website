import { shallowMount } from '@vue/test-utils';
import { tcLogo } from './logo';

describe('Logo', () => {
  function mount(propsData = {}){
    return shallowMount(tcLogo, { propsData });
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-logo');
  });

  it('should cotain a logo image', () => {
    const wrapper = mount();
    const imageElement = wrapper.find('img');
    expect(imageElement.attributes('src')).toEqual('logo.svg');
    expect(imageElement.attributes('alt')).toEqual('Taslonic');
    expect(imageElement.attributes('title')).toEqual('Taslonic');
  });
});
