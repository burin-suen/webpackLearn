const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');  // 分离css

const rules = {
	rules: [
		{
			test: /\.css$/,
			//loader: ['style-loader', 'css-loader']  // 第一种写法
			//use: ['style-loader', 'css-loader']  // 第二种写法
			// use: [
			// 	{loader: 'style-loader'},
			// 	{loader: 'css-loader'},
			// 	{loader: 'postcss-loader'}  // 处理css前缀
			// ]
			use: ExtractTextWebpackPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'postcss-loader'],
				publicPath: '../'    // 解决css背景图路径问题
			})
		},
		{
			test: /\.less$/,
			//use: ['style-loader', 'css-loader', 'less-loader']
			use: ExtractTextWebpackPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'less-loader'],
				publicPath: '../'    // 解决css背景图路径问题
			})
		},
		{
			test: /\.(scss|sass)$/,
			//use: ['style-loader', 'css-loader', 'sass-loader']
			use: ExtractTextWebpackPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader'],
				publicPath: '../'    // 解决css背景图路径问题
			})
		},
		{
			test: /\.(png|gif|jpe?g|svg)/,
			use: [
				{
					loader: 'url-loader',  // url-loader依赖file-loader
					options: {
						limit: 5000,   // 小于5kb转base64字符串
						name: 'images/[name]-[hash:8].[ext]'
					}
				}
			]
		},
		{
			test: /\.m?js$/,
			use: ['babel-loader'],
			exclude: /node_modules/  // 不包含node_modules目录
		}
	]
};

module.exports = rules;