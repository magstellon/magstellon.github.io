<script setup lang="ts">
import { ref } from 'vue'

// States
const me = ref({
  name: 'Mag-Stellon Nadarajah',
  role: 'Software Engineer Manager',
})

const company = ref({
  name: 'Hermès',
  link: 'https://www.hermes.com/',
})

const networks = ref([{
  link: 'https://www.linkedin.com/in/mag-stellon-nadarajah-2456388b/',
  class: 'finger-friendly text-[#0a66c2]',
  icon: ['fab', 'linkedin'],
}, {
  link: 'https://github.com/magstellon',
  class: 'finger-friendly',
  icon: ['fab', 'github-square'],
}])
</script>

<template>
  <p class="mb-10">
    Hello there, I'm {{ me.name }} and I grow up as a {{ me.role }}  at <a
      class="underline"
      :href="company.link"
      target="_blank"
    >{{ company.name }}</a>.
  </p>
  <p class="mb-5">
    I like to bring my experiences, ideas, patterns and processes to build better systems.
    I also spend some time coding but I mostly be helping others code and grow.
  </p>
  <p class="mb-5">
    I enjoy taking part in architectural decisions and help solve complex problems with scalable solutions.
    I'm used to daily interact with Developers, Managers and Directors to coordinate and keep everyone aligned.
  </p>
  <div class="flex gap-2 items-center justify-end mt-10">
    <p class="inline-block">
      Feel free to get in touch with me on
    </p>
    <a
      v-for="network in networks"
      :key="network.link"
      :href="network.link"
      target="_blank"
      class="finger-friendly inline-block"
    >
      <font-awesome-icon
        :class="network.class"
        :icon="network.icon"
      />
    </a>
  </div>
</template>

<style scoped>
.finger-friendly {
  @apply h-7 w-7
}
</style>
