<template>
  <div class="fixed inset-0 z-10 pointer-events-none overflow-hidden">
    <div
      v-for="(p, i) in particles"
      :key="i"
      class="absolute rounded-full opacity-60 shadow-xl"
      v-motion
      :initial="{ y: 0, opacity: 0.2, scale: 0.8 }"
      :animate="{ y: -60, x: 10, opacity: 0.8, scale: 1 }"
      :transition="{
        repeat: Infinity,
        duration: p.duration,
        delay: p.delay,
        repeatType: 'mirror',
        easing: 'ease-in-out',
      }"
      :style="{
        width: p.size + 'px',
        height: p.size + 'px',
        top: p.y + 'vh',
        left: p.x + 'vw',
        background: particleColor(i),
        filter: 'blur(3px)',
      }"
    ></div>
  </div>
</template>

<script setup>
const particles = Array.from({ length: 40 }).map(() => ({
  size: Math.floor(Math.random() * 10 + 8), // Slightly bigger for visibility
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 5 + 4,
  delay: Math.random() * 2,
}))

function particleColor(i) {
  const colors = [
    'rgba(255, 230, 0, 0.9)', // bright yellow
    'rgba(255, 255, 255, 0.5)', // soft white
    'rgba(255, 200, 0, 0.6)', // golden glow
  ]
  return colors[i % colors.length]
}
</script>
