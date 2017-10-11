const path = require('path')
const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
  context: src,
  entry: 'index.js',
  output: {
    filename: 'bundle.js',
    path: dist
  },
  module: {
    rules: [
      { test: /\.jsx?$/, include: [src], loader: 'babel-loader', options: { presets: ['es2015', 'react', 'stage-2'] } },
      { test: /\.png$|\.jpe?g$/, loader: 'file-loader' }
    ]
  },
  resolve: {
    modules: ['node_modules', src],
    extensions: ['.js', '.json', '.jsx']
  },
  devServer: {
    contentBase: src
  }
}
