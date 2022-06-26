import type { Board, Circle, Shape } from '../models/board'
import type { Vector } from '../models/dimensions'
import type { Pair } from '../models/hit'
import { doSubtract, getDistance, getZero } from './vectors'

const getPairs = <T extends Shape>(shapes: T[]): Pair<T>[] =>
  shapes.map((v, i) => shapes.slice(i + 1).map(w => [v, w] as Pair<T>)).flat()

const isOnBoard = (board: Board<Shape>, shape: Circle): boolean => {
  if (shape.coordinates.x + shape.radius < 0)
    return false
  if (shape.coordinates.y + shape.radius < 0)
    return false
  if (shape.coordinates.x - shape.radius > board.size.width)
    return false
  if (shape.coordinates.y - shape.radius > board.size.height)
    return false

  return true
}

const isHit = (pair: Pair<Circle>): boolean => {
  const [a, b] = pair
  return getDistance(a.coordinates, b.coordinates) <= a.radius + b.radius
}

/**
 * Get the collision vector betwen two shapes
 * @param {Pair<Circle>} pair - Shapes that are colliding
 * @returns {Vector} - The collision vector of given shapes
 */
export const getCollision = (pair: Pair<Circle>): Vector => {
  const [a, b] = pair
  return isHit(pair) ? doSubtract(b.coordinates, a.coordinates) : getZero()
}

/**
 * Get all shape collisions on the given board
 * @param {Board<Circle>} board - The board where we want to get collisions
 * @returns {Pair<Circle>[]} - All shape collisions
 */
export const getCollisions = (board: Board<Circle>): Pair<Circle>[] =>
  getPairs(board.shapes).filter(pair => isHit(pair))

/**
 * Get all shapes which are out of the board
 * @param {Board<Circle>} board - The board to consider
 * @returns {Circle[]} - Shapes outside of the board
 */
export const getOutOfBoard = (board: Board<Circle>): Circle[] =>
  board.shapes.filter(shape => !isOnBoard(board, shape))
