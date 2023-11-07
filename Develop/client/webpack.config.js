const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack. ** DONE **

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],

    module: {
      rules: [
        // CSS Configuration
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        // Babel Configuration
        {
          test: /\.js$/, //using regex to tell babel exactly what files to transcompile
          exclude: /node_modules/, // files to be ignored
          use: {
              loader: 'babel-loader' // specify the loader
          } 
        }
      ],
    },
  };
};
