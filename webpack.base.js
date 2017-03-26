module.exports = function () {
    return {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.common.js',
                'jquery$': 'jquery/src/dist/jquery.min.js'
            }
        },
        module: {
            rules: [
                {
                    test: /\.scss/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.vue$/,
                    loader:'vue-loader',
                    options: {
                        loaders: {
                            scss: 'vue-style-loader!css-loader!sass-loader'
                        }
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    use: [{
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: 'assets/img/[name].[hash:7].[ext]'
                        }
                    }]
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    use: [{
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: 'fonts/[name].[hash:7].[ext]'
                        }
                    }]
                }
            ]
        }
    };
}