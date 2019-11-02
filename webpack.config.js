const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const common = {
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
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      }
    ]
  }
};

const developmentConfig = {
  devServer: {
    stats: 'errors-only',
    port: 9000
  }
};

module.exports = function(env) {
  if (env === 'production') {
    return common;
  }
  if (env === 'development') {
    return Object.assign(
      {},
      common,
      developmentConfig
    );
  }
};