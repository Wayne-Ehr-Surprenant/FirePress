/**
 * Webpack configuration for development
 */

import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'eval-source-map',
  entry: path.join(process.cwd(), 'src/index'),
  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'public', 'js')
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-inline-environment-variables']
          }
        }
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loder', 'less-loader']
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader'
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: 'file-loader'
      }
    ]
  },
  target: 'web'
};
