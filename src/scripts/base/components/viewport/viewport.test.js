import { shallowMount } from '@vue/test-utils';
import { tcFooter } from '@scripts/base/components/footer/footer'
import { tcTopbar } from '@scripts/base/components/topbar/topbar'
import { tcViewport } from './viewport'

describe('Viewport', () => {
  function mount(content = ''){
    return shallowMount(tcViewport, { slots: { default: content } });
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-viewport');
  });

  it('should cotain a topbar', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcTopbar)).toHaveLength(1);
  });

  it('should cotain a footer', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcFooter)).toHaveLength(1);
  });

  it('should render a custom content', () => {
    const content = '<p>Hello</p>'
    const wrapper = mount(content);
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
})
