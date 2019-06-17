const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './development/app.js'
  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  module: {
    rules: [

      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-2']
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }

    ]
  }
}
