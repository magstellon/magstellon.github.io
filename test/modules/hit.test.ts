import { describe, expect, test } from 'vitest'
import { getOutOfBoard, getCollision, getCollisions } from '../../src/modules/hit'

describe('imports', () => {
  test('getCollision expected', async () => {
    expect(getCollision).toBeDefined()
  })
  test('getCollisions expected', async () => {
    expect(getCollisions).toBeDefined()
  })
  test('getOutOfBoard expected', async () => {
    expect(getOutOfBoard).toBeDefined()
  })
})

