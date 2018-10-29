const path = require('path');

const jsonConfig = require('./modules/webpack.config.json');
const rules = require('./modules/webpack.rules.js');
const plugins = require('./modules/webpack.plugins.js');
const server = require('./modules/webpack.server.js');

module.exports = {
	mode: 'development',  // 运行环境
	entry: jsonConfig.entry,  // 入口配置
	output: { // 出口配置
		filename: '[name]-[hash].bunld.js',  // 输出文件名
		path: path.join(__dirname, 'dist') // 输入目录
	},
	// 服务器，配置后需要在package.json中修改启动项
	// 注意： webpack-dev-server运行项目中不会生成dist目录
	// dist目录存放在内存中。
	// webpack运行才会项目中生成dist目录
	devServer: server,
	module: rules,
	plugins: plugins
};
/*
	提取js:
		webapack3.x之前使用webpack.optimize.CommonsChunkPlugin()插件
			entry: { jquery: 'jquery'},
			plugins: [
				new webpack.optimize.CommonsChunkPlugin({
					name: 'jquery'   // 这里对应entry中声明的key
				})
			]

		webpack4.x使用 config.optimization.splitChunks
			module.exports = {
				entry: {jquery: 'jquery'},
				optimization: {
					splitChunks: {
						cacheGroups: {
							vendor(这个key随意): {
								chunks: 'initial',
								name: 'jquery',
								enforce: true
							},
							aaa: {
								chunks: 'initial',
								name: 'jquery',
								enforce: true
							}
						}
					}
				}
			}
 */