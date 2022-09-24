const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // 1
  // Use the src/app.js file as entry point to bundle it.
  // If the src/app.js file imports other JS files,
  // bundle them as well
  entry: path.resolve(__dirname, './src/app.js'),
  // 2
  // The bundles source code files shall result in a bundle.js file
  // in the /dist folder
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    clean: true,
  },
  // 3
  // The /dist folder will be used to serve our application
  // to the browser
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  // 4
  // Add plugins for webpack here
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Memeodda',
      template: path.resolve(__dirname, './src/index.html'),
    }),
    
    new ESLintPlugin(),
  ],
  // 5
  // Integrate Babel in the build process
  // Define which files to use the loader
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
      { // file loader for other .html
        test: /\.html?/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].html',
              outputPath: '/'
            }
          }
        ],
        exclude: /node_modules/,
        exclude: path.resolve(__dirname, 'src/index.html')
      },
    ],
  },
  resolve: {
    // options for resolving module requests
    extensions: ['*', '.js', '.ts', '.tsx'], // files to load
  },
  target: 'web',
};