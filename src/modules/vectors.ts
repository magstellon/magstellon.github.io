import type { Vector } from '../models/dimensions'

/**
 * Add vectors
 * @param  {Vector} a - The first vector to add
 * @param  {Vector} b - The second vector to add
 */
export const doAdd = (a: Vector, b: Vector): Vector => ({ x: a.x + b.x, y: a.y + b.y })

/**
 * Substract vectors
 * @param  {Vector} a - The first vector to substract
 * @param  {Vector} b - The second vector to substract
 */
export const doSubtract = (a: Vector, b: Vector): Vector => ({ x: a.x - b.x, y: a.y - b.y })

/**
 * Multiply vectors
 * @param  {Vector} a - The first vector to multiply
 * @param  {Vector} b - The second vector to multiply
 */
export const doMultiply = (a: Vector, b: Vector): Vector => ({ x: a.x * b.x, y: a.y * b.y })

/**
 * Normalize vectors
 * @param  {Vector} direction - The vector to normalize
 * @returns {Vector} - Normalized vector
 */
export const doNormalize = (direction: Vector): Vector => ({
  x: direction.x ? direction.x / Math.abs(direction.x) : 0,
  y: direction.y ? direction.y / Math.abs(direction.y) : 0,
})

/**
 * Get the zero vector
 * @returns {Vector} - The zero vector
 */
export const getZero = () => ({ x: 0, y: 0 })

/**
 * Get the distance between two vectors
 * @param  {Vector} a - The first vector for distance calculation
 * @param  {Vector} b - The second vector for distance calculation
 * @returns {number} - The distance between two vectors
 */
export const getDistance = (a: Vector, b: Vector): number => {
  const { x: dx, y: dy } = doSubtract(b, a)
  return Math.round(Math.sqrt(dx * dx + dy * dy))
}
