const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
        index: path.resolve(__dirname, './src/app.js'),
        signup: path.resolve(__dirname, './src/scripts/signup.js'),
        about: path.resolve(__dirname, './src/scripts/api.js'),
        contact: path.resolve(__dirname, './src/app.js'),
        results: path.resolve(__dirname, './src/app.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[fullhash].js',
    clean: true,
  },

  devServer: {
    static: path.resolve(__dirname, './dist'),
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Jokeodda',
      chunks: ['index'],
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      title: 'Jokeodda',
      chunks: ['about'],
      template: path.resolve(__dirname, './src/about.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      title: 'Jokeodda',
      chunks: ['contact'],
      template: path.resolve(__dirname, './src/contact.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'signup.html',
      title: 'Jokeodda',
      chunks: ['signup'],
      template: path.resolve(__dirname, './src/signup.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'results.html',
      title: 'Jokeodda',
      chunks: ['results'],
      template: path.resolve(__dirname, './src/results.html'),
    }), 
    new ESLintPlugin(),
  ],

  module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/, // files to exclude
        use: ['babel-loader'],
      },
      // CSS and SASS
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      { // define typescript loader and file extensions
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        exclude: /node_modules/,
        loader: 'file-loader',
        type: 'asset',
        options: {
          name: 'images/[name].[ext]',
        },
      }
    ],
  },
  resolve: {
    // options for resolving module requests
    extensions: ['*', '.js', '.ts', '.tsx'], // files to load
  },
  target: 'web',
};