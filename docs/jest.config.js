
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'],
};

module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };
  