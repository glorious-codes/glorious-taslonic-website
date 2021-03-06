import windowService from './window'

describe('Window Service', () => {
  it('should return window width', () => {
    expect(windowService.getInnerWidth()).toEqual(window.innerWidth);
  });

  it('should listen window event', () => {
    window.addEventListener = jest.fn()
    const evtName = 'resize';
    const callback = jest.fn();
    windowService.listen(evtName, callback)
    expect(window.addEventListener).toHaveBeenCalledWith(evtName, callback);
  });

  it('should unlisten window event', () => {
    window.removeEventListener = jest.fn()
    const evtName = 'resize';
    const callback = jest.fn();
    windowService.unlisten(evtName, callback)
    expect(window.removeEventListener).toHaveBeenCalledWith(evtName, callback);
  });
});
