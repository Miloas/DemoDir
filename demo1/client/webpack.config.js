var webpack = require('webpack');
module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript:'./index.js',
    html:'./index.html'
  },
  output: {
    filename: 'bundle.js',
    path:  __dirname + '/dist'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{
      test: /\.html$/,
      loader: 'file?name=[name].[ext]'
    }]
  },
  babel: {
    presets: ['es2015','stage-0','react']
  },
  resolve: {
    modulesDirectories: ['node_modules', 'components']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
    ,new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}})
  ],
  devtool: 'cheap-module-source-map'
};
