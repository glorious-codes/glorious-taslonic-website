import { shallowMount } from '@vue/test-utils';
import { tcFooter } from '@scripts/base/components/footer/footer';
import { tcSidebar } from '@scripts/base/components/sidebar/sidebar';
import { tcTopbar } from '@scripts/base/components/topbar/topbar';
import { tcViewport } from './viewport';

describe('Viewport', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(tcViewport, { propsData, slots: { default: content } });
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-viewport');
  });

  it('should contain a topbar', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcTopbar)).toHaveLength(1);
  });

  it('should optionally hide topbar', () => {
    const wrapper = mount({ hideTopbar: true });
    expect(wrapper.findAllComponents(tcTopbar)).toHaveLength(0);
  });

  it('should contain hidden topbar css class if topbar is hidden', () => {
    const wrapper = mount({ hideTopbar: true });
    expect(wrapper.classes()).toContain('tc-viewport-topbar-hidden');
  });

  it('should contain a footer', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcFooter)).toHaveLength(1);
  });

  it('should render a custom content', () => {
    const content = '<p>Hello</p>';
    const wrapper = mount({}, content);
    expect(wrapper.find('p').text()).toEqual('Hello');
  });

  it('should contain a sidebar', () => {
    const wrapper = mount();
    const sidebars = wrapper.findAllComponents(tcSidebar);
    expect(sidebars).toHaveLength(1);
  });
});
