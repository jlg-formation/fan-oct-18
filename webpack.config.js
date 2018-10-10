const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/wpk')
    },
    mode: 'development',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['angularjs-annotate']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                    "css-loader"
                ]
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        // publicPath: './wpk/',
                        limit: 10000,
                        mimetype: 'application/octet-stream'
                    }
                }]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        // publicPath: './wpk/',
                        limit: 10000,
                        mimetype: 'application/font-woff'
                    }
                }]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: './wpk/'
                    }
                }]
            },
            {
                test: /(fontawesome-webfont|glyphicons-halflings-regular)\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        // publicPath: './wpk/',
                        limit: 10000,
                        mimetype: 'image/svg+xml'
                    }
                }]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "bundle.css",
        })
    ],
    stats: {
        warningsFilter: function (str) {
            console.log('XXX', arguments);
            if (str.match(/asset size limit/)) {
                return true;
            }
            if (str.match(/webpack performance recommendations/)) {
                return true;
            }
            return false;
        }
    }
};
