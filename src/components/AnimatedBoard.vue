<script setup lang="ts">
import { onUnmounted, watchEffect } from 'vue'
import type { Board, Circle } from '../models/board'
import { getEngine } from '../modules/engine'
import type { Engine } from '../models/engine'
import type { Colorable } from '../modules/colors'

// Types
interface Props {
  height: number
  width: number
  shapes: (Circle & Colorable)[]
  fps: number
}
// States
const props = defineProps<Props>()

// Variables
let engine: Engine<DOMHighResTimeStamp>

// Methods
const getBoard = (): Board<Circle> => ({
  size: { height: props.height, width: props.width },
  shapes: props.shapes,
})

const updateEngine = () => {
  if (engine)
    engine.stop()
  engine = getEngine(getBoard(), props.fps)
  engine.start()
}

// Hooks
onUnmounted(() => engine.stop())
watchEffect(() => updateEngine())
</script>

<template>
  <svg
    :width="props.width"
    :height="props.height"
  >
    <circle
      v-for="(shape, index) in props.shapes"
      :key="index"
      :cx="shape.coordinates.x"
      :cy="shape.coordinates.y"
      :r="shape.radius"
      :fill="shape.color"
    />
  </svg>
</template>
