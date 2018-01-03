const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const config = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[chunkhash].js", // 用于长效缓存
    },
    module: {
      rules: [
        { 
            test: /\.txt$/, 
            use: 'raw-loader'
         },
         {
             test: /\.js$/,
             exclude: /node_modules/,
             use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
             }
         }
      ]
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin(
           { title: 'lordma studio'}
        )
    ]
  };
  module.exports = config;  
  