module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js}",
    "!**/jest.config.js",
    "!**/coverage/**/*.{js}",
    "!index.js"
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -10
    }
  }
};
