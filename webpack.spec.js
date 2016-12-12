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
        loaders: ['mocha','babel', 'ts'],
        include: path.join(__dirname, 'src')
      },
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
