const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const Dotenv = require('dotenv-webpack');
 
module.exports = {
  mode: 'production',
  entry: {
    entry: ['./src/js/source.jsx'],
  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
		chunkFilename: "[id].bundle.js",
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['minify', '@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-class-properties']
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
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0
    }
  },
  plugins: [
    require('autoprefixer'),
    new Dotenv(),
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
    }),
    new SWPrecacheWebpackPlugin({
      // By default, a cache-busting query parameter is appended to requests
      // used to populate the caches, to ensure the responses are fresh.
      // If a URL is already hashed by Webpack, then there is no concern
      // about it being stale, and the cache-busting can be skipped.
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          // This message occurs for every build and is a bit too noisy.
          return;
        }
        console.log(message);
      },
      minify: true, // minify and uglify the script
      navigateFallback: '/index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    })
  ]
}
