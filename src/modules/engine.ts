import type { Board, Circle } from '../models/board'
import type { Dimension, Engine } from '../models/engine'
import { doCollision, doMove, doReflection } from './motion'
import { getCollisions, getOutOfBoard } from './hit'

const doUpdate = (board: Board<Circle>) => {
  const collisions = getCollisions(board)
  const outs = getOutOfBoard(board)

  collisions.forEach(collision => doCollision(collision))
  outs.forEach(out => doReflection(out))

  board.shapes.forEach(shape => doMove(shape))
}

const getFrames = (fps: number, updated: Dimension, now: Dimension): number => {
  const maxFrames = 5
  const elapsed = now - updated
  const framesPerMs = fps / 1000
  const frames = Math.ceil(elapsed * framesPerMs)

  return Math.min(maxFrames, frames)
}
/**
 * Get an 2D engine which run the given board
 * @param {Board<Circle>} board - The board to run
 * @param {number} fps=60 - The number of images displayed in one second
 * @returns {Engine} - The 2D engine
 */
export const getEngine = (board: Board<Circle>, fps = 60): Engine<DOMHighResTimeStamp> => ({
  start(timestamp = performance.now()) {
    const frames = getFrames(fps, this.updated, timestamp)

    if (frames) {
      this.updated = timestamp
      this.update(frames)
    }

    this.frame = window.requestAnimationFrame(this.start.bind(this))
  },
  stop() {
    window.cancelAnimationFrame(this.frame)
  },
  update(times = 1) {
    Array.from({ length: times }).forEach(() => doUpdate(board))
  },
  updated: performance.now(),
  frame: 0,
})
