const _public = {};

_public.getRoutes = () => {
  const paths = getRoutePaths();
  return paths.map(path => `${path}?analytics=disabled`);
};

function getRoutePaths(){
  return [
    '/',
    '/installation',
    '/react',
    '/vue',
    '/fundamentals',
    '/principles'
  ];
}

module.exports = _public;
