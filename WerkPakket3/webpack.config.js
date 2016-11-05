var webpack = require('webpack');
var path = require("path");
module.exports = {
    entry: './app/components/DashboardComponent.jsx'
    ,

    output: {
        publicPath: 'http://localhost:8008/',
        filename: "bundle.js"},

    node: {
        net: 'empty',
        tls: 'empty',
        fs: 'empty'
    },
   
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['es2015', 'react']}
            },

            { test: /\.json$/, loader: "json-loader"}
        ]
    },
    resolve: {
        extensions:[
            '',
            '.js',
            '.jsx'
        ]
    },
};