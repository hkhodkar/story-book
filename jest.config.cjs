module.exports = {

    roots: ["<rootDir>/src"],

    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: [
      "/node_modules/",
    ],
    testPathIgnorePatterns: [
      "/node_modules/",
    ],
    modulePathIgnorePatterns: ['node_module,jest-test-result.json'],

    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
  };