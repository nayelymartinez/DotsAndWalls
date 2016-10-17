module.exports = {
	entry: './dotsandwalls/web/static/js/src/dotsandwalls.js',
	output: {
		path: './dotsandwalls/web/static/js/build',
		filename: 'bundle.js'
	},
	watch:true,
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: [/node_modules/],
			loader: 'babel-loader'
		}]
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
	}
};