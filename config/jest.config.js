module.exports = {
  rootDir: "../",
  setupFilesAfterEnv: ["./config/jest.setup.js"],
  transform: {
    "\\.js$": ["babel-jest", { configFile: "./.babelrc" }],
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
  },
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  coveragePathIgnorePatterns: ["<rootDir>/test/test-utils.js"],
};
