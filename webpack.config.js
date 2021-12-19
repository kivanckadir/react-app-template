const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const outputDirectory = './dist/static';

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, outputDirectory),
    filename: '[hash].bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.html', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, outputDirectory),
    },
    compress: false,
    port: 9000,
  },
};
