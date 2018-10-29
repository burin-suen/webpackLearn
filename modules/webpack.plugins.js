const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');  // 删除目录插件
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 生成html文档
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');  // 压缩插件, webpack4.x已实现生产环境自动压缩
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');  // 分离css
const webpack = require('webpack');

const plugins = [
	new CleanWebpackPlugin(['dist']),  // 清除 dist 目录
	new HtmlWebpackPlugin({  // 生成html
		// 注意：使用html-webpack-plugin中使用其它loader后，
		// html-webpack-plugin的变量将无法解析(<%= htmlWebpackPlugin.options.title %>)，
		template: 'html-withimg-loader!' + path.join(__dirname, '../src/index.html'),  // 模板源路径  这里使用html-withimg-loader解决html引入的img资源不能处理的问题
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
		template: 'html-withimg-loader!' + path.join(__dirname, '../src/index.html'),
		title: 'Hello test!',
		filename: 'test.html',
		chunks: ['test']
	}),
	new webpack.HotModuleReplacementPlugin(), // 热更新
	new UglifyjsWebpackPlugin(),  // 资源压缩插件， webpack4.x已实现生产环境自动压缩
	new ExtractTextWebpackPlugin('css/index.css'),  // 提取css
];

module.exports = plugins;