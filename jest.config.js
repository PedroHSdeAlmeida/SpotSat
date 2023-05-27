module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['<rootDir>/out/'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testEnvironmentOptions: {
      PORT: 3001, 
    },
  };
  