const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/js/source.jsx'],
  output: {
    path: path.resolve(__dirname, 'development'),
    filename: "app.js",
		chunkFilename: "[id].app.js"
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
          presets: ['@babel/preset-env', '@babel/preset-react'],
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
  ],
}
