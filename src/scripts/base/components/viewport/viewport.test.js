import { shallowMount } from '@vue/test-utils';
import { tcFooter } from '@scripts/base/components/footer/footer';
import { tcSidebar } from '@scripts/base/components/sidebar/sidebar';
import { tcTopbar } from '@scripts/base/components/topbar/topbar';
import windowService from '@scripts/base/services/window/window';
import { tcViewport } from './viewport';

describe('Viewport', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(tcViewport, { propsData, slots: { default: content } });
  }

  function simulateWindowWidth(width){
    windowService.getInnerWidth = jest.fn(() => width);
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

  it('should show sidebar on screens smaller than 768px', () => {
    simulateWindowWidth(767);
    const wrapper = mount();
    const sidebar = wrapper.findAllComponents(tcSidebar);
    expect(sidebar).toHaveLength(1);
  });

  it('should not show sidebar on screens bigger than 768px', () => {
    simulateWindowWidth(769);
    const wrapper = mount();
    const sidebar = wrapper.findAllComponents(tcSidebar);
    expect(sidebar).toHaveLength(0);
  });

  it('should remove sidebar if window width gets bigger than 768px', () => {
    const windowEvents = {};
    simulateWindowWidth(767);
    windowService.listen = jest.fn((evtName, callback) => {
      windowEvents[evtName] = callback;
    });
    const wrapper = mount();
    const sidebar = wrapper.findAllComponents(tcSidebar);
    expect(sidebar).toHaveLength(1)
    simulateWindowWidth(769);
    windowEvents.resize();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAllComponents(tcSidebar)).toHaveLength(0)
    });
  });

  it('should unlisten window resize on component destroy', () => {
    windowService.unlisten = jest.fn();
    const wrapper = mount();
    wrapper.destroy();
    expect(windowService.unlisten).toHaveBeenCalledWith('resize', wrapper.vm.handleWindowResize);
  });
});
