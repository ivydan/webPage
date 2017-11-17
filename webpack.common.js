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
var getEntry = function(){
    var entry = {};
    glob.sync('./src/**/index.js').forEach(function(name){
        var n = name.slice(name.lastIndexOf('src/') + 4, name.length - 3);
        n = n.slice(0, n.lastIndexOf('/'));
        entry[n] = name;
    });
    console.info("entry:", entry);
    return entry;
}

let entry = getEntry();

/////其他插件
//new webpack.HotModuleReplacementPlugin()//模块热替换 //无效待优化
const otherPlugin = [
    new ExtractTextPlugin("style.css"),
    new webpack.BannerPlugin('This is a SD System for Test !'), //插件用于给文件头部加注释信息
    new HtmlWebpackPlugin({
        title: `Web Page`,
        filename: `index.html`,
        template: path.join(__dirname, 'index.html')
    })
]

commonPlugins = commonPlugins.concat(otherPlugin);

module.exports = {
    entry: entry,
    output:{
        path: path.resolve(__dirname, "./build/"),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: "umd"
    },
    resolve:{
        extensions:['.js','.jsx','.json'],
        alias:{
            components: path.resolve(__dirname, 'components') 
        }
    },
    externals:[{
        "react": "React",
        "react-dom": "ReactDOM",
        "lodash": "lodash"
    }],
    module:{
        loaders:[
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                  presets:['react','es2015']
                }
            },{
                test: /\.css$/,
                exclude: /^node_modules$/,
			      use: ExtractTextPlugin.extract({
				      fallback: "style-loader",
				      use: [
					      { loader: 'css-loader', options: { importLoaders: 1 } },
					      'postcss-loader'
				      	]
			      })
            }, {
                test: /\.less/,
                exclude: /^node_modules$/,
			      use: ExtractTextPlugin.extract({
				      fallback: "style-loader",
				      use: [
					      { loader: 'css-loader', options: { importLoaders: 1 } },
					      'postcss-loader',
					      {
						      loader: 'less-loader'
					      }
				      ]
			      })
            },{ 
                test: /\.(png|jpg)$/, 
                loader: 'url-loader?limit=8192' 
            }
        ],
    },
    plugins: commonPlugins
}