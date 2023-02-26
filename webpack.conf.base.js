const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const project = require('./project.json');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [`${__dirname}/${project.scripts.source.entry}`],
  output: {
    filename: project.scripts.dist.filename[env]
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
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
      },
      {
        test: /\.styl$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader' ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          outputPath: project.images.dist.root,
          name: '[name].[ext]'
        }
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
      'vue$': 'vue/dist/vue.esm.js',
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
    new MiniCssExtractPlugin({
      filename: project.styles.dist.filename[env]
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: project.images.source.files,
        to: `${project.images.dist.root}/[name][ext]`
      }]
    })
  ]
}
