import type { Coordinates, Size, Vector } from './dimensions'

export interface Board<T extends Shape> {
  size: Size
  shapes: T[]
}

export interface Shape {
  coordinates: Coordinates
  direction: Vector
}

export interface Circle extends Shape {
  radius: number
}
