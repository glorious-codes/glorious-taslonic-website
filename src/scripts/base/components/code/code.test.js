import { shallowMount } from '@vue/test-utils';
import { tcCode } from './code'

describe('Code', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(tcCode, {
      propsData,
      slots: { default: content },
      localVue: globalVueInstance
    });
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-code');
  });

  it('should highlight code as javascript by default', () => {
    const wrapper = mount();
    expect(wrapper.find('highlight-code-stub').props('lang')).toEqual('javascript');
  });

  it('should optionally highlight code as given language', () => {
    const wrapper = mount({ lang: 'css' });
    expect(wrapper.find('highlight-code-stub').props('lang')).toEqual('css');
  });

  it('should render a custom content', () => {
    const content = '<p>Hello</p>'
    const wrapper = mount({}, content);
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
})
