import { describe, expect, test } from 'vitest'
import { doCollision, doMove, doReflection } from '../../src/modules/motion'
import type { Circle, Shape } from '../../src/models/board'
import { getColoredCircle } from '../../src/modules/board'
import type { Vector } from '../../src/models/dimensions'

describe('imports', () => {
  test('doMove expected', async () => {
    expect(doMove).toBeDefined()
  })
  test('doReflection expected', async () => {
    expect(doReflection).toBeDefined()
  })
  test('doCollision expected', async () => {
    expect(doCollision).toBeDefined()
  })
})

describe('doMove', () => {
  test('Shape with no direction do not move', () => {
    const direction: Vector = { x: 0, y: 0 }
    const shape: Shape = { ...getColoredCircle(100, 100), direction }

    doMove(shape)

    expect(shape).toEqual(shape)
  })

  test('Shape with north direction move to north', () => {
    const direction: Vector = { x: 0, y: -1 }
    const shape: Shape = { ...getColoredCircle(100, 100), direction }
    const clone: Shape = JSON.parse(JSON.stringify(shape))

    doMove(shape)

    expect(shape.coordinates.x).toBe(clone.coordinates.x + direction.x)
    expect(shape.coordinates.y).toBe(clone.coordinates.y + direction.y)
    expect(shape.direction).toEqual(clone.direction)
  })

  test('Shape with south direction move to south', () => {
    const direction: Vector = { x: 0, y: 1 }
    const shape: Shape = { ...getColoredCircle(100, 100), direction }
    const clone: Shape = JSON.parse(JSON.stringify(shape))

    doMove(shape)

    expect(shape.coordinates.x).toBe(clone.coordinates.x + direction.x)
    expect(shape.coordinates.y).toBe(clone.coordinates.y + direction.y)
    expect(shape.direction).toEqual(clone.direction)
  })

  test('Shape with east direction move to east', () => {
    const direction: Vector = { x: 1, y: 0 }
    const shape: Shape = { ...getColoredCircle(100, 100), direction }
    const clone: Shape = JSON.parse(JSON.stringify(shape))

    doMove(shape)

    expect(shape.coordinates.x).toBe(clone.coordinates.x + direction.x)
    expect(shape.coordinates.y).toBe(clone.coordinates.y + direction.y)
    expect(shape.direction).toEqual(clone.direction)
  })

  test('Shape with west direction move to west', () => {
    const direction: Vector = { x: -1, y: 0 }
    const shape: Shape = { ...getColoredCircle(100, 100), direction }
    const clone: Shape = JSON.parse(JSON.stringify(shape))

    doMove(shape)

    expect(shape.coordinates.x).toBe(clone.coordinates.x + direction.x)
    expect(shape.coordinates.y).toBe(clone.coordinates.y + direction.y)
    expect(shape.direction).toEqual(clone.direction)
  })
})

describe('doReflection', () => {
  test('Shape with no direction do not move', () => {
    const direction: Vector = { x: 0, y: 0 }
    const shape: Shape = { ...getColoredCircle(100, 100), direction }

    doReflection(shape)

    expect(shape).toEqual(shape)
  })
  test('Shape with north direction move to south', () => {
    const direction: Vector = { x: 0, y: -1 }
    const shape: Shape = { ...getColoredCircle(100, 100), direction }
    const clone: Shape = JSON.parse(JSON.stringify(shape))

    doReflection(shape)

    expect(shape.coordinates.x).toBe(clone.coordinates.x)
    expect(shape.coordinates.y).toBe(clone.coordinates.y)
    expect(shape.direction.x).toBe(clone.direction.x)
    expect(shape.direction.y).toBe(-1 * clone.direction.y)
  })
  test('Shape with south direction move to north', () => {
    const direction: Vector = { x: 0, y: 1 }
    const shape: Shape = { ...getColoredCircle(100, 100), direction }
    const clone: Shape = JSON.parse(JSON.stringify(shape))

    doReflection(shape)

    expect(shape.coordinates.x).toBe(clone.coordinates.x)
    expect(shape.coordinates.y).toBe(clone.coordinates.y)
    expect(shape.direction.x).toBe(clone.direction.x)
    expect(shape.direction.y).toBe(-1 * clone.direction.y)
  })
  test('Shape with east direction move to west', () => {
    const direction: Vector = { x: 1, y: 0 }
    const shape: Shape = { ...getColoredCircle(100, 100), direction }
    const clone: Shape = JSON.parse(JSON.stringify(shape))

    doReflection(shape)

    expect(shape.coordinates.x).toBe(clone.coordinates.x)
    expect(shape.coordinates.y).toBe(clone.coordinates.y)
    expect(shape.direction.x).toBe(-1 * clone.direction.x)
    expect(shape.direction.y).toBe(clone.direction.y)
  })
  test('Shape with west direction move to east', () => {
    const direction: Vector = { x: -1, y: 0 }
    const shape: Shape = { ...getColoredCircle(100, 100), direction }
    const clone: Shape = JSON.parse(JSON.stringify(shape))

    doReflection(shape)

    expect(shape.coordinates.x).toBe(clone.coordinates.x)
    expect(shape.coordinates.y).toBe(clone.coordinates.y)
    expect(shape.direction.x).toBe(-1 * clone.direction.x)
    expect(shape.direction.y).toBe(clone.direction.y)
  })
})

describe('doCollision', () => {
  test('Shapes collision move in new directions', () => {
    const getClone = <T extends Shape>(shape: T) => JSON.parse(JSON.stringify(shape))
    const direction: Vector = { x: 1, y: 0 }

    const shape: Circle = { ...getColoredCircle(100, 100), direction }
    const [beforeShape, obstacle] = Array.from({ length: 2 }).map(() => getClone<Circle>(shape))

    // Prepare collision between shape and obstacle
    obstacle.coordinates.x += obstacle.radius
    doReflection(obstacle)
    expect(shape.direction).not.toEqual(obstacle.direction)


    // Apply collision between shape and obstacle
    const beforeObstacle = getClone<Circle>(obstacle)
    doCollision([shape, obstacle])
    expect(shape.direction).not.toEqual(beforeShape.direction)
    expect(obstacle.direction).not.toEqual(beforeObstacle.direction)
  })
})
