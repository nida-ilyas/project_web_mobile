var webpack = require('webpack');
var path = require("path");
module.exports = {
    entry: './main.js'
    ,

    output: {
        publicPath: 'http://localhost:8008/',
        filename: "bundle.js"},
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['es2015', 'react']}
            }
        ]
    },
};