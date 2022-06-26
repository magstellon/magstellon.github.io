export type Dimension = number

export interface Engine<T extends Dimension> {
  start: (timestamps?: T) => void
  stop: () => void
  update: (times: number) => void
  updated: T
  frame: number
}
