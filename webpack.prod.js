/**
 * Created by lihaijie on 17/3/17.
 */
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');


module.exports = function () {
    return webpackMerge(commonConfig(), {
        entry: {
            'vendor': ['vue', 'vuex','element-ui'],
            'main': './src/main.js'
        },
        output: {
            //输出文件名
            filename: '[chunkhash].[name].js',
            //输出文件所在路径,必须为绝对路径
            path: path.resolve(__dirname, './dist'),
            //指定资源文件引用的目录
            publicPath: '',
            chunkFilename: "[name].[chunkhash].js",

            //是否启用跨域加载
            crossOriginLoading: false,
            //所有/指定模块启用行到行映射(line-to-line mapped)模式。行到行映射模式使用一个简单的 SourceMap，
            // 即生成资源(generated source)的每一行都映射到原始资源(original source)的同一行
            devtoolLineToLine: false
        },

        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: ['css-loader']
                    })
                },
                {
                    test: /\.(js)$/,
                    use: ['babel-loader'],
                    exclude: /(node_modules|bower_components)/
                },
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin(),
            new HtmlWebpackPlugin({template: './index_template.html'}),
            new ExtractTextPlugin('/assets/css/style.css'),
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'], // 指定公共 bundle 的名字。
                minChunks: Infinity
            }),

            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new InlineManifestWebpackPlugin({
                name: 'webpackManifest'
            })
        ],
        devtool:'nosources-source-map'
    })
}

