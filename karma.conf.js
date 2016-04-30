const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function (config) {
  config.set({
    browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],
    singleRun: true, // just run once by default
    frameworks: ['jasmine'], // use the jasmine test framework
    files: [
      'client/dist/bundle.js', 'client/tests.bundle.js', // just load this file
    ],
    preprocessors: {
      'client/tests.bundle.js': ['webpack', 'sourcemap'], // preprocess with webpack and sourcemap
    },
    reporters: ['spec'], // report results in this format
    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: false,  // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: false,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: false, // print the time elapsed for each spec
    },
    webpack: webpackConfig,
  });
};
