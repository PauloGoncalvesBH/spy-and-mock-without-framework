const chalk = require('chalk')

const actualMessage = msg => chalk.green.bold(msg)
const expectedMessage = msg => chalk.red.bold(msg)
const errorMessage = (actual, expected) => `${actualMessage(actual)} is not equal to ${expectedMessage(expected)}`

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(errorMessage(actual, expected))
      }
    },
    toBeDeepStrictEqual(expected) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(errorMessage(actual, expected))
      }
    },
  }
}

module.exports = expect
