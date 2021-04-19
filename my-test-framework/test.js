const signale = require('signale')

async function test(title, callback) {
  try {
    await callback()
    signale.success(title)
  } catch (error) {
    signale.error(title)
    console.error(error)
    process.exit(1)
  }
}

module.exports = { test }
