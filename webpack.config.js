var path = require('path');

module.exports = {
  entry: path.join(process.cwd(), 'src/app.js'),
  output: {
    path: '.',
    filename: 'vpsn.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
