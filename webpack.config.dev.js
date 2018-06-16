import path from 'path';

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src')
  },
  module:
  {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  }
};
