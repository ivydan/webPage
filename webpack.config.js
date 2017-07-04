
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
	entry: {
		index: path.resolve(ROOT_PATH, 'src/page/index.js')
	}, //入口文件
	output: {
		path: path.resolve(ROOT_PATH,'build'),
		filename: '[name].js',
	} , // 出口文件 path输出目录， filename输出文件名， publicPath输入目录所对应的外部目录
	resolve: {
		extensions: [".js", ".jsx"]
	},
	module: { //module.loader 是对模块中的loader使用的配置
		// preLoaders:[{
		// 	test:/\.jsx?$/,
		// 	loaders:['eslint'],
		// 	include: APP_PATH,
		// 	exclude: /node_modules/
		// }],
		loaders:[{
			test: /\.css$/,
			loader:['style-loader','css-loader']
		},{
			test:/\.jsx?$/,
			loaders: 'babel-loader',
			exclude: /node_modules/,
			query:{
				presets: ["es2015", "react"]
			}
		}]
	},
	plugins:[ //使用插件机制
		new HtmlWebpackPlugin({
			title: 'Index',
			path: path.join(__dirname,'build'),
			filename: 'index.html',
		})
	]
}

//webpack -w 可实时构建，监听文件改动，手动刷新浏览器可查看改动结果