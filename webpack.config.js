/**
 * Created by lihaijie on 17/3/16.
 */
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');
const webpack = require('webpack');
const path = require('path');
const proxy = require('./proxy');


module.exports = function () {
    return webpackMerge(commonConfig(), {
        entry: './src/main.js',
        output: {
            //输出文件名
            filename: 'bundle.js',
            //输出文件所在路径,必须为绝对路径
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',

            //是否启用跨域加载
            crossOriginLoading: false
        },
        devtool: 'cheap-eval-source-map',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['css-loader']
                },
                {
                    enforce: 'pre',
                    test: /.vue$/,
                    loader: 'eslint-loader',
                    exclude: /node_modules/
                },
                {
                    enforce: 'pre',
                    test: /.js$/,
                    loader: 'eslint-loader',
                    exclude: /node_modules/
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
            noInfo: true,
            proxy: proxy
        }
    })
}
