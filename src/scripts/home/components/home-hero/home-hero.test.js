import { shallowMount } from '@vue/test-utils';
import { tcTopbar } from '@scripts/base/components/topbar/topbar';
import { tcHomeHero } from './home-hero';

jest.useFakeTimers();

describe('Home Hero', () => {
  function mount(){
    return shallowMount(tcHomeHero);
  }

  it('should have base css class', () => {
    const wrapper = mount();
    expect(wrapper.classes()).toContain('tc-home-hero');
  });

  it('should contain a topbar', () => {
    const wrapper = mount();
    expect(wrapper.findAllComponents(tcTopbar)).toHaveLength(1);
  });

  it('should not show home hero star action list on initialize', () => {
    const wrapper = mount();
    expect(wrapper.findAll('[data-home-hero-star-action-list]')).toHaveLength(0);
  });

  it('should show home hero star action list after 300ms', () => {
    const wrapper = mount();
    jest.advanceTimersByTime(300);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll('[data-home-hero-star-action-list]')).toHaveLength(1);
    });
  });
});
