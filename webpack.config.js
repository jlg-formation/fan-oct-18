const path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/wpk')
    },
    mode: 'production',
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
            }
        ]
    },
    devtool: 'source-map',
};
