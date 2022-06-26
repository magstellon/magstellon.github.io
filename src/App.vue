<script setup lang="ts">
import { ref } from 'vue'
import { useWindowResize } from './composables/window-resize'
import { getColoredCircles } from './modules/board'
import AnimatedBoard from './components/AnimatedBoard.vue'
import ResumeBio from './components/ResumeBio.vue'

// Constants
const density = 40000
const fps = 30

// Composables
const bounds = ref(useWindowResize())

// Variables
const area = bounds.value.height * bounds.value.width
const circles = Math.round(area / density)

// Refs
const shapes = ref(getColoredCircles(bounds.value.width, bounds.value.height, circles))
</script>

<template>
  <div class="font-sans h-full relative relative w-full">
    <AnimatedBoard
      :height="bounds.height"
      :width="bounds.width"
      :shapes="shapes"
      :fps="fps"
    />
    <main class="center lg:w-auto md:w-[80%] modal w-[90%]">
      <ResumeBio />
    </main>
  </div>
</template>

<style lang="scss">
body, html, #app {
  height: 100%;
  width: 100%;
  background-color: #F5F4F2;
  // The minimum common width of mobile devices
  min-width: 320px;

  .modal {
    @apply bg-opacity-75 bg-white font-light font-sans sm:p-10 p-5 rounded-lg shadow
  }

  .center {
    @apply absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] my-0 mx-auto
  }
}
</style>
