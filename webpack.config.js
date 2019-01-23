const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './js/main',
    output: {
        filename: 'bundle.js'
    },

    module: {
        rules: [
            { test: /\.js$/, loader: "babel-loader" }
        ]
    }
};