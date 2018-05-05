var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./src/viewport.js', './src/main.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        loader: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
            scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
