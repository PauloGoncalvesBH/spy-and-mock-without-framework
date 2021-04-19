const { spyOn } = require('../index')

const thumbWar = require('../src/thumb-war')
const utils = require('../src/utils')

test('Teste de spy', async () => {
  spyOn(utils, 'getWinner')
  utils.getWinner.mockImplementation((p1, p2) => p1)

  const winner = thumbWar('Paulo Gonçalves', 'Fulano')
  expect(winner).toBe('Jogador não existente')
  expect(utils.getWinner.mock.calls).toBeDeepStrictEqual([
    ['Paulo Gonçalves', 'Fulano'],
    ['Paulo Gonçalves', 'Fulano']
  ])

  // cleanup
  utils.getWinner.mockRestore()
})
