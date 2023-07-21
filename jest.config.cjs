/** @type {import('ts-jest').JestConfigWithTsJest;} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    "<rootDir>"
  ],
  modulePaths: [
    "<rootDir>"
  ],
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  moduleFileExtensions: [
    "js",
    "ts"
  ]
};