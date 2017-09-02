var fs = require('fs')
var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src.js'),

  output: {
    path: path.resolve(__dirname),
    filename: 'index.js'
  },

  target: 'node',
  devtool: 'source-map',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    preLoaders: [
      { test: /\.json$/, loader: 'json' }
    ],
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        include: [__dirname],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        }
      }
    ]
  }
}
