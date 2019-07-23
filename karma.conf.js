// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
	files: [
  { pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: false },
  { pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: false },
  { pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: false },

  { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: false },
  { pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: false },
  { pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: false },
  { pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: false},

  { pattern: 'node_modules/rxjs/**/*', included: false, watched: false },
  { pattern: 'node_modules/@angular/**/*', included: false, watched: false },
  { pattern: 'karma-test-shim.js', included: true, watched: true },
  { pattern: 'systemjs.config.test.js', included: true, watched: true },

  // Distribution folder.

  { pattern: 'app/**/*', included: false, watched: true },
  { pattern: 'common/**/*', included: false, watched: true },
  { pattern: 'common/utils/**/*', included: false, watched: true },
  { pattern: 'common/utils/logger/**/*', included: false, watched: true },
  { pattern: 'demo/**/*', included: false, watched: true }
],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/microservice-ui'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
