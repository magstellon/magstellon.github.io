import { describe, expect, test } from 'vitest'
import { getBoard } from '../../src/modules/board'
import { getEngine } from '../../src/modules/engine'

describe('imports', () => {
  test('getEngine expected', async () => {
    expect(getEngine).toBeDefined()
  })
})

describe('getEngine', () => {
  test('Run the engine updates shapes', () => {
    const board = getBoard(1000, 1000, 1)
    const clone = JSON.parse(JSON.stringify(board))

    const engine = getEngine(board)

    engine.start(performance.now())
    engine.stop()
    
    expect(board.shapes).not.toEqual(clone.shapes)
  })
})