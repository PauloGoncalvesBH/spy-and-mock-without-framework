require('./__mocks__/utils') // prime the cache
const utilsPath = require.resolve('../src/utils')
const mockUtilsPath = require.resolve('./__mocks__/utils')
require.cache[utilsPath] = require.cache[mockUtilsPath]

const thumbWar = require('../src/thumb-war')
const utils = require('../src/utils')

test('Teste de mock utilizando arquivo em __mocks__', async () => {
  const winner = thumbWar('Paulo Gonçalves', 'Fulano')
  expect(winner).toBe('Fulano')
  expect(utils.getWinner.mock.calls).toBeDeepStrictEqual([
    ['Paulo Gonçalves', 'Fulano'],
    ['Paulo Gonçalves', 'Fulano']
  ])
})
