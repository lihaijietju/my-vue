var path = require('path')
var webpack = require('webpack')
var proxy = require('./proxy');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            loader: 'file-loader',
            query: {
                name: 'image/[name].[ext]?[hash]'
            }
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue',
            'vue-router$': 'vue-router/dist/vue-router'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        proxy: proxy
    },
    devtool: '#eval-source-map'
}
