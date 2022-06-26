import { describe, expect, test } from 'vitest'
import { getColoredCircle, getBoard, getColoredCircles } from '../../src/modules/board'

describe('imports', () => {
  test('getColoredCircle expected', async () => {
    expect(getColoredCircle).toBeDefined()
  })
  test('getColoredCircles expected', async () => {
    expect(getColoredCircles).toBeDefined()
  })
  test('getBoard expected', async () => {
    expect(getBoard).toBeDefined()
  })
})

describe('getColoredCircle', () => {
  test('Should have right structure', () => {
    const [height, width] = [10, 10]
    const circle = getColoredCircle(10,10)

    expect(circle).toBeDefined()
    expect(circle.color).toBeDefined()
    expect(circle.coordinates.x).toBeDefined()
    expect(circle.coordinates.y).toBeDefined()
    expect(circle.direction.x).toBeDefined()
    expect(circle.direction.y).toBeDefined()
    expect(circle.radius).toBeDefined()
  })
})