var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack');

module.exports = {
  context: path.resolve('app'),
	entry: [
    'materialize-css/bin/materialize.css',
    'materialize-css/bin/materialize.js',
    './index'
  ],

  devServer: {
    contentBase: 'public'
  },

	output: {
    path: path.resolve('build/'),
    publicPath: '/public/assets/',
		filename: "bundle.js"
	},

	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			}
		],
		loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader?optional[]=runtime&stage=0'
			},
      {
        test: /\.png$/,
        loader: "url-loader",
        query: { mimetype: "image/png" }
      },
      {
        test: /\.gif(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=image/gif',
      },
      {
        test: /\.(otf|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-eot',
      },
      {
        test: /\.(woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff2',
      }
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	},

  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "Hammer": "hammerjs/hammer"
    })
  ]
}
