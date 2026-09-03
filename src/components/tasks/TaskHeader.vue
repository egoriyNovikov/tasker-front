<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <header class="header">
    <h1>{{ title ?? 'Tasker' }}</h1>
    <p>{{ subtitle ?? 'Управляй задачами умно' }}</p>
  </header>
</template>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 32px;
  font-weight: 800;
  color: var(--accent);
}

.header p {
  color: var(--muted);
  font-size: 14px;
}
</style>
