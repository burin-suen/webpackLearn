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