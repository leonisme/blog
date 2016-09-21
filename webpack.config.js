module.exports = {
  entry: './js/index.js',

  output: {
    filename: 'bundle.js',
    path: './dest'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}
