module.exports = function() {
  return {
    module: {
      rules: [{
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }]
    }
  };
};