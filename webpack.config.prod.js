var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name]-[hash:8].js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                // 将css文件独立出来
                loaders: {
                    css: ExtractTextPlugin.extract({
                        loader: 'css-loader',
                        fallbackLoader: 'vue-style-loader'
                    })
                }
            }
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
        noInfo: true
    },
    plugins: [
        new ExtractTextPlugin("[name]-[contentHash:8].css"),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new WebpackMd5Hash()
    ],
    devtool: '#source-map'
}
