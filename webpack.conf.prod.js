const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin-next');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const prerenderConfig = require('./webpack.conf.prerender');
const project = require('./project.json');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new webpack.SourceMapDevToolPlugin(),
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          compress: {
            warnings: false,
          },
          sourceMap: true
        }
      })
    ]
  },
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: `${__dirname}/${project.scripts.dist.root}`,
      routes: prerenderConfig.getRoutes(),
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html.replace(/src="(.*)\.js"/, 'src="/$1.js"');
        return renderedRoute;
      },
      renderer: require('@prerenderer/renderer-puppeteer'),
      rendererOptions: {
        headless: true,
        args: ['–no-sandbox', '–disable-setuid-sandbox']
      }
    })
  ]
}
