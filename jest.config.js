/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  // This allows Jest to transpile TypeScript files before running the tests
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    // This array lists the files that should be run after the test environment has been set up but before the tests are run.
    '<rootDir>/src/tests/setup.ts',
  ],
  moduleNameMapper: {
    // Maps regular expressions to module names or paths.
    // When Jest encounters an import statement matching one of the keys in the map,
    // it replaces the key with the corresponding value
    '^src/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(css|scss)$': '<rootDir>/config/jest/styleMock.js',
    '\\.module.(css|scss)$': 'identity-obj-proxy', // TODO: CHECK IF THIS IS VALID
    '.+\\.svg$': '<rootDir>/config/jest/fileMock.js',
    '.+\\.(css|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  // This boolean option tells Jest whether to collect coverage information
  collectCoverage: true,
  collectCoverageFrom: [
    // This array specifies which files Jest should consider when calculating code coverage.
    // The ! symbol before a path indicates that files matching that path should be excluded from coverage collection
    'src/**/*.{tsx,ts}',
    '!src/bootstrap.tsx',
    '!src/tests/**/*',
    '!src/index.ts',
    '!src/**/*consts*.ts',
    '!src/**/*store*.ts',
    '!src/**/*consts*.tsx',
    '!src/**/*types*.ts',
    '!src/**/*styles*.ts',
    '!src/**/*.d.ts',
  ],
  coverageReporters: [
    // This array lists the reporters that Jest should use to report coverage information
    'lcov',
    'html',
    'json',
    'text-summary',
    'text',
  ],
  // path to coverage reports
  coverageDirectory: '<rootDir>/coverage',
  testMatch: [
    //   This array lists the glob patterns Jest uses to detect test files 1.
    '<rootDir>/src/**/*.spec.{js,jsx,ts,tsx}',
  ],
  //   This line specifies the environment in which the tests should be run. In this case, a custom JSDOM environment is used, defined in the file
  testEnvironment: 'jsdom',
  transform: {
    // The transform configuration in Jest is used to specify
    // how files should be transformed before being executed or tested.
    // It is crucial for handling non-JavaScript files,
    // such as TypeScript, JSX, or other preprocessed files,
    // so that Jest can properly understand and execute them.
    '^.+\\.(ts|js)$': 'babel-jest',
  },
  moduleDirectories: [
    // Jest should use to resolve modules.
    'node_modules',
    'src',
  ],
  moduleFileExtensions: [
    // This array lists the file extensions Jest should recognize as modules
    'js',
    'ts',
    'jsx',
    'tsx',
  ],
  // Reset mocks between each test
  resetMocks: true,
};
