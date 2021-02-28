import { shallowMount } from '@vue/test-utils';
import { tcSection } from './section'

describe('Section', () => {
  function mount(content = ''){
    return shallowMount(tcSection, { slots: { default: content } });
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-section');
  });

  it('should render some content', () => {
    const wrapper = mount('<p>Hello</p>');
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
})
