/**
 * Created by Maggie on 17/9/12
 */

const path = require('path');
const glob = require('glob');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const node_modules = path.resolve(__dirname, 'node_modules');
const pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var commonPlugins = [];
//入口文件。
// var getEntry = function(){
//     var entry = {};
//     glob.sync('./src/**/index.js').forEach(function(name){
//         var n = name.slice(name.lastIndexOf('src/') + 4, name.length - 3);
//         n = n.slice(0, n.lastIndexOf('/'));
//         entry[n] = name;
//     });
//     console.info("entry:", entry);
//     return entry;
// }

// let entry = getEntry();

/////其他插件
//new webpack.HotModuleReplacementPlugin()//模块热替换 //无效待优化
const otherPlugin = [
    new ExtractTextPlugin("style.css"),
    new webpack.BannerPlugin('This is a System for Test !'), //插件用于给文件头部加注释信息
    new HtmlWebpackPlugin()
]

commonPlugins = commonPlugins.concat(otherPlugin);

module.exports = {
    // 指定webpack使用的模块，作为构建内部依赖图的开始
    entry: "./src/index/index.js",
    // 告诉webpack在哪里输出所创建的bundles，默认为./dist
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js',
    },
    resolve:{
        extensions:['.js','.jsx','.json'],
        alias:{
            components: path.resolve(__dirname, 'components') 
        }
    },
    // loader 让webpack能够处理那些非js文件（webpack自身只理解JavaScript）
    // loader 能够将所有类型文件转换为webpack能够处理的有效模块
    // 本质上，webpack loader将所有类型的文件， 转换为应用程序依赖图可以直接引用的模块
    module:{
        // loader 有两个目标
        // test属性 用于标识出应该被对应的loader进行转换的某个或某些文件
        // use属性  进行转换时，应该使用哪个loader
        rules:[
            {
                test: /\.(js|jsx)$/,
                // 使用babel-loader转换JavaScript文件
                // ?cacheDirectory表示传给babel-loader的参数，用于缓存babel的编译结果，加快重新编译的速度
                use:'babel-loader?cacheDirectory',
                exclude: path.resolve(__dirname, 'node_modules'),
                // 只命中src 和 components目录里面的JavaScript文件，加快webpack的搜索速度
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'components')
                ],
                // query:{
                //   presets:['react','es2015']
                // }
            },{
                test: /\.less$/,
                use: [
                    'style-loader', 'css-loader', 'postcss-loader', 'less-loader'
                ],
                // 排除node_modules下的文件
                exclude: path.resolve(__dirname, 'node_modules')
            },{ 
                test: /\.(png|jpg)$/, 
                use: 'url-loader?limit=8192' 
            }
        ],
    },
    // 处理各种各样的任务，打包优化和压缩到重新定义环境中的变量
    plugins: commonPlugins
}