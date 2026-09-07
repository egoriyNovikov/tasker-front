<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)

let animationId: number | null = null

onMounted(() => {
  const c = canvas.value

  if (!c) return

  const x = c.getContext('2d')

  if (!x) return

  let w = 0
  let h = 0

  const particles: {
    x: number
    y: number
    vx: number
    vy: number
  }[] = []

  const resize = () => {
    w = c.width = c.parentElement?.offsetWidth ?? 0
    h = c.height = c.parentElement?.offsetHeight ?? 0
  }

  resize()

  window.addEventListener('resize', resize)

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    })
  }

  const draw = () => {
    x.clearRect(0, 0, w, h)

    // Рисуем частицы
    particles.forEach((particle) => {
      particle.x += particle.vx
      particle.y += particle.vy

      // Отскок от границ
      if (particle.x < 0 || particle.x > w) {
        particle.vx *= -1
      }

      if (particle.y < 0 || particle.y > h) {
        particle.vy *= -1
      }

      x.beginPath()
      x.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
      x.fillStyle = '#6366f1'
      x.fill()
    })

    // Рисуем связи между близкими частицами
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const distance = Math.hypot(
          particles[i].x - particles[j].x,
          particles[i].y - particles[j].y,
        )

        if (distance < 130) {
          x.beginPath()

          x.strokeStyle = `rgba(
            99,
            102,
            241,
            ${0.15 * (1 - distance / 130)}
          )`

          x.moveTo(particles[i].x, particles[i].y)
          x.lineTo(particles[j].x, particles[j].y)

          x.stroke()
        }
      }
    }

    animationId = requestAnimationFrame(draw)
  }

  draw()

  onUnmounted(() => {
    window.removeEventListener('resize', resize)

    if (animationId !== null) {
      cancelAnimationFrame(animationId)
    }
  })
})
</script>

<template>
  <canvas ref="canvas"></canvas>
</template>

<style scoped>
canvas {
  position: absolute;
  inset: 0;
  z-index: 0;
}
</style>
