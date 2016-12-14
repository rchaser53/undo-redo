const webpack = require('webpack');
const path = require('path');

const config = {
  cache: true,
  devtool: 'inline-source-map',
  entry: './test/component/AddDeleteFooter',

  output: {
    path: __dirname,
    filename: 'specs.js',
    sourceMapFilename: 'specs.map'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.css', '.html']
  },
	externals:[
		'react/lib/ExecutionEnvironment',
		'react/addons',
		'react/lib/ReactContext'
	],
  module: {
		preLoaders: [
				{ test: /\.js$/, loader: "source-map-loader" }
		],
    loaders: [
      {
        test: /\.(ts|tsx)$/,
        loaders: ["mocha","ts"],
        exclude: /node_modules/
      },
			{ test: /\.json$/, loader: 'json-loader' },
    	{
				test: /\.css$/,
        loaders: [
          'style-loader',
          'css?modules'
        ]
			}
    ]
  }
};
module.exports = config;
