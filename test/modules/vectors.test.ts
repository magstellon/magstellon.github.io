import { describe, expect, test } from 'vitest'
import { Vector } from '../../src/models/dimensions'
import { doAdd, doSubtract, doMultiply, getZero, getDistance, doNormalize} from '../../src/modules/vectors'

describe('imports', () => {
  test('doAdd expected', async () => {
    expect(doAdd).toBeDefined()
  })
  test('doSubtract expected', async () => {
    expect(doSubtract).toBeDefined()
  })
  test('doMultiply expected', async () => {
    expect(doMultiply).toBeDefined()
  })
  test('getZero expected', async () => {
    expect(getZero).toBeDefined()
  })
  test('getDistance expected', async () => {
    expect(getDistance).toBeDefined()
  })
})

describe('Math operations', () => {
  test('Sum of vectors', () => {
    const a: Vector = { x: 1, y: 5 }
    const b: Vector = { x: 3, y: 6 }

    const sum: Vector = doAdd(a, b)

    expect(sum.x).toEqual(a.x + b.x)
    expect(sum.y).toEqual(a.y + b.y)
  })

  test('Vectors subtraction', () => {
    const a: Vector = { x: 1, y: 5 }
    const b: Vector = { x: 3, y: 6 }

    const sub: Vector = doSubtract(a, b)

    expect(sub.x).toEqual(a.x - b.x)
    expect(sub.y).toEqual(a.y - b.y)
  })

  test('Multiplication of vectors', () => {
    const a: Vector = { x: 1, y: 5 }
    const b: Vector = { x: 3, y: 6 }

    const product: Vector = doMultiply(a, b)

    expect(product.x).toEqual(a.x * b.x)
    expect(product.y).toEqual(a.y * b.y)
  })

  test('Normalize vectors', () => {
    const a: Vector = { x: 1, y: 5 }

    const normalize: Vector = doNormalize(a)

    expect(normalize.x).toEqual(normalize.x / normalize.x)
    expect(normalize.y).toEqual(normalize.y / normalize.y)
  })

  test('Zero vector', () => {
    const zero: Vector = getZero()

    expect(zero.x).toEqual(0)
    expect(zero.y).toEqual(0)
  })

  test('Distances between vectors', () => {
    const a: Vector = { x: 0, y: 0 }
    const b: Vector = { x: 0, y: 10 }

    const distance = getDistance(a, b)

    expect(distance).toEqual(10)
  })
})
