<script setup lang="ts">
type IconName = 'check-circle' | 'x-circle' | 'info-circle' | 'warning-circle'

defineProps<{
  name: IconName
}>()
</script>

<template>
  <svg v-if="name === 'check-circle'" viewBox="0 0 24 24">
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="9" />
  </svg>

  <svg v-else-if="name === 'x-circle'" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path d="M9 9l6 6" />
    <path d="M15 9l-6 6" />
  </svg>

  <svg v-else-if="name === 'info-circle'" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>

  <svg v-else-if="name === 'warning-circle'" viewBox="0 0 24 24">
    <path d="M12 3l9 18H3L12 3z" />
    <path d="M12 9v5" />
    <path d="M12 17h.01" />
  </svg>
</template>

<style scoped>
svg {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
