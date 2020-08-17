const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    watchContentBase: true,
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [ htmlWebpackPlugin,
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
    // new HtmlWebpackPlugin({
    //   title: 'Memory Game',
    // }),
  ],
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      js$: path.resolve(__dirname, './main.js'),
      html$: path.resolve(__dirname,'./src/index.html'),
    }
  }
};