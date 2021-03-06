import { shallowMount } from '@vue/test-utils';
import { tcIcon } from './icon';

describe('Icon', () => {
  function mount(propsData){
    return shallowMount(tcIcon, { propsData });
  }

  it('should have appropriate class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-icon');
  });

  it('should build a css class based on icon name', () => {
    const wrapper = mount({ name: 'user' });
    expect(wrapper.classes()).toContain('tc-icon-user');
  });

  it('should build inline mask image style based on icon name', () => {
    const wrapper = mount({ name: 'user' });
    expect(wrapper.vm.$el.style.maskImage).toEqual('url(/images/icon-user.svg)');
  });
});
