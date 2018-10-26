const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');  // 删除目录插件
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 生成html文档
const WebpackDevServer = require('webpack-dev-server');  // 服务器
const webpack = require('webpack');

module.exports = {
	entry: {  // 入口配置
		index: './src/index.js',
		test: './src/test.js',
	},
	output: { // 出口配置
		filename: '[name]-[hash].bunld.js',  // 输出文件名
		path: path.join(__dirname, 'dist') // 输入目录
	},
	devServer: {  // 服务器，配置后需要在package.json中修改启动项
		contentBase: path.join(__dirname, 'dist'), // 设置服务器访问的基本目录
		host: 'localhost',  //服务器地址
		port: 8080,  //端口号
		open: true,  // 是否打开浏览器
		hot: true, // 是否热更新(需要依赖 webpack.HotModuleReplacementPlugin)插件
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),  // 清除 dist 目录
		new HtmlWebpackPlugin({  // 生成html
			template: './src/index.html',  // 模板源路径
			title: 'Hello Webpack!',  // html <title></title>
			filename: 'index.html',  // 生成html名称，可以指定目录(assets/index.html)
			meta: {  // 注入meta
				viewport: 'width=device-width, initial-scale=1, shrin-to-fit=no'
			},
			minify: {  // 压缩
				collapseWhitespace: true  // 压缩空白
			},
			hash: false,  // 为所有包含js和css添加编译哈希
			cache: true,  // 仅在文件被更改时才发出文件
			chunks: ['index', 'test']  // 需要引入的模块(js)名称(与entry中的key对应)
		}),
		new HtmlWebpackPlugin({
			template: './src/test.html',
			title: 'Hello test!',
			filename: 'test.html',
			chunks: ['test']
		}),
		new webpack.HotModuleReplacementPlugin() // 热更新
	]
};