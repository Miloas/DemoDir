// var webpack = require('webpack');
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  babel: {
    presets: ['es2015','stage-0','react']
  },
  // plugins: [
  //  new webpack.DefinePlugin({
  //   'process.env': {
  //    'NODE_ENV': JSON.stringify('production')
  //  }
  //  })
  //  ,new webpack.optimize.UglifyJsPlugin()
  // ],
  devtool: 'cheap-module-source-map'
};
