import { describe, expect, test } from 'vitest'
import { COLORS } from '../../src/modules/colors'

describe('imports', () => {
  test('colors expected', async () => {
    expect(COLORS).toBeDefined()
  })
})

