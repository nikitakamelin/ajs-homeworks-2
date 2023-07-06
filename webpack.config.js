const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index_test.js',
	module: {
		rules: [
			{
				test: /\.txt$/,  //регулярное выражение
				loader: 'raw-loader'
			},
			{
				test: /\.css$/,  //регулярное выражение
				use: [
					MiniCSSExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCSSExtractPlugin()
	]
}