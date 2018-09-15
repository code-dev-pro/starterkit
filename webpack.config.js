const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NgrockWebpackPlugin = require('ngrock-webpack-plugin');

let config = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./bundle.js"
    },
    module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
            test: /\.(sa|sc|c)ss$/,
            exclude: /node_modules/,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
              ],
           
          }]
      },
      plugins: [
        new NgrockWebpackPlugin(),
        new MiniCssExtractPlugin("styles.css"),
        new UglifyJSPlugin(),
        new DashboardPlugin(),
        new HtmlWebpackPlugin(
         { title: 'Player'}
        )
      ],
      devServer: {
        contentBase: path.resolve(__dirname, "./public"),
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true
      },
      devtool: "eval-source-map"
  }

module.exports = config;

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin()
    );
  }
