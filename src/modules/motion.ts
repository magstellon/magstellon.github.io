import type { Vector } from '../models/dimensions'
import type { Circle, Shape } from '../models/board'
import { getCollision } from '../modules/hit'
import type { Pair } from '../models/hit'
import { doAdd, doMultiply, doNormalize, doSubtract } from './vectors'

/**
 * Apply direction on the current shape coordinate
 * @param {Shape} shape - Shape to move
 */
export const doMove = (shape: Shape) => shape.coordinates = doAdd(shape.coordinates, shape.direction)

/**
 * Apply a reflection direction on the given shape
 * @param {Shape} shape - Shape to reflect
 */
export const doReflection = (shape: Shape) => {
  const reflection: Vector = { x: -1, y: -1 }

  shape.direction = doMultiply(reflection, shape.direction)

  shape.direction = doNormalize(shape.direction)
}

/**
 * Apply collision direction on shapes
 * @param {Pair<Circle>} pair - Shapes to collide
 */
export const doCollision = (pair: Pair<Circle>) => {
  const [a, b] = pair
  const collision = getCollision(pair)

  a.direction = doSubtract(a.direction, collision)
  b.direction = doAdd(b.direction, collision)

  a.direction = doNormalize(a.direction)
  b.direction = doNormalize(b.direction)
}
