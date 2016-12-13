const webpackConfig = require('./webpack.spec.js').module

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
		files: [
				"test/**/*.tsx"
		],
    preprocessors: {
      "test/**/*.tsx": ['webpack', 'sourcemap']
    },
    webpack: {
			devtool: 'inline-source-map',
			resolve: { extensions: [ '', '.js', '.jsx', '.ts', '.tsx', '.css' ] },
			module: webpackConfig,
			externals:[
				'react/lib/ExecutionEnvironment',
				'react/addons',
				'react/lib/ReactContext'
			]
		},
		plugins: [
				"karma-*"
		],
    exclude: [],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
