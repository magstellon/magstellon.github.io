import type { Board, Circle } from '../models/board'
import type { Coordinates, Vector } from '../models/dimensions'
import type { Color, ColorName, Colorable } from './colors'
import { COLORS } from './colors'

const getRandom = (min: number, max: number): number => Math.round(Math.random() * (max - min) + min)

const getDirection = (): Vector => ({ x: getRandom(-1, 1), y: getRandom(-1, 1) })

const getCoordinates = (maxX: number, maxY: number): Coordinates => ({ x: getRandom(0, maxX), y: getRandom(0, maxY) })

const getColor = (): Color => {
  const colorNames = [COLORS.lemon, COLORS.avocado, COLORS.watermelon] as ColorName[]
  const index = getRandom(0, colorNames.length - 1)
  return colorNames[index]
}

const getRadius = (max: number): number => Math.round(max / getRandom(1, 2))

/**
 * Get a random colored circle
 * @param {number} maxX - the maximum x-coordinate of the circle
 * @param {number} maxY - The maximum y-coordinate of the circle
 * @returns {Circle & Colorable} - A random colored circle
 */
export const getColoredCircle = (maxX: number, maxY: number): Circle & Colorable => ({
  coordinates: getCoordinates(maxX, maxY),
  radius: getRadius(60),
  direction: getDirection(),
  color: getColor(),
})

/**
 * Get a collection of random colored circles
 * @param {number} maxX - the maximum x-coordinate of the circle
 * @param {number} maxY - The maximum y-coordinate of the circle
 * @param {number} circles - The number of circle to add in collection
 * @param {(Circle & Colorable)[]} - A random collection of colored circles
 */
export const getColoredCircles = (maxX: number, maxY: number, circles: number): (Circle & Colorable)[] =>
  Array.from({ length: circles }).map(() => getColoredCircle(maxX, maxY))

/**
 * Get a random board with circles
 * @param {number} height - The height of the board
 * @param {number} width - The width of the board
 * @param {number} circles - The number of circles to add in board
 * @returns {Board} - A board with random circles
 */
export const getBoard = (height: number, width: number, circles: number): Board<Circle> => ({
  size: { width, height },
  shapes: getColoredCircles(height, width, circles),
})
