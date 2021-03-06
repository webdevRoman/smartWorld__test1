const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const images = require('./webpack/images');

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
      filename: 'js/[name].js'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /node_modules/,
            chunks: 'all',
            enforce: true,
          },
          common: {
            name: 'common',
            test: /common/,
            chunks: 'all',
            enforce: true
          }
        }
      }
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
  pug(),
  images()
]);

module.exports = function(env) {
  if (env === 'production') {
    return merge([
      common,
      extractCSS()
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