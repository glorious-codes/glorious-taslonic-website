import { shallowMount } from '@vue/test-utils';
import rasket from '@glorious/rasket';
import { tButton } from '@glorious/taslonic/vue';
import { MENU_BUTTON_CLICKED } from '@scripts/base/constants/events';
import windowService from '@scripts/base/services/window/window';
import { tcLogo } from '@scripts/base/components/logo/logo';
import { tcMenu } from '@scripts/base/components/menu/menu';
import { tcTopbar } from './topbar';

describe('Topbar', () => {
  function mount(){
    return shallowMount(tcTopbar);
  }

  function simulateWindowWidth(width){
    windowService.getInnerWidth = jest.fn(() => width);
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-topbar');
  });

  it('should cotain a logo', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcLogo)).toHaveLength(1);
  });

  it('should not show menu on screens smaller than 768px', () => {
    simulateWindowWidth(767);
    const wrapper = mount();
    const menus = wrapper.findAllComponents(tcMenu);
    expect(menus).toHaveLength(0);
  });

  it('should show menu on screens bigger than 767px', () => {
    simulateWindowWidth(768);
    const wrapper = mount();
    const menus = wrapper.findAllComponents(tcMenu);
    expect(menus).toHaveLength(1);
  });

  it('should remove menu if window width get smaller than 768px', () => {
    const windowEvents = {};
    simulateWindowWidth(1024);
    windowService.listen = jest.fn((evtName, callback) => {
      windowEvents[evtName] = callback;
    });
    const wrapper = mount();
    const menus = wrapper.findAllComponents(tcMenu);
    expect(menus).toHaveLength(1)
    simulateWindowWidth(767);
    windowEvents.resize();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAllComponents(tcMenu)).toHaveLength(0)
    });
  });

  it('should show menu button on screens smaller than 768px', () => {
    simulateWindowWidth(767);
    const wrapper = mount();
    const buttons = wrapper.findAllComponents(tButton);
    expect(buttons).toHaveLength(1)
  });

  it('should remove menu button if window width get bigger than 767px', () => {
    const windowEvents = {};
    simulateWindowWidth(767);
    windowService.listen = jest.fn((evtName, callback) => {
      windowEvents[evtName] = callback;
    })
    const wrapper = mount();
    const buttons = wrapper.findAllComponents(tButton);
    expect(buttons).toHaveLength(1);
    simulateWindowWidth(768);
    windowEvents.resize();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAllComponents(tButton)).toHaveLength(0)
    });
  });

  it('should publish menu button clicked event on menu button click', () => {
    simulateWindowWidth(767);
    rasket.publish = jest.fn();
    const wrapper = mount();
    const button = wrapper.findComponent(tButton);
    button.vm.$emit('click');
    expect(rasket.publish).toHaveBeenCalledWith(MENU_BUTTON_CLICKED)
  });

  it('should unlisten window resize on component destroy', () => {
    windowService.unlisten = jest.fn();
    const wrapper = mount();
    wrapper.destroy();
    expect(windowService.unlisten).toHaveBeenCalledWith('resize', wrapper.vm.handleWindowResize);
  });
});
