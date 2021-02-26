const _public = {};

_public.getRoutes = () => {
  const paths = getRoutePaths();
  return paths.map(path => `${path}?analytics=disabled`);
};

function getRoutePaths(){
  return [
    '/',
    '/get-started'
  ];
}

module.exports = _public;
