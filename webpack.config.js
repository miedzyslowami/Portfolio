const path = require("path");
module.exports = {
  entry: ['./js/source.jsx'],
  output: {
    path: path.resolve("js"),
    filename: "app.js"
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3001
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-2', 'react']
        }
      }, {
        test: /\.scss$/,
        loader: [
          "style-loader", "css-loader?modules&localIdentName=[local]---[hash:base64:5]", "postcss-loader", "sass-loader?modules&localIdentName=[local]---[hash:base64:5]"]
        },
        {
        test: /\.html$/,
        loader: 'raw-loader'
      },
{
      test: /\.jpg$/,
      loader: 'file-loader'
}
    ]
  },
  plugins: [
   require('autoprefixer')
 ]
}
