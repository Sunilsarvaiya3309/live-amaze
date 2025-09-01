<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const dot = ref(null)
const ring = ref(null)
const ringText = ref(null)

let mouseX = 0,
  mouseY = 0
let ringX = 0,
  ringY = 0

const moveCursor = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY

  // move dot instantly
  if (dot.value) {
    dot.value.style.left = `${mouseX}px`
    dot.value.style.top = `${mouseY}px`
  }
}

const animateRing = () => {
  const delay = 0.15
  ringX += (mouseX - ringX) * delay
  ringY += (mouseY - ringY) * delay

  if (ring.value) {
    ring.value.style.left = `${ringX}px`
    ring.value.style.top = `${ringY}px`
  }

  requestAnimationFrame(animateRing)
}

const handleHover = (e) => {
  const text = e.target.getAttribute('data-cursor-text')
  if (text) {
    ring.value.classList.add('!w-24', '!h-24', 'bg-yellow-400/90')
    ringText.value.innerText = text
    ringText.value.classList.remove('opacity-0')
  }
}

const handleLeave = () => {
  ring.value.classList.remove('!w-24', '!h-24', 'bg-yellow-400/90')
  ringText.value.innerText = ''
  ringText.value.classList.add('opacity-0')
}

onMounted(() => {
  window.addEventListener('mousemove', moveCursor)
  animateRing()

  document.querySelectorAll('[data-cursor-text]').forEach((el) => {
    el.addEventListener('mouseenter', handleHover)
    el.addEventListener('mouseleave', handleLeave)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', moveCursor)
  document.querySelectorAll('[data-cursor-text]').forEach((el) => {
    el.removeEventListener('mouseenter', handleHover)
    el.removeEventListener('mouseleave', handleLeave)
  })
})
</script>

<template>
  <!-- Small dot -->
  <div
    ref="dot"
    class="md:block hidden fixed top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
  />

  <!-- Outer ring with text -->
  <div
    ref="dot"
    class="lg:block hidden fixed top-0 left-0 w-2 h-2 dark:bg-yellow-400 bg-black rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
  />

  <!-- Outer Ring -->
  <div
    ref="ring"
    class="lg:block hidden fixed top-0 left-0 w-8 h-8 border-2 dark:border-yellow-400 border-black rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
  />
</template>
