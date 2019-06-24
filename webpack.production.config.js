const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

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
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new WebpackPwaManifest ({
      name: 'Miedzyslowami portfolio',
      short_name: 'Portfolio',
      description: 'Frontend developer portfolio',
      background_color: '#ffffff',
      start_url: "./index.html",
      display: "standalone",
      theme_color: "#ffffff",
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('assets/icons/flower.png'),
          sizes: [64, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    })
  ]
}
