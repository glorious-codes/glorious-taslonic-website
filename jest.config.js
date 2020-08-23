const fs = require('fs');
const project = require('./project.json');
const env = process.NODE_ENV || 'development';

module.exports = {
  collectCoverageFrom: project.tests.source.files,
  coverageReporters: ['html'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  moduleNameMapper: {
    '@vue$': 'vue/dist/vue.common.js',
    '@environment$': `<rootDir>/${project.environments.source.root}/${env}.js`,
    '@images\/(.*)$': `${__dirname}/${project.images.source.root}$1`,
    '@scripts\/(.*)$': `<rootDir>/${project.scripts.source.root}$1`,
    '@styles\/(.*)$': `<rootDir>/${project.styles.source.root}$1`
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(css|styl|png|jpe?g|gif|svg)$': '<rootDir>/src/scripts/base/mocks/raw-files.js',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.html$': 'html-loader-jest'
  }
}
