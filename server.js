'use strict';

const express = require('express'); // charge ExpressJS
const serveIndex = require('serve-index');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

webpackConfig.output.path = '/';
const compiler = webpack(webpackConfig);
app.use('/app/wpk/', webpackDevMiddleware(compiler, {
	stats: {
        warningsFilter: function (str) {
            if (str.match(/asset size limit/)) {
                return true;
            }
            if (str.match(/webpack performance recommendations/)) {
                return true;
            }
            return false;
        }
    }
}));

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(9000, function () {
	console.log('server started on port 9000');
});
