module.exports = {
  entry: __dirname + '/src',
  output: {
    path: './lib',
    filename: 'TimePicker.js',
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-maps',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
}
