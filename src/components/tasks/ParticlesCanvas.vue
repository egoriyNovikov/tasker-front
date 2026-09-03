<script setup lang="ts">
// TODO (завтра): анимация частиц, как в макете
</script>

<template>
  <canvas class="particles" aria-hidden="true" />
</template>

<style scoped>
.particles {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
</style>
