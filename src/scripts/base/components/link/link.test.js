import { shallowMount } from '@vue/test-utils';
import { tcLink } from './link';

describe('Link', () => {
  function mountComponent(propsData, content = ''){
    return shallowMount(tcLink, { propsData, stubs: ['router-link'], slots: { default: content } });
  }

  it('should have appropriate css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toContain('tc-link');
  });

  it('should render a router link for internal links', () => {
    const wrapper = mountComponent({ routeName: 'privacy' });
    expect(wrapper.findAll('router-link-stub').length).toEqual(1);
  });

  it('should render some text for internal links', () => {
    const wrapper = mountComponent({ routeName: 'codes' }, 'Link Text');
    expect(wrapper.find('router-link-stub').text()).toEqual('Link Text');
  });

  it('should render an anchor href', () => {
    const href = 'https://pitsby.com';
    const wrapper = mountComponent({ href });
    expect(wrapper.find('a').attributes('href')).toEqual(href);
  });

  it('should render some text for external links', () => {
    const text = 'Pitsby';
    const wrapper = mountComponent({ href: 'https://pitsby.com' }, text);
    expect(wrapper.find('a').text()).toEqual(text);
  });

  it('should anchor links contain a target attribute as blank by default', () => {
    const wrapper = mountComponent({ href: 'https://pitsby.com' });
    expect(wrapper.find('a').attributes('target')).toEqual('_blank');
  });

  it('should anchor links contain a rel attribute as noreferrer by default', () => {
    const wrapper = mountComponent({ href: 'https://pitsby.com' });
    expect(wrapper.find('a').attributes('rel')).toEqual('noreferrer');
  });
});
