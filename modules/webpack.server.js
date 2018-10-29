const path = require('path');
const WebpackDevServer = require('webpack-dev-server');  // 服务器

const jsonConfig = require('./webpack.config.json');

const server = {
	contentBase: path.join(__dirname, 'dist'), // 设置服务器访问的基本目录
	host: jsonConfig.host,  //服务器地址
	port: jsonConfig.port,  //端口号
	open: true,  // 是否打开浏览器
	hot: true, // 是否热更新(需要依赖 webpack.HotModuleReplacementPlugin)插件
};

module.exports = server;