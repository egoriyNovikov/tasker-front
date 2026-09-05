<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  add: [text: string]
}>()

const text = ref('')

function submit() {
  const value = text.value.trim()
  if (!value) return
  emit('add', value)
  text.value = ''
}
</script>

<template>
  <form class="input-bar" @submit.prevent="submit">
    <div class="input-wrap">
      <input v-model="text" placeholder="Что нужно сделать?" />
      <button type="submit" aria-label="Добавить задачу">+</button>
    </div>
  </form>
</template>

<style scoped>
.input-bar {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 14px 20px 18px;
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
}

.input-wrap {
  width: var(--content-width);
  max-width: 90vw;
  display: flex;
  gap: 12px;
}

.input-wrap input {
  flex: 1;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: 14px;
  padding: 16px 20px;
  color: var(--text);
  font-size: 16px;
  outline: none;
}

.input-wrap input:focus {
  border-color: var(--accent);
}

.input-wrap button {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--accent);
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  transition: transform 0.2s;
  flex-shrink: 0;
}

.input-wrap button:hover {
  transform: scale(1.05);
}
</style>
