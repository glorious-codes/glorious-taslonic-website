import { shallowMount } from '@vue/test-utils';
import { tcFeatureIcon } from '@scripts/base/components/feature-icon/feature-icon';
import { tcLink } from '@scripts/base/components/link/link';
import { tcFeatureCard } from './feature-card';

describe('Feature Card', () => {
  function mount(propsData = {}, content = ''){
    return shallowMount(tcFeatureCard, { propsData, slots: { default: content } });
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-feature-card');
  });

  it('should render a title', () => {
    const title = 'Lightweight';
    const wrapper = mount({ title });
    expect(wrapper.find('h3').text()).toEqual(title);
  });

  it('should render an icon', () => {
    const iconName = 'cogs';
    const wrapper = mount({ iconName });
    expect(wrapper.findComponent(tcFeatureIcon).attributes('name')).toEqual(iconName);
  });

  it('should render a custom content', () => {
    const content = '<p>Some text</p>';
    const wrapper = mount({}, content);
    expect(wrapper.find('p').text()).toEqual('Some text');
  });

  it('should render a action footer containg an anchor', () => {
    const actionText = 'Github';
    const actionHref = 'https://github.com/glorious-codes/glorious-taslonic';
    const wrapper = mount({ actionText, actionHref });
    const actionElement = wrapper.findComponent(tcLink);
    expect(actionElement.attributes('href')).toEqual(actionHref);
    expect(actionElement.text()).toEqual(actionText);
  });

  it('should render a action footer containg a route', () => {
    const actionText = 'Components';
    const actionRouteName = 'components';
    const wrapper = mount({ actionText, actionRouteName });
    const actionElement = wrapper.findComponent(tcLink);
    expect(actionElement.attributes('routename')).toEqual(actionRouteName);
    expect(actionElement.text()).toEqual(actionText);
  });
});
