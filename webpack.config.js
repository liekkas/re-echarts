import path from 'path'
import webpack from 'webpack'

console.log('>>> config:env',process.env.NODE_ENV)
const __DEV__ = process.env.NODE_ENV === 'development'
const webpackConfig = {
  devtool: __DEV__ ? 'eval-cheap-module-source-map' : null,
  module: {},
}

webpackConfig.entry = {
  app: __DEV__ ? ['./example/index.js', 'webpack-hot-middleware/client'] : ['./example/index.js']
}

webpackConfig.output = {
  filename: 'bundle.js',
  path: path.join(__dirname, 'pages'),
  publicPath: '/static/'
}

webpackConfig.plugins = __DEV__
  ? [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]
  : [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: false
    }
  })
]

webpackConfig.module.loaders = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel',
  },
  {
    test: /\.json$/,
    loader: 'json'
  },
]

export default webpackConfig
