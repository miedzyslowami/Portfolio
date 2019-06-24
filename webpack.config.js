const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  mode: 'development',
  entry: ['./src/js/source.jsx'],
  output: {
    path: path.resolve(__dirname, 'development'),
    filename: "app.js"
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 8001
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-2', 'react']
        }
      }, {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              },
              importLoaders: 2
            }
          },
          'postcss-loader',
          {
            loader: "sass-loader",
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              },
            }
          }]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    require('autoprefixer'),
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
  ],
}
