const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const project = require('./project.json');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [`${__dirname}/${project.scripts.source.entry}`],
  output: {
    filename: project.scripts.dist.filename[env],
    assetModuleFilename: project.images.dist.filename[env]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: [`${__dirname}/${project.scripts.source.root}`],
        loader: 'html-loader',
        options: {
          minimize: false
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.styl$/,
        use: [ 'style-loader', 'css-loader', 'stylus-loader' ]
      },
      {
        test: /\.(jpg|jpeg|png|svg)/,
        type: 'asset'
       },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.prod.js',
      '@environment$': `${__dirname}/${project.environments.source.root}/${env}.js`,
      '@images': `${__dirname}/${project.images.source.root}`,
      '@scripts': `${__dirname}/${project.scripts.source.root}`,
      '@styles': `${__dirname}/${project.styles.source.root}`,

    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: project.index.source.file
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: project.images.source.files,
        to: `${project.images.dist.root}/[name][ext]`
      }]
    })
  ]
}
