global.Promise = require('bluebird')

var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

var publicPath = 'http://localhost:8050/public/assets'
var cssName =
  process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css'
var jsName =
  process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js'

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER: JSON.stringify(true),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  }),
  new ExtractTextPlugin(cssName),
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new CleanWebpackPlugin(['public/assets/'], {
      root: __dirname,
      verbose: true,
      dry: false,
    })
  )
  plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
}

module.exports = {
  entry: ['babel-polyfill', './src/client.js'],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins,
  output: {
    path: `${__dirname}/public/assets/`,
    filename: jsName,
    publicPath,
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader!postcss-loader',
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader!less-loader'
        ),
      },
      { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=images/gif' },
      { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=images/jpg' },
      { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=images/png' },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=26000&mimetype=images/svg+xml',
      },
      { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
      {
        test: /\.jsx?$/,
        loader:
          process.env.NODE_ENV !== 'production'
            ? 'react-hot-loader/webpack!babel-loader!eslint-loader'
            : 'babel-loader',
        exclude: [/node_modules/, /public/],
      },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'eval' : false,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
}
