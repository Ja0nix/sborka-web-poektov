const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },

    module: {
    },

    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html')
    })],
};