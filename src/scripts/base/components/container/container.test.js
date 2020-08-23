import { shallowMount } from '@vue/test-utils';
import { tcContainer } from './container';

describe('Container', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(tcContainer, { propsData, slots: { default: content } });
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-container');
  });

  it('should render some content', () => {
    const wrapper = mount({}, '<p>Hello</p>');
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
});
