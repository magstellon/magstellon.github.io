export type ColorName = keyof typeof COLORS
export type Color = typeof COLORS[ColorName]

export interface Colorable {
  color: Color
}

export const COLORS = {
  lemon: '#FFF002',
  avocado: '#B0DE02',
  watermelon: '#00AF3F',
  blueberry: '#2F4858',
}

