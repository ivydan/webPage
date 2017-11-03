const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //精简构建输出
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理构建文件夹 
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common,{
	// externals:[{
 //        "react": "react",
 //        "react-dom": "react-dom",
 //        "lodash": "lodash"
 //    }],
	plugins: [
		// new UglifyJSPlugin(),
		new CleanWebpackPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
		    name: 'common' //提取公共模块-放置重复
		})
	]
})