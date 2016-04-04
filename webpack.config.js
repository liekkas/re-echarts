import path from 'path'
import webpack from 'webpack'

console.log('>>> config:env',process.env.NODE_ENV)
const webpackConfig = {
  devtool: 'eval-cheap-module-source-map',
  module: {},
}

webpackConfig.entry = {
  app: ['./example/index.js', 'webpack-hot-middleware/client']
}

webpackConfig.output = {
  filename: 'bundle.js',
  path: path.join(__dirname, 'dist'),
  publicPath: '/static/'
}

webpackConfig.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
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
