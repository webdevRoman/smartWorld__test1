const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const vendors = require('./webpack/common');
const images = require('./webpack/images');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const babel = require('./webpack/babel');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const common = merge([
  {
    entry: {
      'index': PATHS.src + '/pages/index/index.js',
      'blog1': PATHS.src + '/pages/blog1/blog1.js',
      'post': PATHS.src + '/pages/post/post.js',
      'faq': PATHS.src + '/pages/faq/faq.js'
    },
    output: {
      path: PATHS.build,
      filename: 'js/[name].js'
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
      }),
      new HtmlWebpackPlugin({
        filename: 'post.html',
        chunks: ['post'],
        template: PATHS.src + '/pages/post/post.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'faq.html',
        chunks: ['faq'],
        template: PATHS.src + '/pages/faq/faq.pug'
      }),
      new CopyWebpackPlugin([
        { from: `${PATHS.src}/img`, to: `${PATHS.build}/img` }
      ])
    ]
  },
  pug(),
  images(),
  babel()
]);

module.exports = function(env) {
  if (env === 'production') {
    return merge([
      common,
      extractCSS(),
      vendors()
    ]);
  }
  if (env === 'development') {
    return merge([
      common,
      devserver(),
      sass(),
      css()
    ]);
  }
};