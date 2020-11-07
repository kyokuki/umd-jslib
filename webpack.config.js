const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack =  require('webpack');

// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import {CleanWebpackPlugin} from 'clean-webpack-plugin';
// import webpack from 'webpack';

module.exports = {
    entry: {
        jslib: './src/index.js',
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './',
        library: 'JslibTool',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env'],
                    //     plugins: [
                    //         '@babel/plugin-proposal-class-properties',
                    //         '@babel/plugin-transform-runtime',
                    //         '@babel/plugin-transform-modules-umd'
                    //     ]
                    // }
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.ProvidePlugin({
            Promise: ['es6-promise', 'Promise'],
        }),
    ],
};
