const _public = {}

_public.getInnerWidth = () => window.innerWidth;

_public.listen = (evtName, callback) => window.addEventListener(evtName, callback);

_public.unlisten = (evtName, callback) => window.removeEventListener(evtName, callback);

export default _public
