global.test = require('./my-test-framework/test').test
global.expect = require('./my-test-framework/expect')

module.exports = {
  spyOn: require('./my-test-framework/spy').spyOn,
}

const files = process.argv
files.slice(2).forEach((file) => require(file))
