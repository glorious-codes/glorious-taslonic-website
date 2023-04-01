import { shallowMount } from '@vue/test-utils';
import rasket from '@glorious/rasket';
import { tButton } from '@glorious/taslonic-vue';
import { MENU_BUTTON_CLICKED } from '@scripts/base/constants/events';
import { tcMenu } from '@scripts/base/components/menu/menu';
import { tcSidebar } from './sidebar';

describe('Sidebar', () => {
  function mount(){
    return shallowMount(tcSidebar);
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-sidebar');
  });

  it('should contain a close button', () => {
    const wrapper = mount();
    const buttons = wrapper.findAllComponents(tButton);
    expect(buttons).toHaveLength(1)
  });

  it('should contain a menu', () => {
    const wrapper = mount();
    const menus = wrapper.findAllComponents(tcMenu);
    expect(menus).toHaveLength(1)
  });

  it('should be hidden by default', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-sidebar-hidden');
  });

  it('should be shown when menu button click event has been fired', () => {
    const wrapper = mount();
    rasket.publish(MENU_BUTTON_CLICKED);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes()).not.toContain('tc-sidebar-hidden');
    });
  });

  it('should be hidden on close button click', () => {
    const wrapper = mount();
    rasket.publish(MENU_BUTTON_CLICKED);
    wrapper.vm.$nextTick(() => {
      wrapper.findComponent(tButton).vm.$emit('click');
      wrapper.vm.$nextTick(() => {
        expect(wrapper.classes()).toContain('tc-sidebar-hidden');
      })
    });
  });

  it('should unsubscribe from menu button click event on component destroy', () => {
    rasket.unsubscribe = jest.fn();
    const wrapper = mount();
    wrapper.destroy();
    expect(rasket.unsubscribe).toHaveBeenCalledWith(wrapper.vm.subscriptionId);
  });
});
