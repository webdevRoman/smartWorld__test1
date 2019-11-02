const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const common = merge([
  {
    entry: {
      'index': PATHS.src + '/pages/index/index.js',
      'blog1': PATHS.src + '/pages/blog1/blog1.js'
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index'],
        template: PATHS.src + '/pages/index/index.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'blog1.html',
        chunks: ['blog1'],
        template: PATHS.src + '/pages/blog1/blog1.pug'
      })
    ]
  },
  pug()
]);

module.exports = function(env) {
  if (env === 'production') {
    return common;
  }
  if (env === 'development') {
    return merge([
      common,
      devserver(),
      sass()
    ]);
  }
};