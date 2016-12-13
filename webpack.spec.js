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
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.css']
  },

  module: {
    loaders: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
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
