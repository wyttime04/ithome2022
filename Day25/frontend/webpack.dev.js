const merge = require('webpack-merge'),
    webpack = require('webpack'),
    common = require('./webpack.common.js');
const path = require('path')
module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: 8888,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
		new webpack.SourceMapDevToolPlugin({
        
        }),
	],
});