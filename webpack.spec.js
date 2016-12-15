const webpack = require('webpack');
const path = require('path');

module.exports = {
	// cache: true,
  devtool: 'source-map',
	entry: ['./test/component/AddDeleteFooter'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.json', '.js', '.jsx', '.ts', '.tsx', '.css']
  },
	externals:[
		'react/lib/ExecutionEnvironment',
		'react/addons',
		'react/lib/ReactContext'
	],
  module: {
    loaders: [
      {
        test: /\.(ts|tsx)$/,
        loaders: ['mocha', 'babel', "ts"],
				exclude: 'node_modules'
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
